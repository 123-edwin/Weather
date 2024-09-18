import PropTypes from "prop-types";
import "./Temperature.css";

export function temperatureInfo({
  temperature,
  humidity,
  feelslike,
  condition,
}) {
  return (
    <div className="temperature-container">
      <div className="temperature-card">
        <p className="temperature-value">{temperature}°C</p>
        <p className="temperature-label">Temperatura</p>
      </div>
      <div className="temperature-card">
        <p className="temperature-value">{feelslike}°C</p>
        <p className="temperature-label">Se siente</p>
      </div>
      <div className="temperature-card">
        <p className="temperature-value">{humidity}%</p>
        <p className="temperature-label">Humedad</p>
      </div>
      <div className="temperature-card">
        <p className="temperature-value">{condition}</p>
        <p className="temperature-label">Condición</p>
      </div>
    </div>
  );
}

temperatureInfo.propTypes = {
  temperature: PropTypes.number.isRequired,
  feelslike: PropTypes.number.isRequired,
  humidity: PropTypes.number.isRequired,
  condition: PropTypes.string.isRequired,
};
