<template>
  <div style="background: #f5f5f5">
    <lzhead />
    <div class="div_body">
      <div id="LAY_app_body">
        <div class="layadmin-tabsbody-item layui-show">
          <div id="financingProductDetail">
            <div class="min-page clearfix bread-crumb"> <span class="fl crumb-label">当前位置：</span> <span class="fl layui-breadcrumb" lay-separator=">" style="visibility: visible;"> <a lay-href="main">首页</a><span lay-separator="">&gt;</span> <a lay-href="requIndex/financialProducts">股权融资</a><span lay-separator="">&gt;</span> <a><cite>红杉资本</cite></a> </span> </div>
            <div class="min-page mar-bottom clearfix detail-cont">
              <div class="fl page-left">
                <div class="bg-white small-mar-bottom clearfix detail-head">
                  <div class="fl pos-center overflow head-img"> <img src="http://39.107.117.137:18899/group1/M01/00/00/rBEUUl3uGHGAZ68fAAAjOg2Yhz4764.png" class="middle-center" alt=""> </div>
                  <div class="overflow head-cont">
                    <div class="clearfix">
                      <div class="fr ar clearfix"> <span id="productCollect" class="head-collect " /> <input type="hidden" name="collect" value="0"> </div>
                      <h2 class="text-ellipsis head-name">{{ org.name }}</h2>
                    </div>
                    <div class="product-list cont-info">
                      <ul class="item-info">
                        <li class="fl text-ellipsis"><span class="line-middle info-label">组织形式</span><span class="line-middle info-cont" title="5-1000万">{{ org.organization }}</span></li>
                        <li class="fl text-ellipsis"><span class="line-middle info-label">证件号码</span><span class="line-middle info-cont">{{ org.creditCode }}</span></li>
                        <li class="fl text-ellipsis"><span class="line-middle info-label">注册日期</span><span class="line-middle info-cont">{{ org.regDate }}</span></li>
                        <li class="fl text-ellipsis"><span class="line-middle info-label">所属地区</span><span class="line-middle info-cont">{{ org.regAddr }}</span></li>
                        <li class="fl text-ellipsis"><span class="line-middel info-label">管理资金规模</span><span class="line-middle info-cont" title="抵押">{{ org.fundScale }}</span></li>
                      </ul>
                    </div>
                    <div class="clearfix">
                      <ul class="head-info">
                        <li class="fl"> <span class="fl li-label">注册地址：</span>
                          <div class="text-ellipsis"> <span class="li-data">{{ org.belongArea }}</span> </div>
                        </li>
                        <br>
                        <li class="fl"> <span class="fl li-label">办公地址：</span>
                          <div class="text-ellipsis"> <span class="li-data">{{ org.actualOfficeAddr }}</span> </div>
                        </li> <!-- 修改 -->
                        <br>
                        <li class="fl"> <span class="fl li-label">法定代表人：</span>
                          <div class="text-ellipsis"> <span class="li-data">{{ org.legalPerson }}</span> </div>
                        </li> <!-- 修改 -->
                      </ul>
                    </div>
                    <!-- <div class="clearfix">
                      <div class="fr"> <button type="button" class="fl layui-btn item-btn" @click="showDetail(1)">投递项目</button></div>
                    </div> -->
                  </div>
                </div>
                <div class="bg-white overflow detail-cont">
                  <div class="small-mar-bottom cont-page">
                    <div class="label-ico page-head"> <span class="line-middle">投资机构简介</span> </div>
                    <div class="page-main">
                      <p class="detail-text">{{ org.investOrgBrief }}</p>
                    </div>
                  </div>
                  <div class="small-mar-bottom cont-page">
                    <div class="label-ico page-head"> <span class="line-middle">投资团队简介</span> </div>
                    <div class="page-main">
                      <p class="detail-text">{{ org.investTeamBrief }}</p>
                      <p />
                    </div>
                  </div>
                  <div class="small-mar-bottom cont-page">
                    <div class="label-ico page-head"> <span class="line-middle">投资方向简介</span> </div>
                    <div class="page-main">
                      <p class="detail-text">{{ org.investIntentBrief }}</p>
                    </div>
                  </div>
                  <div class="small-mar-bottom cont-page">
                    <div class="label-ico page-head"> <span class="line-middle">投资偏好</span> </div>
                    <div class="page-main">不限</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

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
import market_banner from '@/assets/images/portal/fin-market-banner.jpg'
// import t_img from '@/assets/images/portal/t-img.png'
// import more_img from '@/assets/icons/svg/arr-down.png'
// import ico_type1 from '@/assets/images/portal/ico-type1.png'
// import ico_type2 from '@/assets/images/portal/ico-type2.png'

