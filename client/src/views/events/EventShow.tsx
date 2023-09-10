import { useEffect, useState } from "react";
import {
  Text,
  Image,
  Stack,
  Button,
  CardFooter,
  ButtonGroup,
  Divider,
  Flex,
  Heading,
  Card,
  CardBody,
  Skeleton,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";

type event = { title: String; location: String; date: String; content: String };

const EventShow = () => {
  const { eventId } = useParams();
  const [event, setEvent] = useState<event>();
  useEffect(() => {
    fetch("http://localhost:3001/events/" + eventId, { method: "GET" }).then(
      async (res) => {
        setEvent(await res.json());
      }
    );
  }, []);

  if (!event) {
    <Skeleton></Skeleton>;
  }

  return (
    <>
      <Flex justify="center">
        <Card maxW="sm">
          <CardBody>
            <Image
              src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              alt="event"
              borderRadius="lg"
            />
            <Stack mt="6" spacing="3">
              <Heading size="md">{event?.title}</Heading>
              <Text color="blue.600" fontSize="2xl">
                📍 {event?.location}
              </Text>
              <Text color="blue.600" fontSize="2xl">
                {event?.date}
              </Text>
              <Text color="blue.600" fontSize="2xl">
                {event?.content}
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <ButtonGroup spacing="2">
              <Button variant="ghost" colorScheme="blue">
                Claim Ticket
              </Button>
            </ButtonGroup>
          </CardFooter>
        </Card>
      </Flex>
    </>
  );
};

export { EventShow };
