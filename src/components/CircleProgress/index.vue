<template>
  <div class="circle-progress" :style="{ width: c_width }">
    <div :style="{ width: c_width, overflow: 'hidden', height: c_height }">
      <svg :width="width" :height="width">
        <circle
          :stroke="innerStrokeColor"
          :stroke-width="strokewidth"
          :r="(width / 2) - (strokewidth * 2)"
          :cx="width/2"
          :cy="width/2"
          fill="none"
        />
        <circle
          ref="outer"
          class="circle-progress-outer-circle"
          :stroke="outerStrokeColor"
          :stroke-width="strokewidth"
          :r="(width / 2) - (strokewidth * 2)"
          :cx="width/2"
          :cy="width/2"
          :stroke-dasharray="circumference"
          :stroke-dashoffset="dashOffset"
          fill="none"
        />
      </svg>
    </div>
    <div class="circle-progress-title" :style="{ width: c_width }">
      <span>{{ title }}</span>
      <h3> {{ percent * 100 }}%</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CircleProgress',
  props: {
    id: {
      type: Number,
      default: 1
    },
    width: {
      type: Number,
      default: 120
    },
    percent: {
      type: Number,
      default: 0.8
    },
    title: {
      type: String,
      default: ''
    },
    strokewidth: {
      type: Number,
      default: 4
    },
    innerStrokeColor: {
      type: String,
      default: 'rgba(0, 0, 0, 0.1)'
    },
    outerStrokeColor: {
      type: String,
      default: 'rgb(64, 158, 255, 0.8)'
    }
  },
  computed: {
    dashOffset() {
      return (1 - this.percent) * this.circumference
    },
    circumference() {
      return (this.width / 2 - this.strokewidth * 2) * 2 * Math.PI
    },
    animation_id() {
      return 'circle_progress_keyframes_' + this.id
    },
    c_width() {
      return this.width + 'px'
    },
    c_height() {
      return this.width + 'px'
    }
  },
  mounted() {
    if (document.getElementById(this.animation_id)) {
      document.getElementById(this.animation_id).remove()
    }
    const style = document.createElement('style')
    style.id = this.animation_id
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
  position: relative;
  overflow: hidden;
  display: inline-block;
  &-title {
    display: inline-block;
    position: absolute;
    top: 30%;
    left: 0;
    text-align: center;
    span {
      font-size: 16px;
      line-height: 24px;
      color: #5a5e66;
    }
    h3 {
      margin: 0;
      font-size: 24px;
      line-height: 32px;
      padding-left: 5px;
      color: rgba(0, 0, 0, 0.8)
    }
  }
  &-outer-circle {
    transition: 0.35s stroke-dashoffset;
    transform: rotate(-90deg);
    transform-origin: 50% 50%;
  }
}
</style>
