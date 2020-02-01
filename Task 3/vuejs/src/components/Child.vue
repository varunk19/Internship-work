<template>
  <div id="vidgrid">
    <div v-for="movie in content" :key="movie['uid']">
      <GrandChild :movie="movie"/>
    </div>
  </div>
</template>

<script>
import GrandChild from './GrandChild.vue';
export default {
  name: 'Child',
  props: ['content'],
  components: {
    GrandChild
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #vidgrid {
    margin-left: 7%;
    margin-right: 10%;
  }
  @media only screen and (max-width: 1100px) {
    #vidgrid {
      margin-left: 9%;
      margin-right: 0%;
    }
  }
  @media only screen and (max-width: 800px) {
    #vidgrid {
      margin-left: 8%;
      margin-right: 0%;
    }
  }
  @media only screen and (max-width: 500px) {
    #vidgrid {
      margin-left: 0%;
      margin-right: 5%;
    }
  }
</style>
