<template>
    <div class="flex justify-center">
        <form  id="form" class="my-4 w-6/12" @submit.prevent="createPost">
    <div class="mx-auto flex items-center bg-white p-2 rounded-md shadow-md">
      <div class="flex flex-col flex-grow m-3">
        <input
          v-model="title"
          class="m-2 w-90 outline  outline-2 outline-gray-200 focus:outline-green-500 py-2 px-4 mx-2 rounded-sm"
          type="text"
          placeholder="Title"
        />
        <input
          v-model="author"
          class="m-2 w-90 outline  outline-2 outline-gray-200 focus:outline-green-500 py-2 px-4 mx-2 rounded-sm"
          type="text"
          placeholder="By"
        />
        <textarea
        rows="4"
          v-model="description"
          class="m-2 w-90 outline  outline-2 outline-gray-200 focus:outline-green-500 py-2 px-4 mx-2 rounded-sm"
          type="text"
          placeholder="What's on your mind?"
        />
        <div class="flex-shrink-0">
        <button
          type="submit"
          class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-3 rounded"
        >
          Add
        </button>
      </div>
      </div>
      
    </div>
        </form>
    </div>
  </template>
  <script lang="ts">
  import { IPost } from '@/interfaces/Post'
  import { useStore } from '@/store'
  import { MutationType } from '@/store/modules/posts/mutations'
  import {  defineComponent, ref } from 'vue'
import {  useRouter } from 'vue-router'

  export default defineComponent({
    setup() {
      const title = ref('')
      const author = ref('')
      const description = ref('')
      const store = useStore()
      const router = useRouter()
      const createPost = () => {
        console.log("adding new post..")
        const post: IPost = {
          id: Date.now(),
          title: title.value,
          author: author.value,
          description: description.value
        }
        store.commit(MutationType.createPost, post)
        router.push("/")
      }

      return { createPost, description, author, title }
    }
  })
  </script>