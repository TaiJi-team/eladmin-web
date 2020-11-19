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
              <img src="/res/images/t-img.png" alt="">
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

export default {
  name: 'FinMarketList',
  components: { lzhead, lzfooter },
  data() {
    return {
      tableData: [],
      wantSelected: 1,
      market_banner: market_banner
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

</style>
