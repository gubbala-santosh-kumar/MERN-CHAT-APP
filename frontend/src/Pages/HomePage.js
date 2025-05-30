import {
  Box,
  Container,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import React from "react";

import SignIn from '../components/Authentication/SignIn'
import SignUp from '../components/Authentication/SignUp'

function HomePage() {
  return (
    <Container maxW="xl" centerContent>
      <Box
        d="flex"
        justifyContent={"center"}
        bg={"black"}
        color={"White"}
        p={"10px"}
        borderRadius={"5px"}
        w={"100%"}
        textAlign={"center"}
        marginTop={"10px"}
        fontSize={"4xl"}
        fontFamily={"Work sans"}
      >
        <Text>Connecto</Text>
      </Box>
      <Box
        bg={"white"}
        w={"100%"}
        p={4}
        borderRadius={"5px"}
        marginTop={"10px"}
      >
        <Tabs variant="soft-rounded">
          <TabList d="flex" justifyContent={"between"}>
            <Tab w={"50%"}>Sign In</Tab>
            <Tab w={"50%"}>Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel><SignIn/></TabPanel>
            <TabPanel><SignUp/></TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
}

export default HomePage;
