// Div not neccesary, you can start on the a directly
export default function SocialIcon({ icon, link }) {
  return (
    <a href={link} target="_blank" rel="noreferrer">
      <img src={icon} alt="social_media icon" />
    </a>
  );
}
