import { useParams, Link } from "react-router-dom";
import PackageDetailItem from "../components/PackageDetailItem";
import Map from "../components/Map";
import LeftarrowIcon from "../assets/left.png";

export default function PackageDetails({ data }) {
  const { id } = useParams();
  const packageDetails = data.find((item) => item.id === Number(id));

  return (
    <div className="package_detailpage">
      <div className="container">
        <div className="package_card">
          <PackageDetailItem packageDetails={packageDetails} />
          <div className="map-container">
            <Map packageDetails={packageDetails} />
          </div>

          <Link to="/" className="back_arrow">
            <img src={LeftarrowIcon} className="arrow" alt="left arrow" />
            Go Back
          </Link>
        </div>
      </div>
    </div>
  );
}
