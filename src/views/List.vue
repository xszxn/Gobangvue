<template>
  <div class="list">
    <Header :back="true" :size="15"/>
    <Item/>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import Map from '@/components/Map.vue'
import Item from "@/components/Item.vue";

export default {
  name: 'list',
  components: {
    Item,
    Header,Footer,Map
  }
}
</script>
