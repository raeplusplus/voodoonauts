import Video from "../../videos/purple-galaxy.mp4";
import { HeroContainer, HeroBg, VideoBg } from "./HeroElements";

const HeroSection = () => {
  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent></HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
