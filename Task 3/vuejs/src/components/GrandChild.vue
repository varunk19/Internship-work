<template>
  <div class="viditem">
    <img :src="movie.images[0].url" alt="movie poster">
    <p>{{movie.title}}</p>
  </div>
</template>

<script>
export default {
  name: 'GrandChild',
  props: ['movie']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .viditem {
        width: 30%;
        border-bottom: 3px solid orangered;
        margin-bottom: 2%;
        margin-left: 3%;
        float: left;
        height: 350px;
    }
    img {
        width: 100%;
    }
    p {
        color: white;
    }
    @media only screen and (max-width: 1400px) {
        .viditem {
            height: 325px;
        }
    }
    @media only screen and (max-width: 800px) {
        .viditem {
            width: 40%;
            height: 300px;
        }
    }
    @media only screen and (max-width: 500px) {
        .viditem {
            width: 100%;
            height: 100%;
        }
    }
</style>