<template>
  <div class="home">
    <Header/>
    <Menu/>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Menu from '@/components/Menu.vue'

export default {
  name: 'home',
  components: {
    Menu,Header
  }
}
</script>
