<template>
  <div class="move-area">
    <div class="container">
      <div ref="eye" :style="eyeCss" class="eye" />
      <div ref="eye" :style="eyeCss" class="eye" />
      <img class="w-96" @mousemove="mouseMove" src="@/assets/images/beard-eyes.jpeg" />
    </div>
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
    mouseMove() {
      var eye = this.$refs.eye
      var x = eye.getBoundingClientRect().left + 30 / 2
      var y = eye.getBoundingClientRect().top + 30 / 2
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

<style>
.move-area {
  /*normally use body*/
  width: 100vw;
  height: 100vh;
  padding: 10% 15%;
}
.container {
  width: 100%;
}
.eye {
  position: relative;
  display: inline-block;
  border-radius: 50%;
  height: 30px;
  width: 30px;
  background: #ccc;
}
.eye:after {
  /*pupil*/
  position: absolute;
  bottom: 17px;
  right: 10px;
  width: 10px;
  height: 10px;
  background: #000;
  border-radius: 50%;
  content: ' ';
}
</style>
