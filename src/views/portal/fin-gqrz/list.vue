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

      <div class="bg-white mar-top min-page layui-form">
        <div class="content-filter-box">
          <div class="clearfix box-head">
            <div class="fr head-search">
              <input type="text" name="s_key" placeholder="请输入关键字，支持模糊搜索" lay-verify="" class="fl layui-input search-ipt">
              <button class="fl g-bg search-btn" lay-submit="" lay-filter="formFilter">搜 索</button>
            </div>
            <div class="head-title">
              <img :src="t_img" alt="">
              <span class="line-middle t-name">信息筛选</span>
            </div>
          </div>
          <ul id="filterUl" class="bg-white filter-ul">
            <!-- <li class="filter_ds">
              <span class="fl item-label">区县</span>
              <div class="overflow item-cont item-on" style="height: auto;">
                <div class="clearfix pos-rela item-city">
                  <div class="overflow item-sub_level_2">
                    <a class="fl item-l item-b item-l-on" data-type="AreaType" data-id="0">不限</a>
                  </div>
                  <input type="hidden" name="AreaType">
                </div>
              </div>
            </li> -->

            <li>
              <span class="fl item-label">行业</span>
              <div class="overflow item-cont item-on">
                <div class="clearfix pos-rela item-city">
                  <!-- <div id="OrgType" class="overflow"><a class="fl item-l item-b item-l-on" data-type="OrgType" data-id="0">不限</a><a class="fl item-l" data-type="OrgType" data-id="1">银行</a><a class="fl item-l" data-type="OrgType" data-id="2">担保公司</a><a class="fl item-l" data-type="OrgType" data-id="4">融资租赁公司</a><a class="fl item-l" data-type="OrgType" data-id="5">消费金融公司</a><a class="fl item-l" data-type="OrgType" data-id="6">风险投资机构</a><a class="fl item-l" data-type="OrgType" data-id="7">资产管理公司</a><a class="fl item-l" data-type="OrgType" data-id="8">保险公司</a><a class="fl item-l" data-type="OrgType" data-id="9">保理公司</a><a class="fl item-l" data-type="OrgType" data-id="10">信托公司</a><a class="fl item-l" data-type="OrgType" data-id="11">供应链机构</a><a class="fl item-l" data-type="OrgType" data-id="18">其他</a></div> -->
                  <a :class="{'item-l-on':activeB==0}" class="fl item-l " data-type="OrgType" data-id="0" @click="activeB=0">不限</a>
                  <a :class="{'item-l-on':activeB==1}" class="fl item-l" data-type="OrgType" data-id="1" @click="activeB=1">电商</a>
                  <a :class="{'item-l-on':activeB==2}" class="fl item-l" data-type="OrgType" data-id="2" @click="activeB=2">硬件</a>
                  <a :class="{'item-l-on':activeB==3}" class="fl item-l " data-type="OrgType" data-id="3" @click="activeB=3">文娱传媒</a>
                  <a :class="{'item-l-on':activeB==4}" class="fl item-l" data-type="OrgType" data-id="4" @click="activeB=4">工具</a>
                  <a :class="{'item-l-on':activeB==5}" class="fl item-l" data-type="OrgType" data-id="5" @click="activeB=5">消费生活</a>
                  <a :class="{'item-l-on':activeB==6}" class="fl item-l " data-type="OrgType" data-id="6" @click="activeB=6">金融</a>
                  <a :class="{'item-l-on':activeB==7}" class="fl item-l" data-type="OrgType" data-id="7" @click="activeB=7">医疗健康</a>
                  <a :class="{'item-l-on':activeB==8}" class="fl item-l" data-type="OrgType" data-id="8" @click="activeB=8">企业服务</a>
                  <a :class="{'item-l-on':activeB==9}" class="fl item-l " data-type="OrgType" data-id="9" @click="activeB=9">旅游</a>
                  <a :class="{'item-l-on':activeB==10}" class="fl item-l" data-type="OrgType" data-id="10" @click="activeB=1">房产家居</a>
                  <a :class="{'item-l-on':activeB==11}" class="fl item-l" data-type="OrgType" data-id="11" @click="activeB=10">教育</a>
                  <a :class="{'item-l-on':activeB==12}" class="fl item-l" data-type="OrgType" data-id="12" @click="activeB=2">汽车</a>
                  <a :class="{'item-l-on':activeB==13}" class="fl item-l" data-type="OrgType" data-id="13" @click="activeB=2">张三</a><br>
                  <input type="hidden" name="OrgType">
                </div>
              </div>
              <span class="filter-switch">
                <!-- <span class="switch-name">更多</span><i class="flip-label switch-arr" :style="more_icon"/> -->
              </span>
            </li>
            <li>
              <span class="fl item-label">融资轮次</span>
              <div class="overflow item-cont item-on">
                <div class="clearfix pos-rela item-city">
                  <!-- <div class="overflow item-sub_city item-sub_level_1"> -->
                  <!-- <a class="fl item-l item-b item-l-on" data-type="CityType" data-id="0">不限</a>
                    <a class="fl item-l" data-type="CityType" data-id="110100">北京市</a></div> -->
                  <a :class="{'item-l-on':activeC==0}" class="fl item-l " data-type="CityType" data-id="0" @click="activeC=0">不限</a>
                  <a :class="{'item-l-on':activeC==1}" class="fl item-l" data-type="CityType" data-id="1" @click="activeC=1">种子轮</a>
                  <a :class="{'item-l-on':activeC==2}" class="fl item-l" data-type="CityType" data-id="2" @click="activeC=2">天使轮</a>
                  <a :class="{'item-l-on':activeC==3}" class="fl item-l " data-type="CityType" data-id="3" @click="activeC=3">pre-A轮</a>
                  <a :class="{'item-l-on':activeC==4}" class="fl item-l" data-type="CityType" data-id="4" @click="activeC=4">A轮</a>
                  <a :class="{'item-l-on':activeC==5}" class="fl item-l" data-type="CityType" data-id="5" @click="activeC=5">B轮</a>
                  <a :class="{'item-l-on':activeC==6}" class="fl item-l " data-type="CityType" data-id="6" @click="activeC=6">C轮</a>
                  <a :class="{'item-l-on':activeC==7}" class="fl item-l" data-type="CityType" data-id="7" @click="activeC=7">D轮</a>
                  <a :class="{'item-l-on':activeC==8}" class="fl item-l" data-type="CityType" data-id="8" @click="activeC=8">E轮</a>
                  <a :class="{'item-l-on':activeC==9}" class="fl item-l " data-type="CityType" data-id="9" @click="activeC=9">F轮</a>
                  <a :class="{'item-l-on':activeC==10}" class="fl item-l" data-type="CityType" data-id="10" @click="activeC=1">G轮</a>
                  <a :class="{'item-l-on':activeC==11}" class="fl item-l" data-type="CityType" data-id="11" @click="activeC=10">PRE-IPO</a>
                  <a :class="{'item-l-on':activeC==12}" class="fl item-l" data-type="CityType" data-id="12" @click="activeC=2">IPO</a>
                  <a :class="{'item-l-on':activeC==13}" class="fl item-l" data-type="CityType" data-id="13" @click="activeC=2">上市企业</a><br>
                  <input type="hidden" name="CityType">
                </div>
              </div>
              <span class="filter-switch" />
            </li>
          </ul>
          <input id="hdSortType" type="hidden" name="SortType">

        </div>
      </div>

      <div id="page_template_body_id" class="min-page small-mar-top search-result mar-top-bottom">
        <p class="result-text">搜索到<span class="result-num">{{ total }}</span>个结果</p>
        <ul id="productListLine" class="product-list-line">
          <router-link
            v-for="(item, index) in stock"
            :key="index"
            :to="{ path: '/fin-gqrz/detail/' + item.id }"
            tag="li"
          >
            <li>
              <div class="fl item-img"> <img :src="item.imgUrl" alt=""> </div>
              <div class="fl item-title">
                <p class="st"> <span class="st-label">{{ item.name }}</span> </p>
                <p class="t">{{ item.investOrgBrief }}</p>
              </div>
              <div><router-link :to="{ path: '/fin-gqrz/detail/' + item.id }"><button class="fl layui-btn item-btn" type="button">查看详情</button></router-link></div>
            </li>
          </router-link>
          <!-- <li>
            <div class="fl item-img"> <img src="http://39.107.117.137:18899/group1/M01/00/00/rBEUUl3uGHGAeQBjAAAPPbGM7O8531.png" alt=""> </div>
            <div class="fl item-title">
              <p class="st"> <span class="st-label">京西文旅</span> </p>
              <p class="t">北京京西文旅科技投资基金管理有限公司（以下简称：文旅基金公司）于2016年8月8日成立，隶属北京市文化投资发展集团有限责任公司（以下简称：文投集团），由文投集团与门头沟区属企业北京京西鑫融投资管理有限公司（以下简称：京西鑫融公司）共同出资设立。公司注册资本金1000万元人民币，其中文投集团占股70%，京西鑫融公司 年来，红杉资本投资了众多创新企业和产业潮流的领导者。 红杉资本中国基金作为「创业者背后的创业者」，专注于科技/传媒、医疗健康、消费品/服务、工业科技四个方向的投资机遇。</p>
            </div>
            <div><router-link to="/fin-gqrz/detail"><button class="fl layui-btn item-btn" type="button">查看详情</button></router-link></div>
          </li>
          <li>
            <div class="fl item-img"> <img src="http://39.107.117.137:18899/group1/M01/00/00/rBEUUl3uGHGAK_JZAAARbaldlK4733.png" alt=""> </div>
            <div class="fl item-title">
              <p class="st"> <span class="st-label">CBC宽带资本</span> </p>
              <p class="t">宽带资本（CBC）由田溯宁成立于2006年，10余年来专注于TMT行业股权投资，目前管理多支美元及人民币基金。 宽带资本的投资项目涵盖从成长期到成熟期的各阶段，投资组合包括企业级服务、云计算、大数据、人工智能、5G等以技术和数据驱动的领域，旗下各基金累计投资一百多个项目，包括世纪互联、亚信科技、朗新科技、七牛云、同...
                年来，红杉资本投资了众多创新企业和产业潮流的领导者。 红杉资本中国基金作为「创业者背后的创业者」，专注于科技/传媒、医疗健康、消费品/服务、工业科技四个方向的投资机遇。</p>
            </div>
            <div><router-link to="/fin-gqrz/detail"><button class="fl layui-btn item-btn" type="button">查看详情</button></router-link></div>
          </li>
          <li>
            <div class="fl item-img"> <img src="http://39.107.117.137:18899/group1/M01/00/00/rBEUUl3uGHGAGBakAAAQTsH2_Lk761.png" alt=""> </div>
            <div class="fl item-title">
              <p class="st"> <span class="st-label">德同资本</span> </p>
              <p class="t">德同资本是一家国内领先的私募股权投资机构，专注于消费升级、医疗健康、以及智能制造领域，着重搜寻有巨大市场机遇，优秀管理团队和清晰运营模式的高成长公司。德同资本目前管理资金超过100亿人民币，主要投资人包括多个省市政府引导基金和金融机构，并和多家行业龙头上市公司上海城投/威孚高科、益民集团、粤传媒、中文在线、...
              </p>
            </div>
            <div><router-link to="/fin-gqrz/detail"><button class="fl layui-btn item-btn" type="button">查看详情</button></router-link></div>
          </li> -->
        </ul>
        <template>
          <pagenation
            :total="total"
            :page-size="param.limit"
            :current-page="param.page"
            @handleSizeChangeSub="handleSizeChange"
            @handleCurrentChangeSub="handleCurrentChange"
          />
        </template>
      </div>
    </div>
    <lzfooter />
  </div>
