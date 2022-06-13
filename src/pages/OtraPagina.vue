<template>
  <div class="row q-pa-md">
    <CountriesPage />
  </div>
</template>

<script lang="ts">
  import CountriesPage from 'src/components/CountriesPage.vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: {
      CountriesPage,
    },
  })

</script>

<style scoped>
  h2 {
    background: #09f;
    padding: 3rem;
    color: white;
    text-shadow: 1px 1px 4px rgba(0,0,0,.5);
  }
</style>
