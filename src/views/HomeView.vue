<template>
  <div class="home">
    <FilterPosts/>
    <SortPostsForm/>
    <NewsFeed/>
  </div>
</template>

<script lang="ts">
import NewsFeed from '@/components/Newsfeed.vue'; 
import FilterPosts from '@/components/FilterPosts.vue'; 
import SortPostsForm from '@/components/SortPostsForm.vue'; 
import { useStore } from '@/store';
import { ActionTypes } from '@/store/modules/posts/actions';
import { computed, defineComponent, onMounted } from 'vue'

export default defineComponent({
  name: 'HomeView',
  components: {
    NewsFeed,
    FilterPosts,
    SortPostsForm
  }
});
</script>

