<template>
    <div class="pa-10">
       <div class="tc fw co-y fz20 mt-10">
           {{mom().format('YYYY年MM月DD日')}}吃啥
        </div> 
        <div class="ba-f brr-10 pa-10 shadow-ll mt-10" v-if="lunch&&lunch.length>0">
            <div class="tc co-3 fz18 fw br hb-b brc-f1 pb-10">午餐</div>
            <div class="box box-ac box-wp">
                <div class="w50 tc pb-20 plr-5" 
                 v-for="(l,lkey) in lunch" :key="lkey">
                    <div class="co-6 ptb-10 fz14">{{typeEX[l.type-1]}}</div>   
                    <van-image class="w100 brr-5 ov-no" style="height:14rem" fit="cover"
                    :src="require('@/assets/'+l.img)" @click="showimg(require('@/assets/'+l.img))"
                    />
                    <div class="fz15 fw ptb-5">{{l.name}}</div>
                    <van-button type="default" size="small">换{{typeEX[l.type-1]}}</van-button>
                </div>
            </div>
            <div class="ba-f3 brr-5 tc mb-10">
                <div class="co-9 fz14 ptb-10">材料</div>
                <div class="box box-ac box-wp pl-10" v-if="lunchMaking&&lunchMaking.length>0">
                    <div class=" mr-10 mb-10"  v-for="(lm,lkey) in lunchMaking" :key="lkey">
                        <van-image class="wh6 brr-y ov-no" fit="cover"
                        :src="require('@/assets/'+lm.img)"/>
                        <div class="fz15 fw ptb-5">{{lm.mname}}</div>
                    </div>
                </div>
            </div>
            <van-button type="primary" block>换一个午餐</van-button>
        </div>

        
        
    </div>
</template>
<script lang="ts">
  import {Vue, Component } from 'vue-property-decorator';
  import { ImagePreview } from 'vant';
  import axios from 'axios'
  import moment from 'moment'
  @Component({name: 'Chisha'})
  export default class Chisha extends Vue {
      public typeEX=['主菜','辅菜','青菜','汤'];
      public lunch=[];
      public lunchMaking=[];
      public dinner=[];
      public mom=moment;
      public raCanId=1;
      public imgroot='../assets/';
      public created() {
        document.title="今天吃啥"
        this.getmenu()
      }
      public getmenu(){
        axios.get('./menu.json', {})
        .then((res: any) => {
            const lunchs: any=[];
            res.data.map((item: any)=>{
                //item.img=require(this.imgroot+item.img)
                if(item.canid==this.raCanId){
                    lunchs.push(item)
                }
            })
            this.lunch=lunchs;
            this.lunchMaking=[];
            this.lunch.map((item: any)=>{
                if(item.makings&&item.makings.length>0){
                    this.lunchMaking=this.lunchMaking.concat(item.makings)
                }
            })
            console.log( this.lunchMaking);
            
        })
      }

      public showimg( str: any){
        ImagePreview ([str])  
      }
  }
</script>

