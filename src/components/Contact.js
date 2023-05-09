import React from "react";
import { styled } from "@mui/system";

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
    linear-gradient(to right, #3423b8, pink);
  background-origin: border-box;
  background-clip: content-box, border-box;
`;

const ImageWrapper = styled("div")({
  display: "flex",
  justifyContent: "center",
  marginBottom: "30px",
});

function Contact() {
  return (
    <>
      <PageTitleWrapper>
        <PageTitle>Get in touch</PageTitle>
      </PageTitleWrapper>
      <ImageWrapper>
        <Image src="images/abstract.jpg" alt="Your photo" />
      </ImageWrapper>
    </>
  );
}

export default Contact;
