import React from "react";

import { Heading, Text, Box, Button, Flex, Icon } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSlack } from "@fortawesome/free-brands-svg-icons";

function Dashboard() {
  return (
    <Box bgColor="#000000" height="100vh" width="100vw">
      <Flex padding="50px" justifyContent="space-between" mr="100px" ml="100px">
        <Icon
          as={FontAwesomeIcon}
          icon={faSlack}
          color="#ff7565"
          fontSize="50px"
          //   padding="50px"
        />
        <Button
          color="#ffffff"
          colorScheme="white"
          _hover="#ff7565"
          fontSize="20px"
          //   padding="50px"
        >
          Logout
        </Button>
      </Flex>

      {/* make the input field to add the file in it */}

      <Flex>
        <Text color="#1e2534" size="20px" fontWeight="600px">
          Welcome Trial
        </Text>
        <Text
          color="white
        "
        >
          Download the app below and login in with the same creditentials you
          just used to create your account
        </Text>
      </Flex>
    </Box>
  );
}

export default Dashboard;
