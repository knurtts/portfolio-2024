<template>
  <div class="w-screen h-screen" @mousemove="mouseMove">
    <div
      ref="eye"
      :style="eyeCss"
      class="relative inline-block rounded-full h-8 w-8 bg-slate-200 after:absolute after:bottom-4 after:right-2 after:w-3 after:h-3 after:bg-black after:rounded-full"
    />
    <div
      ref="eye"
      :style="eyeCss"
      class="relative inline-block rounded-full h-8 w-8 bg-slate-200 after:absolute after:bottom-4 after:right-2 after:w-3 after:h-3 after:bg-black after:rounded-full"
    />
    <img class="w-96" src="@/assets/images/beard-eyes.jpeg" />
  </div>
</template>

<script>
export default {
  name: 'EyesFollow',
  data() {
    return {
      eyeCss: {}
    }
  },
  methods: {
    mouseMove(event) {
      var eye = this.$refs.eye
      var x = eye.getBoundingClientRect().left + 32 / 2
      var y = eye.getBoundingClientRect().top + 32 / 2
      var rad = Math.atan2(event.pageX - x, event.pageY - y)
      var rot = rad * (180 / Math.PI) * -1 + 180
      this.eyeCss = {
        '-webkit-transform': 'rotate(' + rot + 'deg)',
        '-moz-transform': 'rotate(' + rot + 'deg)',
        '-ms-transform': 'rotate(' + rot + 'deg)',
        transform: 'rotate(' + rot + 'deg)'
      }
    }
  }
}
</script>
