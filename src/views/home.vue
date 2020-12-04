<template>
  <div class="div_body">
    <!-- banner-->
    <el-carousel class="banner" :autoplay="false">
      <el-carousel-item v-for="item in 4" :key="item">
        <el-image
          style="width: 100%; height: 100%"
          :src="index_banner"
          fit="fill"
        />
      </el-carousel-item>
    </el-carousel>
    <!-- 统计信息 -->
    <div class="min-width statistical">
      <div class="min-page">
        <ul class="data-list">
          <li class="fl box-sizing"><p class="data-c"><span class="data-num">227</span> <span>笔</span></p>
            <p class="data-t"><img src="https://www.celoan.cn/res/images/ico/ico-8.png" alt=""> <span
              class="line-middle"
            >正在对接</span></p>
          </li>
          <li class="fl box-sizing"><p class="data-c"><span class="data-num">3.42</span> <span>亿+</span></p>
            <p class="data-t"><img src="https://www.celoan.cn/res/images/ico/ico-9.png" alt=""> <span
              class="line-middle"
            >意向金额</span></p>
          </li>
          <li class="fl box-sizing"><p class="data-c"><span class="data-num">48</span> <span>笔</span></p>
            <p class="data-t"><img src="https://www.celoan.cn/res/images/ico/ico-10.png" alt=""> <span
              class="line-middle"
            >近一年融资笔数</span>
            </p></li>
          <li class="fl box-sizing"><p class="data-c"><span class="data-num">0.72</span> <span>亿+</span></p>
            <p class="data-t"><img src="https://www.celoan.cn/res/images/ico/ico-11.png" alt=""> <span
              class="line-middle"
            >近一年融资金额</span>
            </p></li>
          <li class="fl box-sizing"><p class="data-c"><span class="data-num">48</span> <span>笔</span></p>
            <p class="data-t"><img src="https://www.celoan.cn/res/images/ico/ico-12.png" alt=""> <span
              class="line-middle"
            >累计授信</span></p>
          </li>
          <li class="fl box-sizing"><p class="data-c"><span class="data-num">0.72</span> <span>亿+</span></p>
            <p class="data-t"><img src="https://www.celoan.cn/res/images/ico/ico-13.png" alt=""> <span
              class="line-middle"
            >授信金额</span></p>
          </li>
        </ul>
      </div>
    </div>
    <!-- 发布数据和大数据 -->
    <div class="min-width bigdata">
      <div class="min-page " style="text-align: center">
        <div class="requirements">
          <el-image
            style="margin: auto 0 "
            src="https://www.celoan.cn/res/images/index/push_20200211111500.png"
            fit="fill"
          />
        </div>
        <div class="item-title"><span>  融资大数据  </span></div>
        <div>
          <el-row>
            <el-col :span="14">
              <div id="myChart" class="myChart" />
            </el-col>
            <el-col :span="10" class="ranking">
              <div class="ranking-title">
                融资排行榜
              </div>
              <el-row :gutter="20">
                <el-col :span="12">
                  <el-table
                    size="small"
                    :data="tableData"
                    style="width: 100%"
                  >
                    <el-table-column
                      prop="index"
                      width="40"
                    />
                    <el-table-column
                      label="需求金额(亿)"
                      prop="areaName"
                    />
                    <el-table-column
                      prop="value"
                      width="50"
                    />
                  </el-table>
                </el-col>
                <el-col :span="12">
                  <el-table
                    size="small"
                    :data="tableData"
                    style="width: 100%"
                  >
                    <el-table-column
                      prop="index"
                      width="40"
                    />
                    <el-table-column
                      label="授信成功(亿)"
                      prop="areaName"
                    />
                    <el-table-column
                      prop="value"
                      width="50"
                    />
                  </el-table>
                </el-col>
              </el-row>
            </el-col>
          </el-row>
        </div>
      </div>
    </div>
    <!--  融资动态 -->
    <div class="min-width dynamic" style="background: #ffffff;">
      <div class="min-page " style="text-align: center;">
        <div class="item-title"><span>  融资动态  </span></div>
        <el-row :gutter="50">
          <el-col :span="12">
            <div class="dynamic-title">
              <span class="title-text">融资需求</span>
              <div class="title-line" />
            </div>
            <ul class="list-box">
              <li v-for="index in 5" :key="index">
                <a href="javascript:;" class="fl text-ellipsis color-hover li-comp">{{ index }}中国建****</a>
                <span class="fl li-m">申请融资金额</span>
                <span class="fl li-num">500万</span>
                <span class="fl ar li-time">43分钟前</span>
              </li>
            </ul>
          </el-col>
          <el-col :span="12">
            <div class="dynamic-title">
              <span class="title-text">服务动态</span>
              <div class="title-line" />
            </div>
            <ul class="list-box">
              <li v-for="index in 5" :key="index">
                <a href="javascript:;" class="fl text-ellipsis color-hover li-comp">{{ index }}中国建****</a>
                <span class="fl li-m">申请融资金额</span>
                <span class="fl li-num">500万</span>
                <span class="fl ar li-time">43分钟前</span>
              </li>
            </ul>
          </el-col>
        </el-row>
      </div>
    </div>
    <!--  金融超市 -->
    <div class="min-width supermarket">
      <div class="min-page " style="text-align: center">
        <div class="item-title"><span>  金融超市  </span></div>
        <el-row :gutter="20">
          <el-col v-for="index in 4" :key="index" :span="6">
            <el-card shadow="hover">
              <div class="supermarket-item-title text-ellipsis"><span>小企业知识产权质押贷</span></div>
              <div class="item-img">
                <div class="img-box"><img
                  src="https://celoan-file.oss-cn-shenzhen.aliyuncs.com/celoan/crop/2019/09/20/2019092003394234724.png"
                  alt="小企业知识产权质押贷"
                ></div>
                <!-- <ul class="item-label">
                  <li class="fl">抵押</li>
                  <li class="fl">抵押</li>
                  <li class="fl">抵押</li>
                </ul> -->
              </div>
              <ul class="clearfix item-info">
                <li class="fl">
                  <p class="info-cout">面谈</p>
                  <p class="info-name">年利率低至</p>
                </li>
                <li class="fl">
                  <p class="info-cout">500万</p>
                  <p class="info-name">最高额度</p>
                </li>
                <li class="fl">
                  <p class="info-cout">12个月</p>
                  <p class="info-name">期限高至</p>
                </li>
              </ul>
              <div class="item-belong">
                <div class="fl pos-center item-belong-img">
                  <img
                    src="https://celoan-file.oss-cn-shenzhen.aliyuncs.com/celoan/crop/2019/09/10/201909100832386184.png"
                    class="middle-center"
                    alt="中国邮政储蓄银行股份有限公司北京分行"
                  >
                </div>
                <div class="item-belong-conte">
                  <p class="text-ellipsis item-belong-text item-belong-mar">
                    申请：<span class="item-belong-mark">32笔</span>
                  </p>
                  <p class="text-ellipsis item-belong-text">中国邮政储蓄银行股份有限公司北京分行</p>
                </div>
              </div>
              <a class="item-btn">立即申请</a>
            </el-card>
          </el-col>
        </el-row>
      </div>
    </div>
    <!--  企业信用融资比您想的更简单 -->
    <div class="min-width want">
      <div class="min-page " style="text-align: center">
        <div class="item-title"><span>  企业信用融资比您想的更简单  </span></div>
        <div class="clearfix want-main">
          <div class="fl step-img">
            <img src="https://www.celoan.cn/res/images/index/p-8-2.png" alt="">
          </div>
          <ul class="fr step-list">
            <li
              v-for="index in 5"
              :key="index"
              :class="{'active':wantSelected===index}"
              class="pos-rela"
              @mouseover="wantItemMouseOver(index)"
            >
              <img src="https://www.celoan.cn/res/images/ico/ico-21.png" class="li-img" alt="">
              <div class="line-middle">
                <p class="li-t">{{ index }}、融资需求发布</p>
                <p class="li-i">注册认证、企业授权、融资需求发布</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!--  融资常见问题 -->
    <div class="min-width issue" style="background: #ffffff;">
      <div class="min-page " style="text-align: center;">
        <div class="item-title"><span>  融资常见问题  </span></div>
        <div class="clearfix">
          <ul id="faqList" class="fl pos-rela faq-list">
            <li class="box-sizing ac li-1"><p class="line-middle li-a">如何发布融资需求？</p></li>
            <li class="box-sizing ac li-2"><p class="line-middle li-a">融资需求提交后多久可以得到回复？</p></li>
            <li class="box-sizing ac li-3"><p class="line-middle li-a">企业提交的相关信息会不会被泄露？</p></li>
            <li class="box-sizing ac li-4"><p class="line-middle li-a">融资对接过程中会不会产生中介费用？</p></li>
            <li class="box-sizing ac li-5"><p class="line-middle li-a">我在注册时，提示统一信用代码号重复，但我从来都没有注册过，怎么办？</p></li>
            <li class="box-sizing ac li-6"><p class="line-middle li-a">企业如何进行证件实名认证？</p></li>
          </ul>
          <div class="fr faq-box">
            <div class="box-sizing li-q on"><p class="q-a"><span class="a-l">问：</span>我在注册时，提示统一信用代码号重复，但我从来都没有注册过，怎么办？
                                            </p>
              <p class="q-q"><span class="q-l">答：</span>请将营业执照扫描件以邮件的形式发送至quanguojrb@celoan.cn,反馈时请确保邮件标题为“公司名称+平台信息有误”，并在邮件中注明企业名称、联系人、联系方式、错误信息和正确信息。届时会有专人及时回复处理。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--  入驻金融机构 -->
    <div class="min-width org">
      <div class="min-page " style="text-align: center">
        <div class="item-title"><span>  入驻金融机构  </span></div>
        <el-row :gutter="20">
          <el-col v-for="index in 8" :key="index" :span="6">
            <el-card shadow="hover">
              <el-image
                src="https://celoan-file.oss-cn-shenzhen.aliyuncs.com/celoan/xy/01.png"
                fit="fill"
              />
            </el-card>
          </el-col>
        </el-row>
      </div>
    </div>
    <!--  信用服务机构 -->
    <div class="min-width org">
      <div class="min-page " style="text-align: center">
        <div class="item-title"><span>  信用服务机构  </span></div>
        <el-row :gutter="20">
          <el-col v-for="index in 8" :key="index" :span="6">
            <el-card shadow="hover">
              <el-image
                src="https://celoan-file.oss-cn-shenzhen.aliyuncs.com/celoan/xy/01.png"
                fit="fill"
              />
            </el-card>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
