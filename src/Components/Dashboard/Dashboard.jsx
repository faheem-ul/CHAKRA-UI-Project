import React, { useState } from "react";

import {
  Heading,
  Text,
  Box,
  Button,
  Flex,
  Icon,
  Image,
  Input,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSlack } from "@fortawesome/free-brands-svg-icons";
import { faCamera } from "@fortawesome/free-solid-svg-icons";

import Model from "../../Custom/AccountModel";
import PlanModel from "../../Custom/PlanModel";
import ProfileModel from "../../Custom/ProfileModel";
import PaymentModel from "../../Custom/PaymentModel";
import iosSvg from "../../assets/SVGs/Ios.svg";
import anroidSvg from "../../assets/SVGs/Android.svg";
import "./Dashboard.css";
import CameraIcon from "../../assets/Pictures/dashboardAddImage.webp";
import { wrap } from "framer-motion";

function Dashboard() {
  const navigate = useNavigate();
  const [age, setAge] = useState(null);

  const handleLogout = () => {
    navigate("/");
    console.log(age);
  };
  return (
    <Box bgColor="#000000">
      <Flex padding="50px" justifyContent="space-between" mr="100px" ml="100px">
        <Icon
          as={FontAwesomeIcon}
          icon={faSlack}
          color="#ff7565"
          fontSize="50px"
          cursor="pointer"
          onClick={() => {
            navigate("/");
          }}
        />
        <Button
          color="#ffffff"
          colorScheme="white"
          _hover="#ff7565"
          fontSize="20px"
          onClick={handleLogout}
        >
          Logout
        </Button>
      </Flex>

      <Flex justifyContent="center" mb="30px" position="relative">
        <img
          src={CameraIcon}
          alt="cameraicon image"
          style={{ position: "absolute" }}
        />
        <Input
          type="file"
          padding="50px"
          className="addimage"
          width="40px"
          opacity="0"
        ></Input>
      </Flex>

      <Flex direction="column" alignItems="center">
        <Text color="#1e2534" size="20px" fontWeight="600px">
          Welcome Trial
        </Text>
        <Text color="#8d9dbc" width="400px" mt="20px">
          Download the app below and login in with the same creditentials you
          just used to create your account
        </Text>

        <Flex mt="30px">
          <Image src={iosSvg} alt="this is ios svg" margin="10px" />
          <Image src={anroidSvg} alt="this is android svg" margin="10px" />
        </Flex>
      </Flex>

      <Flex
        justifyContent="center"
        gap="50px"
        mt="50px"
        flexWrap={["nowrap", "wrap", "wrap"]}
      >
        <Box width="400px">
          <Flex direction="row" mb="20px" gap="100px" justifyItems="baseline">
            <Heading color="white">My Account</Heading>
            <Model />
          </Flex>
          <Flex
            direction="column"
            bgColor="#161626"
            padding="20px"
            pt="0px"
            pb="0px"
            borderRadius="20px"
          >
            <Flex padding="20px">
              <Text color="white">Email</Text>
              <Text color="white"></Text>
            </Flex>
            <Box border="1px solid" borderColor=" #ccc"></Box>
            <Flex padding="20px">
              <Text color="white">Password</Text>
              <Text color="white"></Text>
            </Flex>
          </Flex>
        </Box>

        <Box width="400px">
          <Flex direction="row" mb="20px" gap="150px" justifyItems="baseline">
            <Heading color="white">My Plan</Heading>
            <PlanModel />
          </Flex>

          <Flex
            padding="20px"
            pt="10px"
            pb="10px"
            bgColor="#161626"
            borderRadius="20px"
          >
            <Text color="white">
              12 Month • Best deal Term expires March 5, 2024
            </Text>
            <Text color="white"></Text>
          </Flex>
        </Box>
      </Flex>

      <Flex
        justifyContent="center"
        gap="50px"
        mt="50px"
        flexWrap={["nowrap", "wrap", "wrap"]}
      >
        <Box width="400px" mb="40px">
          <Flex direction="row" mb="20px" gap="100px" justifyItems="baseline">
            <Heading color="white">My Profile</Heading>
            <ProfileModel />
          </Flex>
          <Flex
            direction="column"
            bgColor="#161626"
            padding="20px"
            pt="0px"
            pb="0px"
            borderRadius="20px"
          >
            <Flex padding="20px" justifyContent="space-between">
              <Text color="white">Age</Text>
              <Text color="white"></Text>
            </Flex>
            <Box border="1px solid" borderColor=" #ccc"></Box>
            <Flex padding="20px" justifyContent="space-between">
              <Text color="white">Weight</Text>
              <Text color="white"></Text>
            </Flex>
            <Box border="1px solid" borderColor=" #ccc"></Box>
            <Flex padding="20px" justifyContent="space-between">
              <Text color="white">Height</Text>
              <Text color="white">fff</Text>
            </Flex>
            <Box border="1px solid" borderColor=" #ccc"></Box>
            <Flex padding="20px" justifyContent="space-between">
              <Text color="white">Goal</Text>
              <Text color="white"></Text>
            </Flex>
          </Flex>
        </Box>
        <Box width="400px" mb="40px">
          <Flex direction="row" mb="20px" gap="100px" justifyItems="baseline">
            <Heading color="white">Payment</Heading>
            <PaymentModel />
          </Flex>
          <Flex
            direction="column"
            bgColor="#161626"
            padding="20px"
            pt="0px"
            pb="0px"
            borderRadius="20px"
          >
            <Flex padding="20px">
              <Text color="white">Payment Method</Text>
              <Text color="white"></Text>
            </Flex>
            <Box border="1px solid" borderColor=" #ccc"></Box>
            <Flex padding="20px">
              <Text color="white">Card Number</Text>
              <Text color="white"></Text>
            </Flex>
            <Box border="1px solid" borderColor=" #ccc"></Box>
            <Flex padding="20px">
              <Text color="white">Expiry Date</Text>
              <Text color="white"></Text>
            </Flex>
            <Box border="1px solid" borderColor=" #ccc"></Box>
            <Flex padding="20px">
              <Text color="white">Email</Text>
              <Text color="white"></Text>
            </Flex>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}

export default Dashboard;
