<template>
  <main>
    <HomeSection />
    <AboutMe />
    <MyWork />
    <ContactMe />
  </main>
</template>

<script>
import HomeSection from '@/components/HomeSection.vue'
import AboutMe from '@/components/AboutMe.vue'
import MyWork from '@/components/MyWork.vue'
import ContactMe from '@/components/ContactMe.vue'

export default {
  components: {
    HomeSection,
    AboutMe,
    MyWork,
    ContactMe
  }
}
</script>
