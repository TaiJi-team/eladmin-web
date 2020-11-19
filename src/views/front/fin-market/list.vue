<template>
  <div style="background: #f5f5f5">
    <lzhead />
    <div class="div_body">
      <!-- banner-->
      <el-carousel class="banner" :autoplay="false">
        <el-carousel-item v-for="item in 4" :key="item">
          <el-image
            style="width: 100%; height: 100%"
            :src="market_banner"
            fit="fill"
          />
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
              <span class="line-middle t-name">所有产品</span>
            </div>
          </div>
          <ul id="filterUl" class="bg-white filter-ul">

            <li>
              <span class="fl item-label">服务区域</span>
              <div class="overflow item-cont item-on">
                <div class="clearfix pos-rela item-city">
                  <div class="overflow item-sub_city item-sub_level_1">
                    <a class="fl item-l item-b item-l-on" data-type="CityType" data-id="0">不限</a>
                    <a class="fl item-l" data-type="CityType" data-id="110100">北京市</a></div>
                  <input type="hidden" name="CityType">
                </div>
              </div>
              <span class="filter-switch"><span class="switch-name">更多</span><i class="flip-label switch-arr" /></span>
            </li>
            <li class="filter_ds">
              <span class="fl item-label">区县</span>
              <div class="overflow item-cont item-on" style="height: auto;">
                <div class="clearfix pos-rela item-city">
                  <div class="overflow item-sub_level_2">
                    <a class="fl item-l item-b item-l-on" data-type="AreaType" data-id="0">不限</a>
                  </div>
                  <input type="hidden" name="AreaType">
                </div>
              </div>
            </li>

            <li>
              <span class="fl item-label">贷款渠道</span>
              <div class="overflow item-cont item-on">
                <div class="clearfix pos-rela item-city">
                  <div id="OrgType" class="overflow"><a class="fl item-l item-b item-l-on" data-type="OrgType" data-id="0">不限</a><a class="fl item-l" data-type="OrgType" data-id="1">银行</a><a class="fl item-l" data-type="OrgType" data-id="2">担保公司</a><a class="fl item-l" data-type="OrgType" data-id="4">融资租赁公司</a><a class="fl item-l" data-type="OrgType" data-id="5">消费金融公司</a><a class="fl item-l" data-type="OrgType" data-id="6">风险投资机构</a><a class="fl item-l" data-type="OrgType" data-id="7">资产管理公司</a><a class="fl item-l" data-type="OrgType" data-id="8">保险公司</a><a class="fl item-l" data-type="OrgType" data-id="9">保理公司</a><a class="fl item-l" data-type="OrgType" data-id="10">信托公司</a><a class="fl item-l" data-type="OrgType" data-id="11">供应链机构</a><a class="fl item-l" data-type="OrgType" data-id="18">其他</a></div>
                  <input type="hidden" name="OrgType">
                </div>
              </div>
              <span class="filter-switch"><span class="switch-name">更多</span><i class="flip-label switch-arr" /></span>
            </li>
            <li>
              <span class="fl item-label">担保方式</span>
              <div class="overflow item-cont item-on">
                <div class="clearfix pos-rela item-city">
                  <div id="GuaranteeModeType" class="overflow"><a class="fl item-l item-b item-l-on" data-type="GuaranteeModeType" data-id="0">不限</a><a class="fl item-l" data-type="GuaranteeModeType" data-id="1">抵押</a><a class="fl item-l" data-type="GuaranteeModeType" data-id="2">质押</a><a class="fl item-l" data-type="GuaranteeModeType" data-id="3">信保基金</a><a class="fl item-l" data-type="GuaranteeModeType" data-id="4">一般保证</a><a class="fl item-l" data-type="GuaranteeModeType" data-id="5">信用</a><a class="fl item-l" data-type="GuaranteeModeType" data-id="6">保证</a><a class="fl item-l" data-type="GuaranteeModeType" data-id="7">连带责任保证</a></div>
                  <input type="hidden" name="GuaranteeModeType">
                </div>
              </div>
            </li>
            <li>
              <span class="fl item-label">产品类型</span>
              <div class="overflow item-cont item-on">
                <div class="clearfix pos-rela item-city">
                  <div id="ProductType" class="overflow"><a class="fl item-l item-b item-l-on" data-type="ProductType" data-id="0">不限</a><a class="fl item-l" data-type="ProductType" data-id="3">线上审批</a><a class="fl item-l" data-type="ProductType" data-id="2">线下审批</a><a class="fl item-l" data-type="ProductType" data-id="1">秒批秒贷</a><a class="fl item-l" data-type="ProductType" data-id="100">抗疫产品</a></div>
                  <input type="hidden" name="ProductType">
                </div>
              </div>
            </li>

            <li>
              <span class="fl item-label">贷款期限</span>
              <div class="overflow item-cont item-on">
                <div class="clearfix pos-rela item-city">
                  <div id="LoanTimeType" class="overflow"><a class="fl item-l item-b item-l-on" data-type="LoanTimeType" data-id="0">不限</a><a class="fl item-l" data-type="LoanTimeType" data-id="1">6个月及以下</a><a class="fl item-l" data-type="LoanTimeType" data-id="2">12个月及以下</a><a class="fl item-l" data-type="LoanTimeType" data-id="3">36个月及以下</a><a class="fl item-l" data-type="LoanTimeType" data-id="4">36个月以上</a></div>
                  <input type="hidden" name="LoanTimeType">
                </div>
              </div>
            </li>
            <li>
              <span class="fl item-label">贷款额度</span>
              <div class="overflow item-cont item-on">
                <div class="clearfix pos-rela item-city">
                  <div id="LoanLimitType" class="overflow"><a class="fl item-l item-b item-l-on" data-type="LoanLimitType" data-id="0">不限</a><a class="fl item-l" data-type="LoanLimitType" data-id="1">100万及以下</a><a class="fl item-l" data-type="LoanLimitType" data-id="2">200万及以下</a><a class="fl item-l" data-type="LoanLimitType" data-id="3">300万及以下</a><a class="fl item-l" data-type="LoanLimitType" data-id="4">500万及以下</a><a class="fl item-l" data-type="LoanLimitType" data-id="5">500万以上</a></div>
                  <input type="hidden" name="LoanLimitType">
                </div>
              </div>
            </li>
          </ul>
          <input id="hdSortType" type="hidden" name="SortType">

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
import market_banner from '@/assets/images/front/fin-market-banner.jpg'
import t_img from '@/assets/images/front/t-img.png'

