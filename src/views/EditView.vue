<template>
    <div>
        edit view {{ $route.params.id }}
        <form  id="form" class="my-4" @submit.prevent="updatePost">
    <div class="mx-auto flex items-center bg-white p-2 rounded-md shadow-md">
      <div class="flex-grow m-1 ml-3" v-if="post">
        <input
          v-model="post.title"
          class="w-full focus:outline-none"
          type="text"
          placeholder="Title"
        />
        <input
          v-model="post.author"
          class="w-full focus:outline-none"
          type="text"
          placeholder="By"
        />
        <input
          v-model="post.description"
          class="w-full focus:outline-none"
          type="text"
          placeholder="What's on your mind?"
        />
      </div>
      <div class="flex-shrink-0">
        <button
          type="submit"
          class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-3 rounded"
        >
          Add
        </button>
      </div>
    </div>
  </form>
    </div>
</template>
<script lang="ts">
import { useStore } from '@/store'
import { MutationType } from '@/store/modules/posts/mutations'
import { defineComponent } from 'vue'
import { useRoute, useRouter } from 'vue-router'

export default defineComponent({
  setup() {
     const store = useStore(); 
     const router = useRouter(); 
     const route = useRoute(); 
     const post = store.getters.getPostById(parseInt(route.params.id as string))
     if(!post) {router.push("/"); }
     console.log(post);
     const updatePost = ()=>{
         if (post) {
          store.commit(MutationType.updatePost, post);
          router.push("/")
         } 
     }
     return { updatePost ,post}
  }
})
</script>