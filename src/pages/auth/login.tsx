import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import {
  ClientSafeProvider,
  getCsrfToken,
  getProviders,
  signIn,
} from "next-auth/react";
import { Box, Button } from "@chakra-ui/react";
import { FcGoogle } from "react-icons/fc";
import { BrandLogo } from "~/components/BrandLogo";

export default function Login({ csrfToken, providers }) {
  const router = useRouter();
  const providersList: Array<ClientSafeProvider> = Object.values(providers);

  const onOAuthLogin = async (providerId) => {
    await signIn(providerId, {
      callbackUrl: `${router.basePath}/app/dashboard`,
    });
  };

  return (
    <>
      <div className="m-auto flex h-screen flex-col items-center justify-center bg-slate-50">
        <BrandLogo width="80" />
        <Box mt={20}>
          {providersList.map((provider) => (
            <>
              {provider.type === "oauth" && (
                <Button
                  boxShadow="dark-lg"
                  color={"gray.800"}
                  colorScheme={provider.id}
                  key={provider.id}
                  leftIcon={<FcGoogle />}
                  onClick={() => onOAuthLogin(provider.id)}
                  w="sm"
                >
                  Login with {provider.name}
                </Button>
              )}
            </>
          ))}
        </Box>
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const csrfToken = await getCsrfToken(context);
  const providers = await getProviders();

  return {
    props: { csrfToken, providers },
  };
};
