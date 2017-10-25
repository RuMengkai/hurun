export function isMobile(){
  var browser={
    versions:function(){
       var u = navigator.userAgent, app = navigator.appVersion;
       return {//移动终端浏览器版本信息
            trident: u.indexOf('Trident') > -1, //IE内核
            presto: u.indexOf('Presto') > -1, //opera内核
            webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
            gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核
            mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
            ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
            android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或者uc浏览器
            iPhone: u.indexOf('iPhone') > -1 , //是否为iPhone或者QQHD浏览器
            iPad: u.indexOf('iPad') > -1, //是否iPad
            webApp: u.indexOf('Safari') == -1 //是否web应该程序，没有头部与底部
        };
     }(),
     language:(navigator.browserLanguage || navigator.language).toLowerCase()
  }
  if(browser.versions.mobile || browser.versions.ios || browser.versions.android || browser.versions.iPhone || browser.versions.iPad){
     console.log('mobile');
     return true
  }else{
     console.log('pc')
     return false
  }
}
export function weixinShare(axios,shareData){
  // console.log(encodeURIComponent(window.location.href.split('#')[0]))
	var url="https://api.kofuf.com/api/session/share_weixin_config?url="+encodeURIComponent(window.location.href.split('#')[0]);
	axios.get(url)
	.then(function (res) {
		// var data=JSON.parse(data);
		wx.config({
			debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，
			//参数信息会通过log打出，仅在pc端时才会打印。
			appId: res.data.appId, // 必填，公众号的唯一标识
			timestamp: res.data.timestamp, // 必填，生成签名的时间戳
			nonceStr: res.data.nonceStr, // 必填，生成签名的随机串
			signature: res.data.signature,// 必填，签名，见附录1
			jsApiList: [
				'checkJsApi',
				'onMenuShareTimeline',
				'onMenuShareAppMessage',
				'onMenuShareQQ',
				'onMenuShareWeibo'
			] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
		});
	})
  .catch(function (error) {
    console.log(error);
  });;
	wx.ready(function(){
    // console.log(wx.config);
    // 分享到到朋友圈
    var title=shareData.title||"功夫财经";
    var link=shareData.link||'https://licaishi.kofuf.com';
    var imgUrl=shareData.imgUrl||'https://m.kofuf.com/static/img_h5/h5_logo.png';
    var desc=shareData.desc;
    wx.onMenuShareTimeline({
      title: title, // 分享标题
      link: link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
      imgUrl:imgUrl , // 分享图标
      success: function () {
        // alert("分享成功")
          // 用户确认分享后执行的回调函数
      },
      cancel: function () {
        // alert("取消分享")
          // 用户取消分享后执行的回调函数
      }
    });
    // 分享到给微信好友
    wx.onMenuShareAppMessage({
      title: title, // 分享标题
      desc:desc, // 分享描述
      link: link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
      imgUrl: imgUrl, // 分享图标
      type: 'link', // 分享类型,music、video或link，不填默认为link
      // dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
      success: function () {
        // alert("分享成功")
          // 用户确认分享后执行的回调函数
      },
      cancel: function () {
        // alert("取消分享")
          // 用户取消分享后执行的回调函数
      }
    });
    //分享到QQ空间
    wx.onMenuShareQZone({
      title: title, // 分享标题
      desc: desc, // 分享描述
      link: link, // 分享链接
      imgUrl: imgUrl, // 分享图标
      success: function () {
        // 用户确认分享后执行的回调函数
      },
      cancel: function () {
        // 用户取消分享后执行的回调函数
      }
    });

    //分享到QQ
    wx.onMenuShareQQ({
      title: title, // 分享标题
      desc: desc, // 分享描述
      link: link, // 分享链接
      imgUrl: imgUrl, // 分享图标
      success: function () {
         // 用户确认分享后执行的回调函数
      },
      cancel: function () {
         // 用户取消分享后执行的回调函数
      }
    });
	});
}
