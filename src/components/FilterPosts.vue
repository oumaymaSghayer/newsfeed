<template>
    <div class=" flex flex-row justify-center my-2">
        <input
        @change="onSearch"
          v-model="searchTerm"
          class="w-60 outline  outline-2 outline-gray-200 focus:outline-green-500 py-2 px-4 mx-2 rounded-sm"
          type="text"
          placeholder="Title"
        />
        <button
          @click="onSearch"
          class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-3 rounded"
        >
          Search
        </button>
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