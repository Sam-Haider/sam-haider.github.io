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
  border: 1px solid white;
  color: white;
  font-size: 1.3rem;
  width: 100%;
`;

const ProjectDescription = styled("div")`
  color: white;
  text-align: center;
  margin-bottom: 20px;
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
    <PageWrapper>
      <PageTitleWrapper>
        <PageTitle>My Projects</PageTitle>
      </PageTitleWrapper>
      <ImageWrapper>
        <Image src="images/laptop.jpg" alt="Your photo" />
      </ImageWrapper>

      <ProjectsWrapper>
        <a className="project-link" href="https://www.google.com">
          <Project src="images/laptop.jpg"></Project>
          <ProjectDescription>MongoDB, Express, Node, React</ProjectDescription>
        </a>
        <a className="project-link" href="https://www.google.com">
          <Project src="images/laptop.jpg"></Project>
          <ProjectDescription>
            MongoDB, Express, Node, React. MongoDB, Express, Node, React.
            MongoDB, Express, Node, React
          </ProjectDescription>
        </a>
        <a className="project-link" href="https://www.google.com">
          <Project src="images/laptop.jpg"></Project>
          <ProjectDescription>
            MongoDB, Express, Node, React. MongoDB, Express, Node, React.
            MongoDB, Express, Node, React
          </ProjectDescription>
        </a>
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
