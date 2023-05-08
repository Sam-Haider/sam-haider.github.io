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
    linear-gradient(to right, #bf2536, pink);
  background-origin: border-box;
  background-clip: content-box, border-box;
`;

const ImageWrapper = styled("div")({
  display: "flex",
  justifyContent: "center",
  marginBottom: "30px",
});

const ProjectsWrapper = styled("div")`
  padding: 20px;
  display: flex;
  justify-content: space-around;
`;

const Project = styled("div")`
  border: 1px solid white;
  color: white;
  font-size: 1.3rem;
  width: 25%;
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

function MyProjects() {
  return (
    <>
      <PageTitleWrapper>
        <PageTitle>My Projects</PageTitle>
      </PageTitleWrapper>
      <ImageWrapper>
        <Image src="images/laptop.jpg" alt="Your photo" />
      </ImageWrapper>

      <ProjectsWrapper>
        <Project>Project 1</Project>
        <Project>Project 2</Project>
        <Project> Project 2</Project>
      </ProjectsWrapper>
      <ButtonWrapper>
        <StyledButton>My Tutorials</StyledButton>
      </ButtonWrapper>
    </>
  );
}

export default MyProjects;