export default {
  name: 'FinMarketList',
  components: { lzhead, lzfooter },
  data() {
    return {
      tableData: [],
      wantSelected: 1,
      market_banner: market_banner,
      t_img: t_img
    }
  },
  mounted() {

  },
  methods: {

  }
}
</script>

<style scoped>
.banner {
  height: 400px;
}
.banner >>> .el-carousel__container {
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
}
*, *:before, *:after {
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
ol, ul, li {
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
ol, ul, li {
    list-style: none;
}
.content-filter-box .filter-ul .item-label {
    margin-right: 12px;
    font-size: 15px;
    font-weight: bold;
    color: #2a2a2a;
}
.content-filter-box .filter-ul .item-on, .content-filter-box .filter-ul .item-on .item-sub_city {
    height: 22px;
    overflow: hidden;
}
.content-filter-box .filter-ul .item-cont {
    padding-right: 60px;
}
.overflow {
    overflow: hidden;
}
.line-action-hover, .pos-rela {
    position: relative;
}
.clearfix {
    zoom: 1;
}
.content-filter-box .filter-ul .item-on, .content-filter-box .filter-ul .item-on .item-sub_city {
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
input {
    -webkit-appearance: none;
}
body, input, textarea, select, button {
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
.g-bg, .bg-hover:hover {
    background: #00bba4;
}
.fl {
    float: left;
}
</style>
