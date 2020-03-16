import React, { Component } from "react";
class Video extends Component {
  render() {
    return (
      <div>
        <h3>{this.props.header}</h3>
        <iframe
          src={"https://player.vimeo.com/video/" + this.props.videoId}
          width="640"
          height="360"
          frameborder="0"
          webkitallowfullscreen
          mozallowfullscreen
          allowfullscreen
        />
        <p> {this.props.footer}</p>
      </div>
    );
  }
}
export default Video;
