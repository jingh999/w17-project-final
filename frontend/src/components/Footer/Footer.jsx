import styled from "styled-components";
import { ContactIcon, FindUsLink, ListWrapper } from "./Footer.styled";
import hotelLogo from "../../assets/logo-hotel.svg";
import fbLogo from "../../assets/logo-facebook.svg";
import insLogo from "../../assets/logo-instagram.svg";
import goLogo from "../../assets/logo-google-maps.svg";
import smile01 from "../../assets/smile-1.svg";
import smile02 from "../../assets/smile-2.svg";
import smile03 from "../../assets/smile-3.svg";

export const Footer = () => {
  return (
    <StyledFooter>
      <StyledLogo href="/" title="home page">
        <img src={hotelLogo} alt="Logo Hotel Itaca" />
      </StyledLogo>
      <FooterBody>
        <ListWrapper>
          <a href="/events-meetings" title="conference & events">
            Conference & Events
          </a>
          <a href="/hotelrooms" title="hotel rooms">
            Hotel Rooms
          </a>
          <a href="/about" title="about us">
            About
          </a>
        </ListWrapper>
        <NewsLetterContainer>
          <NewsletterHeading>NEWSLETTER</NewsletterHeading>
          <NewsLetter>
            <label htmlFor="newsletter-email"></label>
            <input id="newsletter-email" type="email" placeholder="E-mail" aria-label="Your email address" />
            <button type="button">Subscribe</button>
          </NewsLetter>
          <NewsletterSubtitle>
            Get monthly news, stay updated.
          </NewsletterSubtitle>
        </NewsLetterContainer>
        <ContactWrapper>
          <ContactIconWrapper>
            <FindUsLink
              link="https://www.facebook.com/"
              imgSrc={fbLogo}
              altText="Facebooks icon"
              target="_blank"
            />
            <FindUsLink
              link="https://www.instagram.com/"
              imgSrc={insLogo}
              altText="Instagram icon"
              target="_blank"
            />
            <FindUsLink
              link="https://www.google.se/maps/place/Ithaca/@38.4019904,20.6084027,12z/data=!3m1!4b1!4m6!3m5!1s0x135d952249df9f5f:0x6acd8d9ffb56445a!8m2!3d38.4284603!4d20.6764877!16zL20vMGdtZzg?entry=ttu"
              imgSrc={goLogo}
              altText="Google maps icon"
              target="_blank"
            />
          </ContactIconWrapper>
          <ContactTextWrapper>
            <p>
              Via del Mare 123 <br />
              Itaca - 80050
            </p>
            <a href="tel:+1234567890">+12-345-678-90</a>
            <a href="mailto:info@sastaholm.se">info@sunsidehotel.me</a>
          </ContactTextWrapper>
        </ContactWrapper>
      </FooterBody>
      <ContactIconWrapper>
        <ContactIcon
          link="https://arnaus-react-portafolio.netlify.app/"
          imgSrc={smile01}
          altText="Arnaus's contact icon"
          labelFor="contact-arnau"
          label="Arnau"
          target="_blank"
        />
        <ContactIcon
          link="https://wondrous-sorbet-b71db8.netlify.app/"
          imgSrc={smile02}
          altText="Cornelia's contact icon"
          labelFor="contact-cornelia"
          label="Cornelia"
          target="_blank"
        />
        <ContactIcon
          link="https://jinghuang.netlify.app/"
          imgSrc={smile03}
          altText="Jings's contact icon"
          labelFor="contact-jing"
          label="Jing"
          target="_blank"
        />
      </ContactIconWrapper>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  position: relative;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0 50px 0;
  background-color: #44554b;
  color: rgb(255, 255, 255);
  width: 100%;
  font-size: 0.8rem;
  margin: auto;
  gap: 30px;
`;

const StyledLogo = styled.a`
  img {
    display: none;
    filter: invert(100%);
    height: 70px;
    margin-top: 50px;
    margin-bottom: 20px;
  }

  @media (min-width: 1000px) {
    & > img {
      display: block;
    }
  }
`;

const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
  gap: 20px;
`;

const ContactIconWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const ContactTextWrapper = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 15px;

  p {
    line-height: 25px;
    margin: 0;
  }
  a {
    text-decoration: none;
    color: white;
  }
`;

const FooterBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  @media (min-width: 1000px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: start;
  }
`;

const NewsLetterContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
`;

const NewsletterHeading = styled.h2`
  font-size: 1rem;
  font-weight: normal;
  margin: 10px 0;
`;

const NewsletterSubtitle = styled.p`
  font-weight: 100;
  margin: 10px 0;
`;

const NewsLetter = styled.div`
  display: flex;

  input {
    padding: 10px;
    font-size: 1rem;
    border: 0px solid #ccc;
    color: white;
    border-radius: 4px 0 0 4px;
    width: 100%;
    outline: none;
    background-color: #5a675f;

    &::placeholder {
      color: white;
    }

    &:focus {
      border-color: #007bff;
    }
  }

  button {
    padding: 10px;
    font-size: 1rem;
    color: #fff;
    background-color: #d3af97;
    border: none;
    border-radius: 0 4px 4px 0;
    cursor: pointer;

    &:hover {
      color: #5a675f;
      background-color: #fff;
      transform: scale(1.05);
      transition: all ease 0.3s;
    }
  }
`;
