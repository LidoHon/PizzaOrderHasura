import { create } from 'zustand'
import { devtools, persist, createJSONStorage } from 'zustand/middleware'

export enum Auth {
    AUTHED = 'authed',
    NOT_AUTHED = 'not_authed',
}

type LocalUser = {
    authed: Auth;
    id?: string;
    token?: string;
    username?: string;
    email?: string;
}

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
                signup: (username: string,  password: string) => {
                    console.log("signing up  user",username, password) 
                },
                login: (username: string, password: string) => {
                   console.log("logging in user",username, password) 
                },
                logout: () => {
                   set({ user: { authed: Auth.NOT_AUTHED } })
                },
            }),
            {
                name: 'hasura-demo',
                storage: createJSONStorage(() => localStorage), 
              }
        )
    )
)
export { useStore };