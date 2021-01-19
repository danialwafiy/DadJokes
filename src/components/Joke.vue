<template>
<div class="bg-indigo-500">
    <div class="flex flex-col bg-white min-h-screen justify-center">      
      <div class="text-indigo-500 text-lg mb-5" v-for="(joke,index) in jokes" :key="index">
          <span>{{index+1}}</span>
          {{joke}}
      </div>
    </div>
</div>
</template>

<style>

</style>

<script>
import {mapGetters} from "vuex";
export default {
    computed:{
        ...mapGetters({
            jokes:'getAllJokes'
        })
    }
}
</script>