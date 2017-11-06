<template>
    <div class="index-wrap">
        <div class="bg"></div>
        <div class="mk-content3">
          <div class="banner-3">
            <!-- <img src="../../../static/img/banner.png" alt=""> -->
          </div>
          <div  class="mk-form">
            <p class="title">胡润中国金牌理财师TOP100报名协议</p>
            1.	注册理财师同意主办方在本次活动中收集、储存其向主办方提供的各类信息，包括但不限于身份信息、证件号码、银行账号、联系方式、客户信息等（以下简称“相关信息”）。<br>
            2.	注册理财师同意主办方在本次活动中以下列方式使用其向主办方提供的相关信息，包括但不限于：<br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2.1.	在本次活动中，公示注册理财师的相关信息；<br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2.2.	向主办方的合作机构提供注册理财师的相关信息；<br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2.3.	由人工或自动程序对注册理财师的相关信息进行评估、分析、研究；<br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2.4.	其他为本活动目的的合理使用。<br>
            3.	主办方不会向其他第三方披露或共享注册理财师向主办方提供的相关信息，但以下情形除外：<br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3.1.	注册理财师自行披露或同意披露的；<br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3.2.	按照有关法律法规的要求，主办方应当披露或提供的；<br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3.3.	行政机关或司法机关基于法定程序，要求披露或提供的；<br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3.4.	为维护社会公众的利益需要披露或提供的。<br>
            4.	主办方将采取行业标准管理保护注册理财师的相关信息，包括建立相应的信息保护机制、使用相应的信息保护设备等。但上述保护措施可能受限于技术限制而不能确保您的信息不会通过本说明中未列明的途径泄露，主办方不承担因此而导致的任何损失或责任。<br>
          </div >
        </div>
    </div>
</template>

<script>
import { isMobile,weixinShare } from '../../assets/js/common.js'

    export default {
        data: function(){
            return {}
        },
        methods: {
        }
    }
</script>

<style lang="less">
  @media screen and (max-width:750px) {
    .banner-3{
      display: none;
    }
    .mk-content3 {
      width: 90%;
    }
    .banner-3{
      width: 100%;
      height: 12rem;
      background: url(../../../static/img/m-banner.png);
      background-size: 100%;
    }
    .title{
      color: @font_color;
      font-size: 21px;
      text-align: center;
      line-height: 30px;
      font-family: STKaiti;
      margin-bottom: 20px;
      margin-top: -20px;
    }
  }
  @media screen and (min-width:750px) {
    .mk-content3 {
      width: 800px;
    }
    .banner-3{
      width: 100%;
      height: 246px;
      background: url(../../../static/img/banner.png);
      background-size: 100%;
    }
    .title{
      color: @font_color;
      font-size: 30px;
      text-align: center;
      line-height: 50px;
      font-family: STKaiti;
      margin-bottom: 20px;
    }
  }
  @back_color:#121416;
  @font_color:#eab966;
  .index-wrap{
    min-height: 100%;
    font-size: 16px;
    color: #fff;
    background: #000;
    text-align: justify;
    .mk-content3{
      position: relative;
      z-index: 8;
      margin: auto;
      overflow: auto;
      height: auto;
      .banner{
        img{
          width: 100%;
          overflow: hidden;
        }
      }
      .mk-form{
        font-size: 14px;
        line-height: 30px;
        background: @back_color;
        margin: 30px auto;
        padding:35px 24px;
      }
    }
    .banner{

    }
  }
  .bg{
    width: 100%;
    height: 100%;
    background: url(../../../static/img/bg.jpg);
    background-size: 100% 100%;
    position: fixed;
  }
  .el-select-dropdown{
    border: 1px solid @font_color !important;
    background-color:#000 !important;
    color: #fff !important;
    min-width: 80px !important;
    margin-left: 163px;
    text-align: center !important;
  }
  .el-select-dropdown__item{
    color: #fff;
  }
  .el-select-dropdown__item.selected{
    background: @font_color;
  }
  .el-select-dropdown__item:hover{
    background: @font_color;
    color: #000;
  }
  .el-upload-list__item{
    margin-top: -30px !important;
    width: 100%;
    height: 30px;
  }
  .el-upload-list{
    margin-left: 70px;
  }
  .el-upload__tip{
    color: #ccc;
  }
  .el-button{
    border: none;
    border-radius: 0;
  }
  .el-checkbox__input.is-checked .el-checkbox__inner{
    background-color: @font_color;
    border-color:@font_color;
  }
  .el-checkbox__inner{
    background: none;
  }
  .el-checkbox{
    color: #fff;
    margin-left: 100px;
  }
  .protocol{
    color: #ddd;
    cursor: pointer;
    font-size: 14px;
    margin-left: 20px;
    &:hover{
      color: @font_color;
    }
  }
</style>
