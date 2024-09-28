import Proptypes from "prop-types";
import "./WindThings.css";

export function WindThings({ wind_speed, wind_direction, is_day }) {
  return (
    <div className="wind-container">
      <div className="wind-card">
        <p className="wind-value">{wind_speed} km/h</p>
        <p className="wind-label">Velocidad del viento</p>
      </div>
      <div className="wind-card">
        <p className="wind-value">{wind_direction}</p>
        <p className="wind-label">Dirección del viento</p>
      </div>
      <div className="wind-card">
        <p className="wind-value">{is_day ? "Día" : "Noche"}</p>
        <p className="wind-label">Momento del día</p>
      </div>
    </div>
  );
}

WindThings.propTypes = {
  wind_speed: Proptypes.number.isRequired,
  wind_direction: Proptypes.string.isRequired,
  is_day: Proptypes.number.isRequired,
};
