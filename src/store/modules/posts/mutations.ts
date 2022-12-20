import { MutationTree } from "vuex";
import { State } from "./state"
import { IPost } from "@/interfaces/Post";
import { stat } from "fs";


export enum MutationType {
    createPost= "CREATE_POST",
    updatePost= "UPDATE_POST",
    setPosts= "SET_POSTS",
    setSortingOrder= "SET_SORTING_ORDER",
    setDisplayedPosts= "SET_DISPLAYED_POSTS",
    filterDisplayedPosts= "FILTER_DISPLAYED_POSTS",
    sortDisplayedPosts= "SORT_DISPLAYED_POSTS",
}
export type Mutations = {
    [MutationType.createPost](state: State, post: IPost) : void
    [MutationType.updatePost](state: State, post: IPost) : void
    [MutationType.setPosts](state: State, posts: IPost[]) : void
    [MutationType.setSortingOrder](state: State, value: 1 | -1) : void
    [MutationType.setDisplayedPosts](state: State, posts: IPost[]) : void
    [MutationType.filterDisplayedPosts](state: State, title: string) : void
    [MutationType.sortDisplayedPosts](state: State, sortTerm:  "title" | "author" | "description") : void
}

export const mutations: MutationTree<State> & Mutations = {
    [MutationType.createPost](state, post) {
        state.posts.unshift(post);
    },
    [MutationType.setPosts](state, posts) {
        state.posts= posts
    },
    [MutationType.setDisplayedPosts](state, posts) {
        state.displayedPosts= posts
    },
    [MutationType.filterDisplayedPosts](state, title) {
        state.displayedPosts= state.posts.filter(p=> p.title.toLowerCase().includes(title.toLowerCase()))
    },
    [MutationType.sortDisplayedPosts](state, sortTerm) {
        state.displayedPosts= state.posts.sort((a, b) => (a[sortTerm] > b[sortTerm]) ? state.sortingOrder : state.sortingOrder* -1 )
    },
    [MutationType.setSortingOrder](state, value ) {
        state.sortingOrder = value
    },
    [MutationType.updatePost](state, newPost) {
        const item = state.posts.findIndex(s => s.id === newPost.id)
        if (item === -1) return
        state.posts[item] = { ...state.posts[item], ...newPost }
    }
}