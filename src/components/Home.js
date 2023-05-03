import React from "react";
import { styled } from "@mui/system";

const Image = styled("img")`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  overflow: hidden;
  object-fit: cover;
  border: 2px solid transparent;
  background-image: linear-gradient(white, white),
    linear-gradient(to right, blue, purple);
  background-origin: border-box;
  background-clip: content-box, border-box;
`;

const Wrapper = styled("div")({
  display: "flex",
  justifyContent: "center",
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
`;

const Greeting = styled("div")`
  color: white;
  font-size: 25px;
`;

function Home() {
  return (
    <>
      <WelcomeWrapper>
        <Welcome>Welcome!</Welcome>
      </WelcomeWrapper>

      <GreetingWrapper>
        <Greeting>I'm Sam. I love JS.</Greeting>
      </GreetingWrapper>

      <Wrapper>
        <Image src="images/profile.jpeg" alt="Your photo" />
      </Wrapper>
    </>
  );
}

export default Home;
