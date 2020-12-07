<template>
  <div>
    <div class="min-width top">
      <div class="min-page clearfix" style="position: relative; z-index: 4;">
        <div style="float: right">
          <!-- <img src="https://www.celoan.cn/res/images/ico/ico-2.png" alt=""> -->
          <ul class="line-middle">
            <li class="fl" style="display:block">
              <a href="" class="color-hover">登录</a>
              <span v-show="isLogin" class="color-hover changeCity" v-html="userInfo.userName" />
            </li>
            <li class="fl" style="display:block">
              <!-- <router-link class="fl" to="/register" tag="a">注册</router-link> -->
              <a href="" class="color-hover changeCity">注册</a>
              <!-- <a  href="javascript" class="color-hover changeCity">工作台</a> -->
            </li>
            <li class="fl" style="display:block">
              <!-- <router-link class="fl" to="/register" tag="a">注册</router-link> -->
              <!-- <a  href="javascript" class="color-hover changeCity">注册</a> -->
              <a href="" class="color-hover changeCity">工作台</a>
            </li>
            <li class="fl" style="display:block">
              <a href=":;" class="color-hover loginW changeCity">我要融资</a>
            </li>
            <li class="fl" style="display:block">
              <a href=":;" class="color-hover hover-handle">手机融资
              </a>
            </li>
            <li class="fl" style="display:block">
              <a href=":;" class="color-hover">帮助中心</a>
            </li>
            <li class="fl" style="display:block">
              <a href=":;" class="color-hover">关于我们</a>
            </li>
          </ul>
        </div>
        <div class=" hot-line">
          <img src="https://www.celoan.cn/res/images/ico/ico-1.png" alt="">
          <span class="line-text">客服热线：<span class="line-text-num">40010 16871</span></span>
        </div>
      </div>
    </div>
    <div class="header">
      <div class="min-page">
        <div>
          <img
            :src="fwlogo"
            alt="全国中小企业融资综合信用服务示范平台"
          >
          <div class="header-search" style="float: right">
            <el-input v-model="search" size="medium" class="search" placeholder="请输入关键词搜索">
              <template slot="append">
                <i class="el-icon-search" />
              </template>
            </el-input>
            <el-dropdown>
              <el-button type="success" size="small">
                <i class="el-icon-document" /> 中小企业
              </el-button>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>立即登录</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
            <el-dropdown>
              <el-button type="warning" size="small">
                <i class="el-icon-document" /> 金融机构
              </el-button>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>立即登录</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
            <el-dropdown>
              <el-button type="primary" size="small">
                <i class="el-icon-document" /> 政府部门
              </el-button>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>立即登录</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </div>
        <el-menu class="el-menu-demo" mode="horizontal" @select="handleSelect">
          <el-menu-item :class="{'is-active':activeIndex}" index="/index">首页</el-menu-item>
          <el-menu-item :class="{'is-active':activeMarket}" index="/fin-market">金融超市</el-menu-item>
          <el-menu-item :class="{'is-active':activeOrg}" index="/fin-org">金融机构</el-menu-item>
          <el-menu-item :class="{'is-active':activeCreditOrg}" index="/credit-org">信用机构</el-menu-item>
          <el-menu-item :class="{'is-active':activeGqrz}" index="/fin-gqrz">股权融资</el-menu-item>
          <el-menu-item index="5">融资动态</el-menu-item>
          <el-submenu index="6">
            <template slot="title">特色金融服务专区</template>
            <el-menu-item index="6-1">平台推荐名单</el-menu-item>
            <el-menu-item index="6-2">信易保</el-menu-item>
            <el-menu-item index="6-3">电力信易贷</el-menu-item>
            <el-menu-item index="6-4">工程信易贷</el-menu-item>
            <el-menu-item index="6-5">抗疫专区</el-menu-item>
          </el-submenu>
        </el-menu>
      </div>
    </div>
  </div>
</template>

<script>
import { getToken, getUserInfo } from '@/utils/auth'
import fwlogo from '@/assets/images/portal/fwlogo.png'

export default {
  name: 'Myhead',
  namespaced: true,
  data() {
    return {
      search: '',
      isLogin: false,
      userInfo: {},
      activeIndex: this.$route.path === '/home',
      activeMarket: this.$route.path.search('/fin-market') !== -1,
      activeOrg: this.$route.path.search('/fin-org') !== -1,
      activeGqrz: this.$route.path.search('/fin-gqrz') !== -1,
      activeCreditOrg: this.$route.path.search('/credit-org') !== -1,
      fwlogo: fwlogo
    }
  },
  mounted: function() {
    if (getToken()) {
      this.isLogin = true
      this.userInfo = getUserInfo()
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      this.$router.push({
        path: key,
        params: { data: 'query' }
      })
    }
  }
}
</script>

<style scoped>
.min-page {
  width: 94%;
  margin: 0 auto;
  zoom: 1;
}

.el-menu-item.is-active {
    border-left:#ff8008 solid 6px !important;
    background-color: #fcfcfc !important;
    color: #ff8008 !important;
}

/* .el-menu-item.is-active {
   background:#c95411 !important;
} */

/* .el-menu-demo >>> .is-active { */
/* .is-active {
  border-color: #fd7100;
  color: #fd7100;
} */

.top {
  height: 38px;
  font-size: 13px;
  line-height: 35px;
  background: #e7e7e7;
}

.line-text {
  margin-left: 5px;
}

.line-text-num {
  color: #ff7200;
}

.line-middle {
  display: inline-block;
  line-height: 1;
  vertical-align: middle;
  padding-left: 10px;
}

.top .line-middle li:first-child {
  border: 0;
}

.fl {
  float: left;
  height: 15px;
  padding: 0 5px;
  border-left: 1px solid #515151;
  line-height: 15px;
}

.top a {
  color: #515151;
  cursor: pointer;
  text-decoration: none;
}

.top a:hover {
  color: #ff7200;

}

.header {
  background: #ffffff;
  padding-top: 20px;
}

.header-search >>> .el-dropdown {
  margin-left: 15px;
  margin-top: 10px;
  font-size: 14px;
}

.header-search >>> .el-button--small {
  font-size: 14px;
}

.header-search >>> .el-input__inner {
  border: 0.01rem solid #00bba4
}

.header-search >>> .el-input-group__append {
  background: #00bba4;
  color: #ffffff;
  border: 0.01rem solid #00bba4
}

.header-search >>> .el-button--success {
  background-color: #00bba4;
  border-color: #00bba4;
}

.search {
  width: 254px;
}

.el-menu-demo {
  text-align: right;
  margin-left: 450px;
  margin-top: -10px;
  font-size: 19px;
}

.el-menu-demo >>> .el-menu-item {
  font-size: 19px;
  height: 35px;
  line-height: normal;
  padding: 0 5px;
  margin: 0 9px;
}

/* .el-menu-demo >>> .el-menu-item:hover {
  color: #ff7200;
} */

.el-menu-demo >>> .el-submenu__title {
  font-size: 19px;
  height: 35px;
  line-height: normal;
  padding: 0 5px;
  margin: 0 10px;
}

/* .el-menu-demo >>> .is-active .el-submenu__title {
  border-bottom: 3px solid #fff;
  font-weight: bold;
} */

.el-menu.el-menu--horizontal {
  border-bottom: 0;
}

</style>
