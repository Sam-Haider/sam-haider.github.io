import React, { useEffect } from "react";
import { styled } from "@mui/system";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons/faEnvelope";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";

const PageWrapper = styled("div")`
  max-width: 800px;
  margin: 0 auto;
`;

const PageTitleWrapper = styled("div")`
  padding: 20px;
  display: flex;
  justify-content: left;
`;
const PageTitle = styled("div")`
  color: white;
  font-size: 40px;
`;

const Image = styled("img")`
  width: 100%;
  height: auto;
  overflow: hidden;
  object-fit: cover;
  border-bottom: 3px solid transparent;
  border-top: 3px solid transparent;
  background-image: linear-gradient(white, white),
    linear-gradient(to right, #d52e6f, #200d7c);
  background-origin: border-box;
  background-clip: content-box, border-box;
`;

const ImageWrapper = styled("div")`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const ContactWrapper = styled("div")`
  padding: 20px;
  display: flex;
  justify-content: left;
  flex-wrap: wrap;
`;

const ContactLink = styled("a")`
  display: flex;
  align-items: center;
  color: white;
  font-size: 1.2rem;
  margin: 10px;
`;

const Icon = styled(FontAwesomeIcon)`
  margin-right: 10px;
`;

function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageWrapper className="fade-in">
      <PageTitleWrapper>
        <PageTitle>Get in touch</PageTitle>
      </PageTitleWrapper>
      <ImageWrapper>
        <Image src="images/phone.jpg" alt="Your photo" />
      </ImageWrapper>
      <ContactWrapper>
        <ContactLink href="mailto:SamMHaider0@gmail.com">
          <Icon icon={faEnvelope} />
          SamMHaider0@gmail.com
        </ContactLink>
        <ContactLink href="https://www.linkedin.com/in/sam-m-haider/">
          <Icon icon={faLinkedin} />
          www.linkedin/com/in/sam-m-haider
        </ContactLink>
      </ContactWrapper>
    </PageWrapper>
  );
}

export default Contact;
