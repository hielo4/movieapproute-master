import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../App.css";

class Moviecard extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <Link to="/trailer">
          <img className="img" src={this.props.posterURL} alt="poster img" />
        </Link>
        <p>{this.props.description}</p>
        <h3>{this.props.rating}</h3>
      </div>
    );
  }
}

export default Moviecard;
