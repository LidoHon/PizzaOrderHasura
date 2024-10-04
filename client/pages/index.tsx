import Image from "next/image";
import localFont from "next/font/local";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";

import { client } from "../utils/client";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

type Friend = {
  name: string;
};

type Data = {
  friends: Friend[];
};

const QUERY = `query {
 friend { 
 name 
  } 
 }`;
export const getServerSideProps: GetServerSideProps = async (context) => {
  // let friends = [];
  return client
    .query(QUERY)
    .toPromise()
    .then((d) => {
      return {
        props: { friends: d.data?.friend },
      };
    })
    .catch((e) => {
      return {
        props: {},
      };
    });

  // try {
  //   const res = await fetch(process.env.NEXT_PUBLIC_HASURA_PROJECT_ENDPOINT as string, {
  //     method: 'POST',
  //     headers: {
  //       'x-hasura-admin-secret': process.env.HASURA_ADMIN_SECRET as string,
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //       query: `
  //         query {
  //           friend {
  //             name
  //           }
  //         }
  //       `,
  //     }),
  //   });

  //   const result = await res.json(); // Parse the response to JSON
  //   const data = result?.data;
  //   friends = data?.friend || []; // Ensure it's always an array

  // } catch (error) {
  //   console.error('Error fetching data:', error);
  // }
};

export default function Home({
  friends,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  // Ensure friends is an array
  const friendsList = Array.isArray(friends) ? friends : [];

  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]`}
    >
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-2xl font-bold">Friends List</h1>
        <ul>
          {friendsList.length > 0 ? (
            friendsList.map((friend: Friend, index: number) => (
              <li key={index}>{friend.name}</li>
            ))
          ) : (
            <li>No friends found</li>
          )}
        </ul>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
