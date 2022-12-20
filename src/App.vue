<template>
 <div>
  <NavBar/>
  <router-view/>
 </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import NavBar from './components/NavBar.vue';
import { useStore } from '@/store';
import { ActionTypes } from './store/modules/posts/actions';
import { MutationType } from './store/modules/posts/mutations';
export default defineComponent({
  name: 'App',
  components: {
    NavBar
  },
  created(){
    const store = useStore()
    store.dispatch(ActionTypes.GetPosts);
    store.commit(MutationType.setDisplayedPosts, store.state.posts)
  }
});
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
