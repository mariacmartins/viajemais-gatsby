import React from 'react';
import { FaGithub } from 'react-icons/fa';
import {
  FooterContainer,
  SocialIcon,
  SocialIcons,
  SocialIconLink,
  SocialLogo,
  SocialMedia,
  SocialMediaWrap,
  WebsiteRights
} from './FooterElements';

const Footer = () => {
  return (
    <FooterContainer>
      <SocialMedia>
        <SocialMediaWrap>
          <SocialLogo to="/">
            <SocialIcon />
            EXPLORE
          </SocialLogo>
          <WebsiteRights>EXPLORE © {new Date().getFullYear()}</WebsiteRights>
          <SocialIcons>
            <SocialIconLink href="//github.com/mariacmartins" target="_blank"
              arial-label="Github" rel="noopener noreferrer">
              <FaGithub />
            </SocialIconLink>
          </SocialIcons>
        </SocialMediaWrap>
      </SocialMedia>
    </FooterContainer>
  )
}

export default Footer;