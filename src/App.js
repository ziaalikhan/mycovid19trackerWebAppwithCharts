import React from "react";
import "./App.css";
import Cards from "./components/Cards";
import Charts from "./components/Charts";
import CountryPicker from "./components/CountryPicker";
import { fetchData } from "./components/api";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AnotherApiData from "./components/AnotherApiData";

class App extends React.Component {
  state = {
    data: {},
    country: "",
  };

  async componentDidMount() {
    const fetchedData = await fetchData();
    // console.log(data)
    this.setState({ data: fetchedData });
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);

    this.setState({ data: fetchedData, country: country });
  };

  render() {
    const { data, country } = this.state;

    return (
      <div className="container">
        <img className="image" src="./Images/logo.png" alt="" />
        <Router>
          <Switch>
            <Route exact path="/">
              <Cards data={data} />
              <CountryPicker handleCountryChange={this.handleCountryChange} />
              <Charts data={data} country={country} />
            </Route>
            {/* <Route path="/" component={Cards} />
            <Route path="/" component={CountryPicker} />
            <Route path="/" component={Charts} /> */}
            <Route path="/anotherApiData" component={AnotherApiData} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