export default {
  name: 'FinMarketDetail',
  components: {
    lzhead,
    lzfooter
  },
  data() {
    return {
      tableData: [],
      wantSelected: 1,
      id: 0,
      market_banner: market_banner,
      org: {}
    }
  },
  mounted() {
    this.id = this.$route.params.id
    this.selectById(this.id)
  },
  methods: {
    selectById(id) {
      this.$axios({
        url: 'http://127.0.0.1:9900/api-finance/investorg/selectById/' + id,
        method: 'get'
      }).then(res => {
        // this.products = res.data.data
        // this.total = res.data.count
        this.org = res.data.datas
        console.log(res.data)
      })
    }
  }
}
</script>

<style scoped>
.banner {
    height: 400px;
}

.banner>>>.el-carousel__container {
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

ol,
ul,
li {
    list-style: none;
}

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
.product-list-line li {
    position: relative;
    height: 98px;
    padding: 28px 25px 22px;
    margin-left: -3.5%;
    margin-bottom: 25px;
    background: #fff;
    overflow: hidden;
}
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
    border: 1px solid #d9d6d6;
    text-align: center;
    line-height: 80px;
    overflow: hidden;
}
.product-list-line li {
    position: relative;
    height: 148px;
    padding: 28px 25px 22px;
    margin-bottom: 25px;
    background: #fff;
    overflow: hidden;
}
.product-list-line .item-title {
    width: 230px;
}
.product-list-line .item-title .t {
    display: block;
    margin-bottom: 10px;
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
    width: 210px;
    padding-top: 15px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    font-size: 16px;
    text-align: center;
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
    background: #bb0000;
}
.layui-btn {
    display: inline-block;
    height: 38px;
    line-height: 38px;
    padding: 0 18px;
    background-color: #bb0000;
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
.detail-cont {
    padding: 20px 30px;
}
.mar-bottom {
    margin-bottom: 40px;
}
.min-page {
    width: 1200px;
    margin: 0 auto;
}
.clearfix {
    zoom: 1;
}
.box-sizing {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}
.detail-cont .information {
    padding: 0 0 15px;
    border-bottom: 1px solid #d6d6d6;
    overflow: hidden;
}
*[lay-href], *[lay-tips], *[layadmin-event] {
    cursor: pointer;
}
.detail-cont .information .item-img {
    width: 84px;
    height: 84px;
    margin-right: 17px;
    border: 1px solid #ececec;
}
.pos-center {
    position: relative;
}
.detail-cont .information .item-img img {
    max-width: 84px;
    max-height: 84px;
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
blockquote, body, button, dd, div, dl, dt, form, h1, h2, h3, h4, h5, h6, input, li, ol, p, pre, td, textarea, th, ul {
    margin: 0;
    padding: 0;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
}
*[lay-href], *[lay-tips], *[layadmin-event] {
    cursor: pointer;
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
ol, ul, li {
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
.detail-cont .information .item-title {
    line-height: 30px;
    font-size: 16px;
    color: #1c1c1c;
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
}
body, div, dl, dt, dd, ul, ol, li, h1, h2, h3, h4, h5, h6, pre, code, form, fieldset, legend, input, button, textarea, p, blockquote, th, td {
    margin: 0;
    padding: 0;
}
.about-recom {
    padding: 25px 0 10px;
}
.side-right-list .list-top {
    height: 20px;
    line-height: 20px;
    font-size: 16px;
    font-weight: bold;
}
html {
    background: #f5f5f5;
    color: #666;
}
.label-ico:before {
    content: '';
    display: inline-block;
    width: 4px;
    height: 17px;
    margin-right: 10px;
    /* background: url(images/lab-ico.png) no-repeat 0 0; */
    vertical-align: middle;
}
.line-middle {
    display: inline-block;
    line-height: 1;
    vertical-align: middle;
}
.side-right-list .list-top {
    height: 20px;
    line-height: 20px;
    font-size: 16px;
    font-weight: bold;
}
html {
    background: #f5f5f5;
    color: #666;
}
.side-right-list .list-cont li {
    padding: 20px 15px;
    border-bottom: 1px dashed #e5e5e5;
    overflow: hidden;
}
.side-right-list .list-cont .item-img {
    width: 84px;
    height: 84px;
    margin-right: 17px;
    border: 1px solid #ececec;
}
.pos-center {
    position: relative;
}
.fl {
    float: left;
}
.side-right-list .list-cont .item-img img {
    max-width: 84px;
    max-height: 84px;
}
.pos-center .middle-center {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
}
.side-right-list .list-cont .item-title {
    line-height: 30px;
    font-size: 17px;
    color: #1c1c1c;
}
.text-ellipsis {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.detail-head {
    padding: 25px 20px 25px 20px;
}
.small-mar-bottom {
    margin-bottom: 20px;
}
.detail-head .head-img {
    width: 160px;
    height: 160px;
    margin-top: 10px;
    margin-right: 25px;
    border: 1px solid #e5e5e5;
}
.pos-center {
    position: relative;
}
.fl {
    float: left;
}
.detail-head .head-img img {
    max-width: 160px;
    max-height: 90px;
}
.pos-center .middle-center {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
}
.clearfix {
    zoom: 1;
}
.ar {
    text-align: right;
}
.fr {
    float: right;
}
.clearfix {
    zoom: 1;
}
.detail-head .head-collect {
    display: inline-block;
    width: 31px;
    height: 30px;
    margin: 0 0 20px;
    /* background: url(images/collect.png) no-repeat 0 0; */
}
.clearfix:after {
    content: "";
    display: block;
    visibility: hidden;
    clear: both;
    height: 0;
}
.detail-cont .page-head {
    border-bottom: 1px solid #d6d6d6;
    line-height: 34px;
    font-size: 16px;
    font-weight: bold;
    color: #1c1c1c;
}
.detail-cont .page-head:before {
    margin-right: 5px;
}
.label-ico:before {
    content: '';
    display: inline-block;
    width: 4px;
    height: 17px;
    margin-right: 10px;
    /* background: url(images/lab-ico.png) no-repeat 0 0; */
    vertical-align: middle;
}
.detail-cont .page-head span {
    height: 14px;
}
.line-middle {
    display: inline-block;
    line-height: 1;
    vertical-align: middle;
}
.detail-cont .page-head {
    border-bottom: 1px solid #d6d6d6;
    line-height: 34px;
    font-size: 16px;
    font-weight: bold;
    color: #1c1c1c;
}
blockquote, body, button, dd, div, dl, dt, form, h1, h2, h3, h4, h5, h6, input, li, ol, p, pre, td, textarea, th, ul {
    margin: 0;
    padding: 0;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
}
.detail-cont .page-main {
    padding: 5px 10px;
}
.detail-cont .detail-text {
    color: #1c1c1c;
    line-height: 2;
}
p {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
}
.detail-head .head-name {
    display: block;
    line-height: 2;
    font-weight: bold;
    font-size: 28px;
    color: #000;
}
.text-ellipsis {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.detail-head .head-name .line-add {
    margin: 0 5px;
}
.detail-head .head-name .line-add, .detail-head .head-name .sub-name {
    font-weight: normal;
}
.text-ellipsis {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
detail-head .head-name .sub-name {
    color: #454545;
}
.detail-head .head-name .line-add, .detail-head .head-name .sub-name {
    font-weight: normal;
}
.text-ellipsis {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.product-list {
    margin-right: -30px;
}
.detail-head .head-cont .item-info {
    padding: 0;
}
.product-list .item-info {
    padding: 20px 0;
    overflow: hidden;
}
ol, ul, li {
    list-style: none;
}
.detail-head .head-cont .item-info li {
    width: 32%;
}
.product-list .item-info li {
    width: 50%;
    line-height: 2;

}
.text-ellipsis {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.fl {
    float: left;
}
ol, ul, li {
    list-style: none;
}
.product-list .item-info .info-label {
    color: #000;
}
.line-middle {
    display: inline-block;
    line-height: 1;
    vertical-align: middle;
}
.product-list .item-info li {
    width: 50%;
    line-height: 2;
}
.text-ellipsis {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
ol, ul, li {
    list-style: none;
}
li {
    list-style: none;
}
.detail-head .head-cont .info-cont {
    display: inline;
}
.product-list .item-info .info-cont {
    display: block;
    color:#bb0000;
    line-height: 28px;
    overflow: hidden;
    font-size: 22px;

}
.line-middle {
    display: inline-block;
    line-height: 1;
    vertical-align: middle;
}
.product-list .item-info li {
    width: 50%;
    line-height: 2;
}
.text-ellipsis {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
ol, ul, li {
    list-style: none;
}
li {
    list-style: none;
}
blockquote, body, button, dd, div, dl, dt, form, h1, h2, h3, h4, h5, h6, input, li, ol, p, pre, td, textarea, th, ul {
    margin: 0;
    padding: 0;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
}
.detail-head .head-cont .item-info .li-p {
    width: 20%;
    padding-left: 10px;
}
.clearfix {
    zoom: 1;
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
user agent stylesheet
div {
    display: block;
}
.detail-head .head-info {
    padding-top: 10px;
    overflow: hidden;
}
.detail-head .head-info .li-label {
    width: 100px;
    color: #1c1c1c;
}
.detail-head .head-btn {
    width: 127px;
    height: 37px;
    /* margin-top: 55px; */
    border: 0;
    line-height: 37px;
    font-size: 18px;
    color: #fff;
}
.g-bg, .bg-hover:hover {
    background: #00bba4;
}
.ac {
    text-align: center;
}
.fl {
    float: left;
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
.detail-cont {
    padding: 20px 30px;
    padding-top: 20px;
    padding-right: 30px;
    padding-bottom: 20px;
    padding-left: 30px;
}
.detail-cont .page-right {
    width: 350px;
    padding: 20px;
    padding-top: 20px;
    padding-right: 20px;
    padding-bottom: 20px;
    padding-left: 20px;
}
.detail-cont .page-left {
    width: 1150px;
    padding: 0 15px;
    padding-top: 0px;
    padding-right: 10px;
    padding-bottom: 0px;
    padding-left: 10px;
    margin-right: 20px;
}
.bread-crumb {
    padding: 25px 0 15px;
    padding-top: 25px;
    padding-right: 0px;
    padding-bottom: 15px;
    padding-left: 0px;
}
.box-sizing {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}
.min-page {
    width: 1200px;
    margin: 0 auto;
    margin-top: 0px;
    margin-right: auto;
    margin-bottom: 0px;
    margin-left: auto;
}
.side-right-list .list-cont .item-title {
    line-height: 30px;
    font-size: 17px;
    color: #1c1c1c;
}
.text-ellipsis {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.side-right-list .list-cont .item-label {
    color: #1c1c1c;
}
.line-middle {
    display: inline-block;
    line-height: 1;
    vertical-align: middle;
}
.side-right-list .list-cont .item-info {
    line-height: 24px;
    color: #fd7100;
}
blockquote, body, button, dd, div, dl, dt, form, h1, h2, h3, h4, h5, h6, input, li, ol, p, pre, td, textarea, th, ul {
    margin: 0;
    padding: 0;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
}
user-login-mobile {
    position: absolute;
}
.layadmin-user-login-main {
    width: 375px;
    margin: 0 auto;
    box-sizing: border-box;
}
.layadmin-user-login-header {
    text-align: center;
}
.layadmin-user-login-box {
    padding: 20px;
}
.layadmin-user-login-header h2 {
    margin-bottom: 10px;
    font-weight: 300;
    font-size: 30px;
    color: #000;
}
.layadmin-user-login-box {
    padding: 20px;
    padding-top: 20px;
    padding-right: 20px;
    padding-bottom: 20px;
    padding-left: 20px;
}
.layadmin-user-login-body .layui-form-item {
    position: relative;
}
.layui-form-item {
    margin-bottom: 15px;
    clear: both;
    *zoom: 1;
}
.layadmin-user-login-icon {
    position: absolute;
    left: 1px;
    top: 1px;
    width: 38px;
    line-height: 36px;
    text-align: center;
    color: #d2d2d2;
}
.layui-icon {
    font-family: layui-icon!important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
.layui-btn, .layui-disabled, .layui-icon, .layui-unselect {
    -webkit-user-select: none;
    -ms-user-select: none;
    -moz-user-select: none;
}
user agent stylesheet
label {
    cursor: default;
}
.layadmin-user-login-body .layui-form-item .layui-input {
    padding-left: 38px;
}
<style>
.layadmin-user-login-main input {
    height: 38px;
    border: 1px solid #dcdcdc;
}
input[type="text"] {
    width: 100%;
    height: 100%;
    padding: 0 10px;
    border: 0;
}
.layui-input, .layui-textarea {
    display: block;
    width: 100%;
    padding-left: 10px;
}
.layui-input, .layui-select, .layui-textarea {
    height: 38px;
    line-height: 1.3;
    line-height: 38px\9;
    border-width: 1px;
    border-style: solid;
    background-color: #fff;
    border-radius: 2px;
}
.layui-badge-rim, .layui-colla-content, .layui-colla-item, .layui-collapse, .layui-elem-field, .layui-form-pane .layui-form-item[pane], .layui-form-pane .layui-form-label, .layui-input, .layui-layedit, .layui-layedit-tool, .layui-quote-nm, .layui-select, .layui-tab-bar, .layui-tab-card, .layui-tab-title, .layui-tab-title .layui-this:after, .layui-textarea {
    border-color: #e6e6e6;
}
.layui-btn, .layui-input, .layui-select, .layui-textarea, .layui-upload-button {
    outline: 0;
    -webkit-appearance: none;
    transition: all .3s;
    -webkit-transition: all .3s;
    box-sizing: border-box;
}
.layui-form-item:after {
    content: '\20';
    clear: both;
    *zoom: 1;
    display: block;
    height: 0;
}

</style>
