import React, { Component } from "react";

class NotificationView extends Component {
  constructor(props) {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className="container mb-3">
        <h4 className="my-3">Notification</h4>

        <div className="list-group">
        </div>
      </div>
    );
  }
}

export default NotificationView;
