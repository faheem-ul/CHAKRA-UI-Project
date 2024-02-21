import React from "react";
import { Link, useNavigate } from "react-router-dom";

import { Box, Heading, Flex, Stack, Button, Text } from "@chakra-ui/react";

import "./Login.css";
import CustomInputs from "../../Custom/CustomInputs";

function Login() {
  const navigate = useNavigate();

  const commonFlexProperties = {
    // width: "1000px",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  };

  const handleLoginSubmitBtn = () => {
    // do the logics for form validation and submit button
    // console.log("login button clicked");
    navigate("/dashboard");
  };

  return (
    <Box bgColor="black" width="100vw" height={["100vh"]}>
      <Flex gap="10px">
        <Flex
          width={["50%", "100%"]}
          sx={commonFlexProperties}
          direction="column"
          backgroundSize="cover"
          className="backgroundpicdiv"
        >
          <Heading
            textShadow="5px 5px 8px #000000"
            textDecoration="none"
            color="rgb(255, 255, 255)"
            fontSize="50px"
            fontWeight="bolder"
          >
            <Link to="/">Welcome to</Link>
          </Heading>
          <Heading
            color="#201111"
            // -webkit-text-stroke: 1px #fff;
            textShadow="20px 20px 25px #fff"
            fontSize="100px"
          >
            <Link to="/">Reset</Link>
          </Heading>
        </Flex>
        <Flex sx={commonFlexProperties} width={["50%", "100%"]}>
          <Stack spacing={3}>
            <Heading color="white">Login</Heading>
            <Text color="rgb(141 157 188)">
              Don't have an account{" "}
              <Link to="/signup">
                <Text
                  display="inline"
                  textDecoration="underline"
                  color="rgb(255 117 101)"
                >
                  Sign Up
                </Text>
              </Link>
            </Text>
            <CustomInputs placeholder="Email" type="email" />
            <CustomInputs placeholder="Password" type="password" />
            <Button
              mt="20px"
              type="submit"
              size="lg"
              width="320px"
              padding="30px"
              borderRadius="10px"
              color="White"
              backgroundColor="#ff7565"
              _hover="#ff7565"
              onClick={() => {
                handleLoginSubmitBtn();
              }}
            >
              Login
            </Button>
          </Stack>
        </Flex>
      </Flex>
    </Box>
  );
}

export default Login;
