import { Avatar, Box, Flex, Text, List } from "@chakra-ui/react";
import { HiCash, HiHome } from "react-icons/hi";
import { useSession } from "next-auth/react";
import { BrandLogo } from "~/components/BrandLogo";
import { NavLink } from "~/components/NavLink";
import { useRouter } from "next/router";

export function Sidebar() {
  const { data: session } = useSession();
  const router = useRouter();

  const navLinks = [
    {
      name: "Dashboard",
      link: "/app/dashboard",
      icon: HiHome,
      isActive: router.pathname === "/app/dashboard",
    },
    {
      name: "Family",
      link: "/app/family",
      icon: HiCash,
      isActive: router.pathname === "/app/family",
    },
  ];

  return (
    <Flex
      direction="column"
      justifyContent="space-between"
      w="16rem"
      h="100vh"
      // bgColor="#f1f5f9"
      position="fixed"
      p="1rem"
      borderRight="1px solid #94a3b8"
    >
      <Box>
        <BrandLogo width="40" />

        <Box mt={20}>
          <List>
            {navLinks.map((i) => {
              return (
                <NavLink
                  key={i.name}
                  name={i.name}
                  icon={i.icon}
                  link={i.link}
                  isActive={i.isActive}
                />
              );
            })}
          </List>
        </Box>
      </Box>

      <Box>
        <Flex alignItems="center">
          <Avatar mr="1rem" src={session?.user?.image} size="sm" />
          <Text>{session?.user?.name}</Text>
        </Flex>
      </Box>
    </Flex>
  );
}
