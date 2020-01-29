<template>
  <div id="app">
      <h1>Task 1</h1>
      <p>
          Even nos: <span  v-for="item in arr" :key="item"><span v-if="item%2 == 0">{{item}} </span></span>
      </p>
      <h1>Task 2</h1>
      <input type="text" v-model="msg">
      <p>{{msg}}</p>
      <h1>Task 3</h1>
      <input type="checkbox" name="check" value="checkbox" v-model="checkres"> Checkbox
      <p>Checkbox checked: {{checkres}}</p>
      <input type="radio" name="r" value="1" v-model="radiores"> 1
      <input type="radio" name="r" value="2" v-model="radiores"> 2
      <input type="radio" name="r" value="3" v-model="radiores"> 3
      <p>Selected Radiobutton: {{radiores}}</p>
      <h1>Task 4</h1>
      <p>{{sentence}}</p>
      <button @click="change()">Click</button>
      <h1>Task 5</h1>
      <p>First Name: <input type="text" v-model="firstname">
      Last Name: <input type="text" v-model="lastname"></p>
      <p>Full name: <span>{{fname}}</span></p>
  </div>
</template>

<script>

export default {
  name: 'app',
  data: ()=>{
    return{
      arr: [1,2,3,4,5,6],
      msg: "",
      checkres: false,
      radiores: "none",
      sentence: "Click the button to change case of 1st letter",
      firstname: "",
      lastname: ""
    }
  },
  methods: {
      change(){
          let s = this.sentence;
          if(s.charAt(0) == 'C')
            s = s.charAt(0).toLowerCase() + s.slice(1);
          else
            s = s.charAt(0).toUpperCase() + s.slice(1);
          this.sentence=s;
      }
  },
  computed: {
      fname: function(){
          return this.firstname+" "+this.lastname;
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    p {
        font-size: 20px;
        font-weight: bolder;
        margin-top: 2%;
        margin-bottom: 2%;
    }
    input {
        margin-bottom: 1%;
    }
</style>