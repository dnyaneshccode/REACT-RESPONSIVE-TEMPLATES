import React from 'react'
// import {FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkTitle, FooterLink, FooterLinkItems} from './FooterElements';
import {FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkTitle, FooterLinkItems ,FooterLink, SocialMedia, SocialMediaWrap, SocialLogo, WebsiteRights, SocialIcons, SocialIconLink} from './FooterElements';
import {FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaBriefcase} from 'react-icons/fa';
import {animateScroll as scroll} from 'react-scroll';
const Footer = () => {

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                                <FooterLink to="/">How It Works</FooterLink>
                                <FooterLink to="/">Visitors</FooterLink>
                                <FooterLink to="/">Careers</FooterLink>
                                <FooterLink to="/">Privacy Policy</FooterLink>
                                <FooterLink to="/">Terms and Conditions</FooterLink>
                        </FooterLinkItems>
                        
                        <FooterLinkItems>
                            <FooterLinkTitle>Videos</FooterLinkTitle>
                                <FooterLink to="/">Submit Your Videos</FooterLink>
                                <FooterLink to="/">Influencers</FooterLink>
                                <FooterLink to="/">Our Channel</FooterLink>
                                <FooterLink to="/">Agency</FooterLink>
                                
                        </FooterLinkItems>
                    </FooterLinksWrapper>

                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Contact Us</FooterLinkTitle>
                                <FooterLink to="/">Contact</FooterLink>
                                <FooterLink to="/">Support</FooterLink>
                                <FooterLink to="/">Destinations</FooterLink>
                                <FooterLink to="/">Sponsorship</FooterLink>
                                
                        </FooterLinkItems>

                        <FooterLinkItems>
                            <FooterLinkTitle>Social Media</FooterLinkTitle>
                                <FooterLink href="https://dnyaneshchavanresume.netlify.app" target="_blank">Portfolio</FooterLink>
                                <FooterLink href="https://instagram.com/dnyaneshc?igshid=bzotjcyussya" target="_blank" aria-label='Facebook'>Instagram</FooterLink>
                                <FooterLink href="https://www.facebook.com/profile.php?id=100009358182192"  target="_blank">Facebook</FooterLink>
                                <FooterLink href="https://www.youtube.com/channel/UC1wfJ-D-4IJp9cW1ZLmSmxg"  target="_blank">Youtube</FooterLink>
                                <FooterLink href="https://twitter.com/Dnyaneshc2597?s=09" target="_blank">Twitter</FooterLink>
                                
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/' onClick={toggleHome}>
                            dnyaneshc
                        </SocialLogo>
                        <WebsiteRights> Copyright © {new Date().getFullYear()} All Rights reserved | This is Website is Developed By Dnyanesh Chavan</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href='https://dnyaneshchavanresume.netlify.app' target='_blank' 
                            aria-label='Portfolio'><FaBriefcase />
                            </SocialIconLink>

                            <SocialIconLink href='https://www.facebook.com/profile.php?id=100009358182192' target='_blank' 
                            aria-label='Facebook'><FaFacebook />
                            </SocialIconLink>
                        
                       
                            <SocialIconLink href='https://instagram.com/dnyaneshc?igshid=bzotjcyussya' target='_blank' 
                            aria-label='Instagram'><FaInstagram />
                            </SocialIconLink>
                        
                      
                            <SocialIconLink href='https://twitter.com/Dnyaneshc2597?s=09' target='_blank'
                             aria-label='Twitter'><FaTwitter />
                             </SocialIconLink>
                        
                        
                            <SocialIconLink href='https://www.youtube.com/channel/UC1wfJ-D-4IJp9cW1ZLmSmxg' target='_blank' 
                            aria-label='Youtube'><FaYoutube />
                            </SocialIconLink>
                        </SocialIcons>
                        
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
