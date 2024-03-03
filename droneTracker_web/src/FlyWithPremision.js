import L from 'leaflet';

export const FlightWithPermission = [
    {
      center: [36.04, 51.15],
      radius: 5 * 1852,
      options: {color: 'rgb(0, 0, 255 , 0.35)', fillColor: 'blue', fillOpacity: 0.35 },
    },
    {
      center: [36.39, 52.21],
      radius: 5 * 1852,
      options: {color: 'rgb(0, 0, 255 , 0.35)', fillColor: 'blue', fillOpacity: 0.35 },
    },
    {
      center: [36.1712, 59.3659],
      radius: 1 * 1000,
      options: {color: 'rgb(0, 0, 255 , 0.35)', fillColor: 'blue', fillOpacity: 0.35 },
    },
    {
      center: [36.1800, 59.4500],
      radius: L.latLng([36.1800, 59.4500]).distanceTo([36.0000, 59.4000]), // Calculate radius
      options: {color: 'rgb(0, 0, 255 , 0.35)', fillColor: 'blue', fillOpacity: 0.35 },
    },
    {
      center: [33.9802, 51.4026],
      radius: L.latLng([33.9802, 51.4026]).distanceTo([33.5804, 51.3850]), // Calculate radius
      options: {color: 'rgb(0, 0, 255 , 0.35)', fillColor: 'blue', fillOpacity: 0.35 },
    },
    {
      center: [32.5594, 51.8211],
      radius: 2 * 1852, // 2 NM in meters
      options: {color: 'rgb(0, 0, 255 , 0.35)', fillColor: 'blue', fillOpacity: 0.35 },
    },
    {
      center: [33.0833, 47.1667],
      radius: L.latLng([33.0833, 47.1667]).distanceTo([32.4500, 47.2500]), // Calculate radius
      options: {color: 'rgb(0, 0, 255 , 0.35)', fillColor: 'blue', fillOpacity: 0.35 },
    },
    {
      center: [34.3847, 46.1169],
      radius: L.latLng([34.3847, 46.1169]).distanceTo([34.1000, 46.1169]), // Calculate radius
      options: {color: 'rgb(0, 0, 255 , 0.35)', fillColor: 'blue', fillOpacity: 0.35 },
    },
    {
      center: [36.7167, 52.3000],
      radius: L.latLng([36.7167, 52.3000]).distanceTo([36.4300, 52.3000]), // Calculate radius
      options: {color: 'rgb(0, 0, 255 , 0.35)', fillColor: 'blue', fillOpacity: 0.35 },
    },
    {
      center: [31.19, 49.19],
      radius: 30 * 1852, // 30 NM in meters
      options: {color: 'rgb(0, 0, 255 , 0.35)', fillColor: 'blue', fillOpacity: 0.35 },
    },
    {
      center: [30.00, 51.50],
      radius: L.latLng([30.00, 51.50]).distanceTo([29.47, 51.50]), // Calculate radius
      options: {color: 'rgb(0, 0, 255 , 0.35)', fillColor: 'blue', fillOpacity: 0.35 },
    },
    {
      center: [27.15, 56.13],
      radius: L.latLng([27.15, 56.13]).distanceTo([27.00, 56.00]), // Calculate radius
      options: {color: 'rgb(0, 0, 255 , 0.35)', fillColor: 'blue', fillOpacity: 0.35 },
    },
    {
      center: [25.42, 57.57],
      radius: L.latLng([25.42, 57.57]).distanceTo([25.45, 57.46]), // Calculate radius
      options: {color: 'rgb(0, 0, 255 , 0.35)', fillColor: 'blue', fillOpacity: 0.35 },
    },
    {
      center: [34.21, 47.06],
      radius: 1.5 * 1852, // 1.5 NM in meters
      options: {color: 'rgb(0, 0, 255 , 0.35)', fillColor: 'blue', fillOpacity: 0.35 },
    },
    {
      center: [36.10, 48.36],
      radius: 60 * 1852, // 60 NM in meters
      options: {color: 'rgb(0, 0, 255 , 0.35)', fillColor: 'blue', fillOpacity: 0.35 },
    },
    {
      center: [35.48, 51.06],
      radius: 5 * 1852, // 5 NM in meters
      options: {color: 'rgb(0, 0, 255 , 0.35)', fillColor: 'blue', fillOpacity: 0.35 },
    },
    {
      center: [36.41, 53.32],
      radius: 3 * 1852, // 3 NM in meters
      options: {color: 'rgb(0, 0, 255 , 0.35)', fillColor: 'blue', fillOpacity: 0.35 },
    },
    {
      center: [31.03, 50.07],
      radius: 4 * 1852, // 4 NM in meters
      options: {color: 'rgb(0, 0, 255 , 0.35)', fillColor: 'blue', fillOpacity: 0.35 },
    },
    {
      center: [25.54, 54.33],
      radius: 12 * 1852, // 12 NM in meters
      options: {color: 'rgb(0, 0, 255 , 0.35)', fillColor: 'blue', fillOpacity: 0.35 },
    },
    {
      center: [29.54, 50.29],
      radius: L.latLng([29.54, 50.29]).distanceTo([29.00, 50.23]), // Calculate radius
      options: {color: 'rgb(0, 0, 255 , 0.35)', fillColor: 'blue', fillOpacity: 0.35 },
    },
    {
      center: [29.28, 50.23],
      radius: L.latLng([29.28, 50.23]).distanceTo([29.24, 50.39]), // Calculate radius
      options: {color: 'rgb(0, 0, 255 , 0.35)', fillColor: 'blue', fillOpacity: 0.35 },
    },
    {
      center: [29.00, 50.33],
      radius: L.latLng([29.00, 50.33]).distanceTo([28.44, 50.48]), // Calculate radius
      options: {color: 'rgb(0, 0, 255 , 0.35)', fillColor: 'blue', fillOpacity: 0.35 },
    },
    {
      center: [28.44, 50.19],
      radius: 40 * 1852, // 40 NM in meters
      options: {color: 'rgb(0, 0, 255 , 0.35)', fillColor: 'blue', fillOpacity: 0.35 },
    },
    {
      center: [29.43, 52.32],
      radius: 7 * 1852, // 7 NM in meters
      options: {color: 'rgb(0, 0, 255 , 0.35)', fillColor: 'blue', fillOpacity: 0.35 },
    },
    {
      center: [35.32, 51.26],
      radius: 1.5 * 1852, // 1.5 NM in meters
      options: {color: 'rgb(0, 0, 255 , 0.35)', fillColor: 'blue', fillOpacity: 0.35 },
    },

    {
      center: [32.46, 51.32],
      radius: 5 * 1852, // 5 NM in meters
      options: {color: 'rgb(0, 0, 255 , 0.35)', fillColor: 'blue', fillOpacity: 0.35 },
    },
    {
      center: [37.19, 47.49],
      radius: 3 * 1852, // 3 NM in meters
      options: {color: 'rgb(0, 0, 255 , 0.35)', fillColor: 'blue', fillOpacity: 0.35 },
    },
    {
      center: [38.04, 46.15],
      radius: 3 * 1852, // 3 NM in meters
      options: {color: 'rgb(0, 0, 255 , 0.35)', fillColor: 'blue', fillOpacity: 0.35 },
    },
    {
      center: [37.40, 45.04],
      radius: 15 * 1852, // 15 NM in meters
      options: {color: 'rgb(0, 0, 255 , 0.35)', fillColor: 'blue', fillOpacity: 0.35 },
    },
    {
      center: [29.06, 58.22],
      radius: 1 * 1852, // 1 NM in meters
      options: {color: 'rgb(0, 0, 255 , 0.35)', fillColor: 'blue', fillOpacity: 0.35 },
    },

    {
      center: [35.42, 50.55],
      radius: 3 * 1852, // 3 NM in meters
      options: {color: 'rgb(0, 0, 255 , 0.35)', fillColor: 'blue', fillOpacity: 0.35 },
    },
    {
      center: [29.35, 52.19],
      radius: 3 * 1852, // 3 NM in meters
      options: {color: 'rgb(0, 0, 255 , 0.35)', fillColor: 'blue', fillOpacity: 0.35 },
    },
    {
      center: [32.32, 51.28],
      radius: 3 * 1852, // 3 NM in meters
      options: {color: 'rgb(0, 0, 255 , 0.35)', fillColor: 'blue', fillOpacity: 0.35 },
    },
    {
      center: [35.27, 51.16],
      radius: 3 * 1852, // 3 NM in meters
      options: {color: 'rgb(0, 0, 255 , 0.35)', fillColor: 'blue', fillOpacity: 0.35 },
    },
    {
      center: [37.56, 46.13],
      radius: L.latLng([37.56, 46.13]).distanceTo([38.02, 46.13]), // Calculate radius
      options: {color: 'rgb(0, 0, 255 , 0.35)', fillColor: 'blue', fillOpacity: 0.35 },
    },
    {
      center: [35.46, 51.26],
      radius: L.latLng([35.46, 51.26]).distanceTo([35.44, 51.29]), // Calculate radius
      options: {color: 'rgb(0, 0, 255 , 0.35)', fillColor: 'blue', fillOpacity: 0.35 },
    },

    {
      center: [29.29, 55.45],
      radius: L.latLng([29.29, 55.45]).distanceTo([29.28, 55.42]), // Calculate radius
      options: {color: 'rgb(0, 0, 255 , 0.35)', fillColor: 'blue', fillOpacity: 0.35 },
    },
    {
      center: [29.24, 55.42],
      radius: L.latLng([29.24, 55.42]).distanceTo([29.22, 55.45]), // Calculate radius
      options: {color: 'rgb(0, 0, 255 , 0.35)', fillColor: 'blue', fillOpacity: 0.35 },
    },
    {
      center: [27.28, 52.36],
      radius: 15 * 1852, // 15 NM in meters
      options: {color: 'rgb(0, 0, 255 , 0.35)', fillColor: 'blue', fillOpacity: 0.35 },
    },
    {
      center: [35.41, 51.22],
      radius: L.latLng([35.41, 51.22]).distanceTo([35.42, 51.25]), // Calculate radius
      options: {color: 'rgb(0, 0, 255 , 0.35)', fillColor: 'blue', fillOpacity: 0.35 },
    },
    {
      center: [35.44, 51.01],
      radius: L.latLng([35.44, 51.01]).distanceTo([35.40, 51.01]), // Calculate radius
      options: {color: 'rgb(0, 0, 255 , 0.35)', fillColor: 'blue', fillOpacity: 0.35 },
    },
    {
      center: [36.03, 50.28],
      radius: 3 * 1852, // 3 NM in meters
      options: {color: 'rgb(0, 0, 255 , 0.35)', fillColor: 'blue', fillOpacity: 0.35 },
    },
    {
      center: [35.14, 48.12],
      radius: 6 * 1852, // 6 NM in meters
      options: {color: 'rgb(0, 0, 255 , 0.35)', fillColor: 'blue', fillOpacity: 0.35 },
    },
    {
      center: [28.00, 51.17],
      radius: 10 * 1852, // 10 NM in meters
      options: {color: 'rgb(0, 0, 255 , 0.35)', fillColor: 'blue', fillOpacity: 0.35 },
    },
    {
      center: [32.51, 58.26],
      radius: 25 * 1852, // 25 NM in meters
      options: {color: 'rgb(0, 0, 255 , 0.35)', fillColor: 'blue', fillOpacity: 0.35 },
    },
    {
      center: [36.04, 59.58],
      radius: 3 * 1852, // 3 NM in meters
      options: {color: 'rgb(0, 0, 255 , 0.35)', fillColor: 'blue', fillOpacity: 0.35 },
    },
  ];