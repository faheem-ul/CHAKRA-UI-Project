import React from "react";

import { useNavigate } from "react-router-dom";
import { Heading, Text, Flex, Button, Box } from "@chakra-ui/react";

import "./Home.css";

function Home() {
  const navigate = useNavigate();

  const handleHomeLoginbtn = () => {
    navigate("/login");
  };
  return (
    <Box className="mainsection">
      <Box width="1400px">
        <Flex justifyContent="end" gap="30px" justify="baseline">
          <Button
            mt="50px"
            color="#ffffff"
            colorScheme="white"
            _hover="#ff7565"
          >
            Support
          </Button>
          <Button
            mt="50px"
            size="lg"
            width="170px"
            padding="20px"
            borderRadius="10px"
            color="White"
            backgroundColor="#ff7565"
            _hover="#ff7565"
            onClick={handleHomeLoginbtn}
          >
            Login
          </Button>
        </Flex>
      </Box>
      <Flex
        direction="column"
        justifyContent="center"
        alignItems="center"
        height="80vh"
      >
        <Heading
          color="#ffffff"
          textShadow="20px 20px 25px #fff"
          fontSize="100px"
        >
          Fitness For
        </Heading>
        <Heading
          color="#ffffff"
          textShadow="20px 20px 25px #fff"
          fontSize="100px"
        >
          The Culture
        </Heading>
        <Text
          color="#ffffff"
          textShadow="3px 3px 3px rgba(1, 1, 1, 0.5)"
          fontWeight="400"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A, ipsa.
        </Text>
        <Button
          mt="20px"
          type="submit"
          size="lg"
          width="400px"
          padding="25px"
          borderRadius="10px"
          color="White"
          backgroundColor="#ff7565"
          _hover="#ff7565"
        >
          Claim One Month Free Trial Today
        </Button>
      </Flex>
    </Box>
  );
}

export default Home;
