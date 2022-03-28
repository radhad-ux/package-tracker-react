import { Link } from "react-router-dom";

import StatusIcon from "./StatusIcon";

// good
export default function PackageItem({ item }) {
  const { id, parcel_id, status, eta } = item;
  const [date] = eta.split("T");

  return (
    <Link to={`package/${id}`} className="package_link">
      <div className="package_item">
        <p className="parcel_id">#{parcel_id}</p>
        {/* Semantics -1 use small for text that really should be physically small */}
        {/* In this case, your Arrival date: is acting as a label */}
        <small>Arrival Date: {date}</small>
        <div className="status">
          <StatusIcon status={status} />
        </div>
        <button className="btn_primary">See More</button>
      </div>
    </Link>
  );
}
