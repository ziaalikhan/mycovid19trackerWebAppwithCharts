import React, { useState, useEffect } from "react";
import "./AnotherApiData.css";

function AnotherApiData() {
  const [users, setusers] = useState([]);

  //  getUsers Function ha //

  const getUsers = async () => {
    try {
      const response = await fetch(
        "https://api.covidtracking.com/v1/states/current.json"
      );
      // console.log(response);
      setusers(await response.json());
    } catch (error) {
      console.log("My error is ==>", error);
    }
  };

  // UseEffect Alag ha //

  useEffect(() => {
    getUsers();
  }, []);
  return (
    <div className="main">
      {users.map((val, ind) => {
        return (
          <div className="cardsDAta">
            <h2>
              Country/state <span className="left"> {val.state}</span>
            </h2>
            <h5>
              Total <span className="left"> {val.total}</span>
            </h5>
            <h5>
              TotalTestResults{" "}
              <span className="left"> {val.totalTestResults}</span>
            </h5>
            <h5>
              Positive <span className="left"> {val.positive}</span>
            </h5>
            <h5>
              Negative <span className="left"> {val.negative}</span>
            </h5>
            <h5>
              Hospitalized <span className="left"> {val.hospitalized}</span>
            </h5>
            <h5>
              HospitalizedCurrently{" "}
              <span className="left"> {val.hospitalizedCurrently}</span>
            </h5>
            <h5>
              Recovered <span className="left"> {val.recovered}</span>
            </h5>
            <h5>
              Death <span className="left"> {val.death}</span>
            </h5>
          </div>
        );
      })}
    </div>
  );
}

export default AnotherApiData;
