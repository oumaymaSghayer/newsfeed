<template>
  <div>
    <label for="select">Sort by:</label>
    <select id="select" v-model="selected" @change="onSort()">
    <option v-for="option in options" :value="option" :key="option">
        {{ option }}
    </option>
</select>
<div>
    <input type="checkbox" id="checkbox" value="1" v-model="sortingOrder" @change="onChangeSortOrder()"/>
    <label for="checkbox">Ascending Order</label>
</div>
  </div>
</template>

<script lang="ts">
import {  defineComponent, ref } from 'vue'
import { useStore } from '@/store';
import { MutationType } from '@/store/modules/posts/mutations'

 export default defineComponent({
    name: "SortPostsForm",
    setup(){
        const options = ["title" , "author", "body"]
        const selected=ref<"title" | "author" | "description">("title")
        const sortingOrder = ref<boolean>(true)
        const store = useStore()
        const onSort = ()=> {
            store.commit(MutationType.sortDisplayedPosts, selected.value)
        }
        const onChangeSortOrder = ()=> {
            store.commit(MutationType.setSortingOrder , sortingOrder.value? 1: -1)
            onSort()
            
        }
        return {options , selected, onSort, sortingOrder, onChangeSortOrder}
    }

})
</script>

<style>

</style>