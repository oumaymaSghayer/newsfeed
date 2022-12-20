import { IPost } from "@/interfaces/Post";
import { title } from "process";
import { GetterTree } from "vuex";
import { State } from "./state";

export type Getters = {
    getPosts(state: State) : IPost[]
    totalCount(state: State) : number
    getPostById(state: State) : (id: number) => IPost | undefined
    filterPostsByTitle(state: State) : (title: string) => IPost[] | undefined
}

export const getters: GetterTree<State, State> & Getters ={
    getPosts(state) {
        return state.posts
    },
    totalCount(state){
        return state.posts.length
    }, 
    getPostById: (state) => {
        return (id: number) => {
            return state.posts.find(v => v.id === id);
          }
        
    },
    filterPostsByTitle: (state)=>{
        return (title:string)=>{
            return state.posts.filter(p=>p.title === title)
        }
    }

    
}