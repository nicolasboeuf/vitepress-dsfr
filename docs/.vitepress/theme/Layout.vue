<template>

  <DsfrHeader
    logoText="Etalab"
    serviceTitle="Doc.data.gouv.fr"
    serviceDescription="data.gouv.fr - documentation"
    homeTo="https://google.com"
  />
  <div class="fr-container fr-mt-5w">
    <!-- <Menu></Menu> -->
    <Content class="fr-col-8" />
  </div>
  <DsfrFooter />
  <Debug />
</template>

<script>

//import Menu from "../docs/.vitepress/theme/components/Menu.vue";

export default {
  components: {
    //Menu,
  },
  data(){
    return{
      
    }
  },
}
</script>