import beijingJson from '@/assets/beijing.json'
import index_banner from '@/assets/images/portal/index-banner.jpg'

export default {
  name: 'Home',
  data() {
    return {
      tableData: [],
      wantSelected: 1,
      index_banner: index_banner
    }
  },
  mounted() {
    this.initCharts()
    // 模拟排行数据
    for (let i = 0; i < 17; i++) {
      this.tableData[i] = {
        index: i + 1,
        areaName: '东城区',
        value: 6.23
      }
    }
  },
  methods: {
    wantItemMouseOver(index) {
      this.wantSelected = index
    },
    wantItemMouseLeave() {
      // $event.currentTarget.className = "pos-rela";
    },
    // 初始化地图图表
    initCharts() {
      this.$echarts.registerMap('北京', beijingJson)
      const myChart = this.$echarts.init(document.getElementById('myChart'))
      const options = {
        tooltip: {
          trigger: 'item',
          formatter: function(params) {
            if (params.data !== undefined) {
              return '' + params.data.name + '融资情况<br>需求金额：' + params.data.value + '万元'
            }
          }
        },
        toolbox: {
          padding: 30,
          show: true,
          bottom: '5%',
          right: '10%'
        },
        dataRange: {
          x: 'left',
          y: 'bottom',
          splitList: [
            { start: 10001, label: '10001万' },
            { start: 5001, end: 10000, label: '5001-10000万' },
            { start: 3001, end: 5000, label: '3001-5000万' },
            { start: 2001, end: 3000, label: '3001-3000万' },
            { start: 1001, end: 2000, label: '1001-2000万' },
            { start: 1, end: 1000, label: '1-1000万' },
            { start: 0, end: 0, label: '0' },
            { start: -1, end: -1, label: '未开通', color: '#f1f7fb' }
          ],
          inRange: {
            color: ['#c2e7f9', '#1fa7ec'] // 背影色
          }
        },
        series: [{
          type: 'map',
          mapType: '北京',
          zoom: 1.1, // 地图大小
          roam: false,
          rippleEffect: {
            scale: 8,
            brushType: 'stroke'
          },
          data: [],
          symbolSize: 12,
          label: {
            normal: {
              show: false
            },
            emphasis: {
              show: true,
              textStyle: {
                fontSize: 14,
                color: '#337f95'
              }
            }
          },
          itemStyle: {
            normal: {
              show: true,
              borderWidth: 1,
              borderColor: '#d0eff9'
            }
          }
        }]
      }
      options.series[0].data = [
        { name: '东城区', value: 1.34 },
        { name: '西城区', value: 11.34 },
        { name: '朝阳区', value: 111.34 },
        { name: '丰台区', value: 222.34 },
        { name: '石景山区', value: 1111.34 },
        { name: '海淀区', value: 2222.34 },
        { name: '石景山区', value: 3333.34 },
        { name: '门头沟区', value: 8888.34 },
        { name: '房山区', value: 11111.34 },
        { name: '通州区', value: 20057.34 },
        { name: '顺义区', value: 222.34 },
        { name: '昌平区', value: 20057.34 },
        { name: '大兴区', value: 3333.34 },
        { name: '怀柔区', value: 20057.34 },
        { name: '平谷区', value: 222.34 },
        { name: '密云区', value: 222.34 },
        { name: '延庆区', value: 222.34 }
      ]
      // 绘制图表
      myChart.setOption(options)
      setTimeout(function() {
        myChart.resize()
      }, 1000)
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

.statistical {
  border-bottom: 1px solid #c5c5c5;
  background: #fff;
}

.fl {
  float: left;
}

.fr {
  float: right;
}

.data-list {
  height: 84px;
  padding: 24px 0;
  margin: 0;
}

.data-list li {
  position: relative;
  width: 172px;
  padding: 0 14px;
  text-align: center;
}

.data-list .data-c {
  color: #a6a6a6;
}

.data-list .data-num {
  font-size: 40px;
  color: #fd7100;
}

.data-list li:not(:first-child):before {
  content: "";
  position: absolute;
  top: 0;
  left: -14px;
  width: 28px;
  height: 84px;
  background: url(https://www.celoan.cn/res/css/images/line.png) no-repeat 0 0;
}

.bigdata {
  background: #f5f5f5;
  padding-bottom: 40px;
}

.requirements {
  margin: 25px auto 0 auto;
  text-align: center;
}
.requirements >>> .el-row{
  width: 700px;
  background-color: #373d41;
}
.requirements >>> .el-image {
  cursor: pointer;
}

.item-title {
  font-size: 30px;
  font-weight: bold;
  color: #474747;
  margin-bottom: 30px;
  padding-top: 25px;
}

.item-title:before {
  background: url(https://www.celoan.cn/res/css/images/ico-27.png) no-repeat 0 0;
}

.item-title:after {
  background: url(https://www.celoan.cn/res/css/images/ico-26.png) no-repeat 0 0;
}

.item-title:before, .item-title:after {
  content: '';
  display: inline-block;
  width: 161px;
  height: 2px;
  vertical-align: middle;
}

.myChart {
  width: 100%;
  height: 450px;
}

.ranking-title {
  font-size: 16px;
  font-weight: bold;
  color: #38b2f6;
  text-align: center;
  margin-bottom: 30px;
}

.ranking >>> .el-table thead {
  background-color: #e9faff;
  color: #337f95;
}

.ranking >>> .el-table th, .el-table tr {
  background-color: #e9faff;
  color: #337f95;
}

.dynamic-title {
  text-align: left;
}

.dynamic >>> .el-col {
  /*padding-left: 0 !important;*/
  /*padding-right: 0 !important;*/
}

.dynamic-title .title-line {
  width: 100%;
  height: 1px;
  background: #e2e2e2;
}

.dynamic-title .title-text {
  position: relative;
  display: inline-block;
  height: 28px;
  padding: 0 10px 0 16px;
  line-height: 28px;
  font-weight: bold;
  font-size: 22px;
  background: #fff url(https://www.celoan.cn/res/css/images/list-t-line.jpg) no-repeat 0 0;
}

.dynamic .item-title {
  padding-top: 50px;
  padding-bottom: 30px;
}

.dynamic {
  padding-bottom: 20px;
}

.dynamic .list-box {
  padding-top: 20px;
  font-size: 16px;
  line-height: 40px;
  padding-left: 0;
  text-align: left;
}

.dynamic .list-box li {
  border-bottom: 1px dashed #ebebec;
  overflow: hidden;
}

.dynamic .list-box a {
  width: 160px;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.dynamic .list-box .li-comp {
  color: #424242;
}

a, a:hover, a:active {
  text-decoration: none;
  cursor: pointer;
}

.color-hover:hover {
  color: #fd7100 !important;
}

.dynamic .list-box .li-m, .dynamic .list-box .li-num, .dynamic .list-box .li-time {
  width: 110px;
  margin-left: 20px;
}

.dynamic .list-box .li-num {
  color: #fd7100;
}

.supermarket {
  background: #f5f5f5;
  padding-bottom: 40px;
}

.supermarket-item-title {
  height: 46px;
  font-size: 16px;
  color: #282828;
  font-weight: bold;
  line-height: 46px;
}

.supermarket >>> .el-card {
  border-radius: 0.15rem;
  cursor: pointer;
}

.supermarket >>> .el-card__body {
  padding: 0 20px;
}

.supermarket .item-img {
  position: relative;
  width: 205px;
  margin: 0 auto 16px;
}

.supermarket .img-box {
  height: 113px;
  border-radius: 10px;
  overflow: hidden;
}

.supermarket .img-box > img {
  display: block;
  width: 100%;
  height: 100%;
}

.supermarket .item-label {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 18px;
  padding: 4px 0;
  line-height: 18px;
  overflow: hidden;
  margin-bottom: 10px;
}

.supermarket .item-label li {
  height: 18px;
  padding: 0 10px;
  margin-left: 6px;
  border-radius: 15px;
  white-space: nowrap;
  font-size: 12px;
  color: #fff;
  background: #556b87;
  background: rgba(0, 0, 0, .45);
}

.supermarket .item-info {
  padding: 0 0 10px;
  margin-bottom: 15px;
  height: 66px;
  border-top: 1px solid #d3d3d3;
  border-bottom: 1px solid #d3d3d3;
  zoom: 1;
}

.supermarket .item-info li {
  width: 33.33%;
  font-size: 12px;
  color: #636363;
  text-align: center;
  line-height: 1;
}

.supermarket .item-info li:first-child .info-cout {
  font-size: 16px;
  color: #fd7100;
}

.supermarket .item-info li .info-cout {
  font-size: 16px;
  color: #5c5c5c;
}

.supermarket .item-belong {
  height: 47px;
  margin-bottom: 15px;
  line-height: 1;
}

.supermarket .item-belong-img {
  width: 47px;
  height: 47px;
  overflow: hidden;
  position: relative;
}

.supermarket .item-belong-img > img {
  max-width: 100%;
  max-height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
}

.supermarket .item-belong-conte {
  height: 47px;
  padding-left: 61px;
}

.supermarket .item-belong-text {
  color: #828282;
}

.text-ellipsis {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.supermarket .item-belong-mar {
  text-align: left;
  margin-bottom: 17px;
  color: #828282;

}

.supermarket .item-belong-mark {
  color: #fd7100;
}

.supermarket .item-btn {
  display: block;
  width: 126px;
  height: 36px;
  border-radius: 36px;
  margin: 0 auto 24px;
  font-size: 18px;
  color: #fff;
  text-align: center;
  line-height: 36px;
  background: #12c8b2;
}

.want .want-main {
  padding: 35px 27px;
}

.want .step-img {
  width: 530px;
  height: 334px;
  margin: 100px 0 0 0;
  padding: 20px 50px 0 51px;
  background: url(https://www.celoan.cn/res/images/p-8.png) no-repeat center bottom;
  background-size:100% 100%;
}
.want .step-img img{
  width: 500px;
  height: 300px;
  background-size:100% 100%;
}

.want .step-list li {
  width: 449px;
  height: 68px;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  margin-bottom: 10px;
  padding-left: 16px;
  line-height: 68px;
  color: #fff;
  background: #aab5c2;
  cursor: default;
  position: relative;
  text-align: left;
}

.want .step-list li:before {
  top: 0;
  left: -24px;
  width: 0;
  height: 0;
  border-top: 34px solid transparent;
  border-bottom: 34px solid #aab5c2;
  border-left: 12px solid transparent;
  border-right: 12px solid #aab5c2;
  content: "";
  position: absolute;
}

.want .step-list .active:after {
  top: 0;
  left: -109px;
  width: 111px;
  height: 130px;
  background: url(https://www.celoan.cn/res/css/images/ico-20.png) no-repeat 0 0;
  content: "";
  position: absolute;
}

.want .step-list .active:last-child:after {
  top: 66px;
  width: 85px;
  height: 2px;
  background: #7baa3a;
}

.want .step-list .active {
  background: #7baa3a;
}

.want .step-list .active:before {
  border-bottom-color: #7baa3a;
  border-right-color: #7baa3a;
}

.want .line-middle {
  display: inline-block;
  line-height: 1;
  vertical-align: middle;
  margin-left: 20px;
}

.want .step-list .li-t {
  font-size: 16px;
  line-height: 16px;
  font-weight: bold;
  margin-top: 15px;
  margin-bottom: 0;
}

.want .step-list .li-i {
  margin-top: 5px;
  line-height: 20px;
}

.issue {

}

.issue .faq-list {
  width: 625px;
  height: 442px;
  z-index: 3;
  background: url(https://www.celoan.cn/res/css/images/p-15.png) no-repeat 0 0;
  background-size:100% 100%;
  position: relative;
}

.issue .faq-list li {
  text-align: center;
  position: absolute;
  width: 100px;
  height: 146px;
  padding: 0 35px;
  line-height: 126px;
  cursor: default;
  display: table;
}

.issue .faq-list .li-a {
  display: table-cell;
  vertical-align: middle;
  font-size: 16px;
  color: #fff;
  line-height: 20px;
  font-weight: bold;
}

.issue .faq-list .li-1, .issue .faq-list .li-4 {
  top: 72px;
}

.issue .faq-list .li-1, .issue .faq-list .li-2 {
  left: 102px;
}

.issue .faq-list .li-2, .issue .faq-list .li-5 {
  top: 224px;
}

.issue .faq-list .li-3 {
  left: 234px;
}

.issue .faq-list .li-3, .issue .faq-list .li-6 {
  top: 148px;
}

.issue .faq-list .li-4, .issue .faq-list .li-5 {
  left: 367px;
}

.issue .faq-list .li-6 {
  left: 505px;
}

.issue .faq-box {
  /*width: 400px;*/
  position: relative;
}

.issue .li-q {
  text-align: left;
  position: absolute;
  width: 472px;
  height: 300px;
  top: 70px;
  right: 0;
  padding: 30px 20px 20px 60px;
  background: url(https://www.celoan.cn/res/css/images/p-10.png) no-repeat 0 0;
  background-size:100% 100%;
}

.issue .li-q .q-a {
  margin-bottom: 11px;
  font-size: 16px;
  color: #fd7100;
}

.issue .li-q .a-l {
  font-weight: bold;
  color: #fd4100;
}

.issue .li-q .q-q {
  color: #7e7e7e;
  line-height: 24px;
}

.issue .li-q .q-l {
  color: #292929;
}
.org >>> .el-col{
  margin-bottom: 20px;
  cursor: pointer;
}
.org >>> .el-card__body{
  padding: 0;
}
.faq-box .answer-box {
    width: 552px;
    height: 330px;
    padding-top: 63px;
}
.el-menu-demo{
    text-align: right;
    margin-left: 200px;
    margin-top: 10px;
    font-size: 19px;
}
</style>
