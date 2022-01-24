import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Testimonial.css";
import { Avatar } from "@material-ui/core";
// import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
import leftArrow from "./icons/left-arrow.svg";
import rightArrow from "./icons/right-arrow.svg";
import img1 from './images/img1.png';
import img2 from './images/img2.png';
import img3 from './images/img3.png';

const Testimonial = () => {
  return (
    <div className="testimonial" style={{ display: "flex", justifyContent: "center", marginTop: 50, marginBottom: 50}} >
      <div style={{ width: "50%", textAlign: "center" }}>
        <h1 style={{ marginBottom: 20 }}>Meet the Team</h1>
        <Slider prevArrow={<PreviousBtn />} nextArrow={<NextBtn />} dots>
          <Card img={img1} />
          <Card img={img2} />
          <Card img={img3} />
        </Slider>
      </div>
    </div>
  );
};

const Card = ({ img }) => {
  return (
    <div style={{display: "flex", alignItems: "center", flexDirection: "column", textAlign: "center", color: "gray"}} >
      <Avatar imgProps={{ style: { borderRadius: "50%" } }} src={img} style={{width: 120, height: 120, border: "1px solid lightgray", padding: 7, marginBottom: 20}} />
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur accusantium error numquam dolore atque. Atque totam ad sint ducimus! Maxime! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur accusantium error numquam dolore atque. Atque totam ad sint ducimus! Maxime!
      </p>
      <p style={{ fontStyle: "italic", marginTop: 15 }}>
        <span style={{ fontWeight: 500, color: "green" }}>PAULA WILSON</span> ,Media Analyst
      </p>
    </div>
  );
};

const PreviousBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <img src={leftArrow} style={{ color: "gray", fontSize: "45px" }} alt="left-arrow"/>
    </div>
  );
};

const NextBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <img src={rightArrow} style={{ color: "gray", fontSize: "45px" }} alt="right-arrow"/>
    </div>
  );
};
export default Testimonial;