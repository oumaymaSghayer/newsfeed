import  { ActionContext, ActionTree} from "vuex";
import { Mutations, MutationType } from "./mutations";
import { State } from "./state";

export enum ActionTypes {
    GetPosts = "GET_POSTS"
}

type ActionAugments = Omit<ActionContext<State, State>, "commit"> & {
    commit<K extends keyof Mutations>(
        key: K,
        payload: Parameters<Mutations[K]>[1]
    ): ReturnType<Mutations[K]>
}

export type Actions = {
    [ActionTypes.GetPosts](context: ActionAugments): void
}

export const actions: ActionTree<State, State> & Actions = {
    [ActionTypes.GetPosts]({commit}) {
        commit(MutationType.setPosts, [
            {
                id: 1,
                title: "This is How you Heal",
                author:"Brianna Wiest",
                description:"When you're ready, this is 100 essays that will change the way you think"
            },
            {
                id: 2,
                title: "The Forty Rules of Love",
                author:"Elif Shafaq",
                description:"The book was written after the author recieved a degree in women and gender studies"
            }
        ])
    }
}