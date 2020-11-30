<template>
  <div style="background: #f5f5f5">
    <lzhead />
    <router-view />
    <lzfooter />
  </div>
</template>

<script>
import lzhead from '@/views/components/head'
import lzfooter from '@/views/components/footer'

export default {
  name: 'Index',
  components: { lzhead, lzfooter }
}
</script>

<style scoped>

</style>
<style>
.min-width {
  min-width: 1200PX;
}

.min-page {
  width: 1200PX;
  margin: 0 auto;
  zoom: 1;
}
</style>
