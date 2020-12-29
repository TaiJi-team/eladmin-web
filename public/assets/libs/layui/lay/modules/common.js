layui.define(['layer', 'config'], function (exports) {
    "use strict";
    var $ = layui.jquery;
    var layer = layui.layer;
    let config = layui.config;

    var common = {
      sendMobValCode: function (cnf) {
        var w = 60, func;
        function resetSent() {
            w = 60;
            clearInterval(func);
            $("#sent-verify-code").html("发 送");
            $("#sent-verify-code").removeAttr('disabled')
        }
        $("#sent-verify-code").click(function(){
          // var mobile = $("[name = 'mobile']").val();
          var mobile = $('[name = ' + cnf.mEle + ']').val();
          if(!mobile){
              layer.msg('请填写手机号码', {icon: 5, time: 2000});
              return false;
          }
          if(!(/^[1][3,4,5,7,8,9][0-9]{9}$/.test(mobile))){ 
              layer.msg('手机号码有误，请重新填写', {icon: 5, time: 2000});
              return false; 
          }

          $("#sent-verify-code").attr('disabled', 'disabled')
          func = setInterval(function(){
              w--;
              $("#sent-verify-code").html("发送中("+w+"s)");
              if(w == 0){
                  resetSent()
              }
          },1000);
          $("input[name='verifyCode']").removeAttr('disabled')

          $.ajax({
              url: config.base_server + 'api-uaa/validata/smsCode/' + mobile,
              // xhrFields: {
              //     withCredentials: true
              // },
              type: 'GET',
              // beforeSend: function (xhr) {
              //     xhr.setRequestHeader('Authorization', 'Basic ' + window.btoa(config.clientId + ":" + config.clientSecret));
              // },
              success: function (data) {
                  if (data.code === 0) {
                      layer.msg('发送成功', {icon: 1, time: 1000}, function () {
                          
                      });
                  } else {
                      layer.closeAll('loading');
                      layer.msg(data.msg, {icon: 5, time: 3000});
                      resetSent();
                  }
              },
              error: function (xhr) {
                  //console.log(xhr)
                  layer.closeAll('loading');
                  layer.msg('请求失败！', {icon: 5, time: 500});
                  resetSent()
              }
          });
        })
      },
      getUserRole: function () {
        const user = JSON.parse(localStorage.easyweb).login_user
        if (user) {
          return JSON.parse(user).roles[0]
        }
        return {}
      },
      getUserInfo: function () {
        const user = JSON.parse(localStorage.easyweb).login_user
        if (user) {
          return JSON.parse(user)
        }
        return {}
      }
    }

    //暴露接口
    exports('common', common);
  });
