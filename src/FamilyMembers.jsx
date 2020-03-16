import React, { Component } from "react";
class FamilyMembers extends Component {
  render() {
    return (
      <div>
        <div>
          {this.props.name}: {this.props.quote}
        </div>
      </div>
    );
  }
}
export default FamilyMembers;
