<template>
  <div class="circle-progress">
    <div :style="{height: divWidth, width: divWidth, overflow: 'hidden'}">
      <svg :width="width" :height="width">
        <circle :stroke="innerStrokeColor"
          :stroke-width="strokeWidth" :r="(width / 2) - (strokeWidth * 2)" :cx="width/2" :cy="width/2" fill="none"
        />
        <circle ref="outer" class="circle-progress-outer-circle" :stroke="outerStrokeColor"
          :stroke-width="strokeWidth" :r="(width / 2) - (strokeWidth * 2)" :cx="width/2" :cy="width/2" fill="none"
          :stroke-dasharray="circumference"
          :stroke-dashoffset="dashOffset"
        />
      </svg>
    </div>
    <div class="circle-progress-title">
      <span class="circle-progress-text">CPU使用率</span>
      <h3>{{this.percent * 100}}%</h3>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: 1,
      width: 120,
      innerStrokeColor: 'rgba(0, 0, 0, 0.1)',
      outerStrokeColor: 'rgb(64, 158, 255, 0.8)',
      strokeWidth: 4,
      percent: 0.9,
      progress: 80,
      animationId: `circle_progress_keyframes_${this.id}`
    }
  },
  computed: {
    dashOffset() {
      return (1 - this.percent) * this.circumference
    },
    circumference() {
      return (this.width / 2 - this.strokeWidth * 2) * 2 * Math.PI
    },
    divWidth() {
      return this.width + 'px'
    }
  },
  mounted() {
    if (document.getElementById(this.animationId)) {
      document.getElementById(this.animationId).remove()
    }
    let style = document.createElement('style')
    style.id = this.animationId
    style.type = 'text/css'
    style.innerHTML = `
    @keyframes circle_progress_keyframes_name_${this.id} {
    from {stroke-dashoffset: ${this.circumference}px;}
    to {stroke-dashoffset: ${this.dashOffset}px;}}
    .circle_progress_class_${this.id} {animation: circle_progress_keyframes_name_${this.id} 2s ease 200ms;}`
    document.getElementsByTagName('head')[0].appendChild(style)
    this.$refs.outer.classList.add(`circle_progress_class_${this.id}`)
  }
}
</script>
<style lang="scss" scoped>
.circle-progress {
  &-outer-circle {
    transition: 0.35s stroke-dashoffset;
    transform: rotate(-90deg);
    transform-origin: 50% 50%;
  }
}
</style>

