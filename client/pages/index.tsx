import Image from "next/image";
import localFont from "next/font/local";

import { GetServerSideProps } from "next";
import { client } from "../utils/client";
import {
  GetFriends,
  GetFriendsQuery,
  GetFriendsQueryVariables,
} from "@/generated/graphql";
import Link from "next/link";

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

interface Props {
  friends: GetFriendsQuery["friend"];
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const result = await client
      .query<GetFriendsQuery, GetFriendsQueryVariables>(GetFriends, {})
      .toPromise();

    return {
      props: { friends: result.data?.friend || [] },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: { friends: [] },
    };
  }
};

export default function Home({ friends }: Props) {
  // Ensure friends is an array
  const friendsList = Array.isArray(friends) ? friends : [];

  return (
    <div>
      <article className="prose mb-12 border-4 p-5 rounded-md border-slate-100 bg-green-200 shadow-lg hover:bg-green-300">
        <h1 className="text-4xl font-bold ">
          Welcome to our Pizza Ordering App!
          <br />
          The number one place for backyard
          <br />
          pizza with YOUR friends.
        </h1>
        <p className="mt-4">
          If you&apos;re new here, you probably need to{" "}
          <Link className="text-blue-500 underline" href="/login">
            Signup or Login
          </Link>
          , or you need to scan a party code to get going!
        </p>
      </article>
      <main className="flex flex-col gap-8 items-center sm:items-start">
        <h2 className="font-bold text-3xl text-green-900">
          Pizza Loving Patrons Include:
        </h2>
        <ul className="flex flex-row sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {friendsList.length > 0 ? (
            friendsList.map((friend) => (
              <li
                className="bg-green-200 rounded-md text-center p-10 shadow-lg hover:bg-green-300 transition-colors duration-200 ease-in-out"
                key={friend.id}
              >
                <span className="text-2xl font-semibold">{friend.name}</span>
              </li>
            ))
          ) : (
            <li>No friends found</li>
          )}

          <li className="bg-blue-200 rounded-md text-center p-10 shadow-lg hover:bg-blue-300 transition-colors duration-200 ease-in-out">
            <Link href="/login">
              You? <br />
              <span className="text-lg text-blue-800">Join the party!</span>
            </Link>
          </li>
        </ul>
      </main>
    </div>
  );
}
