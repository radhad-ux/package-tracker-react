import Logo from "../assets/PackageVan.png";
import PhoneIcon from "../assets/phone.png";

export default function Header() {
  return (
    <header className="page_header">
      <div className="header_main">
        <img className="van_img" src={Logo} alt="a delivery truck" />
        <h3>TRACKPACKAGE.</h3>
        <span>IO</span>
      </div>
      <div className="header_sub">
        <img className="phone_img" src={PhoneIcon} alt="phone"></img>
        <span className="phone_number">:+46 76 422 1662</span>
      </div>
    </header>
  );
}
