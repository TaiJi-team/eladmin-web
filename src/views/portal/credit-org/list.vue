<template>
  <div style="background: #f5f5f5">
    <lzhead />
    <div class="div_body">
      <!-- banner-->
      <el-carousel class="banner" :autoplay="false">
        <el-carousel-item v-for="item in 4" :key="item">
          <el-image style="width: 100%; height: 100%" :src="org_banner" fit="fill" />
        </el-carousel-item>
      </el-carousel>
      <center>
        <div class="wrapper">
          <div class="left" />
          <div class="center"><span class="institution-title__color">核心信用服务提供商</span></div>
          <div class="right" />
        </div></center>
      <div id="page_template_body_id" class="min-page small-mar-top search-result mar-top-bottom">
        <ul class="clearfix institution-index__list">
          <li class="fl bg-white"> <a href="http://www.xmcit.com/" target="_blank">
            <div class="li-img">
              <img src="/assets/images/credit-org/credit_one.png" alt="">
            </div> <div class="li-cont">
              <div class="clearfix li-t">
                <div class="fl li-t__img"> <img src="/assets/images/credit-org/credit_two.png" alt="">
                </div>
                <span class="li-t__name" title="厦门信用信息技术有限公司">厦门信用信息技术有限公司</span>
              </div>
              <p class="li-info"> 厦门信用信息技术有限公司（以下简称为“公司”）成立于2018年7月，是厦门金圆集团、建信金融科技、厦门信息集团共同发起设立的国家信用大数据创新中心首家金融应用公司。公司以社会信用大数据为基础，以信用产品服务作为关键抓手，以解决企业和社会痛点、难点为导向，全面深化政、银、企、社多方合作，全力推 动信用大数据在普惠金融、智慧城市、高效政务及便捷民生服务等领域的应用与发展。 </p>
            </div>
          </a>
          </li>
          <li class="fl bg-white"> <a href="http://www.xmcit.com/" target="_blank">
            <div class="li-img">
              <img src="/assets/images/credit-org/credit_one.png" alt="">
            </div> <div class="li-cont">
              <div class="clearfix li-t">
                <div class="fl li-t__img"> <img src="/assets/images/credit-org/credit_two.png" alt="">
                </div>
                <span class="li-t__name" title="厦门信用信息技术有限公司">厦门信用信息技术有限公司</span>
              </div>
              <p class="li-info"> 厦门信用信息技术有限公司（以下简称为“公司”）成立于2018年7月，是厦门金圆集团、建信金融科技、厦门信息集团共同发起设立的国家信用大数据创新中心首家金融应用公司。公司以社会信用大数据为基础，以信用产品服务作为关键抓手，以解决企业和社会痛点、难点为导向，全面深化政、银、企、社多方合作，全力推 动信用大数据在普惠金融、智慧城市、高效政务及便捷民生服务等领域的应用与发展。 </p>
            </div>
          </a>
          </li>
          <li class="fl bg-white"> <a href="http://www.xmcit.com/" target="_blank">
            <div class="li-img">
              <img src="/assets/images/credit-org/credit_one.png" alt="">
            </div> <div class="li-cont">
              <div class="clearfix li-t">
                <div class="fl li-t__img"> <img src="/assets/images/credit-org/credit_two.png" alt="">
                </div>
                <span class="li-t__name" title="厦门信用信息技术有限公司">厦门信用信息技术有限公司</span>
              </div>
              <p class="li-info"> 厦门信用信息技术有限公司（以下简称为“公司”）成立于2018年7月，是厦门金圆集团、建信金融科技、厦门信息集团共同发起设立的国家信用大数据创新中心首家金融应用公司。公司以社会信用大数据为基础，以信用产品服务作为关键抓手，以解决企业和社会痛点、难点为导向，全面深化政、银、企、社多方合作，全力推 动信用大数据在普惠金融、智慧城市、高效政务及便捷民生服务等领域的应用与发展。</p>
            </div>
          </a>
          </li>
        </ul>
        <ul class="clearfix institution-index__list">
          <li class="fl bg-white"> <a href="http://www.xmcit.com/" target="_blank">
            <div class="li-img">
              <img src="/assets/images/credit-org/credit_one.png" alt="">
            </div> <div class="li-cont">
              <div class="clearfix li-t">
                <div class="fl li-t__img"> <img src="/assets/images/credit-org/credit_two.png" alt="">
                </div>
                <span class="li-t__name" title="厦门信用信息技术有限公司">厦门信用信息技术有限公司</span>
              </div>
              <p class="li-info"> 厦门信用信息技术有限公司（以下简称为“公司”）成立于2018年7月，是厦门金圆集团、建信金融科技、厦门信息集团共同发起设立的国家信用大数据创新中心首家金融应用公司。公司以社会信用大数据为基础，以信用产品服务作为关键抓手，以解决企业和社会痛点、难点为导向，全面深化政、银、企、社多方合作，全力推 动信用大数据在普惠金融、智慧城市、高效政务及便捷民生服务等领域的应用与发展。 </p>
            </div>
          </a>
          </li>
          <li class="fl bg-white"> <a href="http://www.xmcit.com/" target="_blank">
            <div class="li-img">
              <img src="/assets/images/credit-org/credit_one.png" alt="">
            </div> <div class="li-cont">
              <div class="clearfix li-t">
                <div class="fl li-t__img"> <img src="/assets/images/credit-org/credit_two.png" alt="">
                </div>
                <span class="li-t__name" title="厦门信用信息技术有限公司">厦门信用信息技术有限公司</span>
              </div>
              <p class="li-info"> 厦门信用信息技术有限公司（以下简称为“公司”）成立于2018年7月，是厦门金圆集团、建信金融科技、厦门信息集团共同发起设立的国家信用大数据创新中心首家金融应用公司。公司以社会信用大数据为基础，以信用产品服务作为关键抓手，以解决企业和社会痛点、难点为导向，全面深化政、银、企、社多方合作，全力推 动信用大数据在普惠金融、智慧城市、高效政务及便捷民生服务等领域的应用与发展。 </p>
            </div>
          </a>
          </li>
          <li class="fl bg-white"> <a href="http://www.xmcit.com/" target="_blank">
            <div class="li-img">
              <img src="/assets/images/credit-org/credit_one.png" alt="">
            </div> <div class="li-cont">
              <div class="clearfix li-t">
                <div class="fl li-t__img"> <img src="/assets/images/credit-org/credit_two.png" alt="">
                </div>
                <span class="li-t__name" title="厦门信用信息技术有限公司">厦门信用信息技术有限公司</span>
              </div>
              <p class="li-info"> 厦门信用信息技术有限公司（以下简称为“公司”）成立于2018年7月，是厦门金圆集团、建信金融科技、厦门信息集团共同发起设立的国家信用大数据创新中心首家金融应用公司。公司以社会信用大数据为基础，以信用产品服务作为关键抓手，以解决企业和社会痛点、难点为导向，全面深化政、银、企、社多方合作，全力推 动信用大数据在普惠金融、智慧城市、高效政务及便捷民生服务等领域的应用与发展。 </p>
            </div>
          </a>
          </li>
        </ul>
        <div id="pagination" class="ac pagination">
          <div id="layui-laypage-59" class="layui-box layui-laypage layui-laypage-default"><a href="javascript:;" class="layui-laypage-prev layui-disabled" data-page="0">上一页</a><span class="layui-laypage-curr"><em class="layui-laypage-em" /><em>1</em></span><a href="javascript:;" class="layui-laypage-next layui-disabled" data-page="2">下一页</a></div>
        </div>
      </div>
    </div>
    <lzfooter />
  </div>
