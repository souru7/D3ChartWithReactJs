import React from "react";
import { render } from "react-dom";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import RaisedButton from "material-ui/RaisedButton";
import BarChart from "./BarChart";
import { range as d3Range } from "d3";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

class App extends React.Component {
  state = {
    data: d3Range(34).map(Math.random),
    currentIndex: null
  };

  addData = () =>
    this.setState({
      data: [...this.state.data, Math.random()]
    });

  setCurrentIndex = currentIndex =>
    this.setState({
      currentIndex
    });

  render() {
    const { data, currentIndex } = this.state;

    return (
      <MuiThemeProvider>
        <div style={styles}>
          <h1>D3 charts in React 16.3 {"\u2728"}</h1>
          <p>Click the button 👇</p>
          <RaisedButton
            label={"The Button"}
            secondary={true}
            onClick={this.addData}
          />
          <p>
            {data.length} datapoints
            <br />
            <small>{currentIndex !== null ? data[currentIndex] : "🧐"}</small>
          </p>
          <svg width="100%" height="500">
            <BarChart
              data={data}
              width={500}
              height={250}
              x={0}
              y={0}
              highlightBar={this.setCurrentIndex}
              highlightedBar={currentIndex}
            />
          </svg>
        </div>
      </MuiThemeProvider>
    );
  }
}

render(<App />, document.getElementById("root"));
