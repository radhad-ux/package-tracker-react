import { useParams, Link } from "react-router-dom";
import PackageDetailItem from "../components/PackageDetailItem";
import Map from "../components/Map";
import Leftarrow from "../assets/left.png";

export default function PackageDetails({ data }) {
  const { id } = useParams();
  const packageDetails = data.find((item) => item.id === Number(id));

  return (
    <div className="package_details">
      <div className="container" id="package_details">
        <h2>Your Package Details</h2>
        <div className="package_card">
          <PackageDetailItem packageDetails={packageDetails} />
          <div className="map-container">
            <Map packageDetails={packageDetails} />
          </div>
        </div>
        <Link to="/" className="back_arrow">
          <img src={Leftarrow} className="arrow" alt="left arrow" />
          Go Back
        </Link>
      </div>
    </div>
  );
}
