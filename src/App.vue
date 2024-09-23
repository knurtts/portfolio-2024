<template>
  <div class="hexagon-container absolute top-0 left-0">
    <div class="hexagon"></div>
    <div class="hexagon"></div>
    <div class="hexagon"></div>
  </div>
  <div class="">
    <header class="">Header here!</header>
    <RouterView />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.hexagon-container {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
}

.hexagon {
  width: 100px;
  height: 57.74px;
  background-color: #000000;
  margin: 28.87px 0;
  position: relative;
  border: 2px;
  border-color: aquamarine;
}

.hexagon:before,
.hexagon:after {
  content: '';
  position: absolute;
  width: 0;
  border-left: 50px solid transparent;
  border-right: 50px solid transparent;
}

.hexagon:before {
  bottom: 100%;
  border-bottom: 28.87px solid #000000;
}

.hexagon:after {
  top: 100%;
  width: 0;
  border-top: 28.87px solid #000000;
}
</style>
