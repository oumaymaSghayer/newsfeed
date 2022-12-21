<template>
    <div class=" flex flex-row justify-center my-2">
        <input
        @change="onSearch"
          v-model="searchTerm"
          class="w-60 input-primary"
          type="text"
          placeholder="Title"
        />
        <button
          @click="onSearch"
          class="btn-primary"
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