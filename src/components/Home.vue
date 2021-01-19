<template>
  <div class="flex md:flex-row flex-col min-h-screen">
    <div class="flex flex-col md:w-1/2 w-full bg-indigo-500 min-h-screen justify-center">      
      <div class=" text-white mb-8 text-3xl p-5">{{joke}}</div>
      <div class="text-center">          
        <button class="bg-white px-12 py-5 rounded align-baseline font-semibold text-sm outline-none  text-indigo-500 hover:bg-indigo-500 border hover:border-white hover:text-white" @click="addJoke()">
          Next Joke
        </button>
      </div>
    </div>
    <div class="flex flex-col md:w-1/2 w-full bg-white min-h-screen justify-center">      
      <div class="text-indigo-500 text-lg mb-5" v-for="(joke,index) in jokes" :key="index">
          <span>{{index+1}}</span>
          {{joke}}
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>

<script>
import {mapActions,mapGetters} from "vuex";
export default {
    data(){
        return{
        }
    },
    methods:{
      ...mapActions({
        addJoke:'setCurrentJoke'
      }),
    },
    computed:{
      ...mapGetters({joke:'getCurrentJoke',jokes:'getAllJokes'})
    }

}
</script>