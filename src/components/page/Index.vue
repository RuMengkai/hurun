<template>
    <div class="index-wrap">
        <div class="bg"></div>
        <div class="mk-content">
          <div class="banner">
            <img src="../../../static/img/banner.png" alt="">
          </div>
          <div class="active-detail">
            <img class="title-center" src="../../../static/img/01.png" alt="">
            <div class="ad-con">
              <div class="ad-p">
                基于全球政治环境的风云变化、科技文化的快速更迭，财富起落的瞬息万变。2017年第一届“胡润中国金牌理财师TOP100甄选”于10月正式立项、启动筹备工作。本次评选旨在寻找中国最专业理财师，也致力于为金融、投资、理财等行业建立健康、有序的行业发展规范和荣誉体系，并期望帮助社会公众洞悉全球金融市场、了解风险管理和资产配置、凝练投资人的核心稳定性，在理财的过程中，探寻丰富自我、开阔风险视野、积累财富。
作为拥有中国高净值人群垂直类大数据的专业调研机构，胡润百富很荣幸能与业内领先机构——美信全球、功夫财经强强结合，于瞬息万变的大环境中，寻找中国最优秀的“点金胜手”。与此同时，美信全球与功夫财经的丰富资源，亦为此次活动奠定了坚实基础，提供了最优质保障。

              </div>
              <img class="ad-img" src="../../../static/img/01.jpg" alt="">
            </div>
          </div>
          <div class="active-users">
            <div class="au-left">
              <img class="title-center" src="../../../static/img/02.png" alt="">
              <p class="au-con">
                本次评选活动面向银行、保险、证券、基金、投资、信托、第三方理财等多领域的理财精英
              </p>
            </div>
            <div class="au-right">
              <img class="title-center" src="../../../static/img/03.png" alt="">
              <p class="au-con">
                评选规则借鉴了xxxx。（需美信补充候选人标准）
衡量标准不单单取决于他们个人成就的大小，还有他们的行业价值和社会价值。

              </p>
            </div>
            <img class="au-img" src="../../../static/img/02.jpg" alt="">
          </div>
          <div class="active-sign">
            <div class="sign-method">
              <div class="sm-left">
                <img src="../../../static/img/04.png" alt="">
                <div class="sm-con">
                  <p>
                    1）本次评选邀请了40位财富管理业内最顶尖的专家组成评委委员会，组成中国最权威的财富管理“长老团”推荐他们心中最优秀的理财师候选人。
                  </p>
                  <p>
                    2）自荐候选人可于xxx网站填写申请，同时附上2位业内专家的推荐评语，即可参与甄选。
                  </p>
                </div>
              </div>
              <img class="sm-img" src="../../../static/img/03.jpg" alt="">
            </div>
            <div class="sign-process">
              <div class="sp-right">
                <img src="../../../static/img/05.png" alt="">
                <div class="sp-con">
                  本次评选还将由胡润、***、***等重量级嘉宾共同组成最专业、权威的组委会，以多维度多、方位的指标考核参赛选手，最终挑选出100位各领域里的精英理财师，并于 1月15日盛大举办颁奖典礼。
                </div>
              </div>
              <img class="sp-img" src="../../../static/img/03.jpg" alt="">
            </div>
          </div>
          <router-link class="active-btn" to="/join"></router-link>
          <div class="sponsor">
            <img src="../../../static/img/07.png" alt="">
            <div class="box">
              <div class="img">
                <img src="../../../static/img/logo_hurun.png" alt="">
              </div>
              <div class="sb-con">
                胡润百富，是一个拥有中国高净值人群垂直类大数据，由首席调研员胡润带领的专业数据调研机构。胡润百富拥有丰富的高端调研经验和资源，为众多行业提供全方位深度专业权威的调查服务。

              </div>
            </div>
          </div>
          <div class="organizer">
            <img src="../../../static/img/06.png" alt="">
            <div class="o-left">
              <img class="img" src="../../../static/img/logo_meixin.png" alt="">
              <p class="o-con">
                成都美联储大码短裤出门带出毛孔
              </p>
            </div>
            <div class="o-right">
              <img class="img" src="../../../static/img/logo_kofuf.png" alt="">
              <p class="o-con">
                功夫财经致力于联动最出色的财经学者，提供最优质的原创内容，打造中国规模最大的、粘性最高的财富命运共同体，以新型金融服务平台为终极己任，解决中产焦虑，提升国民财商。
              </p>
            </div>
          </div>
          <div class="prize">
            <img src="../../../static/img/08.png" alt="">
            <p>胡润中国金牌理财师TOP100</p>
          </div>
        </div>
    </div>
