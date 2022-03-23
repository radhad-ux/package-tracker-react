import facebookURL from "../assets/facebook.png";
import linkedinURL from "../assets/linkedin.png";
import twitterURL from "../assets/twitter.png";
import SocialIcon from "../components/SocialIcon";

export default function Footer() {
  return (
    <div className="footer_links">
      <div className="social_media">
        <SocialIcon icon={facebookURL} href="https://facebook.com" />
        <SocialIcon
          icon={linkedinURL}
          href="https://www.linkedin.com/in/radhadoreswamy/"
        />
        <SocialIcon icon={twitterURL} href="https://www.twitter.com/" />
      </div>
      <div className="copy_right">
        <p> © 2022 @ Radha Doreswamy</p>
      </div>
    </div>
  );
}
