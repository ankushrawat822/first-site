import React from "react";

import "bootstrap/dist/css/bootstrap.css";

import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

export default function Tooltips() {
  const renderTooltip = props => (
    <Tooltip {...props}>Who am I?</Tooltip>
  );

  return (
    <div className="App">
      <OverlayTrigger placement="right" overlay={renderTooltip}>
      <Button variant="outline-info">Check More</Button>
      </OverlayTrigger>
    </div>
  );
}