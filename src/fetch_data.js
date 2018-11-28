import React from "react";

export default class FetchRandomUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      person: null
    };
  }
  async componentDidMount() {
    const url = "https://api.randomuser.me/";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ person: data.results[0] });
  }

  render() {
    if (!this.state.person) {
      return <div>didn't get a person</div>;
    }
    return (
      <div>
        <div>{this.state.person.name.title}</div>
        <h1>
          NAME:{this.state.person.name.first} {this.state.person.name.last}
        </h1>

        <img src={this.state.person.picture.large} />
        <div>ADDRESS:{this.state.person.location.street}</div>
        <div>EMAIL:{this.state.person.email}</div>
      </div>
    );
  }
}
