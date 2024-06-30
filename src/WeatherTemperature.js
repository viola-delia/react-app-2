import React, { useState } from "react";


export default function WeatherTemperature(props) {
const [unit, setUnit] = useState("celsius");
function convertToFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
}
if (unit === "celsius") {

    return (
        <span>
<span className="temperature">

        {Math.round(props.celsius)}
        </span>
        <span className="unit"> ° C </span>
        <span className="unit">| <a href="/" onCLick={convertToFahrenheit}>° F</a></span>
        </span>
    );
} else {

return "F";

}



}