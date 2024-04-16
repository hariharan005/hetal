import React, { useEffect, useState } from "react";
import axios from "axios";
import "../css/testapi.css";

export default function Testapi() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from the server when the component mounts
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      // Make GET request to Node.js server
      const response = await axios.get("http://localhost:3001/api");
      // Extract 'name' and 'email' parameters from the response data
      const extractedData = response.data.map(item => ({
        name: item.name,
        email: item.email
      }));
      setData(extractedData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="testapi">
        <h1>Data from Server</h1>
      {data.length > 0 ? (
        <ul>
          {data.map((item, index) => (
            <li className="item" key={index}>
                <p>Name: {item.name}</p>
                <p>Email: {item.email}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
