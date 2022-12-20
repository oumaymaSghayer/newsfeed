
import {IPost} from "../../../interfaces/Post"

export type State = {
    posts: IPost[];
    displayedPosts: IPost[]
    loading: boolean;
    sortingOrder: 1 | -1 ;
}

export const state: State = {
  posts: [],
  displayedPosts: [],
  loading: false,
  sortingOrder: 1
};
