import {
  Flex,
  Container,
  Heading,
  Stack,
  Text,
  Button,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { Illustration } from "~/components/landing/Illustration";

export default function Home() {
  const router = useRouter();

  return (
    <Container maxW={"5xl"}>
      <Stack
        textAlign={"center"}
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
      >
        <Heading
          fontWeight={600}
          fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }}
          lineHeight={"110%"}
        >
          Monitoring finances{" "}
          <Text as={"span"} color={"#1d4ed8"}>
            made easy
          </Text>
        </Heading>
        <Text color={"gray.500"} maxW={"3xl"}>
          Keep track of your spendings and receive smart updates.
        </Text>
        <Stack spacing={6} direction={"row"}>
          <Button
            rounded={"full"}
            px={10}
            py={6}
            colorScheme={"orange"}
            bg={"#1d4ed8"}
            _hover={{ bg: "blue.800" }}
            onClick={() => router.push("/auth/login")}
          >
            Get started
          </Button>
        </Stack>
        <Flex w={"full"}>
          <Illustration
            height={{ sm: "24rem", lg: "28rem" }}
            mt={{ base: 12, sm: 16 }}
          />
        </Flex>
      </Stack>
    </Container>
  );
}
