// o Create a class component that fetches data from an API when the component mounts using componentDidMount(). Display the data in the component. 
import React, { Component } from "react";

class DataFetcher extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      loading: true
    };
  }

  componentDidMount() {
    // Example API
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          users: data,
          loading: false
        });
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        this.setState({ loading: false });
      });
  }

  render() {
    if (this.state.loading) {
      return <p>Loading data...</p>;
    }

    return (
      <div>
        <h2>User List</h2>
        <ul>
          {this.state.users.map((user) => (
            <li key={user.id}>
              {user.name} ({user.email})
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default DataFetcher;
