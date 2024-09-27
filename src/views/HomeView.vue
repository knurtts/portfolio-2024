<template>
  <main>
    <div id="home" class="flex h-screen w-screen justify-center">
      <div class="content-center mr-6">
        <div class="text-center my-20 font-extrabold text-4xl">Robert Anderson</div>
        <div>
          <img class="w-96" src="@/assets/images/beard-man.jpg" />
        </div>
      </div>
      <div class="content-center ml-6">
        <a href="#whoami">
          <div class="text-2xl my-8">Who Am I?</div>
        </a>
        <a href="#mywork">
          <div class="text-2xl my-8">What have I done?</div>
        </a>
        <a href="#contact">
          <div class="text-2xl my-8">Contact Me</div>
        </a>
      </div>
    </div>
    <div id="whoami" class="flex h-screen w-screen justify-center"></div>
    <div id="mywork" class="flex h-screen w-screen justify-center"></div>
    <div id="contact" class="flex h-screen w-screen justify-center">
      <div class="content-center mr-6">
        <img class="w-96" src="@/assets/images/beard-phone.jpg" />
      </div>
      <div class="content-center ml-6">
        <div class="text-2xl my-8">
          <MaterialIcon class="mr-1" iconName="mail" /> robert.anderson322@outlook.com
        </div>

        <a href="www.linkedin.com/in/robert-anderson-94364511" target="_blank">
          <div class="text-2xl my-8 flex">
            <img class="h-7 mr-2" src="@/assets/images/LI-in-Bug.png" />
            /in/robert-anderson-94364511
          </div>
        </a>

        <a href="https://github.com/knurtts" target="_blank">
          <div class="text-2xl my-8 flex">
            <img class="h-7 mr-3" src="@/assets/images/github-mark-white.png" />
            github.com/knurtts
          </div>
        </a>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import MaterialIcon from '@/components/MaterialIcon.vue'
</script>
