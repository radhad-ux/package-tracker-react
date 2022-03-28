import { useParams, Link } from "react-router-dom";

import LeftarrowIcon from "../assets/leftarrow.png";
import Map from "../components/Map";
import PackageDetailsItem from "../components/PackageDetailsItem";

// good
export default function PackageDetails({ data }) {
  const { id } = useParams();
  const packageDetails = data.find((item) => item.id === Number(id));

  return (
    <div className="package_detailpage">
      <div className="container">
        <div className="package_card">
          <PackageDetailsItem packageDetails={packageDetails} />
          <section className="map-container">
            <Map packageDetails={packageDetails} />
          </section>
          <Link to="/" className="back_arrow">
            <img src={LeftarrowIcon} className="arrow" alt="left arrow" />
            Go Back
          </Link>
        </div>
      </div>
    </div>
  );
}
