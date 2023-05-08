import React from "react";
import { styled } from "@mui/system";
import { Link } from "react-router-dom";

const Image = styled("img")`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  overflow: hidden;
  object-fit: cover;
  border: 3px solid transparent;
  background-image: linear-gradient(white, white),
    linear-gradient(to right, blue, purple);
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

function Home() {
  return (
    <>
      <WelcomeWrapper>
        <Welcome>Welcome</Welcome>
      </WelcomeWrapper>

      <GreetingWrapper>
        <Greeting>
          I'm Sam. I'm a front-end engineer who loves building well-designed UIs
          and solving problems with JavaScript.
        </Greeting>
      </GreetingWrapper>

      <Wrapper>
        <Image src="images/profile.jpeg" alt="Your photo" />
      </Wrapper>

      <ButtonWrapper>
        <Link to="/about">
          <StyledButton>My Story</StyledButton>
        </Link>
      </ButtonWrapper>
    </>
  );
}

export default Home;
