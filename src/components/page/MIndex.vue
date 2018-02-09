<template>
    <div class="index-wrap-m">
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
              <img class="title-center-33" src="../../../static/img/02.png" alt="">
							<div class="video-box">
								<video controls ref="videoRef" name="media" poster="https://static1.kofuf.com/1516938269960.jpeg" src="https://video.kofuf.com/1516937881390.mp4"></video>
								<ul>
									<li @click="selectVideo('https://video.kofuf.com/1516937881390.mp4','https://static1.kofuf.com/1516938269960.jpeg')">
										<img src="https://static1.kofuf.com/1516938269960.jpeg" alt="">
										<p>评审长老团：理财新时代来了！</p>
									</li>
									<li @click="selectVideo('https://video.kofuf.com/1516766333847.mp4','https://static1.kofuf.com/1516704309050.jpeg')">
										<img src="https://static1.kofuf.com/1516704309050.jpeg" alt="">
										<p>李清昊：为什么越来越多的人把赚的钱给他管？</p>
									</li>
									<li @click="selectVideo('https://video.kofuf.com/1516766419723.mp4','https://static2.kofuf.com/1516774364284.jpeg')">
										<img src="https://static2.kofuf.com/1516774364284.jpeg" alt="">
										<p>李清昊：想要成为优秀的理财师，这些“技能”都要点满</p>
									</li>
									<li @click="selectVideo('https://video.kofuf.com/1516767116314.mp4','https://static1.kofuf.com/1516774372372.jpeg')">
										<img src="https://static1.kofuf.com/1516774372372.jpeg" alt="">
										<p>黄凡：在100万亿理财市场的公路上，我是拉风的拖拉机手</p>
									</li>
									<li @click="selectVideo('https://video.kofuf.com/1518078087505.mp4','https://static1.kofuf.com/1518077868646.jpeg')">
										<img src="https://static1.kofuf.com/1518077868646.jpeg" alt="">
										<p>黄凡：银行或将打破刚性兑付，资产配置需要记住这三点</p>
									</li>
									<li @click="selectVideo('http://video.kofuf.com/1518082803068.mp4','https://static1.kofuf.com/1518077916031.jpeg')">
										<img src="https://static1.kofuf.com/1518077916031.jpeg" alt="">
										<p>姚伟示：投资机构那么多，理财需求升级了，心态怎么升级？</p>
									</li>
								</ul>
							</div>
              <!-- <p class="ad-con">
                凡持有CFP、AFP资格认证、理财规划师或相关资格认证，符合国家相关理财从业资格标准的专业理财师，无地域限制，均可报名参加；<br>
                本次评选活动面向银行、保险、证券、基金、投资、信托、第三理财、综合理财等机构的理财精英。
              </p> -->
              <img class="title-center plus" src="../../../static/img/03.png" alt="">
              <p class="ad-con">
                本着公平、公正、透明、权威的原则，2017《胡润中国金牌理财师TOP100》共设置了全国报名、复赛、全国终审和暨颁奖礼四个环节。
              </p>
            </div>
            <el-collapse accordion>
              <el-collapse-item>
                <template slot="title">
                  <span class="cle-1"></span>
                  <p class="p-title">全国报名阶段</p>
                  <p class="p-date">2017年10月31日-2017年12月31日</p>
                </template>
                <div>·	网络报名——理财师通过本次活动指定报名渠道填写报名资料。</div>
                <div>·	本次评审长老团推荐精英理财师——每位长老团成员推荐精英理财师不超过5位。</div>
              </el-collapse-item>
							 <el-collapse-item>
                <template slot="title">
                  <span class="cle-2"></span>
                  <p class="p-title">初选阶段</p>
                  <p class="p-date">2018年1月1日-2018年1月15日</p>
                </template>
                <div>·	确认候选理财师名单，评审长老团根据真实报名资料，综合选拔约1000名选手进入复赛。主办方于2018年1月15日前公布初选结果，并通知入围理财师参与下一轮比赛。</div>
              </el-collapse-item>
              <el-collapse-item>
                <template slot="title">
                  <span class="cle-2"></span>
                  <p class="p-title">复赛阶段</p>
                  <p class="p-date">2018年1月16日-2018年2月15日</p>
                </template>
                <div>·	对进入复赛理财师进行报名材料真实性调查，若与事实不符，将取消参赛资格。</div>
                <div>·	同时评审长老团将从候选理财师的专业性、技能、职业素质、资格职称、从业年限、学历、荣誉、服务质量、同行口碑等角度进行综合打分，根据最终得分选拔出前200位精英理财师进入总决赛。</div>
              </el-collapse-item>
              <el-collapse-item >
                <template slot="title">
                  <span class="cle-3"></span>
                  <p class="p-title">全国终审</p>
                  <p class="p-date">2018年2月16日-2018年3月1日</p>
                </template>
                <div>·	活动主动方同时会通过调研，全面、深入了解中国理财师行业发展现状、特点及趋势，通过理财者、行业权威专家和相关研究院深度访谈调研，制定一份帮助理财者快速甄选优秀理财师的指南手册。</div>
                <div>·	最终根据优秀理财师的指南手册、理财者报名材料、评审长老团评议结果，遴选出2017《胡润中国金牌理财师TOP100》榜单，并通过最大限度的媒体曝光，为行业树立标杆和增强行业影响力。</div>
              </el-collapse-item>
							<!-- <el-collapse-item >
                <template slot="title">
                  <span class="cle-4"></span>
                  <p class="p-title">白皮书发布</p>
                  <p class="p-date">2018年3月6日</p>
                </template>
              </el-collapse-item> -->
              <el-collapse-item >
                <template slot="title">
                  <span class="cle-4"></span>
                  <p class="p-title">TOP100理财师颁奖礼</p>
                  <p class="p-date">2018年3月21日</p>
                </template>
                <div>·	胡润·金牌理财师榜单及白皮书发布</div>
                <div>·	2017《中国理财师特别报告》发布会</div>
                <div>·	2017《胡润金牌理财师TOP100》发布会</div>
              </el-collapse-item>
            </el-collapse>
            <!-- <div class="ad-bg-2">
              <img class="title-center" src="../../../static/img/04.png" alt="">
              <p class="ad-con">
                1）本次评选邀请了40位财富管理业内最顶尖的专家组成评委委员会，组成中国最权威的财富管理“长老团”推荐他们心中最优秀的理财师候选人。<br><br>
                2）自荐候选人可点击下方“立即报名”按钮，填写申请，同时附上2位业内专家的推荐评语，即可参与甄选。
              </p>
              <img class="title-center" src="../../../static/img/05.png" alt="">
              <p class="ad-con">
                本次评选还将由胡润、***、***等重量级嘉宾共同组成最专业、权威的组委会，以多维度多、方位的指标考核参赛选手，最终挑选出100位各领域里的精英理财师，并于 1月15日盛大举办颁奖典礼。
              </p>
            </div> -->
            <div class="ad-bg-3">
              <img class="title-center" src="../../../static/img/08.png" alt="">
              <p class="ad-con center-ad-con">
                胡润·中国金牌理财师TOP100
              </p>
              <img class="title-center" src="../../../static/img/07.png" alt="">
              <img class="title-center-2" src="../../../static/img/logo_hurun.png" alt="">
              <p class="ad-con">
                胡润百富，是一个拥有中国高净值人群垂直类大数据，由首席调研员胡润带领的专业数据调研机构。胡润百富拥有丰富的高端调研经验和资源，为众多行业提供全方位深度专业权威的调查服务。
              </p>
              <img class="title-center" src="../../../static/img/06.png" alt="">
              <img class="title-center-2" src="../../../static/img/logo_meixin.png" alt="">
              <p class="ad-con">
                美信全球（原美信金融，以下简称“美信”）是一个基于互联网的全球投资产品展示和交易平台。自2015年成立于纽约以来，美信已经在北京、上海、深圳、广州、成都、重庆、杭州、太原等多处开设办事处，依托核心产品MX Terminal为理财顾问公司、金融机构、拥有高净值客户的非金融机构等提供一站式服务，逐步成长为行业领先的全球资产服务和交易解决方案提供商，并吸引了大批优质全球资管方挂牌入驻美信平台，致力于将全球资产配置智慧植根于全球财富管理市场。
              </p>
              <img class="title-center-2" src="../../../static/img/logo_kofuf.png" alt="">
              <p class="ad-con">
                “功夫财经”于2015年11正式上线，由中国知名财经媒体人王牧笛创立。“功夫财经”定位于国民财商提升者，两年内迅速奠定了国内财经新媒体头部平台的地位。平台集结了马光远、王福重、时寒冰、李大霄、胡润、琢磨先生、肖锋等国内最强的经济学者天团，以及数位金融及投资领域KOL，通过音频、短视频、时评文章、财经脱口秀、付费知识内容、线下大课、游学等多种产品形态，致力服务于新中产阶层及较高净值人群，打造国内最活跃的财富社群，立足成为链接内容、社群与撮合交易一站式新型金融服务商。
              </p>
              <img class="title-center" src="../../../static/img/09.png" alt="">
              <img class="img-1 title-center-3" src="../../../static/img/xz01.png" alt="">
              <p class="ad-con">
                春光里创投中心旗下顶级私人财富管理机构，专注于为高净值客户提供创新财富管理服务的平台。
              </p>
              <img class="img-2 title-center-3" src="../../../static/img/xz02.png" alt="">
              <p class="ad-con">
                  理亿理，是为高端客户提供资产配置的专业理财师平台，通过“智能投顾+全面的金融产品”打造线上独立理财师工作室。
              </p>
              <img class="img-3 title-center-3" src="../../../static/img/xz03.png" alt="">
              <p class="ad-con">
                财联邦是首家专注海外资产配置行业的服务商，提供海外资产配置的一站式解决方案。
              </p>
              <img class="img-4 title-center-3" src="../../../static/img/xz04.png" alt="">
              <p class="ad-con">
                财意志是中国领先的高端保险理财师专业精进、跨界融合平台，并致力于在财富管理领域充分运用互联网和智能科技。
              </p>
              <img class="img-4 title-center-3" src="../../../static/img/xz05.png" alt="">
              <p class="ad-con">
                深圳市慢钱网络科技有限公司成立于2013年，集资产管理、财富管理、金融科技于一体，是现代综合型互联网私人银行的卓越先行者。
              </p>
              <!-- <div class="xzjg">
                <img class="img-1 img" src="../../../static/img/xz01.png" alt="">
                <img class="img-2 img" src="../../../static/img/xz02.png" alt="">
                <img class="img-3 img" src="../../../static/img/xz03.png" alt="">
                <img class="img-4 img" src="../../../static/img/xz04.png" alt="">
              </div> -->
            </div>
          </div>
        </div>
        <router-link class="m-active-btn" :to="{ path: '/m-win-list',query: { channel: channel }}">金牌理财师复赛入选名单</router-link>
    </div>
