import React, { useState, useEffect } from "react";

const Paces = () => {
  const [pacesData, setPacesData] = useState([]);

  useEffect(() => {
    const savedCalculations =
      JSON.parse(localStorage.getItem("calculation")) || [];
    setPacesData(savedCalculations);
  }, [localStorage.getItem("calculation")]);

  return (
    <div className="font-GroteskRegular">
      <h1 className="text-4xl py-11">Saved Paces</h1>
      <table className="w-full">
        <tbody>
          <tr className="text-left text-[#676769] text-sm">
            <th>Distance</th>
            <th>Time</th>
            <th>Pace</th>
          </tr>
          {pacesData.map((pace, index) => (
            <tr key={index} className="text-left text-lg text-white">
              <td>{pace.distance}</td>
              <td>{pace.time}</td>
              <td>{pace.pace}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Paces;
