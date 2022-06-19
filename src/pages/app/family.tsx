import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";
import { Box, Heading, List, ListItem } from "@chakra-ui/react";
import { AppLayout } from "~/components/layouts/AppLayout";
import { Sidebar } from "~/components/Sidebar";

export default function Budget({ session }) {
  const children = [
    { name: "Andrew", age: 12 },
    { name: "Brandon", age: 15 },
    { name: "Christine", age: 14 },
  ];

  return (
    <Box p="1rem">
      <Heading>family</Heading>
      <List>
        {children.map((e, j) => {
          return (
            <ListItem key={j} border="1px solid black" p="1rem">
              {e.name} {e.age}
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
}

Budget.appPage = true;

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {
      session: await getSession(context),
    },
  };
};