</template>

<script>
    export default {
        data: function(){
            return {
                ruleForm: {
                    username: '',
                    password: ''
                }
            }
        },
        methods: {
        }
    }
</script>

<style scoped lang="less">
  @back_color:#121416;
  .index-wrap{
    color: #fff;
    background: #000;
    .mk-content{
      position: relative;
      z-index: 8;
      width: 800px;
      margin: auto;
      overflow: auto;
      height: auto;
      .banner{
        img{
          width: 100%;
          overflow: hidden;
        }
      }
      .active-detail{
        background: @back_color;
        margin-top: 60px;
        padding:35px 24px;
        .title-center{
          display: block;
          width:120px;
          margin: auto;
        }
        .ad-con{
          margin-top: 50px;
          .ad-p{
            float: left;
            width: 428px;
            line-height: 27px;
          }
          .ad-img{
            margin-left: 20px;
            width:281px;
          }
        }
      }
      .active-users{
        background: @back_color;
        margin-top: 60px;
        padding:35px 24px;
        .au-left{
          overflow: hidden;
          float: left;
          width: 330px;
          img{
            width: 120px;
          }
        }
        .au-right{
          overflow: hidden;
          float: right;
          width: 330px;
          img{
            width: 120px;
          }
        }
        .au-con{
          margin: 40px 0;
          line-height: 30px;
        }
        .au-img{
          width: 100%;
        }
      }
      .active-sign{
        background: @back_color;
        margin-top: 60px;
        padding:35px 24px;
        .sign-method{
          overflow: hidden;
          .sm-left{
            float: left;
            width:330px;
            img{
              width: 120px;
            }
            .sm-con{
              line-height: 30px;
              margin: 40px 0;
            }
          }
          .sm-img{
            float: right;
            width: 320px;
          }
        }
        .sign-process{
          margin-top: 10px;
          overflow: hidden;
          position: relative;
          .sp-right{
            height: auto;
            position: absolute;
            bottom: 0;
            right: 0;
            width:330px;
            img{
              width: 120px;
            }
            .sp-con{
              line-height: 30px;
              margin: 40px 0;
            }
          }
          .sp-img{
            float: left;
            width: 320px;
          }
        }
      }
      .active-btn{
        display: block;
        margin: 57px auto;
        width: 240px;
        height: 80px;
        background: url(../../../static/img/btn.png);
        background-size: 240px 80px;
        cursor: pointer;
        &:hover{
          background: url(../../../static/img/btn_hover.png);
          background-size: 240px 80px;
        }
      }
      .sponsor{
        .title-img;
        .box{
          overflow: hidden;
          border: 1px #ebbc6c solid;
          .img{
            width: 368px;
            height: 250px;
            text-align: center;
            float: left;
            overflow: hidden;
            img{
              margin:89px auto;
              display: block;
              width:217px;
            }
          }
          .sb-con{
            color: #000;
            float: right;
            box-sizing: border-box;
            width: 368px;
            height: 250px;
            padding: 30px;
            background: #ebbc6c;
            text-align: justify;
            line-height: 30px;
          }
        }
      }
      .organizer{
        .title-img;
        overflow: hidden;
        .o-left{
          overflow: hidden;
          float: left;
          width: 330px;
          .img{
            width: 120px;
            margin: 0;
          }
        }
        .o-right{
          overflow: hidden;
          float: right;
          width: 330px;
          .img{
            width: 120px;
            margin: 0;
          }
        }
        .o-con{
          margin: 40px 0;
          line-height: 30px;
        }
      }
      .prize{
        .title-img;
        p{
          text-align: center;
        }
      }
    }
    .bg{
      width: 100%;
      height: 100%;
      background: url(../../../static/img/bg.jpg);
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
</style>
