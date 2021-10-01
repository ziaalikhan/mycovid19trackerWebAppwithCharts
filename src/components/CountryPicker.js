import React, { useState, useEffect } from "react";
import "./CountryPicker.css";
import { NativeSelect, FormControl } from "@material-ui/core";
import { fetchcountries } from "../components/api";
import { Link } from "react-router-dom";

function CountryPicker({ handleCountryChange }) {
  const [fetchedCountries, setFetchedCountries] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      setFetchedCountries(await fetchcountries());
    };
    fetchApi();
  }, [setFetchedCountries]);

  console.log(fetchedCountries);

  return (
    <div className="container">
      <div>
        <FormControl className="formControl">
          <NativeSelect
            default=""
            onChange={(e) => handleCountryChange(e.target.value)}
          >
            <option value="global">Global</option>
            {fetchedCountries.map((country, i) => (
              <option key={i} value={country}>
                {country}
              </option>
            ))}
          </NativeSelect>
        </FormControl>
      </div>
      <Link to="/AnotherApiData">
        <div>
          <button className="btn">Some Limited Countries Data</button>
        </div>
      </Link>
    </div>
  );
}

export default CountryPicker;
