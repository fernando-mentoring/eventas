import {
  Flex,
  Circle,
  Box,
  Image,
  Badge,
  useColorModeValue,
  Button,
} from "@chakra-ui/react";

const data = {
  isNew: true,
};

interface CardProps {
  title: String;
  location: String;
  eventId: String;
  checkEvent: Function;
}

const EventCard = ({ title, location, checkEvent, eventId }: CardProps) => {
  return (
    <Flex p={5} alignItems="center" justifyContent="center">
      <Box
        bg={useColorModeValue("white", "gray.800")}
        maxW="md"
        borderWidth="1px"
        rounded="lg"
        shadow="lg"
        position="relative"
      >
        <Circle
          size="10px"
          position="absolute"
          top={2}
          right={2}
          bg="red.200"
        />

        <Image
          src={
            "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
          }
          alt={`Picture of ${"name"}`}
          roundedTop="lg"
        />

        <Box p="5">
          <Box display="flex" alignItems="baseline">
            {data.isNew && (
              <Badge rounded="full" px="2" fontSize="0.8em" colorScheme="red">
                New
              </Badge>
            )}
          </Box>
          <Flex mt="1" justifyContent="space-between" alignContent="center">
            <Box
              fontSize="2xl"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              isTruncated
            >
              {title}
            </Box>
          </Flex>
          <Flex justifyContent="space-between" alignContent="center">
            <Box fontSize="2xl" color={useColorModeValue("gray.800", "white")}>
              <Box as="span" color={"gray.600"} fontSize="lg">
                📍
              </Box>
              {location}
            </Box>
            <Button
              as={"a"}
              display={{ base: "none", md: "flex" }}
              fontSize={"sm"}
              fontWeight={400}
              color={"white"}
              bg={"pink.400"}
              _hover={{
                bg: "pink.300",
              }}
              onClick={() => checkEvent(eventId)}
              cursor="pointer"
            >
              Details
            </Button>
          </Flex>
        </Box>
      </Box>
    </Flex>
  );
};

export { EventCard };
