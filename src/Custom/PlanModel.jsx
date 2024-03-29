import React from "react";
import { useState } from "react";

// import { Heading } from "@chakra-ui/react";
import {
  Modal,
  ModalBody,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  Flex,
  Button,
  Text,
  ModalCloseButton,
  Card,
  CardBody,
  useDisclosure,
  Box,
} from "@chakra-ui/react";

import { HamburgerIcon, StarIcon, CheckIcon } from "@chakra-ui/icons";
import { Heading } from "@chakra-ui/react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function PlanModel() {
  const [expanded, setExpanded] = useState(false);
  const [secndExpanded, setSecndExpanded] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const finalRef = React.useRef(null);

  const handleCancelSubscription = () => {
    onClose();
    toast.error("Subscription Cancelled");
  };

  const handleExpand = () => {
    setExpanded(true);
    setSecndExpanded(false);
  };

  const handleExpandSecnd = () => {
    setSecndExpanded(true);
    setExpanded(false);
  };

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

  return (
    <>
      <Button
        // mt={4}
        onClick={onOpen}
        bgColor="#000000;"
        color="#ff7565"
        fontSize="16px"
        _hover="#ff7565"
      >
        Edit
      </Button>
      <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />

        <ModalContent
          bgColor="black"
          color="white"
          border="2px solid"
          borderRadius="30px"
          borderColor="white"
        >
          <ModalHeader>My Account</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Card
              bgColor="rgb(255 255 255/var(--tw-text-opacity))"
              border="3px solid"
              borderColor="#ff7565"
              borderRadius="30px"
              width="400px"
              marginBottom="10px"
              padding="0px"
              cursor="pointer"
              onClick={handleExpand}
            >
              <CardBody>
                <Flex direction="row" justifyItems="baseline">
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

                <Heading size="small" color="#8d9dbc" mt="5px">
                  $9.99 USD/PER MONTH • BILLED ANNUALLY
                </Heading>
                <Text color="#8d9dbc" size="small" mt="10px">
                  At the end of your 30 day trial your subscription will
                  automatically rollover to a $119.99/year subscription billed
                  annually unless cancelled.
                </Text>

                <Flex
                  direction="row"
                  justifyItems="baseline"
                  mt="10px"
                  mb="20px"
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
                    <Heading size="small" color="white" mt="15px">
                      All programmes Included
                    </Heading>

                    <Box
                      border="1px solid"
                      borderColor="white"
                      mt="20px"
                      mb="10px"
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

                    <Flex direction="row" color="white">
                      <CheckIcon
                        m="4px"
                        bgColor="#ff7565"
                        borderRadius="100px"
                      />
                      <Text fontWeight="bold">100+ Workouts For Any Goal</Text>
                    </Flex>
                    <Flex direction="row" color="white">
                      <CheckIcon
                        m="4px"
                        bgColor="#ff7565"
                        borderRadius="100px"
                      />
                      <Text fontWeight="bold">
                        Choose Over 10 Million Branded Foods
                      </Text>
                    </Flex>
                    <Flex direction="row" color="white">
                      <CheckIcon
                        m="4px"
                        bgColor="#ff7565"
                        borderRadius="100px"
                      />
                      <Text fontWeight="bold">
                        Wide Variety Of Delicious Recipes
                      </Text>
                    </Flex>
                    <Flex direction="row" color="white">
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
              bgColor="black"
              border="3px solid"
              borderColor="#ff7565"
              borderRadius="30px"
              width="400px"
              onClick={handleExpandSecnd}
              cursor="pointer"
            >
              <CardBody>
                <Flex direction="row" justifyItems="baseline">
                  <HamburgerIcon
                    bgColor="#ff7565"
                    color="white"
                    m="5px"
                    width="20px"
                    height="18px"
                  />
                  <Heading size="md" color="white">
                    Monthly
                  </Heading>
                </Flex>

                <Heading size="small" color="#8d9dbc" mt="5px">
                  $19.99 USD/PER MONTH • BILLED ANNUALLY
                </Heading>
                <Text color="#8d9dbc" size="small" mt="10px">
                  At the end of your 30 day trial your subscription will
                  automatically rollover to a $119.99/year subscription billed
                  annually unless cancelled.
                </Text>

                <Flex
                  direction="row"
                  justifyItems="baseline"
                  mt="10px"
                  mb="20px"
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
                    <Heading size="small" color="white" mt="15px">
                      All programmes Included
                    </Heading>
                    <Box
                      border="1px solid"
                      borderColor="white"
                      mt="20px"
                      mb="10px"
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

                    <Flex direction="row" color="white">
                      <CheckIcon
                        m="4px"
                        bgColor="#ff7565"
                        borderRadius="100px"
                      />
                      <Text fontWeight="bold">100+ Workouts For Any Goal</Text>
                    </Flex>
                    <Flex direction="row" color="white">
                      <CheckIcon
                        m="4px"
                        bgColor="#ff7565"
                        borderRadius="100px"
                      />
                      <Text fontWeight="bold">
                        Choose Over 10 Million Branded Foods
                      </Text>
                    </Flex>
                    <Flex direction="row" color="white">
                      <CheckIcon
                        m="4px"
                        bgColor="#ff7565"
                        borderRadius="100px"
                      />
                      <Text fontWeight="bold">
                        Wide Variety Of Delicious Recipes
                      </Text>
                    </Flex>
                    <Flex direction="row" color="white">
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
            <Text
              color="white"
              cursor="pointer"
              m="20px"
              onClick={handleCancelSubscription}
            >
              Cancel the subscription
            </Text>
          </ModalBody>
        </ModalContent>
      </Modal>
      {/* <ToastContainer /> */}
    </>
  );
}

export default PlanModel;
