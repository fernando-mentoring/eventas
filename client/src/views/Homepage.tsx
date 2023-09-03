import { useEffect, useState } from "react";
import { Container, Box, Flex, Heading } from "@chakra-ui/react";

import { useNavigate } from "react-router-dom";
import { EventCard } from "../components/card";

type event = { title: String; location: String; id: String };

const Homepage = () => {
  const navigate = useNavigate();

  function checkEvent(eventId: String) {
    navigate("/events/" + eventId);
  }

  const [events, setEvents] = useState<event[]>([]);
  useEffect(() => {
    fetch("http://localhost:3001/events", { method: "GET" }).then(
      async (res) => {
        setEvents(await res.json());
      }
    );
  }, []);

  {
    return (
      <>
        <Flex justify="center" align={"center"} flexDirection={"row"}>
          <Box>
            <Heading
              fontSize={{ base: "2xl", sm: "4xl" }}
              fontWeight={"bold"}
              textAlign={"center"}
            >
              Close to You! 🚩
            </Heading>
            <Container maxW={"10xl"}>
              <Flex flexWrap={"wrap"} justify={"center"}>
                {events.map((event) => {
                  return (
                    <EventCard
                      title={event.title}
                      location={event.location}
                      eventId={event.id}
                      checkEvent={checkEvent}
                    ></EventCard>
                  );
                })}
              </Flex>
            </Container>
          </Box>
        </Flex>
      </>
    );
  }
};
export { Homepage };
