import React, { useEffect } from "react";
import { styled } from "@mui/system";
import { Link } from "react-router-dom";

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
    linear-gradient(to right, #2270c3, #a96f49);
  background-origin: border-box;
  background-clip: content-box, border-box;
`;

const ImageWrapper = styled("div")({
  display: "flex",
  justifyContent: "center",
  marginBottom: "30px",
});

const ParagraphWrapper = styled("div")`
  padding: 20px;
  display: flex;
  justify-content: left;
`;

const Paragraph = styled("div")`
  color: white;
  font-size: 1.3rem;
  width: 100%;
`;

const ButtonWrapper = styled("div")`
  padding: 20px;
  display: flex;
  justify-content: center;
`;

const StyledButton = styled("button")`
  padding: 0.7em 2em;
  background-color: transparent;
  color: white;
  font-size: 1.5em;
  text-align: center;
  border-radius: 10px;
  border: 1px solid white;
`;

const StyledAnchor = styled("a")`
  color: #7fc1ff;
`;

function MyStory() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <PageWrapper>
      <PageTitleWrapper>
        <PageTitle>My Story</PageTitle>
      </PageTitleWrapper>
      <ImageWrapper>
        <Image src="images/MeAtTheComputer.jpg" alt="Your photo" />
      </ImageWrapper>

      <ParagraphWrapper>
        <Paragraph>
          Thanks for visiting my portfolio! As you can see, my love for
          technology started at an early age. Although I began my career in the
          healthcare space as an R&D project manager for new drugs, I found
          myself increasingly being drawn to technology and decided to shift my
          focus to software development beginning in 2019.
        </Paragraph>
      </ParagraphWrapper>

      <ParagraphWrapper>
        <Paragraph>
          After taking 12 weeks to complete the software engineering immersive
          program at General Assembly in Boston, I spent several months ideating
          and building the prototype for{" "}
          <StyledAnchor href="https://www.instagram.com/joylistapp/?hl=en">
            {" "}
            JoyList
          </StyledAnchor>{" "}
          using MongoDB, Express, NodeJS, and React. I eventually hired a
          software development team to take over development so that I could
          focus on product development and customer discovery. Through this
          experience, I sharpened my skills in full stack development, startup
          operations, product management, and customer discovery.
        </Paragraph>
      </ParagraphWrapper>

      <ParagraphWrapper>
        <Paragraph>
          After spending about a year and a half developing JoyList, I decided
          to join HqO as a Software Engineer to help them build their resource
          booking web application. At HqO, my team was focused on building the
          company's flagship product, a customer-facing e-commerce application
          that allowed users to book resources throughout their office buildings
          and customize their bookings with amenities, add-ons, catering, and
          more. At HqO, I was surrounded by incredible teams of technology
          professionals and many senior full stack engineers. I learned about
          the software development lifecycle, how to collaborate with many
          teammates on big, complex projects, how to troubleshoot nasty bugs,
          and how to write well-designed, testable, and modular front-end code.
        </Paragraph>
      </ParagraphWrapper>

      <ParagraphWrapper>
        <Paragraph>
          After a tremendous experience at HqO, I ultimately decided to leave
          the company to pursue other opportunities. I took some time off to do
          some traveling with my wonderful wife and to attend to some personal
          matters, and now I'm back looking for my next role as a front end
          engineer. I'm hoping to join a team that values diversity and
          collaboration, and loves JavaScript and React as much as I do. If that
          sounds like you, please{" "}
          <StyledAnchor href="/contact">get in touch!</StyledAnchor>
        </Paragraph>
      </ParagraphWrapper>

      <ButtonWrapper>
        <Link to="/projects">
          <StyledButton>My Projects</StyledButton>
        </Link>
      </ButtonWrapper>
    </PageWrapper>
  );
}

export default MyStory;
