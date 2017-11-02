<template>
    <div class="index-wrap">
        <div class="bg"></div>
        <div class="mk-content-2">
          <el-form  class="mk-form" :model="ruleForm" :rules="rules" ref="ruleForm">
            <img class="mk-title" src="../../../static/img/bm.png" alt="">
            <img class="img-1" src="../../../static/img/bm1.png" alt="">
            <div class="box-form">
              <div class="mk-input">
                <p class="name">姓名</p>
                <el-form-item prop="name">
                  <el-input type="input" placeholder="" v-model="ruleForm.name"> </el-input>
                </el-form-item>
              </div>
              <div class="mk-input">
                <p class="name">性别</p>
                <el-form-item prop="name">
                  <el-select prop="sex" v-model="ruleForm.sex" placeholder="">
                    <el-option
                      v-for="item in options"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                  </el-select>
                </el-form-item>
              </div>
              <div class="mk-input">
                <p class="name">年龄</p>
                <el-form-item prop="age">
                  <el-input type="input" placeholder="" v-model="ruleForm.age"> </el-input>
                </el-form-item>
              </div>
              <div class="mk-input">
                <p class="name">工作城市</p>
                <el-form-item prop="city">
                  <el-input type="input" placeholder="" v-model="ruleForm.city"> </el-input>
                </el-form-item>
              </div>
              <div class="mk-input">
                <p class="name">手机号</p>
                <el-form-item prop="phone">
                  <el-input type="input" placeholder="" v-model="ruleForm.phone"> </el-input>
                </el-form-item>
              </div>
              <div class="mk-input">
                <p class="name">邮箱</p>
                <el-form-item prop="email">
                  <el-input type="input" placeholder="" v-model="ruleForm.email"> </el-input>
                </el-form-item>
              </div>
              <div class="mk-input">
                <p class="name">学历</p>
                <el-form-item prop="grade">
                  <!-- options_grade -->
                  <!-- <el-input type="input" placeholder="" v-model="ruleForm.grade"> </el-input> -->
                  <el-select prop="grade" v-model="ruleForm.grade" placeholder="">
                    <el-option
                      v-for="item in options_grade"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                  </el-select>
                </el-form-item>
              </div>
              <div class="mk-input">
                <p class="name">专业</p>
                <el-form-item prop="profession">
                  <el-input type="input" placeholder="" v-model="ruleForm.profession"> </el-input>
                </el-form-item>
              </div>
              <div class="mk-input line-100">
                <p class="name">毕业学院</p>
                <el-form-item prop="school">
                  <el-input type="input" placeholder="" v-model="ruleForm.school"> </el-input>
                </el-form-item>
              </div>
            </div>
            <img class="img-2" src="../../../static/img/bm2.png" alt="">
            <div class="box-form">
              <div class="mk-input">
                <p class="name">职务</p>
                <el-form-item prop="job">
                  <el-input type="input" autosize placeholder="" v-model="ruleForm.job"> </el-input>
                </el-form-item>
              </div>
              <div class="mk-input">
                <p class="name">本职务相关工作年限</p>
                <el-form-item prop="job_age">
                  <el-input type="input" autosize placeholder="" v-model="ruleForm.job_age"> </el-input>
                </el-form-item>
              </div>
              <div class="mk-input">
                <p class="name">行业</p>
                <el-form-item prop="industry">
                  <el-input type="input" autosize placeholder="" v-model="ruleForm.industry"> </el-input>
                </el-form-item>
              </div>
              <div class="mk-input">
                <p class="name">职业等级</p>
                <el-form-item prop="job_level">
                  <el-input type="input" autosize placeholder="" v-model="ruleForm.job_level"> </el-input>
                </el-form-item>
              </div>
              <div class="mk-input line-100">
                <p class="name">资格评级证书<span style="font-size:12px;color:#ccc;">（点击添加图片，且不超过10M）</span></p>
                <el-upload
                  class="upload-img"
                  action="http://api.kofuf.com/api/upload/normal"
                  :headers="{token:'751fc99cd6ca42ddba3e31ead852df32'}"
                  :multiple="false"
                  :on-preview="handlePreview"
                  :on-remove="handleRemove"
                  :file-list="fileList"
                  :on-success="fileSuccess"
                  :disabled="ruleForm.certificate!=''">
                  <div v-if="ruleForm.certificate==''">
                    <el-button size="small" type="primary">点击上传</el-button>
                  </div>
                  <div v-else>
                    <el-button size="small" :disabled="true" type="primary">已&nbsp;上&nbsp;传</el-button>
                  </div>
                </el-upload>
              </div>
              <div class="mk-input line-100">
                <p class="name">专长领域</p>
                <el-form-item prop="domain">
                  <el-input type="textarea" autosize placeholder="" v-model="ruleForm.domain"> </el-input>
                </el-form-item>
              </div>
              <div class="mk-input line-100">
                <p class="name">公司名称</p>
                <el-form-item prop="company_name">
                  <el-input type="textarea" autosize placeholder="" v-model="ruleForm.company_name"> </el-input>
                </el-form-item>
              </div>
              <div class="mk-input line-100">
                <p class="name">公司地址</p>
                <el-form-item prop="company_address">
                  <el-input type="textarea" autosize placeholder="" v-model="ruleForm.company_address"> </el-input>
                </el-form-item>
              </div>
            </div>
            <img class="img-3" src="../../../static/img/bm3.png" alt="">
            <p class="tuijian-1">推荐人1</p>
            <div class="box-form">
              <div class="mk-input">
                <p class="name">姓名</p>
                <el-form-item prop="rec1_name">
                  <el-input type="input" autosize placeholder="" v-model="ruleForm.rec1_name"> </el-input>
                </el-form-item>
              </div>
              <div class="mk-input">
                <p class="name">联系方式</p>
                <el-form-item prop="rec1_phone">
                  <el-input type="input" autosize placeholder="" v-model="ruleForm.rec1_phone"> </el-input>
                </el-form-item>
              </div>
              <div class="mk-input">
                <p class="name">邮箱</p>
                <el-form-item prop="rec1_email">
                  <el-input type="input" autosize placeholder="" v-model="ruleForm.rec1_email"> </el-input>
                </el-form-item>
              </div>
              <div class="mk-input line-100">
                <p class="name">推荐语</p>
                <el-form-item prop="rec1_intro">
                  <el-input type="textarea" autosize placeholder="" v-model="ruleForm.rec1_intro"> </el-input>
                </el-form-item>
              </div>
            </div>
            <p class="tuijian-1">推荐人2</p>
            <div class="box-form">
              <div class="mk-input">
                <p class="name">姓名</p>
                <el-form-item prop="rec2_name">
                  <el-input type="input" autosize placeholder="" v-model="ruleForm.rec2_name"> </el-input>
                </el-form-item>
              </div>
              <div class="mk-input">
                <p class="name">联系方式</p>
                <el-form-item prop="rec2_phone">
                  <el-input type="input" autosize placeholder="" v-model="ruleForm.rec2_phone"> </el-input>
                </el-form-item>
              </div>
              <div class="mk-input">
                <p class="name">邮箱</p>
                <el-form-item prop="rec2_email">
                  <el-input type="input" autosize placeholder="" v-model="ruleForm.rec2_email"> </el-input>
                </el-form-item>
              </div>
              <div class="mk-input line-100">
                <p class="name">推荐语</p>
                <el-form-item prop="rec2_intro">
                  <el-input type="textarea" autosize placeholder="" v-model="ruleForm.rec2_intro"> </el-input>
                </el-form-item>
              </div>
            </div>
          </el-form >
        </div>
        <el-button :disabled="btndisabled" class="m-active-btn-2" @click="submitForm('ruleForm')">确认报名</el-button>
    </div>
