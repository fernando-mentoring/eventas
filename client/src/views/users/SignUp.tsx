import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";

type Inputs = {
  name: String;
  email: String;
  password: String;
};

const SignUp = () => {
  const { register, handleSubmit } = useForm<Inputs>();
  const toast = useToast();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const serverSideApi = axios.create({
      baseURL: "http://localhost:3001",
    });
    try {
      const response = await serverSideApi.post("/users", data);
      if (response.status == 200) {
        toast({
          title: "User created.",
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

  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  function signIn() {
    navigate("/users/login");
  }

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("red.100", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"} textAlign={"center"}>
            Sign up
          </Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            Ready to have some fun? ✨
          </Text>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl>
              <Stack spacing={4}>
                <FormControl id="firstName" isRequired>
                  <FormLabel htmlFor="name">Name</FormLabel>
                  <Input
                    placeholder="Davy Jones"
                    type="text"
                    id="name"
                    size={"sm"}
                    {...register("name")}
                  />
                </FormControl>
                <FormControl id="email" isRequired>
                  <FormLabel htmlFor="email">E-mail</FormLabel>
                  <Input
                    placeholder="ddjones@pirate.com"
                    type="email"
                    id="email"
                    size={"sm"}
                    {...register("email")}
                  ></Input>
                </FormControl>
                <FormControl id="password" isRequired>
                  <FormLabel>Password</FormLabel>
                  <InputGroup>
                    <Input
                      type={showPassword ? "text" : "password"}
                      id="password"
                      {...register("password")}
                    />
                    <InputRightElement h={"full"}>
                      <Button
                        variant={"ghost"}
                        onClick={() =>
                          setShowPassword((showPassword) => !showPassword)
                        }
                      >
                        {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                </FormControl>
                <Stack spacing={10} pt={2}>
                  <Button
                    loadingText="Submitting"
                    size="lg"
                    bg={"blue.400"}
                    color={"white"}
                    _hover={{
                      bg: "blue.500",
                    }}
                    type="submit"
                  >
                    Sign Up
                  </Button>
                </Stack>
                <Stack pt={6}>
                  <Text align={"center"}>
                    Already a user?{" "}
                    <Link color={"blue.400"} onClick={signIn}>
                      Sign In
                    </Link>
                  </Text>
                </Stack>
              </Stack>
            </FormControl>
          </form>
        </Box>
      </Stack>
    </Flex>
  );
};

export { SignUp };
