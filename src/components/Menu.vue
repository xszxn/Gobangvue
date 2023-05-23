<template>
    <div>
        <div class="button" @click="goGame(0)">
            人人模式
        </div>
        <div class="button" @click="goGame(3)">
            人人模式（后手一直有机器提示）
        </div>
        <div class="button" @click="goGame(4)">
            人人模式（双方都可以获得机器提示）
        </div>
        <div class="button" @click="goGame(1)">
            人机机先
        </div>
        <div class="button" @click="goGame(2)">
            人机人先
        </div>
        <div class="explain" >
            <div>本项目由开源AI五子棋项目的基础上进行以下功能的开发：</div>
            <div> 1. 悔棋(无限步)</div>
            <div> 2. 人对人时AI辅助提示</div>
            <div> 3. 对战复盘</div>
            <div> 4. 复盘到任意步时继续对局</div>
            <br>
            <div>特此鸣谢开源项目: chenjingyuanku/GobangVue</div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component
export default class Menu extends Vue{
    goGame(mode:number){
        let pageInfo:object = {
            name:"game",
            params:{
                mode:mode
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

