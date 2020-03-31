<template>
  <div class="app-container">
    <circle-progress id="1" width="150" percent="0.5" title="CPU使用率" strokewidth="4" />
  </div>
</template>

<script>
import CircleProgress from '@/components/CircleProgress/'
export default {
  components: {
    CircleProgress
  }
}
</script>
