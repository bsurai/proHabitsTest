import * as React from "react";
import { setIdToken, setAccessToken } from "../../utils/AuthService";
const loading = require("./loading.svg");

class Callback extends React.Component<{}, void> {

  constructor() {
    super();
  }

  componentDidMount() {
    setAccessToken();
    setIdToken();
    window.location.href = "/";
  }

  render() {
    let style = {
      // position: "absolute",
      display: "flex",
      // justifyContent: "center",
      height: "100vh",
      width: "100vw",
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: "white",
    };

    return (
      <div style={style}>
        <img src={loading} alt="loading" />
      </div>);
  }
}

export default Callback;