<template>
    <div class="flex justify-center">
        
        <form  id="form" class="my-4 w-6/12" @submit.prevent="updatePost">
    <div class="mx-auto flex items-center bg-white p-2 rounded-md shadow-md">
      <div class="flex flex-col flex-grow m-3" v-if="post">
        <input
          v-model="post.title"
          class="m-2 w-90 input-primary"
          type="text"
          placeholder="Title"
        />
        <input
          v-model="post.author"
          class="m-2 w-90 input-primary"
          type="text"
          placeholder="By"
        />
        <textarea
          v-model="post.description"
          rows="4"
          class="m-2 w-90 input-primary"
          type="text"
          placeholder="What's on your mind?"
        />
        <div class="flex-shrink-0">
        <button
          type="submit"
          class="btn-primary"
        >
          Edit
        </button>
      </div>
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