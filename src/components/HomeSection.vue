<template>
  <div class="h-screen w-screen flex-col content-center">
    <div class="text-center my-5 text-4xl">Robert Anderson</div>
    <div class="flex justify-center">
      <div class="content-center mr-6">
        <div>
          <img class="w-96 rounded-full" src="@/assets/images/beard-man.jpg" />
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
  </div>
</template>

<script>
export default {
  name: 'HomeSection'
}
</script>
