import React from "react";
import { useState } from "react";

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

import { HamburgerIcon, StarIcon, CheckIcon } from "@chakra-ui/icons";

import "./Signup.css";
import CustomInputs from "../../Custom/CustomInputs";

function Signup() {
  const [expanded, setExpanded] = useState(false);
  const [secndExpanded, setSecndExpanded] = useState(false);
  const navigate = useNavigate();

  const minidivCommomProperties = {
    display: "inline-block",
    width: "90px",
    height: "90px",
    margin: "10px",
    // padding: "5px",
    borderRadius: "30px",
    border: "1px solid",
    borderColor: "rgb(176, 67, 67)",
  };

  const handleExpand = () => {
    setExpanded(true);
    setSecndExpanded(false);
  };

  const handleExpandSecnd = () => {
    setSecndExpanded(true);
    setExpanded(false);
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
          width="1000px"
          justifyContent="center"
          alignItems="center"
          height="100vh"
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
            textShadow="20px 20px 25px #fff"
            fontSize="100px"
          >
            <Link to="/">Reset</Link>
          </Heading>
        </Flex>

        <Flex
          cursor="pointer"
          width="1000px"
          justifyContent="center"
          height="100vh"
          overflowY="auto"
          sx={{
            "::webkit-scrollbar": {
              display: "none",
            },
          }}
        >
          <Stack spacing={3}>
            <Heading color="white" mt="20px">
              Sign Up
            </Heading>
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

            <Text color="#ff7565">Step 1</Text>
            <Heading size="lg" color="white">
              Select Your Plan
            </Heading>

            <Card
              as="div"
              className="carddic"
              bgColor="black"
              border="3px solid"
              borderColor="#ff7565"
              borderRadius="30px"
              width="400px"
              onClick={handleExpand}
            >
              <CardBody padding="0px">
                <Flex
                  direction="row"
                  justifyItems="baseline"
                  paddingLeft="20px"
                  pt="15px"
                >
                  <HamburgerIcon
                    bgColor="#ff7565"
                    color="white"
                    m="5px"
                    width="20px"
                    height="18px"
                  />
                  <Heading size="md" color="white">
                    Annual
                  </Heading>
                </Flex>

                <Heading
                  size="small"
                  color="#8d9dbc"
                  mt="5px"
                  paddingLeft="20px"
                >
                  $9.99 USD/PER MONTH • BILLED ANNUALLY
                </Heading>
                <Text
                  color="#8d9dbc"
                  size="small"
                  mt="10px"
                  pl="20px"
                  pr="20px"
                >
                  At the end of your 30 day trial your subscription will
                  automatically rollover to a $119.99/year subscription billed
                  annually unless cancelled.
                </Text>

                <Flex
                  direction="row"
                  justifyItems="baseline"
                  mt="10px"
                  mb="20px"
                  paddingLeft="20px"
                >
                  <StarIcon
                    bgColor="#ff7565"
                    color="white"
                    m="5px"
                    width="20px"
                    height="18px"
                  />
                  <Heading size="small" color="white">
                    RECOMMENDED
                  </Heading>
                </Flex>

                {expanded && (
                  <>
                    <Heading size="small" color="white" mt="15px" pl="20px">
                      All programmes Included
                    </Heading>

                    <Box
                      border="1px solid"
                      borderColor="white"
                      mt="20px"
                      mb="10px"
                      ml="20px"
                      mr="20px"
                    ></Box>

                    <Box
                      overflowY="auto"
                      whiteSpace="nowrap"
                      sx={{
                        "::-webkit-scrollbar": {
                          display: "none",
                        },
                      }}
                    >
                      <Box
                        className="minidivs"
                        sx={minidivCommomProperties}
                        // backgroundImage="url('E:\React\chakraUI\src\assets\Pictures\Login-page-imagr.jpg')"
                      >
                        {/* <Text>Lorem ipsum dolor sit</Text> */}
                      </Box>
                      <Box
                        className="minidivs"
                        sx={minidivCommomProperties}
                        // backgroundImage="url('E:\React\chakraUI\src\assets\Pictures\Login-page-imagr.jpg')"
                      ></Box>
                      <Box
                        className="minidivs"
                        sx={minidivCommomProperties}
                        // backgroundImage="url('E:\React\chakraUI\src\assets\Pictures\Login-page-imagr.jpg')"
                      ></Box>
                      <Box
                        className="minidivs"
                        sx={minidivCommomProperties}
                        // backgroundImage="url('E:\React\chakraUI\src\assets\Pictures\Login-page-imagr.jpg')"
                      ></Box>
                      <Box
                        className="minidivs"
                        sx={minidivCommomProperties}
                        // backgroundImage="url('E:\React\chakraUI\src\assets\Pictures\Login-page-imagr.jpg')"
                      ></Box>
                      <Box
                        className="minidivs"
                        sx={minidivCommomProperties}
                        // backgroundImage="url('E:\React\chakraUI\src\assets\Pictures\Login-page-imagr.jpg')"
                      ></Box>
                      <Box
                        className="minidivs"
                        sx={minidivCommomProperties}
                        // backgroundImage="url('E:\React\chakraUI\src\assets\Pictures\Login-page-imagr.jpg')"
                      ></Box>
                      <Box
                        className="minidivs"
                        sx={minidivCommomProperties}
                        // backgroundImage="url('E:\React\chakraUI\src\assets\Pictures\Login-page-imagr.jpg')"
                      ></Box>
                      <Box
                        className="minidivs"
                        sx={minidivCommomProperties}
                        // backgroundImage="url('E:\React\chakraUI\src\assets\Pictures\Login-page-imagr.jpg')"
                      ></Box>
                      <Box
                        className="minidivs"
                        sx={minidivCommomProperties}
                        // backgroundImage="url('E:\React\chakraUI\src\assets\Pictures\Login-page-imagr.jpg')"
                      ></Box>
                      <Box
                        className="minidivs"
                        sx={minidivCommomProperties}
                        // backgroundImage="url('E:\React\chakraUI\src\assets\Pictures\Login-page-imagr.jpg')"
                      ></Box>
                    </Box>

                    <Flex direction="row" color="white" paddingLeft="20px">
                      <CheckIcon
                        m="4px"
                        bgColor="#ff7565"
                        borderRadius="100px"
                      />
                      <Text fontWeight="bold">100+ Workouts For Any Goal</Text>
                    </Flex>
                    <Flex direction="row" color="white" paddingLeft="20px">
                      <CheckIcon
                        m="4px"
                        bgColor="#ff7565"
                        borderRadius="100px"
                      />
                      <Text fontWeight="bold">
                        Choose Over 10 Million Branded Foods
                      </Text>
                    </Flex>
                    <Flex direction="row" color="white" paddingLeft="20px">
                      <CheckIcon
                        m="4px"
                        bgColor="#ff7565"
                        borderRadius="100px"
                      />
                      <Text fontWeight="bold">
                        Wide Variety Of Delicious Recipes
                      </Text>
                    </Flex>
                    <Flex direction="row" color="white" paddingLeft="20px">
                      <CheckIcon
                        m="4px"
                        bgColor="#ff7565"
                        borderRadius="100px"
                      />
                      <Text fontWeight="bold">
                        Access To Our Exclusive Community
                      </Text>
                    </Flex>
                  </>
                )}
              </CardBody>
            </Card>

            <Card
              as="div"
              className="carddic"
              bgColor="black"
              border="3px solid"
              borderColor="#ff7565"
              borderRadius="30px"
              width="400px"
              onClick={handleExpandSecnd}
            >
              <CardBody padding="0px">
                <Flex
                  direction="row"
                  justifyItems="baseline"
                  paddingLeft="20px"
                  pt="15px"
                >
                  <HamburgerIcon
                    bgColor="#ff7565"
                    color="white"
                    m="5px"
                    width="20px"
                    height="18px"
                  />
                  <Heading size="md" color="white">
                    Annual
                  </Heading>
                </Flex>

                <Heading
                  size="small"
                  color="#8d9dbc"
                  mt="5px"
                  paddingLeft="20px"
                >
                  $9.99 USD/PER MONTH • BILLED ANNUALLY
                </Heading>
                <Text
                  color="#8d9dbc"
                  size="small"
                  mt="10px"
                  pl="20px"
                  pr="20px"
                >
                  At the end of your 30 day trial your subscription will
                  automatically rollover to a $119.99/year subscription billed
                  annually unless cancelled.
                </Text>

                <Flex
                  direction="row"
                  justifyItems="baseline"
                  mt="10px"
                  mb="20px"
                  paddingLeft="20px"
                >
                  <StarIcon
                    bgColor="#ff7565"
                    color="white"
                    m="5px"
                    width="20px"
                    height="18px"
                  />
                  <Heading size="small" color="white">
                    RECOMMENDED
                  </Heading>
                </Flex>

                {secndExpanded && (
                  <>
                    <Heading size="small" color="white" mt="15px" pl="20px">
                      All programmes Included
                    </Heading>

                    <Box
                      border="1px solid"
                      borderColor="white"
                      mt="20px"
                      mb="10px"
                      ml="20px"
                      mr="20px"
                    ></Box>

                    <Box
                      overflowY="auto"
                      whiteSpace="nowrap"
                      sx={{
                        "::-webkit-scrollbar": {
                          display: "none",
                        },
                      }}
                    >
                      <Box
                        className="minidivs"
                        sx={minidivCommomProperties}
                        // backgroundImage="url('E:\React\chakraUI\src\assets\Pictures\Login-page-imagr.jpg')"
                      >
                        {/* <Text>Lorem ipsum dolor sit</Text> */}
                      </Box>
                      <Box
                        className="minidivs"
                        sx={minidivCommomProperties}
                        // backgroundImage="url('E:\React\chakraUI\src\assets\Pictures\Login-page-imagr.jpg')"
                      ></Box>
                      <Box
                        className="minidivs"
                        sx={minidivCommomProperties}
                        // backgroundImage="url('E:\React\chakraUI\src\assets\Pictures\Login-page-imagr.jpg')"
                      ></Box>
                      <Box
                        className="minidivs"
                        sx={minidivCommomProperties}
                        // backgroundImage="url('E:\React\chakraUI\src\assets\Pictures\Login-page-imagr.jpg')"
                      ></Box>
                      <Box
                        className="minidivs"
                        sx={minidivCommomProperties}
                        // backgroundImage="url('E:\React\chakraUI\src\assets\Pictures\Login-page-imagr.jpg')"
                      ></Box>
                      <Box
                        className="minidivs"
                        sx={minidivCommomProperties}
                        // backgroundImage="url('E:\React\chakraUI\src\assets\Pictures\Login-page-imagr.jpg')"
                      ></Box>
                      <Box
                        className="minidivs"
                        sx={minidivCommomProperties}
                        // backgroundImage="url('E:\React\chakraUI\src\assets\Pictures\Login-page-imagr.jpg')"
                      ></Box>
                      <Box
                        className="minidivs"
                        sx={minidivCommomProperties}
                        // backgroundImage="url('E:\React\chakraUI\src\assets\Pictures\Login-page-imagr.jpg')"
                      ></Box>
                      <Box
                        className="minidivs"
                        sx={minidivCommomProperties}
                        // backgroundImage="url('E:\React\chakraUI\src\assets\Pictures\Login-page-imagr.jpg')"
                      ></Box>
                      <Box
                        className="minidivs"
                        sx={minidivCommomProperties}
                        // backgroundImage="url('E:\React\chakraUI\src\assets\Pictures\Login-page-imagr.jpg')"
                      ></Box>
                      <Box
                        className="minidivs"
                        sx={minidivCommomProperties}
                        // backgroundImage="url('E:\React\chakraUI\src\assets\Pictures\Login-page-imagr.jpg')"
                      ></Box>
                    </Box>

                    <Flex direction="row" color="white" paddingLeft="20px">
                      <CheckIcon
                        m="4px"
                        bgColor="#ff7565"
                        borderRadius="100px"
                      />
                      <Text fontWeight="bold">100+ Workouts For Any Goal</Text>
                    </Flex>
                    <Flex direction="row" color="white" paddingLeft="20px">
                      <CheckIcon
                        m="4px"
                        bgColor="#ff7565"
                        borderRadius="100px"
                      />
                      <Text fontWeight="bold">
                        Choose Over 10 Million Branded Foods
                      </Text>
                    </Flex>
                    <Flex direction="row" color="white" paddingLeft="20px">
                      <CheckIcon
                        m="4px"
                        bgColor="#ff7565"
                        borderRadius="100px"
                      />
                      <Text fontWeight="bold">
                        Wide Variety Of Delicious Recipes
                      </Text>
                    </Flex>
                    <Flex direction="row" color="white" paddingLeft="20px">
                      <CheckIcon
                        m="4px"
                        bgColor="#ff7565"
                        borderRadius="100px"
                      />
                      <Text fontWeight="bold">
                        Access To Our Exclusive Community
                      </Text>
                    </Flex>
                  </>
                )}
              </CardBody>
            </Card>

            <Heading color="white" mt="10px" ml="10px" pr="10px">
              Create Your Account
            </Heading>

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
