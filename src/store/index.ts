import {
  createStore,
  Store as VuexStore,
  CommitOptions,
  DispatchOptions,
  createLogger
} from 'vuex'
import { Actions, actions } from './modules/posts/actions'
import { Getters, getters } from './modules/posts/getters'
import { Mutations, mutations } from './modules/posts/mutations'
import { State, state } from './modules/posts/state'

export const store = createStore({
  plugins: process.env.NODE_ENV==="dev" ? [createLogger()]: [],
  state,
  getters,
  mutations,
  actions,
})


export function useStore() {
  return store as Store
}

export type Store = Omit<
  VuexStore<State>,
  'getters' | 'commit' | 'dispatch'
> & {
  commit<K extends keyof Mutations, P extends Parameters<Mutations[K]>[1]>(
    key: K,
    payload: P,
    options?: CommitOptions
  ): ReturnType<Mutations[K]>
} & {
  dispatch<K extends keyof Actions>(
    key: K,
    payload?: Parameters<Actions[K]>[1],
    options?: DispatchOptions
  ): ReturnType<Actions[K]>
} & {
  getters: {
    [K in keyof Getters]: ReturnType<Getters[K]>
  }
}

