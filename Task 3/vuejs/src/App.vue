<template>
  <div id="app">
    <Child :content="moviesapi"/>
  </div>
</template>

<script>
import Child from './components/Child.vue'
export default {
  name: 'app',
  data: () => {
    return{
      moviesapi: []
    }
  },
  components: {
    Child
  },
  mounted: function(){
    fetch('https://api.cloud.altbalaji.com/zuul/catalogue/balaji/catalogue/filters/all-shows?domain=IN&page=2&size=9').then(response => {
      return response.json();
    }).then(api => {
      this.moviesapi = api['content'];
    }).catch(err => {
      console.log(err);
    });
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
body {
  background-color: black;
}
</style>
