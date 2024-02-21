import React from "react";
import { useState } from "react";

import { useDisclosure } from "@chakra-ui/react";
import {
  Modal,
  ModalBody,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  Flex,
  Button,
  Input,
  ModalCloseButton,
  Radio,
  RadioGroup,
  Stack,
} from "@chakra-ui/react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ProfileModel() {
  const [Cm, setCm] = useState(false);
  const [feet, setFeet] = useState(true);
  const [value, setValue] = React.useState("1");
  const [age, SetAge] = useState(null);
  const [weight, SetWeight] = useState(null);
  const [height, SetHeight] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const finalRef = React.useRef(null);

  const handleChangesBtn = () => {
    onClose();
    toast.success("Changes Saved Successfully");
  };
  const showCmInput = () => {
    setFeet(false);
    setCm(true);
  };
  const showFeetInput = () => {
    setFeet(true);
    setCm(false);
  };

  const handleAge = (e) => {
    // console.log(age);
    SetAge(e.target.value);
  };
  const handleWeight = (e) => {
    SetWeight(e.target.value);
  };
  const handleHeight = (e) => {
    SetHeight(e.target.value);
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
        <Flex alignItems="center" justifyContent="center">
          <ModalContent
            bgColor="black"
            color="white"
            border="2px solid"
            borderRadius="30px"
            borderColor="white"
          >
            <ModalHeader>My Profile</ModalHeader>
            <ModalCloseButton />
            <ModalBody padding="50px">
              <Input
                bgColor="rgb(22 22 38/var(--tw-bg-opacity))"
                type="number"
                placeholder="Age"
                padding="25px"
                marginBottom="20px"
                width="350px"
                onChange={handleAge}
              />
              <Input
                bgColor="rgb(22 22 38/var(--tw-bg-opacity))"
                type="number"
                placeholder="Weight"
                padding="25px"
                marginBottom="20px"
                width="350px"
                onChange={handleWeight}
              />

              <Flex direction="row">
                {Cm && (
                  <>
                    <Input
                      bgColor="rgb(22 22 38/var(--tw-bg-opacity))"
                      placeholder="Height"
                      marginBottom="20px"
                      width="350px"
                      padding="25px"
                      onChange={handleHeight}
                    />
                  </>
                )}

                {feet && (
                  <>
                    <Input
                      bgColor="rgb(22 22 38/var(--tw-bg-opacity))"
                      placeholder="Feet"
                      marginBottom="20px"
                      width="175px"
                      padding="25px"
                      onChange={handleHeight}
                    />
                    <Input
                      bgColor="rgb(22 22 38/var(--tw-bg-opacity))"
                      placeholder="Inches"
                      marginBottom="20px"
                      width="175px"
                      padding="25px"
                      onChange={handleHeight}
                    />
                  </>
                )}
                <Button
                  onClick={showFeetInput}
                  padding="25px"
                  mr="5px"
                  ml="5px"
                  bgColor="#ff7565"
                  _hover="#ff7565"
                >
                  Feet
                </Button>
                <Button
                  onClick={showCmInput}
                  padding="25px"
                  bgColor="#ff7565"
                  _hover="#ff7565"
                >
                  Cm
                </Button>
              </Flex>

              <RadioGroup onChange={setValue} value={value}>
                <Stack direction="column">
                  <Radio value="1">Loss weight</Radio>
                  <Radio value="2">Maintain weight</Radio>
                  <Radio value="3">Gain Weight</Radio>
                  <Radio value="4">Just Exploring</Radio>
                </Stack>
              </RadioGroup>

              <Button
                bgColor="#ff7565"
                width="350px"
                _hover="#ff7565"
                padding="25px"
                m="5px"
                mt="20px"
                onClick={handleChangesBtn}
              >
                Confirm Changes
              </Button>
            </ModalBody>
          </ModalContent>
        </Flex>
      </Modal>
    </>
  );
}

export default ProfileModel;