</template>
<script>
// import beijingJson from '@/assets/beijing.json'
import lzhead from '@/views/components/head'
import lzfooter from '@/views/components/footer'
import org_banner from '@/assets/images/portal/xyjg.jpg'
import t_img from '@/assets/images/portal/t-img.png'
import more_img from '@/assets/icons/svg/arr-down.png'
import ico_type1 from '@/assets/images/portal/ico-type1.png'
import ico_type2 from '@/assets/images/portal/ico-type2.png'
export default {
  name: 'FinOrgList',
  components: {
    lzhead,
    lzfooter
  },
  data() {
    return {
      tableData: [],
      wantSelected: 1,
      org_banner: org_banner,
      t_img: t_img,
      ico_type2: ico_type2,
      ico_type1: ico_type1,
      isBlock: true,
      more_icon: {
        backgroundImage: 'url(' + more_img + ')',
        backgroundRepeat: 'no-repeat',
        backgroundPositionX: 'right',
        backgroundPositionY: 'center'
      },
      activeA: 0,
      activeB: 0,
      activeC: 0,
      activeD: 0
    }
  },
  mounted() {
  },
  methods: {
    showDetail(id) {
      this.$router.push({
        path: '/fin-market/detail'
        // params: { data: 'query' }
      })
    }
  }
}
</script>
<style scoped>
.wrapper {
    text-align: center;
width: 1330px;
height: auto;
/* background: #f0f; */
overflow: auto; /* 解决你说的背景问题 */
}
.left,.center,.right {
width: 280px;
float: left;
}
.left{
float: left;
margin-left: 150px;;
height: 2px;
margin-top: 15px;
width: 360px;;
background: -webkit-linear-gradient(left,rgba(255, 255, 255, 0),#5DDDD3);
background: linear-gradient(to right, rgba(255, 255, 255, 0),#5DDDD3);
text-align: center;
}
.right{
float: right;
height: 2px;
width: 400px;
margin-right: 140px;
margin-top: 15px;
background: -webkit-linear-gradient(left,#5DDDD3,rgba(255,255,255,0));
background: linear-gradient(to right,#5DDDD3,rgba(255,255,255,0));
text-align: center;
}
.institution-title__color{
 font-size: 30px;
    font-weight: bold;
    color: #3bb9a3;
    text-align: center;
}
.banner {
    height: 320px;
}
.banner.el-carousel__container {
    height: 400px;
}
.bg-white {
    background: #fff;
}
.mar-top {
    margin-top: 50px;
}
.min-page {
    width: 1200px;
    margin: 0 auto;
}
.content-filter-box {
    border: 1px solid #cdcdcd;
}
.grid-content {
    border-radius: 4px;
    min-height: 36px;
}
.row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
}
.content-filter-box .box-head {
    height: 55px;
    line-height: 55px;
    background: #f1f1f1;
}
.clearfix {
    zoom: 1;
}
.fr {
    float: right;
    margin-right: -0.5%;
}
*,
*:before,
*:after {
    -webkit-box-sizing: inherit;
    box-sizing: inherit;
}
div {
    display: block;
}
.content-filter-box .box-head[data-v-f123e482] {
    height: 55px;
    line-height: 55px;
    background: #f1f1f1;
}
.content-filter-box .filter-ul {
    padding: 10px 13px;
}
.bg-white {
    background: #fff;
}
/* ol,
ul,
li {
    list-style: none;
} */
.content-filter-box .filter-ul li:first-child {
    border-top: 0;
}
.content-filter-box .filter-ul li {
    position: relative;
    padding: 20px 12px;
    border-top: 1px dashed #bbb;
    overflow: hidden;
}
ol,
ul,
li {
    list-style: none;
}
.content-filter-box .filter-ul .item-label {
    margin-right: 12px;
    font-size: 15px;
    font-weight: bold;
    color: #2a2a2a;
}
.content-filter-box .filter-ul .item-on,
.content-filter-box .filter-ul .item-on .item-sub_city {
    height: 22px;
    overflow: hidden;
}
.content-filter-box .filter-ul .item-cont {
    padding-right: 60px;
}
.overflow {
    overflow: hidden;
}
.line-action-hover,
.pos-rela {
    position: relative;
}
.clearfix {
    zoom: 1;
}
.content-filter-box .filter-ul .item-on,
.content-filter-box .filter-ul .item-on .item-sub_city {
    height: 22px;
    overflow: hidden;
}
.content-filter-box .filter-ul .item-sub_city {
    /* max-height: 128px; */
    overflow-y: hidden;
    overflow-x: hidden;
}
.overflow {
    overflow: hidden;
}
.content-filter-box .filter-ul .item-l-on {
    color: #fff;
    background: #12c8b2;
}
.content-filter-box .filter-ul .item-b {
    color: #000;
}
.content-filter-box .filter-ul .item-l {
    height: 22px;
    margin: 0 10px 10px 0;
    padding: 0 10px;
    color: #666;
    cursor: pointer;
    line-height: 22px;
    white-space: nowrap;
}
.fl {
    float: left;
}
a,
a:hover,
a:active {
    text-decoration: none;
    cursor: pointer;
}
a {
    color: #555;
}
a {
    color: #333;
    text-decoration: none;
}
.content-filter-box .filter-ul .filter-switch {
    position: absolute;
    top: 20px;
    right: 10px;
    cursor: pointer;
}
.content-filter-box .filter-ul .item-l {
    height: 22px;
    margin: 0 10px 10px 0;
    padding: 0 10px;
    color: #666;
    cursor: pointer;
    line-height: 22px;
    white-space: nowrap;
}
.fl {
    float: left;
}
a,
a:hover,
a:active {
    text-decoration: none;
    cursor: pointer;
}
a {
    color: #555;
}
a {
    color: #333;
    text-decoration: none;
}
.content-filter-box .filter-switch .switch-arr {
    display: inline-block;
    width: 13px;
    height: 7px;
    margin-left: 5px;
    /* background: url(images/arr-down.png) no-repeat right center; */
    position: absolute;
    top: 20px;
    right: 10px;
    cursor: pointer;
}
.content-filter-box .box-head .head-search {
    margin: 11px 13px 11px 0;
}
.fr {
    float: right;
}
.content-filter-box .box-head .search-ipt {
    width: 457px;
    height: 32px;
}
input[type="text"] {
    width: 100%;
    height: 100%;
    padding: 0 10px;
    border: 0;
}
.fl {
    float: left;
}
.layui-input,
.layui-textarea {
    display: block;
    width: 100%;
    padding-left: 10px;
}
.layui-input,
.layui-select,
.layui-textarea {
    height: 38px;
    line-height: 1.3;
    line-height: 38px\9;
    border-width: 1px;
    border-style: solid;
    background-color: #fff;
    border-radius: 2px;
}
.layui-badge-rim,
.layui-colla-content,
.layui-colla-item,
.layui-collapse,
.layui-elem-field,
.layui-form-pane .layui-form-item[pane],
.layui-form-pane .layui-form-label,
.layui-input,
.layui-layedit,
.layui-layedit-tool,
.layui-quote-nm,
.layui-select,
.layui-tab-bar,
.layui-tab-card,
.layui-tab-title,
.layui-tab-title .layui-this:after,
.layui-textarea {
    border-color: #e6e6e6;
}
.layui-btn,
.layui-input,
.layui-select,
.layui-textarea,
.layui-upload-button {
    outline: 0;
    -webkit-appearance: none;
    transition: all .3s;
    -webkit-transition: all .3s;
    box-sizing: border-box;
}
input {
    -webkit-appearance: none;
}
body,
input,
textarea,
select,
button {
    font: 14px Arial, "Microsoft YaHei", 黑体, 宋体, sans-serif;
}
.content-filter-box .box-head .search-btn {
    width: 69px;
    height: 32px;
    border: 0;
    color: #fff;
    font-size: 16px;
    background-color: #12c8b2;
    cursor: pointer;
}
.g-bg,
.bg-hover:hover {
    background: #00bba4;
}
.fl {
    float: left;
}
.small-mar-top {
    margin-top: 20px;
}
.mar-top-bottom {
    margin-top: 50px;
    margin-bottom: 50px;
}
.search-result .result-text {
    padding-left: 10px;
    margin-bottom: 10px;
    color: #5c5c5c;
    line-height: 28px;
}
.search-result .result-num {
    color: #f38a3e;
}
.search-result .result-text {
    padding-left: 10px;
    margin-bottom: 10px;
    color: #5c5c5c;
    line-height: 28px;
}
.list-tool {
    height: 48px;
    margin-bottom: 25px;
    border: 1px solid #cdcdcd;
    line-height: 48px;
    background: #f1f1f1;
}
.fl {
    float: left;
}
#listSort .tool-item {
    width: 114px;
}
.list-tool .on {
    color: #12c8b2;
}
.list-tool .on:before {
    content: "";
    position: absolute;
    top: -1px;
    left: -1px;
    width: 100%;
    height: 100%;
    border-top: 2px solid #12c8b2;
    border-left: 1px solid #cdcdcd;
    border-right: 1px solid #cdcdcd;
    background: #fff;
}
.list-tool .item-name {
    position: relative;
}
.list-tool .on {
    color: #12c8b2;
}
.list-tool .tool-item {
    position: relative;
    display: inline-block;
    text-align: center;
    font-size: 16px;
    color: #7a7a7a;
    cursor: pointer;
    user-select: none;
}
.fr {
    float: right;
}
#listType .tool-item {
    padding: 0 15px;
}
.list-tool .item-name {
    position: relative;
}
#listType .tool-item img {
    width: 22px;
}
img {
    border: none;
    vertical-align: middle;
}
img {
    border: none;
}
.layui-btn, .layui-edge, .layui-inline, img {
    vertical-align: middle;
}
.layui-inline, img {
    display: inline-block;
    vertical-align: middle;
}
blockquote, body, button, dd, div, dl, dt, form, h1, h2, h3, h4, h5, h6, input, li, ol, p, pre, td, textarea, th, ul {
    margin: 0;
    padding: 0;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
}
#listType .tool-item img {
    width: 22px;
}
img {
    border: none;
    vertical-align: middle;
}
img {
    border: none;
}
.layui-btn, .layui-edge, .layui-inline, img {
    vertical-align: middle;
}
.layui-inline, img {
    display: inline-block;
    vertical-align: middle;
}
element.style {
    display: none;
}
ol, ul, li {
    list-style: none;
}
body, div, dl, dt, dd, ul, ol, li, h1, h2, h3, h4, h5, h6, pre, code, form, fieldset, legend, input, button, textarea, p, blockquote, th, td {
    margin: 0;
    padding: 0;
}
blockquote, body, button, dd, div, dl, dt, form, h1, h2, h3, h4, h5, h6, input, li, ol, p, pre, td, textarea, th, ul {
    margin: 0;
    padding: 0;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
}
ul {
    display: block;
    list-style-type: disc;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
}
/* .product-list-line li {
    position: relative;
    height: 98px;
    padding: 28px 25px 22px;
    margin-left: -3.5%;
    margin-bottom: 25px;
    background: #fff;
    overflow: hidden;
} */
li {
    display: list-item;
    text-align: -webkit-match-parent;
}
ul {
    list-style-type: disc;
}
a, a:hover, a:active {
    text-decoration: none;
    cursor: pointer;
}
a:-webkit-any-link {
    color: -webkit-link;
    cursor: pointer;
    text-decoration: underline;
}
.product-list-line .item-img {
    width: 96px;
    height: 96px;
    margin-right: 40px;
    border: 1px solid #d9d6d6;
    text-align: center;
    line-height: 96px;
    overflow: hidden;
}
a:-webkit-any-link {
    color: -webkit-link;
    cursor: pointer;
}
li {
    text-align: -webkit-match-parent;
}
.product-list-line .item-img>img {
    max-width: 100%;
    max-height: 100%;
}
img {
    border: none;
    vertical-align: middle;
}
img {
    border: none;
}
.layui-btn, .layui-edge, .layui-inline, img {
    vertical-align: middle;
}
.layui-inline, img {
    display: inline-block;
    vertical-align: middle;
}
.product-list-line .item-img[data-v-f123e482] {
    width: 96px;
    height: 96px;
    margin-right: 40px;
    border: 1px solid #d9d6d6;
    text-align: center;
    line-height: 96px;
    overflow: hidden;
}
.fl[data-v-f123e482] {
    float: left;
}
li[data-v-f123e482] {
    text-align: -webkit-match-parent;
}
li[data-v-f123e482] {
    display: list-item;
    text-align: -webkit-match-parent;
}
.product-list-line .item-img {
    width: 80px;
    height: 80px;
    margin-right: 40px;
    margin-top: -13px;
    border: 1px solid #d9d6d6;
    text-align: center;
    line-height: 80px;
    overflow: hidden;
}
/* .product-list-line li {
    position: relative;
    height: 148px;
    padding: 28px 25px 22px;
    margin-bottom: 25px;
    background: #fff;
    overflow: hidden;
} */
/* .product-list-line li {
    position: relative;
    height: 98px;
    padding: 28px 25px 22px;
    margin-bottom: 25px;
    background: #fff;
    overflow: hidden;
} */
.product-list-line li {
    position: relative;
    height: 110px;
    padding: 28px 15px;
    padding-top: 28px;
    padding-right: 15px;
    padding-bottom: 28px;
    padding-left: 15px;
    margin-bottom: 15px;
    background: #fff;
    overflow: hidden;
}
.product-list-line .item-title {
    width: 320px;
}
.product-list-line .item-title .t {
    display: block;
    margin-top: 20px;
    font-size: 18px;
    color: #181818;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.product-list-line .item-title .st {
    font-size: 14px;
    color: #696969;
    line-height: 1.6;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
    text-align: justify;
    margin-bottom: 5px;
}
.product-list-line .item-info {
    width: 650px;
    /* padding-top: 15px; */
    text-overflow: ellipsis;
    /* white-space: nowrap; */
    overflow: hidden;
    font-size: 16px;
    color: #2a2a2a;
}
.product-list-line .item-info .info-c {
    display: block;
    margin-bottom: 15px;
    font-size: 20px;
    color: #f57825;
}
.product-list-line .item-btn {
    width: 140px;
    height: 40px;
    margin: 25px 0 0 10px;
    border-radius: 20px;
    font-size: 20px;
    background: #00bba4;
}
.layui-btn {
    display: inline-block;
    height: 38px;
    line-height: 38px;
    padding: 0 18px;
    background-color: #009688;
    color: #fff;
    white-space: nowrap;
    text-align: center;
    font-size: 14px;
    border: none;
    border-radius: 2px;
    cursor: pointer;
}
.layui-btn, .layui-input, .layui-select, .layui-textarea, .layui-upload-button {
    outline: 0;
    -webkit-appearance: none;
    transition: all .3s;
    -webkit-transition: all .3s;
    box-sizing: border-box;
}
.layui-btn, .layui-disabled, .layui-icon, .layui-unselect {
    -webkit-user-select: none;
    -ms-user-select: none;
    -moz-user-select: none;
}
.layui-btn, .layui-edge, .layui-inline, img {
    vertical-align: middle;
}
body, input, textarea, select, button {
    font: 14px "Arial", "Microsoft YaHei", "黑体", "宋体", sans-serif;
}
button, input, optgroup, option, select, textarea {
    font-family: inherit;
    font-size: inherit;
    font-style: inherit;
    font-weight: inherit;
    outline: 0;
}
button {
    appearance: button;
    -webkit-writing-mode: horizontal-tb !important;
    text-rendering: auto;
    color: -internal-light-dark(buttontext, rgb(170, 170, 170));
    letter-spacing: normal;
    word-spacing: normal;
    text-transform: none;
    text-indent: 0px;
    text-shadow: none;
    display: inline-block;
    text-align: center;
    align-items: flex-start;
    cursor: default;
    background-color: -internal-light-dark(rgb(239, 239, 239), rgb(74, 74, 74));
    box-sizing: border-box;
    margin: 0em;
    font: 400 13.3333px Arial;
    padding: 1px 6px;
    border-width: 2px;
    border-style: outset;
    border-color: -internal-light-dark(rgb(118, 118, 118), rgb(195, 195, 195));
    border-image: initial;
}
.ac {
    text-align: center;
}
.layui-laypage {
    display: inline-block;
    *display: inline;
    *zoom: 1;
    vertical-align: middle;
    margin: 10px 0;
    font-size: 0;
}
.layui-box, .layui-box * {
    box-sizing: content-box;
}
.layui-laypage>a:first-child, .layui-laypage>a:first-child em {
    border-radius: 2px 0 0 2px;
}
.layui-laypage>:first-child {
    margin-left: 0!important;
}
.layui-laypage a {
    text-decoration: none;
}
.layui-laypage a, .layui-laypage span {
    display: inline-block;
    *display: inline;
    *zoom: 1;
    vertical-align: middle;
    padding: 0 15px;
    height: 28px;
    line-height: 28px;
    margin: 0 -1px 5px 0;
    background-color: #fff;
    color: #333;
    font-size: 12px;
}
.layui-laypage a, .layui-laypage button, .layui-laypage input, .layui-laypage select, .layui-laypage span {
    border: 1px solid #e2e2e2;
}
.layui-disabled, .layui-disabled:hover {
    color: #d2d2d2!important;
    cursor: not-allowed!important;
}
.layui-laypage .layui-laypage-curr {
    position: relative;
}
.layui-laypage a, .layui-laypage span {
    display: inline-block;
    *display: inline;
    *zoom: 1;
    vertical-align: middle;
    padding: 0 15px;
    height: 28px;
    line-height: 28px;
    margin: 0 -1px 5px 0;
    background-color: #fff;
    color: #333;
    font-size: 12px;
}
.layui-laypage .layui-laypage-curr .layui-laypage-em {
    position: absolute;
    left: -1px;
    top: -1px;
    padding: 1px;
    width: 100%;
    height: 100%;
    background-color: #009688;
}
.layui-laypage .layui-laypage-curr em {
    position: relative;
    color: #fff;
}
.layui-laypage em {
    font-style: normal;
}
.layui-laypage-em {
    border-radius: 2px;
}
address, caption, cite, code, dfn, em, strong, th, var {
    font-style: normal;
    font-weight: normal;
}
em {
    font-style: italic;
}
.product-list {
    margin-right: -30px;
}
.product-list>li {
    width: 380px;
    margin: 0 30px 47px 0;
    padding-bottom: 36px;
    /* background: url(images/p-14.png) no-repeat center bottom; */
}
/* .fl {
    float: left;
}
ol, ul, li {
    list-style: none;
}
body, div, dl, dt, dd, ul, ol, li, h1, h2, h3, h4, h5, h6, pre, code, form, fieldset, legend, input, button, textarea, p, blockquote, th, td {
    margin: 0;
    padding: 0;
}
li {
    list-style: none;
} */
blockquote, body, button, dd, div, dl, dt, form, h1, h2, h3, h4, h5, h6, input, li, ol, p, pre, td, textarea, th, ul {
    margin: 0;
    padding: 0;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
}
user agent stylesheet
li {
    display: list-item;
    text-align: -webkit-match-parent;
}
user agent stylesheet
ul {
    list-style-type: disc;
}
.product-list .item-main {
    padding: 17px 17px 30px;
}
.line-action-hover, .pos-rela {
    position: relative;
}
.bg-white {
    background: #fff;
}
a, a:hover, a:active {
    text-decoration: none;
    cursor: pointer;
}
a {
    color: #555;
}
a {
    color: #333;
    text-decoration: none;
}
user agent stylesheet
a:-webkit-any-link {
    color: -webkit-link;
    cursor: pointer;
    text-decoration: underline;
}
.product-list .item-title {
    height: 100px;
    overflow: hidden;
}
.product-list .item-img {
    width: 98px;
    height: 98px;
    margin-right: 16px;
    border: 1px solid #d6d6d6;
}
.pos-center {
    position: relative;
}
.overflow {
    overflow: hidden;
}
.fl {
    float: left;
}
.product-list .item-img img {
    max-width: 98px;
    max-height: 98px;
}
.pos-center .middle-center {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
}
img {
    border: none;
    vertical-align: middle;
}
img {
    border: none;
}
.layui-btn, .layui-edge, .layui-inline, img {
    vertical-align: middle;
}
.layui-inline, img {
    display: inline-block;
    vertical-align: middle;
}
.product-list .item-name {
    margin: 2px 0 15px;
    font-weight: normal;
    padding-top: 10px;
}
.product-list .item-name {
    margin: 40px 0 15px;
    font-size: 18px;
    font-weight: bold;
    color: #000;
}
.text-ellipsis {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.product-list .item-name .line-add, .product-list .item-name .sub-name {
    font-weight: normal;
}
.sub-name {
    font-weight: bold !important;
    padding-bottom: 9px;
}
.line-middle {
    display: inline-block;
    line-height: 1;
    vertical-align: middle;
}
h2 {
    display: block;
    font-size: 1.5em;
    margin-block-start: 0.83em;
    margin-block-end: 0.83em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
}
.product-list .item-adr {
    padding-left: 20px;
    /* background: url(images/ico-adr.png) no-repeat 0 center; */
}
.text-ellipsis {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.product-list .adr-label {
    color: #000;
}
.product-list .adr-cont {
    color: #696969;
}
.text-ellipsis {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
/* ol, ul, li {
    list-style: none;
}
li {
    list-style: none;
}
user agent stylesheet
li {
    text-align: -webkit-match-parent;
}
user agent stylesheet
ul {
    list-style-type: disc;
}
h1, h2, h3, h4, h5, h6 {
    font-weight: 400;
}
h2 {
    display: block;
    font-size: 1.5em;
    margin-block-start: 0.83em;
    margin-block-end: 0.83em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
} */
.product-list .item-info {
    padding: 20px 0;
    padding-top: 20px;
    padding-right: 0px;
    padding-bottom: 20px;
    padding-left: 0px;
    overflow: hidden;
}
.product-list .item-label {
    margin-bottom: 18px;
    margin-top: -10px;
    height: 25px;
}
.product-list .item-btn {
    display: block;
    width: 147px;
    height: 42px;
    border: 0;
    border-radius: 42px;
    margin: 0 auto;
    font-size: 18px;
    color: #fff;
    cursor: pointer;
}
.g-bg, .bg-hover:hover {
    background: #00bba4;
}
.g-shadow {
    -webkit-box-shadow: 0 0 10px rgba(167, 167, 167, .73);
    box-shadow: 0 0 10px rgba(167, 167, 167, .73);
}
.product-list .item-info li {
    width: 50%;
    line-height: 2;
}
.product-list .item-info .info-label {
    color: #000;
}
product-list .item-info .info-cont {
    display: block;
    color: #ff7e00;
    line-height: 28px;
    overflow: hidden;
}
/* .line-middle {
    display: inline-block;
    line-height: 1;
    vertical-align: middle;
} */
.text-ellipsis {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.product-list .item-info {
    padding: 20px 0;
    overflow: hidden;
}
div {
    display: block;
}
/* a, a:hover, a:active {
    text-decoration: none;
    cursor: pointer;
}
a {
    color: #555;
}
a {
    color: #333;
    text-decoration: none;
} */
/* user agent stylesheet
a:-webkit-any-link {
    color: -webkit-link;
    cursor: pointer;
} */
/* ol, ul, li {
    list-style: none;
}
li {
    list-style: none;
}
user agent stylesheet
li {
    text-align: -webkit-match-parent;
} */
user agent stylesheet
ul {
    list-style-type: disc;
}
.product-list .item-info .info-cont {
    display: block;
    color: #ff7e00;
    line-height: 28px;
    overflow: hidden;
}
.institution-index__list .li-t {
    position: relative;
    margin-top: -16px;
    height: 60px;
    line-height: 96px;
    overflow: hidden;
}
.institution-index__list .li-cont {
    padding: 0 0 0 10px;
}
.institution-index__list .li-t__name{
    margin-left: 10px;
    font-size: 18px;
    font-weight: bold;
    color: #000;
    display: block;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    padding-left: 10px;
    padding-right: 10px;
}
.institution-index__list .li-info {
    margin-top: 20px;
    padding: 0 25px;
    line-height: 2;
    color: #3c3c3c;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
    overflow: hidden;
}
.institution-index__list li {
    width: 377px;
    height: 414px;
    margin: 0 23px 23px 0;
}
.institution-index__list .li-t__img img{
        max-width: 100%;
    max-height: 100%;
}
img {
    border: none;
    vertical-align: middle;
}
.institution-index__list .li-t__img {
    width: 58px;
    height: 58px;
    border: 1px solid #c8c8c8;
    text-align: center;
    line-height: 58px;
    overflow: hidden;
    background: #fff;
}
 a{
    text-decoration: none  !important;
}
.institution-index__list .li-img img {
    display: block;
    width: 100%;
    height: 100%;
}
</style>
