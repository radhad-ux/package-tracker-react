import facebookURL from "../assets/images/socialIcons/facebook.png";
import linkedinURL from "../assets/images/socialIcons/linkedin.png";
import twitterURL from "../assets/images/socialIcons/twitter.png";
import SocialIcon from "../components/SocialIcon";

export default function Footer() {
  return (
    <footer className="footer_links">
      <section className="social_media">
        <SocialIcon icon={facebookURL} href="https://facebook.com" />
        <SocialIcon icon={linkedinURL} href="https://www.linkedin.com" />
        <SocialIcon icon={twitterURL} href="https://www.twitter.com/" />
      </section>
      <section className="copy_right">
        <p> © 2022 @ TRACKPACKAGE.IO</p>
      </section>
    </footer>
  );
}
