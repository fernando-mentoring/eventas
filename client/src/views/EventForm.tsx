import {
  Stack,
  Box,
  Input,
  Button,
  useToast,
  Textarea,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";
import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";

type Inputs = {
  title: String;
  location: String;
  date: String;
  content: String;
  eventOwnerId: String;
};

const EventForm = () => {
  const { register, handleSubmit } = useForm<Inputs>();
  const toast = useToast();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const serverSideApi = axios.create({
      baseURL: "http://localhost:3001",
    });
    try {
      const response = await serverSideApi.post("/events", data);
      if (response.status == 200) {
        toast({
          title: "Event created.",
          description: "You've created your event. :D",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      }
    } catch (e) {
      toast({
        title: "Error in event creation. Please, try again.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Box justifyContent="center">
      <Box display="flex">
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl>
            <Stack spacing={3}>
              <FormLabel htmlFor="title">Title</FormLabel>
              <Input
                placeholder="My Party"
                type="text"
                id="title"
                size={"sm"}
                {...register("title")}
              ></Input>
              <FormLabel htmlFor="location">Location</FormLabel>
              <Input
                placeholder="Campinas, SP"
                type="text"
                id="location"
                size={"sm"}
                {...register("location")}
              ></Input>
              <FormLabel htmlFor="date">Date</FormLabel>
              <Input
                type="date"
                size={"sm"}
                id="date"
                {...register("date")}
              ></Input>
              <FormLabel htmlFor="content">Details</FormLabel>
              <Textarea
                placeholder="Details..."
                id="content"
                {...register("content")}
              ></Textarea>
              <Input
                defaultValue="0b1efcc3-3ffe-4d5e-9da6-7da55c42856a"
                {...register("eventOwnerId")}
              ></Input>
            </Stack>
            <Button type="submit" mt={4} colorScheme="red">
              Create Event
            </Button>
          </FormControl>
        </form>
      </Box>
    </Box>
  );
};

export { EventForm };
