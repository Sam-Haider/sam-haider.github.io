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
    linear-gradient(to right, #3423b8, yellow);
  background-origin: border-box;
  background-clip: content-box, border-box;
`;

const ImageWrapper = styled("div")({
  display: "flex",
  justifyContent: "center",
  marginBottom: "30px",
});

const TutorialsWrapper = styled("div")`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const TutorialDescription = styled("div")`
  color: white;
  font-size: 1.2rem;
  margin-top: 10px;
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

const Iframe = styled("iframe")`
  width: 100%;
  min-width: 300px;
  border: 1px solid white;
  margin: 10px;
`;

const Separator = styled("div")`
  width: 100%;
  border-bottom: 3px solid #b6981f;
  margin: 30px 0;
`;

function MyVideos() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageWrapper>
      <PageTitleWrapper>
        <PageTitle>My Tutorials</PageTitle>
      </PageTitleWrapper>
      <ImageWrapper>
        <Image src="images/lightbulb.jpg" alt="Your photo" />
      </ImageWrapper>
      <TutorialsWrapper>
        <Iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/g4o80A9E-u8"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></Iframe>
        <TutorialDescription>Closures</TutorialDescription>
        <Separator></Separator>
        <Iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/nbmkQuervgc"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></Iframe>
        <TutorialDescription>Asynchronous Programming</TutorialDescription>
        <Separator></Separator>
        <Iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/bFCNODWtm-s"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></Iframe>
        <TutorialDescription>Recursion</TutorialDescription>
        <Separator></Separator>
        <Iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/-J_Z6OPxOL0"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></Iframe>
        <TutorialDescription>Binary Search</TutorialDescription>
        <Separator></Separator>
        <Iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/P9o1-DLllhs"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></Iframe>
        <TutorialDescription>Git Rebase vs. Merge</TutorialDescription>
        <Separator></Separator>
      </TutorialsWrapper>
      <ButtonWrapper>
        <Link to="/contact">
          <StyledButton>Get In Touch</StyledButton>
        </Link>
      </ButtonWrapper>
    </PageWrapper>
  );
}

export default MyVideos;
