import React from "react";
import { Link, useNavigate } from "react-router-dom";

import {
  Box,
  Heading,
  Flex,
  Stack,
  Button,
  Text,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
} from "@chakra-ui/react";

import { HamburgerIcon } from "@chakra-ui/icons";

// import "./Login.css";
import CustomInputs from "../../Custom/CustomInputs";

function Signup() {
  const navigate = useNavigate();

  const commonFlexProperties = {
    width: "1000px",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  };

  const handleSignupSubmitBtn = () => {
    // do the logics for form validation and submit button
    // console.log("login button clicked");
    navigate("/dashboard");
  };

  return (
    <Box bgColor="black">
      <Flex justifyContent="space-around">
        <Flex
          sx={commonFlexProperties}
          direction="column"
          backgroundImage="url('src\assets\Pictures\pexels-ketut-subiyanto-5037345.jpg')"
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

        <Flex sx={commonFlexProperties}>
          <Stack spacing={3}>
            <Heading color="white">Sign Up</Heading>
            <Text color="rgb(141 157 188)">
              Already have an account{" "}
              <Link to="/login">
                <Text
                  display="inline"
                  textDecoration="underline"
                  color="rgb(255 117 101)"
                >
                  Log In
                </Text>
              </Link>
            </Text>

            {/* start from here and make the cards */}
            <Text color="#ff7565">Step 1</Text>
            <Heading size="lg" color="white">
              Select Your Plan
            </Heading>

            <Box></Box>
            <Card
              bgColor="black"
              border="3px solid"
              borderColor="#ff7565"
              borderRadius="10px"
              width="400px"
            >
              <CardBody>
                <Heading size="md" color="white">
                  Annual
                </Heading>
                <Text>
                  View a summary of all your customers over the last month.
                </Text>
              </CardBody>
            </Card>

            <CustomInputs placeholder="First Name" type="text" />
            <CustomInputs placeholder="Last Name" type="text" />
            <CustomInputs placeholder="Email" type="email" />
            <CustomInputs placeholder="Password" type="password" />
            <Button
              mt="20px"
              type="submit"
              size="lg"
              width="400px"
              padding="30px"
              borderRadius="10px"
              color="White"
              backgroundColor="#ff7565"
              _hover="#ff7565"
              onClick={() => {
                handleSignupSubmitBtn();
              }}
            >
              Signup
            </Button>
          </Stack>
        </Flex>
      </Flex>
    </Box>
  );
}

export default Signup;
