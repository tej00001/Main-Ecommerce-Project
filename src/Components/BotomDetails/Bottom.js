import { Navbar } from "react-bootstrap";
import classes from "./Bottom.module.css";

const FooterDetails = () => {
  return (
    <div className={classes.items}>
      <footer>
        <span>The Generics</span>
        <Navbar.Brand href="youtube">
          <img
            src="https://png.pngtree.com/png-clipart/20221018/ourmid/pngtree-youtube-social-media-3d-stereo-png-image_6308427.png"
            alt="youtube"
          />
        </Navbar.Brand>
        {/* <a rel='noreferrer' href='https://www.spotify.com' target='_blank'> we can use like this also*/}
        <Navbar.Brand href="spotify">
          <img
            src="https://cdn.pixabay.com/photo/2016/10/22/00/15/spotify-1759471_960_720.jpg"
            alt="spotify"
          />{" "}
        </Navbar.Brand>
        <Navbar.Brand href="fb">
          <img
            src="https://www.mmppicture.co.in/wp-content/uploads/2021/03/Facebook-Icon-PNG-61.png"
            alt="fb"
          />
        </Navbar.Brand>
      </footer>
    </div>
  );
};
export default FooterDetails;
