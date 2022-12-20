<template>
    <form  id="form" class="my-4" @submit.prevent="onsubmit"> 
    <div class="mx-auto flex items-center bg-white p-2 rounded-md shadow-md">
      <div class="flex-grow m-1 ml-3">
        <input
          v-model="title"
          class="w-full focus:outline-none"
          type="text"
          placeholder="Title"
        />
        <input
          v-model="author"
          class="w-full focus:outline-none"
          type="text"
          placeholder="By"
        />
        <input
          v-model="description"
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
 </template>
 
 <script lang="ts">
 import { defineComponent, ref } from 'vue';
 export default defineComponent({
   name: 'PostForm',
   props:{
    method: { type:  Function , required: true }
  },
  setup() {
      const title = ref('')
      const author = ref('')
      const description = ref('')

      return {  description, author, title }
    },
    methods:{
      onsubmit(){
        
        this.method(this.description, this.author, this.title)
      }
    }
 });
 </script>
 
 <style>
 
 </style>