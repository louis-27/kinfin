import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import {
  ClientSafeProvider,
  getCsrfToken,
  getProviders,
  signIn,
} from "next-auth/react";

export default function Login({ csrfToken, providers }) {
  const router = useRouter();
  const providersList: Array<ClientSafeProvider> = Object.values(providers);

  const onOAuthLogin = async (providerId) => {
    await signIn(providerId, { callbackUrl: `${router.basePath}/` });
  };

  return (
    <>
      <div>Click below</div>
      {providersList.map((provider) => (
        <>
          {provider.type === "oauth" && (
            <button key={provider.id} onClick={() => onOAuthLogin(provider.id)}>
              Login with {provider.name}
            </button>
          )}
        </>
      ))}
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
