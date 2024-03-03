import React from 'react';

function ColorLegendBox() {
  return (
    <div className="color-legend-box">
      <h4>راهنمای نمادها:</h4>
      <table className="legend-table">
        <tbody>
          <tr>
            <td><div className="legend-circle red"></div></td>
            <td>نقاط پرواز ممنوعه</td>
          </tr>
          <tr>
            <td><div className="legend-circle orange"></div></td>
            <td>نقاط پرواز خطرناک </td>
          </tr>
          <tr>
            <td><div className="legend-circle yellow"></div></td>
            <td>نقاط پرواز با احتیاط</td>
          </tr>
          <tr>
            <td><div className="legend-circle blue"></div></td>
            <td>نقاط پرواز با اخذ مجوز</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ColorLegendBox;
