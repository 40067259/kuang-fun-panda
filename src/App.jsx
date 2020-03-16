import "./main.css";
import React, { Component } from "react";
import { videos, sounds, images, familyMembers } from "./Data.jsx";
import Video from "./Video.jsx";
import SoundWidget from "./SoundWidget.jsx";
import Image from "./Image.jsx";
import FamilyMembers from "./FamilyMembers.jsx";
class App extends Component {
  render() {
    return (
      <div>
        <div>
          {videos.map(vd => {
            return (
              <Video header={vd.name} videoId={vd.id} footer={vd.caption} />
            );
          })}
        </div>
        <div>
          {sounds.map(sd => {
            return <SoundWidget url={sd.location} descrip={sd.caption} />;
          })}
        </div>
        <div>
          {images.map(image => {
            return <Image url={image.url} title={image.caption} />;
          })}
        </div>
        <div>
          {familyMembers.map(fms => {
            return <FamilyMembers name={fms.name} quote={fms.quote} />;
          })}
        </div>
      </div>
    );
  }
}
export default App;
