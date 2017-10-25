<template>
    <div class="index-wrap">
        <div class="bg"></div>
        <div class="mk-content">
          <div class="banner">
            <img src="../../../static/img/m-banner.png" alt="">
          </div>
          <div class="active-detail">
            <div class="ad-bg">
              <img class="title-center" src="../../../static/img/01.png" alt="">
              <p class="ad-con">
                基于全球政治环境的风云变化、财富起落的瞬息万变，胡润百富携手业内领先机构——美信全球、功夫财经，旨在于瞬息万变的大环境中寻找中国最优秀的“点金胜手”。
2017年第一届“胡润中国金牌理财师TOP100甄选”于10月正式启动，本次评选活动在寻找中国最专业理财师的同时，也致力于为金融、投资、理财等行业建立健康、有序的行业发展规范和荣誉体系，并期望在帮助社会公众洞悉全球金融市场、了解风险管理和资产配置的过程中，使他们丰富自我、积累财富，完成由富及贵的转变。
              </p>
              <img class="title-center" src="../../../static/img/02.png" alt="">
              <p class="ad-con">
                本次评选活动面向银行、保险、证券、基金、投资、信托、第三方理财等多领域的理财精英
              </p>
              <img class="title-center" src="../../../static/img/03.png" alt="">
              <p class="ad-con">
                评选规则借鉴了xxxx。（需美信补充候选人标准） 衡量标准不单单取决于他们个人成就的大小，还有他们的行业价值和社会价值。
              </p>
            </div>
            <div class="ad-bg-2">
              <img class="title-center" src="../../../static/img/04.png" alt="">
              <p class="ad-con">
                1）本次评选邀请了40位财富管理业内最顶尖的专家组成评委委员会，组成中国最权威的财富管理“长老团”推荐他们心中最优秀的理财师候选人。<br><br>
                2）自荐候选人可点击下方“立即报名”按钮，填写申请，同时附上2位业内专家的推荐评语，即可参与甄选。
              </p>
              <img class="title-center" src="../../../static/img/05.png" alt="">
              <p class="ad-con">
                本次评选还将由胡润、***、***等重量级嘉宾共同组成最专业、权威的组委会，以多维度多、方位的指标考核参赛选手，最终挑选出100位各领域里的精英理财师，并于 1月15日盛大举办颁奖典礼。
              </p>

            </div>
            <div class="ad-bg-3">
              <img class="title-center" src="../../../static/img/07.png" alt="">
              <img class="title-center-2" src="../../../static/img/logo_hurun.png" alt="">
              <p class="ad-con">
                胡润百富，是一个拥有中国高净值人群垂直类大数据，由首席调研员胡润带领的专业数据调研机构。胡润百富拥有丰富的高端调研经验和资源，为众多行业提供全方位深度专业权威的调查服务。
              </p>
              <img class="title-center" src="../../../static/img/06.png" alt="">
              <img class="title-center-2" src="../../../static/img/logo_meixin.png" alt="">
              <p class="ad-con">
                美信全球是基于互联网的全球投资产品展示和交易平台。自2015年成立于纽约以来，美信已经在北京、上海等多处开设办事处，依托核心产品MX Terminal为理财顾问公司、金融机构、拥有高净值客户的非金融机构等提供一站式服务，逐步成长为行业领先的全球资产服务和交易解决方案提供商。
              </p>
              <img class="title-center-2" src="../../../static/img/logo_kofuf.png" alt="">
              <p class="ad-con">
                功夫财经致力于联动最出色的财经学者，提供最优质的原创内容，打造中国规模最大的、粘性最高的财富命运共同体，以新型金融服务平台为终极己任，解决中产焦虑，提升国民财商。
              </p>
              <img class="title-center" src="../../../static/img/08.png" alt="">
              <p class="ad-con">
                胡润中国金牌理财师TOP100
              </p>
            </div>
          </div>
        </div>
        <router-link class="m-active-btn" to="/m-join">立即报名</router-link>
    </div>
</template>

<script>
import { isMobile,weixinShare } from '../../assets/js/common.js'
    export default {
        data: function(){
            return {
            }
        },
        mounted () {
          if (!isMobile()) {
            this.$router.push('/index');
          }
          var data={
            title:'理财师 222- 功夫财经',
            link:'http://licaishi.kofuf.com',
            imgUrl:'http://m.kofuf.com/static/img_h5/h5_logo.png',
            desc:"胡润中国金牌理财师TOP100"
          }
          weixinShare(this.$axios,data);
        },
        methods: {
        }
    }
</script>

<style lang="less">
  @back_color:#1b1d1f;
  .index-wrap{
    width: 100%;
    color: #fff;
    background: #000;
    font-size: 12px;
    .mk-content{
      position: relative;
      z-index: 8;
      width: 100%;
      margin: auto;
      overflow: hidden;
      height: auto;
      .banner{
        img{
          width: 100%;
          overflow: hidden;
        }
      }
      .active-detail{
        background: @back_color;
        margin:.3rem .3rem 1.4rem;
        padding:.4rem 0rem;
        box-sizing: border-box;
        text-align: justify;
        .ad-bg{
          background: url(../../../static/img/m-img1.png) no-repeat;
          background-size: 100% auto;
          background-position: bottom;
        }
        .ad-bg-2{
          margin-top: 20px;
          background: url(../../../static/img/m-img2.png) no-repeat;
          background-size: 100% auto;
          background-position: bottom;
        }
        .ad-bg-3{
          margin-top: 20px;
        }
        .title-center{
          margin: auto;
          display: block;
          width:2.4rem;
        }
        .title-center-2{
          margin: 20px auto 0;
          display: block;
          width:2rem;
        }
        .ad-con{
          position: relative;
          height: auto;
          padding: .5rem .25rem;
          box-sizing: border-box;
          line-height: 26px;
          font-size: 14px;
        }
      }
    }
    .bg{
      width: 100%;
      height: 100%;
      background: url(../../../static/img/m-bg.jpg);
      background-size: 100% 100%;
      position: fixed;
    }
  }
  .title-img{
    background: @back_color;
    margin-top: 60px;
    padding:35px 24px;
    img{
      width: 120px;
      margin:0 auto 50px;
      display: block;
    }
  }
  .m-active-btn{
    height: 1rem;
    width: 100%;
    color: #333;
    text-align: center;
    line-height: 1rem;
    background: #ebbc6d;
    position: fixed;
    bottom: 0;
    z-index: 1000;
    font-size: 18px;
  }
</style>
