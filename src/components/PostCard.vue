<template>
  <router-link class="app" :to="{ name: 'update', params: { id: id }}" >
   <div class=" max-w-sm rounded overflow-hidden shadow-lg m-4 px-6 py-4 hover:shadow-2xl">
    <div class="font-bold text-xl mb-2">{{title}}</div>
    <p class="text-gray-400 text-base ">
      {{author}}
    </p>
    <p class="text-gray-700 text-base ellipse">
      {{description}}
    </p>
   </div>
  </router-link>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PostCard',
  props:{
    id: { type: Number, required: true },
    title: { type: String, required: true },
    author: { type: String, required: true },
    description: { type: String, required: true },
  }
});
</script>
<style scoped>
.ellipse{
  display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>


