import { AccessAlarm, ThreeDRotation } from '@material-ui/icons';
import React, { useEffect, useState } from "react";

import './App.css';
import DataTable from './DataTable';

export default function App() {
  const [error, setError] = useState(null);

  const [isLoaded, setIsLoaded] = useState(false);

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://api.fda.gov/food/enforcement.json?search=report_date:[20040101+TO+20131231]&limit=99")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setData(result.results);
        },
        (error) => {
          setIsLoaded(false);
          setError("Error getting data");
        }
      )
  }, [])

  // console.log("loaded: " + isLoaded);
  // console.log("error: " + error);
  // console.log("data: " + data);
  if (error) {
    return <div>Error: {error}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="App">
        <header>
          <h2>
            Kyulux Dashboard
          </h2>
        </header>
        <DataTable data={data}/>
      </div>
    );
  }
}
