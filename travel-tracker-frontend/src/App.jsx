import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    async function loadData() {
      const response = await fetch("http://localhost:3000/api/trips")
      const data = await response.json()

      console.log("DATA RECEIVED:", data);
      setRows(data)
    }
    loadData()
  }, []);

  return (
    <div> 
      <table>
        <thead> 
          <tr>
            <th>ID</th>
            <th>City</th>
            <th>Country</th>
            <th>Date</th>
            <th>Rating</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(row => (
            <tr key ={row.id}>
              <td>{row.id}</td>
              <td>{row.city}</td>
              <td>{row.country}</td>
              <td>{row.date}</td>
              <td>{row.rating}</td>
              <td>{row.notes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;