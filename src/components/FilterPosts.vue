<template>
  <div>
    
    <div class="mx-auto flex items-center bg-white p-2 rounded-md shadow-md">
      <div class="flex-grow m-1 ml-3">
        <input
        @change="onSearch"
          v-model="searchTerm"
          class="w-full focus:outline-none"
          type="text"
          placeholder="Title"
        />
      </div>
      <div class="flex-shrink-0">
        <button
          @click="onSearch"
          class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-3 rounded"
        >
          Search
        </button>
      </div>
    </div>
  
  </div>
</template>

<script lang="ts">
import { MutationType } from '@/store/modules/posts/mutations'
import {  defineComponent, ref } from 'vue'
import { useStore } from 'vuex'
export default defineComponent( {
  name: "FilterPosts",
  setup(){
    const searchTerm = ref('')
    const store= useStore()
    const onSearch = ()=>{
        store.commit(MutationType.filterDisplayedPosts, searchTerm.value)
    }
    return {onSearch,  searchTerm}
  }
})
</script>

<style>

</style>