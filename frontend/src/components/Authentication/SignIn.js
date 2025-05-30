import {
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";

const SignIn = () => {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();


  const submitHandler = () => {};

  return (
    <VStack spacing="5px">

      <FormControl id="email" isRequired>
        <FormLabel>Email</FormLabel>
        <Input
          placeholder="Enter Your Email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormControl>

      <FormControl id="password" isRequired>
        <FormLabel>Password</FormLabel>
        <InputGroup>
          <Input
            type={show ? "text" : "password"}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={() => setShow(!show)}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>

      <Button
        w={"100%"}
        colorScheme={"blue"}
        style={{ marginTop: 15 }}
        onClick={submitHandler}
      >
        Sign In 
      </Button>

      <Button
      variant={'solid'}
      colorScheme="red"
      w={'100%'}
      onClick={()=>{
        setEmail('guest@gmail.com');
        setPassword('123456');
      }}
      >
        Sign In as Guest
      </Button>
    </VStack>
  );
};

export default SignIn;
