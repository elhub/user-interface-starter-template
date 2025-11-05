import { Outlet } from "react-router-dom";
import { Flex } from "@chakra-ui/react";
import Header from "@/components/header";

const RootLayout = () => {
  return (
    <>
      <Header />
      <Flex flexDir="column" align="center" gap="8" mx="auto" minH="calc(100vh - 48px)">
        <Outlet />
      </Flex>
    </>
  );
};

export default RootLayout;
