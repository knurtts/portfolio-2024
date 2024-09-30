<template>
  <div class="h-screen w-screen move-area">
    <div class="container">
      <div class="eye" />
      <div class="eye" />
      <img class="w-96" src="@/assets/images/beard-eyes.jpeg" />
    </div>
  </div>
</template>

<script>
export default {
  name: EyesFollow,
  methods: {
    mouseMove() {
      var eye = $('.eye')
      console.log('eye', eye)
      var x = eye.offset().left + eye.width() / 2
      var y = eye.offset().top + eye.height() / 2
      var rad = Math.atan2(event.pageX - x, event.pageY - y)
      var rot = rad * (180 / Math.PI) * -1 + 180
      eye.css({
        '-webkit-transform': 'rotate(' + rot + 'deg)',
        '-moz-transform': 'rotate(' + rot + 'deg)',
        '-ms-transform': 'rotate(' + rot + 'deg)',
        transform: 'rotate(' + rot + 'deg)'
      })
    }
  }
}
</script>

<style>
.move-area {
  /*normally use body*/
  width: 100vw;
  height: 100vh;
  padding: 10% 45%;
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
