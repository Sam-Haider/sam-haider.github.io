import React, { useState } from "react";
import { styled } from "@mui/system";
import { Link } from "react-router-dom";

const PageWrapper = styled("div")`
  max-width: 800px;
  margin: 0 auto;
  min-height: calc(100vh - 120px);
`;

const Image = styled("img")`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  overflow: hidden;
  object-fit: cover;
  border: 3px solid transparent;
  background-image: linear-gradient(white, white),
    linear-gradient(to right, #16479b, #f0c043);
  background-origin: border-box;
  background-clip: content-box, border-box;
`;

const Wrapper = styled("div")({
  display: "flex",
  justifyContent: "center",
  marginBottom: "30px",
});

const WelcomeWrapper = styled("div")`
  padding: 20px;
  display: flex;
  justify-content: center;
`;
const Welcome = styled("div")`
  color: white;
  font-size: 50px;
`;

const GreetingWrapper = styled("div")`
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

const Greeting = styled("div")`
  color: white;
  font-size: 1.5rem;
  text-align: center;
  width: 90%;
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

const SkeletonLoader = styled("div")`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.1) 25%,
    rgba(255, 255, 255, 0.25) 50%,
    rgba(255, 255, 255, 0.1) 75%
  );
  background-size: 200% 100%;
  animation: loading 1.5s infinite;
  transition: opacity 0.3s ease-in;
  opacity: ${({ isLoading }) => (isLoading ? 1 : 0)};
  z-index: 1;

  @keyframes loading {
    0% {
      background-position: 200% 0;
    }
    100% {
      background-position: -200% 0;
    }
  }
`;

const ImageWrapper = styled("div")`
  position: relative;
`;

function Home() {
  const [isLoading, setIsLoading] = useState(true);

  const handleImageLoad = () => {
    setIsLoading(false);
  };
  return (
    <PageWrapper className="fade-in">
      <WelcomeWrapper>
        <Welcome>Welcome</Welcome>
      </WelcomeWrapper>

      <GreetingWrapper>
        <Greeting>
          I'm Sam. I'm a front-end engineer who loves building well-designed UIs
          with React and solving problems with JavaScript.
        </Greeting>
      </GreetingWrapper>

      <Wrapper>
        <ImageWrapper>
          <SkeletonLoader hidden={!isLoading} isLoading={isLoading} />
          <Image
            src="images/profile.jpeg"
            alt="Your photo"
            onLoad={handleImageLoad}
            hidden={isLoading}
          />
        </ImageWrapper>
      </Wrapper>

      <ButtonWrapper>
        <Link to="/about">
          <StyledButton>My Story</StyledButton>
        </Link>
      </ButtonWrapper>
    </PageWrapper>
  );
}

export default Home;
