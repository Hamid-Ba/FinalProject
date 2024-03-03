import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Circle, Polygon } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import axios from 'axios';

import { FlyForbidden } from './FlyForbidden';
import { FlightWithPermission } from './FlyWithPremision';
import { DangerAreas } from './DangerArea';
import { DangerAreaCirles } from './DangerAreaCircles';
import { CautionArea } from './CautionArea';
import { CautionAreaCircles } from './CautionAreaCircles';
import ColorLegendBox from './legend';
import './legend.css';

function pointInPolygon(point, vs) {
  const x = point[0];
  const y = point[1];

  let inside = false;
  for (let i = 0, j = vs.length - 1; i < vs.length; j = i++) {
    const xi = vs[i][0];
    const yi = vs[i][1];
    const xj = vs[j][0];
    const yj = vs[j][1];

    const intersect =
      yi > y !== yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi;

    if (intersect) {
      inside = !inside;
    }
  }

  return inside;
}

const Map = () => {
  const [drones, setDrones] = useState([]);
  const [error, setError] = useState(null);
  const [selectedDrone, setSelectedDrone] = useState(null);
  const [messageInput, setMessageInput] = useState('');

  // Define excluded area polygon coordinates
  const excludedArea = [
    [33.5317, 51.2225],
    [33.4853, 51.344],
    [33.4849, 52.0557],
  ];

  // Define additional points polygon coordinates
  const additionalPoints = [
    [36.1300, 55.0300],
    [36.2258, 55.2144],
    [36.2241, 55.2742],
    [36.1528, 55.3500],
    [36.0006, 55.1751],
  ];

  



  //fetch drones from database and put them in a drones array
  useEffect(() => {
    const fetchDrones = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/drones');
        setDrones(response.data);
      } catch (error) {
        setError('Error fetching drone data: ' + error.message);
        console.error('Error fetching drone data:', error);
      }
    };

    fetchDrones();

    const updateDronePositions = async () => {
      fetchDrones();
    };

    const intervalId = setInterval(updateDronePositions, 1500); // Update every 5 seconds

    return () => {
      clearInterval(intervalId);
    };
  }, []);
  

  useEffect(() => {
    // Check if a drone is inside a circle or polygon and show an alert
    drones.forEach((drone) => {
      const dronePosition = [drone.latitude, drone.longitude];

      // Check if the drone is inside a circle
      FlyForbidden.forEach((circle, index) => {
        const circleCenter = circle.center;
        const circleRadius = circle.radius;

        if (L.latLng(dronePosition).distanceTo(circleCenter) <= circleRadius) {
          alert(`پهپاد با شماره شناسه ${drone.droneId} در منطقه ممنوع پرواز  قرار گرفته است`);
        }
      });


      
      DangerAreaCirles.forEach((circle, index) => {
        const circleCenter = circle.center;
        const circleRadius = circle.radius;

        if (L.latLng(dronePosition).distanceTo(circleCenter) <= circleRadius) {
          alert(`پهپاد با شماره شناسه ${drone.droneId} در منطقه پرواز خطرناک  قرار گرفته است`);
        }
      });

      CautionAreaCircles.forEach((circle, index) => {
        const circleCenter = circle.center;
        const circleRadius = circle.radius;

        if (L.latLng(dronePosition).distanceTo(circleCenter) <= circleRadius) {
          alert(`پهپاد با شماره شناسه ${drone.droneId} در منطقه پرواز با احتیاط قرار گرفته است`);
        }
      });



      FlightWithPermission.forEach((circle, index) => {
        const circleCenter = circle.center;
        const circleRadius = circle.radius;

        if (L.latLng(dronePosition).distanceTo(circleCenter) <= circleRadius) {
          alert(`پهپاد با شماره شناسه ${drone.droneId} در منطقه پرواز با اخذ مجوز قرار گرفته است`);
        }
      });


      // Check if the drone is inside the additional points polygon
      if (pointInPolygon(dronePosition, additionalPoints)) {
        alert(`Drone ${drone._id} is inside Additional Points`);
      }

      if (pointInPolygon(dronePosition, excludedArea)) {
        alert(`Drone ${drone._id} is inside Additional Points`);
      }


    });
  }, [drones]);



 

  const handleMarkerClick = (drone) => {
    const newWindow = window.open('', '_blank', 'width=400,height=300');

    newWindow.document.write(`
      <html>
      <head>
        <title>Drone Information</title>
        <!-- You can include any additional styles or scripts here -->
        <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
      </head>
      <body>
        <div style="background-color: #ffeeaa; padding: 10px; text-align: center;">
          <h3 style="font-family: 'Vazir';">مشخصات پهپاد</h3>
          <p><strong style="font-family: 'Vazir';">طول جغرافیایی:</strong> <strong>${drone.latitude}</strong></p>
          <p><strong style="font-family: 'Vazir';">عرض جغرافیایی:</strong> <strong>${drone.longitude}</strong></p>
          <p><strong style="font-family: 'Vazir';"> kg میزان بار:</strong> <strong>${drone.load} </strong></p>
          <p><strong style="font-family: 'Vazir';"> km/h سرعت:</strong> <strong>${drone.speed}</strong></p>
          <p><strong style="font-family: 'Vazir';"> % میزان باتری:</strong> <strong>${drone.batteryPercentage}</strong></p>
        </div>

        <textarea
          id="messageInput"
          placeholder="پیغام خود را وارد کنید"
          style="width: 100%; margin-top: 10px;"
        ></textarea>
        <button onclick="sendMessage()">ارسال پیغام</button>
      </div>

      <script>
        const sendMessage = async () => {
          const messageInput = document.getElementById('messageInput').value;
          try {
            await axios.post('http://localhost:5001/api/send-message', {
              droneId: '${drone._id}',
              message: messageInput,
            });
          } catch (error) {
            console.error('Error sending message:', error);
          }

          window.close();
        };
      </script>
      </body>
      </html>
    `);
  };

  return (
    <div>
      <MapContainer id="map" style={{ height: '900px' }} center={[35.6892, 51.3890]} zoom={6}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        {FlyForbidden.map((circle, index) => (
          <Circle
            key={index}
            center={circle.center}
            radius={circle.radius}
            pathOptions={circle.options}
          />
        ))}

        {FlightWithPermission.map((circle, index) => (
          <Circle
            key={index}
            center={circle.center}
            radius={circle.radius}
            pathOptions={circle.options}
          />
        ))}

        {DangerAreaCirles.map((circle, index) => (
          <Circle
            key={index}
            center={circle.center}
            radius={circle.radius}
            pathOptions={circle.options}
          />
        ))}

        {DangerAreas.map((area, index) => (
          <Polygon
            key={index}
            positions={area.polygon} 
            pathOptions={area.options}
          />
        ))}

        {CautionArea.map((area, index) => (
          <Polygon
            key={index}
            positions={area.polygon} 
            pathOptions={area.options}
          />
        ))}

        <Polygon
          positions={excludedArea}
        />

        <Polygon
          positions={additionalPoints}
          pathOptions={{ fillColor: 'red', fillOpacity: 0.35 }}
        />

        {drones.map((drone) => (
          <Marker
            key={drone._id}
            position={[drone.latitude, drone.longitude]}
            eventHandlers={{
              click: () => {
                handleMarkerClick(drone);
              },
            }}
            icon={L.icon({
              iconUrl: '/icons/drone_p.png',
              iconSize: [50, 50],
            })}
          />
        ))}

      </MapContainer>

      <ColorLegendBox />
    </div>
  );
};

export default Map;