import React, { Component } from "react";
class Image extends Component {
  render() {
    return (
      <div>
        <p>{this.props.title}</p>
        <img src={this.props.url} />
      </div>
    );
  }
}
export default Image;
