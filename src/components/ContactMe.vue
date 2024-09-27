<template>
  <div class="flex h-screen w-screen justify-center">
    <div class="content-center mr-6">
      <img class="w-96 rounded-full" src="@/assets/images/beard-phone.jpg" />
    </div>
    <div class="content-center ml-6">
      <a href="mailto:robert.anderson322@outlook.com">
        <div class="text-2xl my-8">
          <MaterialIcon class="mr-1" iconName="mail" /> robert.anderson322@outlook.com
        </div>
      </a>

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
</template>

<script>
import MaterialIcon from '@/components/common/MaterialIcon.vue'

export default {
  name: 'ContactMe',
  components: {
    MaterialIcon
  }
}
</script>