</template>

<script>
import { isMobile,weixinShare } from '../../assets/js/common.js'
    export default {
        data: function(){
            return {
              channel:this.$route.query.channel||"kofuf"
            }
        },
        mounted () {
          if (!isMobile()) {
            this.$router.push('/index/?channel='+this.$route.query.channel);
          }
          var data={
            title:'理财师 222- 功夫财经',
            link:'http://licaishi.hurun.com',
            imgUrl:'http://m.51xy8.com/static/img_h5/h5_logo.png',
            desc:"胡润中国金牌理财师TOP100"
          }
          weixinShare(this.$axios,data);
        },
        methods: {
					selectVideo(video,img){
						let videoDom = this.$refs.videoRef
						videoDom.src = video
						videoDom.poster = img
					}
        }
    }
</script>

<style lang="less">
  @back_color:#1b1d1f;
  @font_color:#ebbc6c;
  .index-wrap-m{
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
          width: 2.4rem;
				}
				.title-center-33{
          margin: auto;
          display: block;
          width: 4.4rem;
        }
        .title-center.plus{
          width: 4.3rem;
        }
        .title-center-2{
          margin: 20px auto 0;
          display: block;
          width:2rem;
        }
        .title-center-3{
          margin: 0px auto 0;
          display: block;
        }
        .ad-con{
          position: relative;
          height: auto;
          padding: .5rem .25rem;
          box-sizing: border-box;
          line-height: 26px;
          font-size: 14px;
        }
        .ad-con.center-ad-con{
          text-align: center;
          color: #fff;
          font-size: 16px;
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
		.video-box{
			video{
				height: 4.2rem;
				width: 100%;
				display: block;
				margin: 20px 0;
				box-sizing: border-box;
				padding: 0 10px;
			}
			ul{
				margin: 0 0 40px;
				li{
					height: 80px;
					padding: 8px 10px;
					box-sizing: border-box;
					img{
						width: 118px;
						height: 69px;
						display: block;
						overflow: hidden;
						float: left;
						opacity: 0.8;
					}
					p{
						margin-left: 130px;
						line-height: 24px;
						font-size: 14px;
						color: #fff;
					}
				}
			}
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
  .xzjg{
    width: 100%;
    height: auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: .5rem;
  }
  .img{
    display: block;
  }
  .img-1{
    width: 1.5rem;
  }
  .img-2{
    width: 1.05rem;
  }
  .img-3{
    width: 1.5rem;
  }
  .img-4{
    width: 2.875rem;
  }
  .el-collapse-item__header{
    height: auto;
    padding: 10px 0 10px 15px;
  }
  .el-collapse-item__header__arrow{
    position: absolute;
    right: 28px;
    margin-top: 25px;
    color: @font_color;
  }
  .el-collapse-item__header{
    position: relative;
    span{
      width: 8px;
      height: 8px;
      border-radius: 5px;
      background: @font_color;
      position: absolute;
      top: 25px;
      left: -4px;
    }
    .cle-2{
      top: 25px;
    }
    .cle-3{
      top: 25px;
    }
    .cle-4{
      top: 25px;
    }
    .p-title{
      color: @font_color;
      font-size: 14px;
      line-height: 30px;
    }
    .p-date{
      line-height: 20px;
      color: #ddd;
      font-size: 12px;
    }
  }
  .el-collapse{
    border: none;
    border-left: 1px @font_color solid;
    margin-left: 15px;
    margin-top: 20px;
  }
  .el-collapse-item__header,.el-collapse-item__wrap{
    border: none;
    background: none;
  }
  .el-collapse-item__content{
    color: #ddd;
  }
</style>
