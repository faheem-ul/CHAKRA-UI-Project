import React from "react";
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
} from "@chakra-ui/react";

function PaymentModel() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const finalRef = React.useRef(null);

  const handleChangesBtn = () => {
    onClose();
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
            <ModalHeader>My Payment Method</ModalHeader>
            <ModalCloseButton />
            <ModalBody padding="50px">
              <Input
                placeholder="123 1234 1234"
                padding="25px"
                marginBottom="20px"
                width="350px"
                borderRadius="15px"
                borderColor="white"
              />
              <Flex direction="row">
                <Input
                  bgColor="rgb(22 22 38/var(--tw-bg-opacity))"
                  type="date"
                  placeholder="MM/DD"
                  marginBottom="20px"
                  width="150px"
                  mr="10px"
                  padding="25px"
                  borderColor="white"
                />
                <Input
                  bgColor="rgb(22 22 38/var(--tw-bg-opacity))"
                  type="text"
                  placeholder="CVC"
                  marginBottom="20px"
                  width="150px"
                  padding="25px"
                  borderColor="white"
                />
              </Flex>

              <Button
                bgColor="#ff7565"
                width="350px"
                _hover="#ff7565"
                padding="25px"
                onClick={handleChangesBtn}
              >
                Save
              </Button>
            </ModalBody>
          </ModalContent>
        </Flex>
      </Modal>
    </>
  );
}

export default PaymentModel;
