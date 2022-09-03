import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinksItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialIconLink,
  SocialIcons,
  SocialLogo,
  SocialMediaWrap,
  WebsiteRights,
} from "./FooterElements";

import { FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            {/* <FooterLinksItems>
              <FooterLink to="#about">About Us</FooterLink>
            </FooterLinksItems>
            <FooterLinksItems>
              <FooterLink to="shingai">Our Founders</FooterLink>
            </FooterLinksItems>
            <FooterLinksItems>
              <FooterLink to="alumni">Our Alumni</FooterLink>
            </FooterLinksItems> */}
            {/* <FooterLinksItems>
              <FooterLink to="/signin">Testimonials</FooterLink>
            </FooterLinksItems> */}
            {/* <FooterLinksItems>
              <FooterLink to="/signin">Contact Us</FooterLink>
            </FooterLinksItems> */}
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/">Voodoonauts</SocialLogo>
            <WebsiteRights>
              <a href="https://raeshellerose.netlify.app" target="_blank">
                Raeshelle Rose
              </a>{" "}
              ©{new Date().getFullYear()} All Rights Reserved.
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLink
                href="//www.twitter.com/voodoonauts"
                target="_blank"
                aria-label="Twitter"
              >
                <FaTwitter />
              </SocialIconLink>
              <SocialIconLink
                href="//www.instagram.com/voodoonauts"
                target="_blank"
                aria-label="Instagram"
              >
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink
                href="//www.youtube.com/channel/UCNvjCZFJdU9SDdSy7O9iuWQ"
                target="_blank"
                aria-label="YouTube"
              >
                <FaYoutube />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
