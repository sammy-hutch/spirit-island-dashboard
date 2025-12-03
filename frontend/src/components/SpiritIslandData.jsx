import React, { useState, useEffect } from 'react';
import styles from './SpiritIslandData.module.css';

const GOOGLE_SHEET_CSV_URL = "https://docs.google.com/spreadsheets/d/1TkLFfqJU_8pTEsTdU9y6LZnPiv14QvfvKatRa3mM5Us/gviz/tq?tqx=out:csv&gid=214184365";

function parseCSV(csvText) {
  const lines = csvText.trim().split('\n');
  if (lines.length === 0) return [];

  const headers = lines[0].split(',').map(header => header.trim());
  const data = [];

  for (let i = 1; i < lines.length; i++) {
      const values = lines[i].split(',').map(value => value.trim());
      if (values.length === headers.length) {
          let row = {};
          for (let j = 0; j < headers.length; j++) {
              row[headers[j]] = values[j];
          }
          data.push(row);
      }
  }
  return data;
}

function SpiritIslandData() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
      const fetchData = async () => {
          try {
              const response = await fetch(GOOGLE_SHEET_CSV_URL);
              if (!response.ok) {
                  throw new Error(`HTTP error! status: ${response.status}`);
              }
              const csvText = await response.text();
              const parsedData = parseCSV(csvText);
              setData(parsedData);
          } catch (err) {
              console.error("Error fetching data:", err);
              setError(err);
          } finally {
              setLoading(false);
          }
      };

      fetchData();
  }, []);

  if (loading) {
      return <p>Loading Spirit Island stats...</p>;
  }

  if (error) {
      return <p>Error loading data: {error.message}. Please ensure the Google Sheet URL is correct and publicly accessible.</p>;
  }

  if (data.length === 0) {
      return <p>No data found in the Google Sheet.</p>;
  }

  const headers = Object.keys(data[0]);

  return (
      <div className={styles.container}>
          <h2 className={styles.header}>Spirit Island Game Stats</h2>
          <table className={styles.table}>
              <thead>
                  <tr>
                      {headers.map((header, index) => (
                          <th key={index}>{header}</th>
                      ))}
                  </tr>
              </thead>
              <tbody>
                  {data.map((row, rowIndex) => (
                      <tr key={rowIndex}>
                          {headers.map((header, colIndex) => (
                              <td key={`${rowIndex}-${colIndex}`}>{row[header]}</td>
                          ))}
                      </tr>
                  ))}
              </tbody>
          </table>
      </div>
  );
}

export default SpiritIslandData;