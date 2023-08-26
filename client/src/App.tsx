import { useEffect, useState } from "react";
import { Card, CardBody } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";
import {
  Text,
  Image,
  Stack,
  Button,
  CardFooter,
  ButtonGroup,
  Divider,
} from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react";
type event = { title: String; location: String };

function App() {
  const [events, setEvents] = useState<event[]>([]);
  useEffect(() => {
    fetch("http://localhost:3001/events", { method: "GET" }).then(
      async (res) => {
        setEvents(await res.json());
      }
    );
  }, []);

  return (
    <>
      <Heading as="h3" size="lg">
        Eventos:
      </Heading>
      {events.map((event) => {
        return (
          <Flex direction={"row"}>
            <Card maxW="sm">
              <CardBody>
                <Image
                  src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                  alt="event"
                  borderRadius="lg"
                />
                <Stack mt="6" spacing="3">
                  <Heading size="md">{event.title}</Heading>
                  <Text>My Event.</Text>
                  <Text color="blue.600" fontSize="2xl">
                    📍 {event.location}
                  </Text>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter>
                <ButtonGroup spacing="2">
                  <Button variant="solid" colorScheme="blue">
                    Check
                  </Button>
                  <Button variant="ghost" colorScheme="blue">
                    Claim Ticket
                  </Button>
                </ButtonGroup>
              </CardFooter>
            </Card>
          </Flex>
        );
      })}
    </>
  );
}

export default App;
