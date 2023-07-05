<template>
  <div>
    <div v-for="i of listnumber":key="i" class="button" @click="goGame(5, i)">
      {{'对局' + i}}
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import global from "@/components/global.vue";
@Component
export default class Menu extends Vue{
  data() {
    return {
      listnumber: global.listnumber
    }
  }
  goGame(mode:number, id:number){
    let pageInfo:object = {
      name:"game",
      params:{
        mode:mode,
        id: id
      }
    }
    this.$router.push(pageInfo)
  }
}
</script>

<style scoped>
.button{
  user-select: none;
  cursor: pointer;
  background-color: rgb(194,149,107);
  margin: auto;
  margin-top: 24px;
  text-align: center;
  width: 60%;
  height: 50px;
  line-height: 50px;
  box-shadow: 4px 4px 4px gray;
  border-radius: 10px;
}
.button:active{
  box-shadow: 1px 1px 1px gray;
  transform: translateY(4px);
}
.explain{
  user-select: none;
  cursor: pointer;
  background-color: rgb(107, 194, 158);
  margin: auto;
  margin-top: 100px;
  text-align: center;
  width: 60%;
  box-shadow: 4px 4px 4px gray;
  border-radius: 10px;
}
/*手机等设备风格*/
@media screen and (max-width: 600px) {
  .button{
    width: 100%;
    font-weight: bold;
    justify-content: center;
  }
}
</style>

