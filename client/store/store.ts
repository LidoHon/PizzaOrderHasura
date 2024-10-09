import { create } from "zustand";
import { devtools, persist, createJSONStorage } from "zustand/middleware";
import {
  Login,
  LoginMutation,
  LoginMutationVariables,
  Signup,
  SignupMutation,
  SignupMutationVariables,
} from "../generated/graphql";
import { client } from "../utils/client";

export enum Auth {
  AUTHED = "authed",
  NOT_AUTHED = "not_authed",
}

type LocalUser = {
  authed: Auth;
  id?: string;
  token?: string | null;
  username?: string | null;
  // email?: string;
};

interface HasuraDemo {
  user: LocalUser;
  signup: (username: string, password: string) => void;
  login: (username: string, password: string) => void;
  logout: () => void;
}

const useStore = create<HasuraDemo>()(
  devtools(
    persist(
      (set, get) => ({
        user: {
          authed: Auth.NOT_AUTHED,
        },
        signup: (username: string, password: string) => {
          //   console.log("signing up  user", username, password);
          console.log("Signing up with:", { username, password });

          client
            .mutation<SignupMutation, SignupMutationVariables>(Signup, {
              username,
              password,
            })
            .toPromise()
            .then((result) => {
              if (result?.error) {
                console.log("Error signing up", result.error.graphQLErrors);
                return;
              } else {
                if (result?.data?.signup) {
                  const { token, id, username } = result.data.signup;
                  set({
                    user: {
                      authed: Auth.AUTHED,
                      id: id?.toString(),
                      token: token ?? "",
                      username: username ?? "",
                    },
                  });
                }
              }
            });
        },
        login: (username: string, password: string) => {
          console.log("logging in user", username, password);
        },
        logout: () => {
          set({ user: { authed: Auth.NOT_AUTHED } });
        },
      }),
      {
        name: "hasura-demo",
        storage: createJSONStorage(() => localStorage),
      }
    )
  )
);
export { useStore };