</template>

<script>
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
                url:"http://api.kofuf.com/api/licaishi/submit",
                fileList: [
                  // {name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}
                ],
                btndisabled:false,
                options: [{
                  value: '男',
                  label: '男'
                }, {
                  value: '女',
                  label: '女'
                }],
                options_grade: [{
                  value: '专科',
                  label: '专科'
                },{
                  value: '本科',
                  label: '本科'
                }, {
                  value: '硕士',
                  label: '硕士'
                },{
                  value: '博士',
                  label: '博士'
                }],
                ruleForm: {
                    name: '',
                    sex: '',
                    age: '',
                    city: '',
                    phone: '',
                    email: '',
                    grade: '',
                    profession: '',
                    school: '',
                    job: '',
                    job_age: '',
                    industry: '',
                    job_level: '',
                    certificate: "",
                    domain: '',
                    company_name: '',
                    company_address: '',
                    rec1_name: '',
                    rec1_phone: '',
                    rec1_email: '',
                    rec1_intro: '',
                    rec2_name: '',
                    rec2_phone: '',
                    rec2_email: '',
                    rec2_intro: '',
                    channel:this.$route.query.channel
                },
                rules: {
                    age: [
                      { required: true, message: '年龄不能为空', trigger: 'blur' },
                      { validator: checkLength, trigger: 'blur' }
                    ],
                    name: [
                        { validator: checkLength, trigger: 'blur' }
                    ],
                    certificate: [
                        { validator: checkLength, trigger: 'blur' }
                    ],
                    city: [
                        { validator: checkLength, trigger: 'blur' }
                    ],
                    company_address: [
                        { validator: checkLength, trigger: 'blur' }
                    ],
                    company_name: [
                        { validator: checkLength, trigger: 'blur' }
                    ],
                    domain: [
                        { validator: checkLength, trigger: 'blur' }
                    ],
                    email: [
                        { required: true, message: '不能为空！', trigger: 'blur' },
                        { type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur,change' }
                    ],
                    grade: [
                        { validator: checkLength, trigger: 'change' }
                    ],
                    industry: [
                        { validator: checkLength, trigger: 'blur' }
                    ],
                    job: [
                        { validator: checkLength, trigger: 'blur' }
                    ],
                    job_age: [
                        { validator: checkLength, trigger: 'blur' }
                    ],
                    job_level: [
                        { validator: checkLength, trigger: 'blur' }
                    ],
                    phone: [
                        { validator: checkMobile, trigger: 'blur' }
                    ],
                    profession: [
                        { validator: checkLength, trigger: 'blur' }
                    ],
                    rec1_email: [
                        { required: true, message: '不能为空！', trigger: 'blur' },
                        { type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur,change' }
                    ],
                    rec1_intro: [
                        { validator: checkLength, trigger: 'blur' }
                    ],
                    rec1_name: [
                        { validator: checkLength, trigger: 'blur' }
                    ],
                    rec1_phone: [
                        { validator: checkMobile, trigger: 'blur' }
                    ],
                    rec2_email: [
                        { required: true, message: '不能为空！', trigger: 'blur' },
                        { type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur,change' }
                    ],
                    rec2_intro: [
                        { validator: checkLength, trigger: 'blur' }
                    ],
                    rec2_name: [
                        { validator: checkLength, trigger: 'blur' }
                    ],
                    rec2_phone: [
                        { validator: checkMobile, trigger: 'blur' }
                    ],
                    school: [
                        { validator: checkLength, trigger: 'blur' }
                    ],
                    sex: [
                        { validator: checkLength, trigger: 'change' }
                    ],
                }
            }
        },
        methods: {
            handleRemove(file, fileList) {
              this.ruleForm.certificate="";
              console.log(file, fileList);
            },
            handlePreview(file) {
              console.log(file);
              window.open(file.response.url)
            },
            fileSuccess(data){
              this.ruleForm.certificate=data.url;
            },
            submitForm(formName) {
                const self = this;
                self.$refs[formName].validate((valid) => {
                    if (valid) {
                        if (self.ruleForm.certificate=="") {
                          this.$message('请上传证书');
                          return
                        }
                        self.btndisabled=true;
                        self.$axios.post(self.url, self.ruleForm).then((res) => {
                            if (res.data.status==0) {
                              this.$alert('报名成功，请等待通知！', '提示', {
                                 confirmButtonText: '确定'
                              });

                              self.$router.push('/index');
                            }else{
                              self.btndisabled=false;
                              this.$message(res.data.error);
                            }
                        })
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            }
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
        img{
          width: 100%;
          overflow: hidden;
        }
      }
      .mk-form{
        background: @back_color;
        margin: 30px auto;
        padding:35px 24px;
        position: relative;
        .mk-title{
          width: 100%;
          margin:0 auto 50px;
          display: block;
        }
        .img-1{
          width:2.39rem;
          display: block;
          margin: 10px 0;
        }
        .img-2{
          width:2.39rem;
          display: block;
          margin: 10px 0;
        }
        .img-3{
          width:2.44rem;
          display: block;
          margin: 10px 0;
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
  .box-form{
    margin-left: 0px;
    overflow: hidden;
    .mk-input{
      width: 100%;
      margin-left: 0px;
      float: left;
      overflow: hidden;
      .name{
        color: @font_color;
        line-height: 35px;
      }
      .el-input__inner{
        border: none !important;
        border-bottom: 1px #ccc solid !important;
        background: none !important;
        color: #fff !important;
        border-radius:0px !important;
        height: 38px !important;
      }
      .el-textarea__inner{
        border: none !important;
        border-bottom: 1px #ccc solid !important;
        background: none !important;
        color: #fff !important;
        border-radius:0px !important;
        resize:none;
      }
      .el-select {
        width: 100%;
      }
      .el-upload--text{
        border:none;
        width: auto;
        height: auto;
      }
      .el-button--primary{
        background: @font_color;
        border-color: @font_color;
        color: #333;
        &:hover{
          background: #ecc480;
        }
      }

    }
    .mk-input.line-100{
      // width: 557px;
    }
    .upload-img{
      margin: 10px 0px;
    }
  }
  .tuijian-1{
    line-height: 40px;
    font-size: 18px;
    margin-left: 0px;
    position: relative;
  }
  .el-select-dropdown{
    border: 1px solid @font_color !important;
    background-color:#000 !important;
    color: #fff !important;
    // min-width: 80px !important;
    // margin-left: 163px;
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
</style>
