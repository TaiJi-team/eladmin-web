<template>
  <div class="div_body">
    <!-- banner-->
    <el-carousel class="banner" :autoplay="false">
      <el-carousel-item v-for="item in 4" :key="item">
        <el-image
          style="width: 100%; height: 100%"
          src="https://www.celoan.cn/res/images/banner/city_banner_01.jpg"
          fit="fill"
        />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
// import beijingJson from '@/assets/beijing.json'

export default {
  name: 'FinMarketList',
  data() {
    return {
      tableData: [],
      wantSelected: 1
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

</style>