</template>

<script>
// import beijingJson from '@/assets/beijing.json'
import lzhead from '@/views/components/head'
import lzfooter from '@/views/components/footer'
import org_banner from '@/assets/images/portal/org_gqrz.png'
import t_img from '@/assets/images/portal/t-img.png'
import more_img from '@/assets/icons/svg/arr-down.png'
import ico_type1 from '@/assets/images/portal/ico-type1.png'
import ico_type2 from '@/assets/images/portal/ico-type2.png'
import pagenation from '@/views/components/pagenation'

export default {
  name: 'FinOrgList',
  components: {
    lzhead,
    lzfooter,
    pagenation
  },
  data() {
    return {
      total: 0,
      tableData: [],
      wantSelected: 1,
      org_banner: org_banner,
      t_img: t_img,
      ico_type2: ico_type2,
      ico_type1: ico_type1,
      isBlock: true,
      param: {
        page: 1,
        limit: 10,
        financeRound: '',
        investIndus: ''
      },
      more_icon: {
        backgroundImage: 'url(' + more_img + ')',
        backgroundRepeat: 'no-repeat',
        backgroundPositionX: 'right',
        backgroundPositionY: 'center'
      },
      activeB: 0,
      activeC: 0,
      stock: []
    }
  },
  mounted() {
    this.findAll(this.param)
  },
  methods: {
    showDetail(id) {
      this.$router.push({
        path: '/fin-gqrz/detail'
        // params: { data: 'query' }
      })
    },
    handleSizeChange(size) {
      this.param.page = 1
      this.param.limit = size
      this.findAll(this.param)
    },
    handleCurrentChange(page) {
      this.param.page = page
      this.findAll(this.param)
    },
    findAll(param) {
      this.$axios({
        url: 'http://127.0.0.1:9900/api-finance/investorg/getList',
        method: 'POST',
        data: param
      }).then((res) => {
        if (res.data.code === 0) {
          this.stock = res.data.data
          this.total = parseInt(res.data.count)
          // console.log(res.data.data)
        } else {
          this.$message.error(res.data.msg)
        }
      })
    }
  }
}
</script>

<style scoped>
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
    padding: 50px 50px;
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
.min-page {
    width: 1200px;
    margin: 0 auto;
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
.div_body{
    margin-bottom: 30px;
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
    width: 850px;
    height: 50px;
    line-height: 1.8;
}
.product-list-line .item-title .t {
    display: block;
    margin-bottom: 100px;
    font-size: 15px;
    color: #181818;
    overflow: hidden;
    word-break:normal;
     word-break: break-all;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
}
.product-list-line .item-title .st {
    font-size: 16px;
    color: #050505;
    line-height: 1;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
    text-align: justify;
    margin-bottom: 5px;
    font-weight: bold;
    text-overflow: ellipsis;

}
.product-list-line .item-info {
    width: 350px;
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
    width: 120px;
    height: 40px;
    margin: 25px 0 0 50px;
    margin-top: 25px;
    margin-right: 0px;
    margin-bottom: 0px;
    margin-left: 50px;
    border-radius: 20px;
    font-size: 18px;
    background: #bb0000;
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
</style>
