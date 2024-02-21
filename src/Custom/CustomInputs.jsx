import React from "react";
import { Input } from "@chakra-ui/react";

function CustomInputs({ ...props }) {
  return (
    <div>
      <Input
        padding="30px"
        // placeholder={placeholder}
        size="lg"
        border="none"
        color="rgb(152 167 195)"
        bgColor="rgb(22 22 38)"
        width={["400px", "320px"]}
        borderRadius="20px"
        textColor="#ffffff"
        fontWeight="400"
        {...props}
      />
    </div>
  );
}

export default CustomInputs;
