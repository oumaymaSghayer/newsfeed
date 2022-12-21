<template>
  <div class="my-4 ">
    <div class="">
      <FilterPosts/>
    <SortPostsForm/>
    </div>
    
    <NewsFeed/>
  </div>
</template>

<script lang="ts">
import NewsFeed from '@/components/Newsfeed.vue'; 
import FilterPosts from '@/components/FilterPosts.vue'; 
import SortPostsForm from '@/components/SortPostsForm.vue'; 
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'HomeView',
  components: {
    NewsFeed,
    FilterPosts,
    SortPostsForm
  }
});
</script>

