<template>
  <router-link class="app" :to="{ name: 'update', params: { id: id }}" >
   <div>
    # {{title}}
    <br/>
    {{author}}
    <br/>
    {{description}}
    <br/>
    ---------------------------
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


