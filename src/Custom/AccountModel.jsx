function Model() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const finalRef = React.useRef(null);

  return (
    <>
      <Button mt={4} onClick={onOpen}>
        Open Modal
      </Button>
      <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <Flex alignItems="center" justifyContent="center">
          <ModalContent bgColor="black" color="white">
            <ModalHeader>My Account</ModalHeader>
            <ModalCloseButton />
            <ModalBody padding="50px">
              <Input
                bgColor="rgb(254 235 205)"
                placeholder="Email cannot be changed"
                marginBottom="20px"
                width="300px"
              />
              <Input
                bgColor="rgb(190 227 248)"
                placeholder="Change your password"
                marginBottom="20px"
                width="300px"
              />
              <Button
                bgColor="#ff7565"
                width="300px"
                _hover="#ff7565"
                padding="20px"
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

export default Model;
