<template>
  <div id="app">
    <Header/>
    <MyMenu/>
    <router-view/>
    <Subscribe/>
    <Brand/>
    <MyFooter/>
  </div>
</template>


<script>
import Header from "@/components/includes/Header";
import MyMenu from "@/components/includes/MyMenu";
import Subscribe from "@/components/includes/Subscribe";
import Brand from "@/components/includes/Brand";
import MyFooter from "@/components/includes/MyFooter";
export default {
  name:'App',
  components:{Header,MyMenu,Subscribe,Brand,MyFooter}
}

</script>
<style scoped>

</style>


