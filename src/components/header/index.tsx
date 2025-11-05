import { Flex, Link } from "@chakra-ui/react";

const Header = () => {
  return (
    <Flex bg="blue.100" gap="16" justify="center" py="2">
      <Link href="/" bg="white" py="1" px="2">
        Home
      </Link>
      <Link href="/page" bg="white" py="1" px="2">
        Metering Volumes Page
      </Link>
    </Flex>
  );
};

export default Header;
