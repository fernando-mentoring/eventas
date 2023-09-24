import {
  Button,
  Checkbox,
  Flex,
  Text,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Image,
  useToast,
} from "@chakra-ui/react";
import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";

type Inputs = {
  email: String;
  password: String;
};

const SignIn = () => {
  const { register, handleSubmit } = useForm<Inputs>();
  const toast = useToast();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const serverSideApi = axios.create({
      baseURL: "http://localhost:3001",
    });
    try {
      const response = await serverSideApi.post("/users/auth", data);
      if (response.status == 200) {
        toast({
          title: "Login.",
          description: "Welcome to Eventas! 🎉",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      }
    } catch (e) {
      toast({
        title: "Error! Please, try again.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };
  return (
    <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
      <Flex p={8} flex={1} align={"center"} justify={"center"}>
        <Stack spacing={4} w={"full"} maxW={"md"}>
          <Heading fontSize={"4xl"} textAlign={"center"}>
            Sign in to your account
          </Heading>
          <Text fontSize={"lg"} color={"gray.600"} textAlign={"center"}>
            Good to see you again! 🎈
          </Text>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl id="email">
              <FormLabel htmlFor="email">Email Address</FormLabel>
              <Input type="email" id="email" {...register("email")} />
            </FormControl>
            <FormControl id="password">
              <FormLabel htmlFor="password">Password</FormLabel>
              <Input type="password" id="password" {...register("password")} />
            </FormControl>

            <Stack spacing={6}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              >
                <Checkbox>Remember me</Checkbox>
                <Text color={"blue.500"}>Forgot password?</Text>
              </Stack>
              <Button colorScheme={"blue"} variant={"solid"} type="submit">
                Sign In
              </Button>
            </Stack>
          </form>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={"Login Image"}
          objectFit={"cover"}
          src={
            "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
          }
        />
      </Flex>
    </Stack>
  );
};

export { SignIn };
