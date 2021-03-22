<template>
<div class="about">
  <section class="bg-info py-5">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="card">
            <div class="card-header"> this is a content</div>
            <div class="card-body">
              <h1>{{id}}</h1>
              <h1>This is a about..</h1>
              <p>lorem</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
  <section class="bg-primary py-5">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="card">
            <div class="card-header"> this is a content</div>
            <div class="card-body">
              <h1>This is a about..</h1>
              <p>lorem  his  he is very deligi</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</div>
</template>

<script>
import about from "@/data/about";
export default {
  name: "About",
  data(){
    return{
      id:this.$route.params.id,
      content:about.data
    }
  }
}
</script>

<style scoped>

</style>