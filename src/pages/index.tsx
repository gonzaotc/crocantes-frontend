import { useContext } from "react";
import { UserContext } from "@/contexts/UserContext";
import Head from "next/head";

export default function Home() {
  const { user } = useContext(UserContext);

  return (
    <>
      <Head>
        <title>App: Home</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <>
        <p>home</p>
        {user && <p>user: {user.email}</p>}
      </>
    </>
  );
}
