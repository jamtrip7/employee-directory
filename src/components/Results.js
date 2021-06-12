import React, { Component } from "react";
import Table from "./Table";
import API from "../utils/API";
import Search from "./Search";

class EmployeeResults extends Component {
  state = {
    employees: [],
    search: "",
    matchSearch: [],
    direction: "Ascending"
  };

  componentDidMount() {
    API.fetchRandomEmployees()
    .then(res =>
        this.setState({ employees: res.data.results, matchSearch: res.data.results })
    )
    .catch(err => console.log(err));
 
  }

  handleInputChange = event => {
    const value = event.target.value;
    this.setState({ search: value });
    this.searchEmployees(value.trim());
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.searchEmployees(this.state.search.trim());

  };

  searchEmployees = event => {
      if (event) {

        // Capitalize the first letter of the string the user entered because
        // that is how the names are in the Random User API
        let formattedSearch = event.charAt(0).toUpperCase() + event.slice(1);

        // A new array will hold all the matches, which will then be used to update state
        let verifiedMatches = [];

        // Employees are filtered to see if the first or last name includes
        // what was entered into the search bar
          this.state.employees.filter((employee) => {

              if (employee.name.first.includes(formattedSearch) || employee.name.last.includes(formattedSearch) ) {

                // All verified matches in the search are pushed to this array
                // The entire employee object is pushed

                  verifiedMatches.push(employee)

                // State is updated to reflect the matches
                  this.setState({ matchSearch: [verifiedMatches] })

                  return `${employee.name.first} ${employee.name.last}`
              } else {
                  return "No employees found.";
              }

          })
      }
  }

  reverseOrder = event => {
      if(this.state.direction === "Ascending") {
        this.setState({ direction: "Descending" })
      } else if(this.state.direction === "Descending") {
        this.setState({ direction: "Ascending" })
      }
  }

  render() {
    return (
      <div>
        <Search
        value={this.state.search}
        handleInputChange={this.handleInputChange}
        handleFormSubmit={this.handleFormSubmit} 
        />
        <Table
        employees={this.state.employees}
        matchSearch={this.state.matchSearch}
        value={this.state.search}
        direction={this.state.direction}
        reverseOrder={this.reverseOrder}
        />
      </div>
    );
  }
}

export default EmployeeResults;