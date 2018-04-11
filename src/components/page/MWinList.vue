<template>
    <div class="index-wrap">
        <div class="bg"></div>
				<img class="banner" src="../../../static/img/banner-2.png" alt="">
				<img class="mk-title" src="../../../static/img/zltjmd.png" alt="">
        <div class="mk-content-2">
          <el-form  class="mk-form" ref="ruleForm">
						<ul>
							<li class="first-li">
								<span class="name">姓名</span>
								<span class="position">职务</span>
								<span class="company">公司名称</span>
							</li>
							<li v-for="(item,index) in dataList.data" :key="index" class="other-li">
								<span class="name">{{item.name}}</span>
								<span class="position">{{item.position}}</span>
								<span class="company">{{item.company}}</span>
							</li>
						</ul>
          </el-form >
        </div>
				<div class="mk-content-2-1">
          <el-form  class="mk-form" ref="ruleForm">
						<img style="width:100%;display:block;overflow: hidden;" src="../../../static/img/bottom-img.png" alt="">
          </el-form >
        </div>
    </div>
</template>

<script>
	import dataList from '../../../static/win-list.json'
    export default {
        data: function(){
            var checkMobile = (rule, value, callback) => {
              if (!value) {
                return callback(new Error('手机号不能为空'));
              }
              setTimeout(() => {
                if (!/^1(3|4|5|7|8)[0-9]\d{8}$/.test(value)) {
                  callback(new Error('请输入正确的手机号'));
                }else{
                  callback();
                }
              }, 500);
            };
            var checkLength = (rule, value, callback) => {
              if (!value) {
                return callback(new Error('不能为空'));
              }
              setTimeout(() => {
                if (value.length>100) {
                  callback(new Error('长度超出限定，请适当缩减'));
                }else{
                  callback();
                }
              }, 500);
            };
            return {
                checked: true,
                url:"http://api.kofuf.com/api/licaishi/submit",
                fileList: [
                  // {name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}
                ],
								btndisabled:false,
								dataList
            }
        },
        methods: {
            uploadFileError(){
              this.$message('失败，检查文件大小是否超出限制');
            },
            protocol(){
              this.$router.push('/protocol');
            },
        }
    }
</script>

<style lang="less">
  @back_color:#121416;
  @font_color:#eab966;
  .index-wrap{
    font-size: 16px;
    color: #fff;
    background: #000;
    .mk-content-2{
      position: relative;
      z-index: 8;
      margin: 0 .28rem;
      overflow: hidden;
      box-sizing: border-box;
      // height: auto;
      .banner{
				left: .66rem;
        img{
          width: 100%;
          overflow: hidden;
        }
      }
      .mk-form{
        background: @back_color;
        margin: 30px auto;
        padding: 10px 24px 35px;
        position: relative;
      }
    }
    .bg{
      width: 100%;
      height: 100%;
      background: url(../../../static/img/m-bg.jpg);
      background-size: 100% 100%;
      position: fixed;
		}
		.mk-content-2-1{
      position: relative;
      z-index: 8;
      margin: 0 .28rem;
      overflow: hidden;
			box-sizing: border-box;
			.mk-form{
        background: @back_color;
        margin: 30px auto;
        padding:15px 14px;
        position: relative;
      }
		}
  }

  .m-active-btn-2{
    height: 1rem;
    width: 100%;
    color: #333;
    text-align: center;
    background: #ebbc6d;
    position: fixed;
    bottom: 0;
    z-index: 1000;
    font-size: 18px;
  }
  .el-button:focus, .el-button:hover{
    color: #333;
  }
  .el-checkbox__input.is-checked .el-checkbox__inner{
    background-color: @font_color;
    border-color:@font_color;
  }
  .el-checkbox__inner{
    background: none;
  }
  .el-checkbox{
    color: #ddd;
    margin-left: 0;
  }
  .protocol{
    color: #fff;
    cursor: pointer;
    font-size: 14px;
    margin-left: 5px;
    &:hover{
      color: @font_color;
    }
  }
  .el-message-box{
    max-width: 400px;
    width: auto;
	}
	.banner{
		width: 100%;
		display: block;
		position: relative;
		left: 0.66rem;
	}
	.index-wrap{
		img{
			display: block;
			position: relative;
			width: 100%;
		}
		.mk-title{
			width: 80%;
			margin: auto;
		}
	}
	.first-li{
		line-height: 28px;
		margin: auto;
		display: block;
		overflow: hidden;
		font-size: 16px;
		list-style: none;
		color: #e9c381;
		.name{
			width: 1rem;
			display: block;
			float: left;
		}
		.position{
			text-align: justify;
			width: 2.02rem;
			display: block;
			float: left;
		}
		.company{
			text-align: justify;
			width: 2.6rem;
			display: inline-block;
		}
	}
	.other-li{
		display: block;
		overflow: hidden;
		line-height: 20px;
		margin: auto;
		color: #fff;
		list-style: none;
		font-size: 12px;
		.name{
			width: 1rem;
			display: block;
			float: left;
		}
		.position{
			text-align: justify;
			width: 2.02rem;
			display: block;
			float: left;
		}
		.company{
			text-align: justify;
			width: 2.6rem;
			display: inline-block;
		}
	}
</style>
