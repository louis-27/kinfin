import { Box, Flex } from "@chakra-ui/react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { Sidebar } from "~/components/Sidebar";

export function AppLayout({ children }: { children: any }) {
  const router = useRouter();
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      router.push("/auth/login");
    },
  });

  return (
    <>
      <Flex width="100vw" height="100vh">
        <Sidebar />
        <Box ml="16rem">{children}</Box>
      </Flex>
    </>
  );
}
