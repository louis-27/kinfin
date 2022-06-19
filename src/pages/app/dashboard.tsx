import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";
import {
  Grid,
  GridItem,
  Box,
  Button,
  Heading,
  Text,
  Flex,
} from "@chakra-ui/react";
import { AppLayout } from "~/components/layouts/AppLayout";
import { Sidebar } from "~/components/Sidebar";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function Dashboard() {
  const [connected, setConnected] = useState(false);
  const [accessToken, setAccessToken] = useState("");
  const [details, setDetails] = useState<any>("");
  const { query } = useRouter();
  const [transactions, setTransactions] = useState<any>(null);

  // https://www.ui-themes.com/chakra-ui-templates-open-source/

  useEffect(() => {
    let token = localStorage.getItem("accessToken");

    if (!token && !query.response) return;

    if (!token) {
      const res = JSON.parse(atob(query.response));
      token = res[0].accessToken;
    }
    setConnected(true);
    setAccessToken(token);
    localStorage.setItem("accessToken", token);

    const options = {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    fetch("https://sandbox.onebrick.io/v1/account/list", options)
      .then((response) => response.json())
      .then((response) => {
        const accountId = response.data[0].accountId;
        fetch(
          `https://sandbox.onebrick.io/v1/account/detail?accountId=${accountId}`,
          options
        )
          .then((res) => res.json())
          .then((res) => {
            setDetails(res);
            console.log("fff", res);
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => console.error(err));

    const fetchTransactions = async () => {
      const res = await fetch(
        "https://sandbox.onebrick.io/v1/transaction/list?from=2000-03-01&to=2022-06-19",
        options
      );
      const transactionsList = await res.json();
      console.log(transactionsList);
      await setTransactions(transactionsList);
    };
    fetchTransactions();
  }, [query]);

  return (
    <Box m="1rem">
      {!connected && (
        <a
          href={`https://cdn.onebrick.io/sandbox-widget/v1/?accessToken=${process.env.NEXT_PUBLIC_USER_ACCESS_TOKEN}&redirect_url=https://48b0-180-252-59-235.ap.ngrok.io/api/brick/widget`}
        >
          <Button>Connect</Button>
        </a>
      )}

      {connected && (
        <>
          <Heading>
            Welcome {details.data && details.data.accountHolder}
          </Heading>
          <Text>
            Available balance: {details.data && details.data.balances.available}
          </Text>
          <Text>
            Current balance: {details.data && details.data.balances.current}
          </Text>
          <Box>
            <Heading as="h3" className="text-md">
              Your Transactions
            </Heading>
            {transactions &&
              transactions.data.map((transaction) => {
                return (
                  <>
                    <Flex className="bg-white p-2">
                      {transaction.category.classification_group} Rp.{" "}
                      {transaction.amount}
                    </Flex>
                  </>
                );
              })}
          </Box>
        </>
      )}
    </Box>
  );
}

Dashboard.appPage = true;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);

  return {
    props: {
      session: await getSession(context),
    },
  };
};
