webpackJsonp([3],{511:function(e,t,r){r(556);var a=r(198)(r(535),r(552),null,null);e.exports=a.exports},523:function(e,t,r){e.exports=r.p+"static/img/bm.c4666b4.png"},524:function(e,t,r){e.exports=r.p+"static/img/bm1.f8953aa.png"},525:function(e,t,r){e.exports=r.p+"static/img/bm2.6c0d6bd.png"},526:function(e,t,r){e.exports=r.p+"static/img/bm3.4b2bbf1.png"},530:function(e,t,r){e.exports=r.p+"static/img/m-bg.6af8140.jpg"},535:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){var e=function(e,t,r){if(!t)return r(new Error("手机号不能为空"));setTimeout(function(){/^1(3|4|5|7|8)[0-9]\d{8}$/.test(t)?r():r(new Error("请输入正确的手机号"))},500)},t=function(e,t,r){if(!t)return r(new Error("不能为空"));setTimeout(function(){t.length>100?r(new Error("长度超出限定，请适当缩减")):r()},500)};return{url:"http://api.kofuf.com/api/licaishi/submit",fileList:[],btndisabled:!1,options:[{value:"男",label:"男"},{value:"女",label:"女"}],options_grade:[{value:"专科",label:"专科"},{value:"本科",label:"本科"},{value:"研究生",label:"研究生"},{value:"博士",label:"博士"}],ruleForm:{name:"",sex:"",age:"",city:"",phone:"",email:"",grade:"",profession:"",school:"",job:"",job_age:"",industry:"",job_level:"",certificate:"",domain:"",company_name:"",company_address:"",rec1_name:"",rec1_phone:"",rec1_email:"",rec1_intro:"",rec2_name:"",rec2_phone:"",rec2_email:"",rec2_intro:""},rules:{age:[{required:!0,message:"年龄不能为空",trigger:"blur"},{validator:t,trigger:"blur"}],name:[{validator:t,trigger:"blur"}],certificate:[{validator:t,trigger:"blur"}],city:[{validator:t,trigger:"blur"}],company_address:[{validator:t,trigger:"blur"}],company_name:[{validator:t,trigger:"blur"}],domain:[{validator:t,trigger:"blur"}],email:[{required:!0,message:"不能为空！",trigger:"blur"},{type:"email",message:"请输入正确的邮箱地址",trigger:"blur,change"}],grade:[{validator:t,trigger:"blur"}],industry:[{validator:t,trigger:"blur"}],job:[{validator:t,trigger:"blur"}],job_age:[{validator:t,trigger:"blur"}],job_level:[{validator:t,trigger:"blur"}],phone:[{validator:e,trigger:"blur"}],profession:[{validator:t,trigger:"blur"}],rec1_email:[{required:!0,message:"不能为空！",trigger:"blur"},{type:"email",message:"请输入正确的邮箱地址",trigger:"blur,change"}],rec1_intro:[{validator:t,trigger:"blur"}],rec1_name:[{validator:t,trigger:"blur"}],rec1_phone:[{validator:e,trigger:"blur"}],rec2_email:[{required:!0,message:"不能为空！",trigger:"blur"},{type:"email",message:"请输入正确的邮箱地址",trigger:"blur,change"}],rec2_intro:[{validator:t,trigger:"blur"}],rec2_name:[{validator:t,trigger:"blur"}],rec2_phone:[{validator:e,trigger:"blur"}],school:[{validator:t,trigger:"blur"}],sex:[{validator:t,trigger:"blur"}]}}},methods:{handleRemove:function(e,t){this.ruleForm.certificate="",console.log(e,t)},handlePreview:function(e){console.log(e),window.open(e.response.url)},fileSuccess:function(e){this.ruleForm.certificate=e.url},submitForm:function(e){var t=this,r=this;r.$refs[e].validate(function(e){return e?""==r.ruleForm.certificate?void t.$message("请上传证书"):(r.btndisabled=!0,void r.$axios.post(r.url,r.ruleForm).then(function(e){0==e.data.status?(t.$alert("报名成功，请等待通知！","提示",{confirmButtonText:"确定"}),r.$router.push("/index")):(r.btndisabled=!1,t.$message(e.data.error))})):(console.log("error submit!!"),!1)})}}}},539:function(e,t,r){t=e.exports=r(86)(void 0),t.push([e.i,".index-wrap{font-size:16px;color:#fff;background:#000}.index-wrap .mk-content-2{position:relative;z-index:8;margin:0 .28rem;overflow:hidden;box-sizing:border-box}.index-wrap .mk-content-2 .banner img{width:100%;overflow:hidden}.index-wrap .mk-content-2 .mk-form{background:#121416;margin:30px auto;padding:35px 24px;position:relative}.index-wrap .mk-content-2 .mk-form .mk-title{width:100%;margin:0 auto 50px;display:block}.index-wrap .mk-content-2 .mk-form .img-1,.index-wrap .mk-content-2 .mk-form .img-2{width:2.39rem;display:block;margin:10px 0}.index-wrap .mk-content-2 .mk-form .img-3{width:2.44rem;display:block;margin:10px 0}.index-wrap .bg{width:100%;height:100%;background:url("+r(530)+");background-size:100% 100%;position:fixed}.box-form,.box-form .mk-input{margin-left:0;overflow:hidden}.box-form .mk-input{width:100%;float:left}.box-form .mk-input .name{color:#eab966;line-height:35px}.box-form .mk-input .el-input__inner{height:38px!important}.box-form .mk-input .el-input__inner,.box-form .mk-input .el-textarea__inner{border:none!important;border-bottom:1px solid #ccc!important;background:none!important;color:#fff!important;border-radius:0!important}.box-form .mk-input .el-textarea__inner{resize:none}.box-form .mk-input .el-select{width:100%}.box-form .mk-input .el-upload--text{border:none;width:auto;height:auto}.box-form .mk-input .el-button--primary{background:#eab966;border-color:#eab966;color:#333}.box-form .mk-input .el-button--primary:hover{background:#ecc480}.box-form .upload-img{margin:10px 0}.tuijian-1{line-height:40px;font-size:18px;margin-left:0;position:relative}.el-select-dropdown{border:1px solid #eab966!important;background-color:#000!important;color:#fff!important;text-align:center!important}.el-select-dropdown__item{color:#fff}.el-select-dropdown__item.selected{background:#eab966}.el-select-dropdown__item:hover{background:#eab966;color:#000}.el-upload-list__item{margin-top:-30px!important;width:100%;height:30px}.el-upload-list{margin-left:70px}.el-upload__tip{color:#ccc}.el-button{border:none;border-radius:0}.m-active-btn-2{height:1rem;width:100%;color:#333;text-align:center;background:#ebbc6d;position:fixed;bottom:0;z-index:1000;font-size:18px}.el-button:focus,.el-button:hover{color:#333}",""])},552:function(e,t,r){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"index-wrap"},[a("div",{staticClass:"bg"}),e._v(" "),a("div",{staticClass:"mk-content-2"},[a("el-form",{ref:"ruleForm",staticClass:"mk-form",attrs:{model:e.ruleForm,rules:e.rules}},[a("img",{staticClass:"mk-title",attrs:{src:r(523),alt:""}}),e._v(" "),a("img",{staticClass:"img-1",attrs:{src:r(524),alt:""}}),e._v(" "),a("div",{staticClass:"box-form"},[a("div",{staticClass:"mk-input"},[a("p",{staticClass:"name"},[e._v("姓名")]),e._v(" "),a("el-form-item",{attrs:{prop:"name"}},[a("el-input",{attrs:{type:"input",placeholder:""},model:{value:e.ruleForm.name,callback:function(t){e.$set(e.ruleForm,"name",t)},expression:"ruleForm.name"}})],1)],1),e._v(" "),a("div",{staticClass:"mk-input"},[a("p",{staticClass:"name"},[e._v("性别")]),e._v(" "),a("el-form-item",{attrs:{prop:"name"}},[a("el-select",{attrs:{prop:"sex",placeholder:""},model:{value:e.ruleForm.sex,callback:function(t){e.$set(e.ruleForm,"sex",t)},expression:"ruleForm.sex"}},e._l(e.options,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}))],1)],1),e._v(" "),a("div",{staticClass:"mk-input"},[a("p",{staticClass:"name"},[e._v("年龄")]),e._v(" "),a("el-form-item",{attrs:{prop:"age"}},[a("el-input",{attrs:{type:"input",placeholder:""},model:{value:e.ruleForm.age,callback:function(t){e.$set(e.ruleForm,"age",t)},expression:"ruleForm.age"}})],1)],1),e._v(" "),a("div",{staticClass:"mk-input"},[a("p",{staticClass:"name"},[e._v("工作城市")]),e._v(" "),a("el-form-item",{attrs:{prop:"city"}},[a("el-input",{attrs:{type:"input",placeholder:""},model:{value:e.ruleForm.city,callback:function(t){e.$set(e.ruleForm,"city",t)},expression:"ruleForm.city"}})],1)],1),e._v(" "),a("div",{staticClass:"mk-input"},[a("p",{staticClass:"name"},[e._v("手机号")]),e._v(" "),a("el-form-item",{attrs:{prop:"phone"}},[a("el-input",{attrs:{type:"input",placeholder:""},model:{value:e.ruleForm.phone,callback:function(t){e.$set(e.ruleForm,"phone",t)},expression:"ruleForm.phone"}})],1)],1),e._v(" "),a("div",{staticClass:"mk-input"},[a("p",{staticClass:"name"},[e._v("邮箱")]),e._v(" "),a("el-form-item",{attrs:{prop:"email"}},[a("el-input",{attrs:{type:"input",placeholder:""},model:{value:e.ruleForm.email,callback:function(t){e.$set(e.ruleForm,"email",t)},expression:"ruleForm.email"}})],1)],1),e._v(" "),a("div",{staticClass:"mk-input"},[a("p",{staticClass:"name"},[e._v("学历")]),e._v(" "),a("el-form-item",{attrs:{prop:"grade"}},[a("el-select",{attrs:{prop:"grade",placeholder:""},model:{value:e.ruleForm.grade,callback:function(t){e.$set(e.ruleForm,"grade",t)},expression:"ruleForm.grade"}},e._l(e.options_grade,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}))],1)],1),e._v(" "),a("div",{staticClass:"mk-input"},[a("p",{staticClass:"name"},[e._v("专业")]),e._v(" "),a("el-form-item",{attrs:{prop:"profession"}},[a("el-input",{attrs:{type:"input",placeholder:""},model:{value:e.ruleForm.profession,callback:function(t){e.$set(e.ruleForm,"profession",t)},expression:"ruleForm.profession"}})],1)],1),e._v(" "),a("div",{staticClass:"mk-input line-100"},[a("p",{staticClass:"name"},[e._v("毕业学院")]),e._v(" "),a("el-form-item",{attrs:{prop:"school"}},[a("el-input",{attrs:{type:"input",placeholder:""},model:{value:e.ruleForm.school,callback:function(t){e.$set(e.ruleForm,"school",t)},expression:"ruleForm.school"}})],1)],1)]),e._v(" "),a("img",{staticClass:"img-2",attrs:{src:r(525),alt:""}}),e._v(" "),a("div",{staticClass:"box-form"},[a("div",{staticClass:"mk-input"},[a("p",{staticClass:"name"},[e._v("职务")]),e._v(" "),a("el-form-item",{attrs:{prop:"job"}},[a("el-input",{attrs:{type:"input",autosize:"",placeholder:""},model:{value:e.ruleForm.job,callback:function(t){e.$set(e.ruleForm,"job",t)},expression:"ruleForm.job"}})],1)],1),e._v(" "),a("div",{staticClass:"mk-input"},[a("p",{staticClass:"name"},[e._v("本职务相关工作年限")]),e._v(" "),a("el-form-item",{attrs:{prop:"job_age"}},[a("el-input",{attrs:{type:"input",autosize:"",placeholder:""},model:{value:e.ruleForm.job_age,callback:function(t){e.$set(e.ruleForm,"job_age",t)},expression:"ruleForm.job_age"}})],1)],1),e._v(" "),a("div",{staticClass:"mk-input"},[a("p",{staticClass:"name"},[e._v("行业")]),e._v(" "),a("el-form-item",{attrs:{prop:"industry"}},[a("el-input",{attrs:{type:"input",autosize:"",placeholder:""},model:{value:e.ruleForm.industry,callback:function(t){e.$set(e.ruleForm,"industry",t)},expression:"ruleForm.industry"}})],1)],1),e._v(" "),a("div",{staticClass:"mk-input"},[a("p",{staticClass:"name"},[e._v("职业等级")]),e._v(" "),a("el-form-item",{attrs:{prop:"job_level"}},[a("el-input",{attrs:{type:"input",autosize:"",placeholder:""},model:{value:e.ruleForm.job_level,callback:function(t){e.$set(e.ruleForm,"job_level",t)},expression:"ruleForm.job_level"}})],1)],1),e._v(" "),a("div",{staticClass:"mk-input line-100"},[a("p",{staticClass:"name"},[e._v("资格评级证书"),a("span",{staticStyle:{"font-size":"12px",color:"#ccc"}},[e._v("（点击添加图片，且不超过10M）")])]),e._v(" "),a("el-upload",{staticClass:"upload-img",attrs:{action:"http://kofuf.kofuf.com:8081/admin/upload/normal",headers:{token:"751fc99cd6ca42ddba3e31ead852df32"},multiple:!1,"on-preview":e.handlePreview,"on-remove":e.handleRemove,"file-list":e.fileList,"on-success":e.fileSuccess,disabled:""!=e.ruleForm.certificate}},[""==e.ruleForm.certificate?a("div",[a("el-button",{attrs:{size:"small",type:"primary"}},[e._v("点击上传")])],1):a("div",[a("el-button",{attrs:{size:"small",disabled:!0,type:"primary"}},[e._v("已 上 传")])],1)])],1),e._v(" "),a("div",{staticClass:"mk-input line-100"},[a("p",{staticClass:"name"},[e._v("专长领域")]),e._v(" "),a("el-form-item",{attrs:{prop:"domain"}},[a("el-input",{attrs:{type:"textarea",autosize:"",placeholder:""},model:{value:e.ruleForm.domain,callback:function(t){e.$set(e.ruleForm,"domain",t)},expression:"ruleForm.domain"}})],1)],1),e._v(" "),a("div",{staticClass:"mk-input line-100"},[a("p",{staticClass:"name"},[e._v("公司名称")]),e._v(" "),a("el-form-item",{attrs:{prop:"company_name"}},[a("el-input",{attrs:{type:"textarea",autosize:"",placeholder:""},model:{value:e.ruleForm.company_name,callback:function(t){e.$set(e.ruleForm,"company_name",t)},expression:"ruleForm.company_name"}})],1)],1),e._v(" "),a("div",{staticClass:"mk-input line-100"},[a("p",{staticClass:"name"},[e._v("公司地址")]),e._v(" "),a("el-form-item",{attrs:{prop:"company_address"}},[a("el-input",{attrs:{type:"textarea",autosize:"",placeholder:""},model:{value:e.ruleForm.company_address,callback:function(t){e.$set(e.ruleForm,"company_address",t)},expression:"ruleForm.company_address"}})],1)],1)]),e._v(" "),a("img",{staticClass:"img-3",attrs:{src:r(526),alt:""}}),e._v(" "),a("p",{staticClass:"tuijian-1"},[e._v("推荐人1")]),e._v(" "),a("div",{staticClass:"box-form"},[a("div",{staticClass:"mk-input"},[a("p",{staticClass:"name"},[e._v("姓名")]),e._v(" "),a("el-form-item",{attrs:{prop:"rec1_name"}},[a("el-input",{attrs:{type:"input",autosize:"",placeholder:""},model:{value:e.ruleForm.rec1_name,callback:function(t){e.$set(e.ruleForm,"rec1_name",t)},expression:"ruleForm.rec1_name"}})],1)],1),e._v(" "),a("div",{staticClass:"mk-input"},[a("p",{staticClass:"name"},[e._v("联系方式")]),e._v(" "),a("el-form-item",{attrs:{prop:"rec1_phone"}},[a("el-input",{attrs:{type:"input",autosize:"",placeholder:""},model:{value:e.ruleForm.rec1_phone,callback:function(t){e.$set(e.ruleForm,"rec1_phone",t)},expression:"ruleForm.rec1_phone"}})],1)],1),e._v(" "),a("div",{staticClass:"mk-input"},[a("p",{staticClass:"name"},[e._v("邮箱")]),e._v(" "),a("el-form-item",{attrs:{prop:"rec1_email"}},[a("el-input",{attrs:{type:"input",autosize:"",placeholder:""},model:{value:e.ruleForm.rec1_email,callback:function(t){e.$set(e.ruleForm,"rec1_email",t)},expression:"ruleForm.rec1_email"}})],1)],1),e._v(" "),a("div",{staticClass:"mk-input line-100"},[a("p",{staticClass:"name"},[e._v("推荐语")]),e._v(" "),a("el-form-item",{attrs:{prop:"rec1_intro"}},[a("el-input",{attrs:{type:"textarea",autosize:"",placeholder:""},model:{value:e.ruleForm.rec1_intro,callback:function(t){e.$set(e.ruleForm,"rec1_intro",t)},expression:"ruleForm.rec1_intro"}})],1)],1)]),e._v(" "),a("p",{staticClass:"tuijian-1"},[e._v("推荐人2")]),e._v(" "),a("div",{staticClass:"box-form"},[a("div",{staticClass:"mk-input"},[a("p",{staticClass:"name"},[e._v("姓名")]),e._v(" "),a("el-form-item",{attrs:{prop:"rec2_name"}},[a("el-input",{attrs:{type:"input",autosize:"",placeholder:""},model:{value:e.ruleForm.rec2_name,callback:function(t){e.$set(e.ruleForm,"rec2_name",t)},expression:"ruleForm.rec2_name"}})],1)],1),e._v(" "),a("div",{staticClass:"mk-input"},[a("p",{staticClass:"name"},[e._v("联系方式")]),e._v(" "),a("el-form-item",{attrs:{prop:"rec2_phone"}},[a("el-input",{attrs:{type:"input",autosize:"",placeholder:""},model:{value:e.ruleForm.rec2_phone,callback:function(t){e.$set(e.ruleForm,"rec2_phone",t)},expression:"ruleForm.rec2_phone"}})],1)],1),e._v(" "),a("div",{staticClass:"mk-input"},[a("p",{staticClass:"name"},[e._v("邮箱")]),e._v(" "),a("el-form-item",{attrs:{prop:"rec2_email"}},[a("el-input",{attrs:{type:"input",autosize:"",placeholder:""},model:{value:e.ruleForm.rec2_email,callback:function(t){e.$set(e.ruleForm,"rec2_email",t)},expression:"ruleForm.rec2_email"}})],1)],1),e._v(" "),a("div",{staticClass:"mk-input line-100"},[a("p",{staticClass:"name"},[e._v("推荐语")]),e._v(" "),a("el-form-item",{attrs:{prop:"rec2_intro"}},[a("el-input",{attrs:{type:"textarea",autosize:"",placeholder:""},model:{value:e.ruleForm.rec2_intro,callback:function(t){e.$set(e.ruleForm,"rec2_intro",t)},expression:"ruleForm.rec2_intro"}})],1)],1)])])],1),e._v(" "),a("el-button",{staticClass:"m-active-btn-2",attrs:{disabled:e.btndisabled},on:{click:function(t){e.submitForm("ruleForm")}}},[e._v("确认报名")])],1)},staticRenderFns:[]}},556:function(e,t,r){var a=r(539);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);r(199)("7d86ef3c",a,!0)}});