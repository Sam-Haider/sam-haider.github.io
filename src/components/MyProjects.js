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
    linear-gradient(to right, rgb(69, 216, 255), purple);
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
  flex-wrap: wrap;
  justify-content: space-around;
  .project-link {
    width: 30%;
    @media (max-width: 768px) {
      width: 100%;
    }
  }
`;

const Project = styled("img")`
  color: white;
  font-size: 1.3rem;
  width: 100%;
  max-width: 500px;
`;

const Separator = styled("div")`
  width: 100%;
  border-bottom: 3px solid #edd0ff;
  margin-bottom: 30px;
  max-width: 500px;
`;

const ProjectDescription = styled("div")`
  color: white;
  text-align: center;
  margin-top: 10px;
  margin-bottom: 20px;
  flex-basis: 100%;
  font-size: 20px;
`;

const ProjectButtonsWrapper = styled("div")`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-bottom: 30px;
  width: 100%;
  max-width: 500px;
`;

const ProjectButton = styled("a")`
  padding: 5px 10px;
  background-image: linear-gradient(to right, #031148, #06000e);
  color: white;
  font-size: 20px;
  text-align: center;
  border-radius: 10px;
  border: 1px solid white;
  width: 30%;
  margin-bottom: 10px;
  text-decoration: none;
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
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageWrapper className="fade-in">
      <PageTitleWrapper>
        <PageTitle>My Projects</PageTitle>
      </PageTitleWrapper>
      <ImageWrapper>
        <Image src="images/laptop.jpg" alt="Your photo" />
      </ImageWrapper>

      <ProjectsWrapper>
        <Project src="images/quizzer.png"></Project>
        <ProjectDescription>React, JavaScript, CSS, OpenAI</ProjectDescription>
        <ProjectButtonsWrapper>
          <ProjectButton href="https://github.com/Sam-Haider/js-quizzer">
            Code
          </ProjectButton>
          <ProjectButton href="https://js-react-quizzer.netlify.app/">
            App
          </ProjectButton>
        </ProjectButtonsWrapper>
        <Separator></Separator>
        <Project src="images/chasetheword.png"></Project>
        <ProjectDescription>React, JavaScript, CSS</ProjectDescription>
        <ProjectButtonsWrapper>
          <ProjectButton href="https://github.com/Sam-Haider/WordChase">
            Code
          </ProjectButton>
          <ProjectButton href="https://chasetheword.netlify.app">
            App
          </ProjectButton>
        </ProjectButtonsWrapper>
        <Separator></Separator>
        <Project src="images/invpropcalc.png"></Project>
        <ProjectDescription>
          React, JavaScript, CSS, Express, NodeJS, MongoDB
        </ProjectDescription>
        <ProjectButtonsWrapper>
          <ProjectButton href="https://github.com/Sam-Haider/investment-property-calc">
            Code
          </ProjectButton>
          <ProjectButton href="https://main--investment-property-calc.netlify.app/">
            App
          </ProjectButton>
        </ProjectButtonsWrapper>
      </ProjectsWrapper>

      <ButtonWrapper>
        <Link to="/tutorials">
          <StyledButton>My Tutorials</StyledButton>
        </Link>
      </ButtonWrapper>
    </PageWrapper>
  );
}

export default MyProjects;
