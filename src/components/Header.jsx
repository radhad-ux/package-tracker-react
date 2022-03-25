import Logo from "../assets/shipping.png";
import PhoneIcon from "../assets/phone.png";

export default function Header() {
  return (
    <header className="page_header">
      <section className="header_main">
        <img className="van_img" src={Logo} alt="a delivery truck" />
        <h3>TRACKPACKAGE.</h3>
        <span>IO</span>
      </section>
      <section className="header_sub">
        <img className="phone_img" src={PhoneIcon} alt="phone"></img>
        <span className="phone_number">:+46 76 422 1662</span>
      </section>
    </header>
  );
}
