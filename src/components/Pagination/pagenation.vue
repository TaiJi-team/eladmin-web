<template>
  <div id="pagination">
    <el-pagination
      background
      :current-page="currentPage"
      :page-size="pageSize"
      :page-sizes="[5,10,15,30,50]"
      layout="total,sizes,prev, pager, next ,jumper"
      :total="total"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </div>
</template>
<script>
export default {
  props: {
    pageSize: {
      type: Number,
      default: 15
    },
    currentPage: {
      type: Number,
      default: 1
    },
    total: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
    }
  },
  watch: {
    // show () {
    //   // 判断页面是否显示
    //   if(!this.show){
    //     this.$refs.videoMenuTable.clearSelection();
    //   }
    // },
  },
  mounted() {
  },
  methods: {
    // 每页展示条数
    handleSizeChange(val) {
      // 事件传递
      this.$emit('handleSizeChangeSub', val)
    },
    // 当前页
    handleCurrentChange(val) {
      // 事件传递
      this.$emit('handleCurrentChangeSub', val)
    }
  }
}
</script>
<style scoped>
  #pagination >>> .el-pagination__sizes{position: absolute !important;left: 0 !important;}
  #pagination >>> .el-pagination{text-align: center !important;padding: 0 !important;}
  #pagination >>> .el-pagination .el-select .el-input .el-input__inner{color:rgba(31, 123, 195, 1) !important}
  #pagination >>> .el-pagination.is-background .el-pager li:not(.disabled).active{background-color: rgba(31, 124, 196, 1) !important;}
  #pagination >>> .btn-prev .el-icon-arrow-left:before{content: '上一页'}
  #pagination >>> .btn-next .el-icon-arrow-right:before{content: '下一页'}
  #pagination >>> .el-pagination button , #pagination >>> .el-pager{border: 1px solid rgba(229, 229, 229, 1) !important;}
  #pagination >>> .el-pagination__jump{color: rgba(23, 110, 177, 1) !important}
  #pagination >>> .el-pagination__total,.total-pager{color:rgba(153, 153, 153, 1) !important;margin-left: 20px !important;font-size: 14px !important;font-weight: 400 !important;}
  #pagination >>> .el-pager li{height: 26px !important;line-height: 26px !important;margin: 0px !important;border-radius: 0px !important;}
  #pagination >>> .el-breadcrumb__inner.is-link{color: rgba(21, 108, 174, 1) !important;font-weight: 400 !important;}
  #pagination >>> .el-pagination.is-background .btn-next, #pagination >>> .el-pagination.is-background .btn-prev, #pagination >>> .el-pagination.is-background .el-pager li {margin: 0 !important;background-color: #fff !important;border-radius: 0 !important;padding: 0 5px !important;}
  #pagination >>> .el-pagination button:disabled{background: #ffffff !important;}
  #pagination >>> .ensure-btn{margin-left: 10px !important;}
@media screen and (max-width: 1600px){
  /*分页*/
  #pagination >>> .el-pagination__sizes .el-input .el-input__inner,.el-pagination__total, .total-pager{font-size: 11px !important;}
  #pagination >>> .el-pagination.is-background .btn-next, .el-pagination.is-background .btn-prev, .el-pagination.is-background .el-pager li{font-size: 11px}
  #pagination >>> .el-pagination__jump{font-size: 11px !important;}
}
</style>
