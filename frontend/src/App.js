import logo from "./logo.svg";
import "./App.css";
import Plot, { Plotly } from "react-plotly.js";
import Heading from "./layouts/heading";
function App() {
  var config = {
    displaylogo: false,
    responsive: true,
    modeBarButtonsToAdd: [
      {
        name: "button1",
        // icon: Plotly.Icons.pencil,
        direction: "up",
        click: function (gd) {
          alert("button1");
        },
      },
    ],
    modeBarButtonsToRemove: [
      "hoverCompareCartesian",
      "hoverClosestCartesian",
      "zoom2d",
      "pan2d",
      // "select2d",
      "lasso2d",
      "zoomIn2d",
      "zoomOut2d",
      "autoScale2d",
      "resetScale2d",
      "toggleSpikelines",
    ],
  };
  return (
    <div className="App">
      <Heading />
      <Plot
        config={config}
        data={[
          {
            x: [1, 2, 3],
            y: [2, 6, 3],
            type: "scatter",
            mode: "markers",
            marker: { color: "red" },
          },
        ]}
        layout={{ title: "scatter Plot" }}
        onSelected={(props) =>
          console.log(props.points.map((point) => [point.x, point.y]))
        }
      />
    </div>
  );
}

export default App;
