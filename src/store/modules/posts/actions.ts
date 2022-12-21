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
            },
            {
                id: 3,
                title: "The Stranger",
                author:"Albert Camus",
                description:"Through the story of an ordinary man unwittingly drawn into a senseless murder on an Algerian beach, Camus explored what he termed 'the nakedness of man faced with the absurd.'"
            },
            {
                id: 4,
                title: "The Little Prince",
                author:"Antoine de Saint-Exupéry",
                description:"It's honest and beautiful story about loneliness, friendship, sadness, and love. The prince is a small boy from a tiny planet (an asteroid to be precise), who travels the universe, planet-to-planet, seeking wisdom. On his journey, he discovers the unpredictable nature of adults."
            },
            {
                id: 5,
                title: "The Alchemist",
                author:"Paulo Coelho",
                description:"Santiago embarks on a journey seeking treasure in the Egyptian pyramids after having a recurring dream about it and on the way meets mentors, falls in love, and most importantly, learns the true importance of who he is and how to improve himself."
            },
            {
                id: 6,
                title: "Sans Famille",
                author:"Hector Malot",
                description:"The young Rémi is an orphan who accompanies a travelling musician from whom he will learn a lot. Throughout France, and accompanied by his dog Capi and the monkey Joli-Coeur, Rémi will learn about the life of the acrobat and will sing for a living."
            }
        ])
    }
}