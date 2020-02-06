<template>
  <div id="app">
    <Header/>
    <div id="content">
        <div>
          <Item  v-for="i in api" :key="i.id" :content="i" @addqty="addqty" @subqty="subqty"/>
        </div>
    </div>
    <Footer :qty="qty" :total="total"/>
  </div>
</template>

<script>
import api from './assets/JSON/items.json';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Item from './components/Item.vue';
export default {
  name: 'app',
  data: ()=>{
    return{
      api,
      qty: 0,
      total: 0.00
    }
  },
  components: {
    Header,
    Footer,
    Item
  },
  methods: {
    addqty(event){
      this.qty+=1;
      this.total+=event;
    },
    subqty(event){
      if(this.qty>0) {
        this.qty-=1;
        this.total-=event;
      }
    }
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
}
body {
  margin: 0px 0px;
}
#content {
  width: 60%;
  margin-left: 20%;
  margin-right: 20%;
  margin-top: 5%;
  margin-bottom: 12%;
}
</style>
