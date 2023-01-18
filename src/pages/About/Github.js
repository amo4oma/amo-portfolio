import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";
import "../../../styles/style.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Github() {
  const colourTheme = {
    background: "transparent",
    text: "#ffffff",
    grade4: "#E8505B",
    grade3: "#E8505B",
    grade2: "#455A64",
    grade1: "#455A64",
    grade0: "#ecd9fc",
  };
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I <strong className="">Code</strong>
      </h1>
      <GitHubCalendar
        username="amo4oma"
        blockSize={15}
        blockMargin={5}
        theme={colourTheme}
        fontSize={16}
      />
    </Row>
  );
}

export default Github;
