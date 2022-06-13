<template>
  <div>Probando</div>
  <div class="containerCards">
    <CardCss
      v-for="(data, index) in countriesArray"
      :key="index"
      :title="data.name.common"
      :img="data.flags.png"
      :desc="data.region"
      :text1="data.population"
      :text2="data.subregion"
    />
  </div>
</template>

<script setup lang="ts">
  import CardCss from 'src/components/CardCss.vue';
  import { computed, onMounted } from 'vue';
  import { useCountriesStore } from 'src/stores/storePinia';

  const countriesStore = useCountriesStore()

  onMounted(async () => {
    if(!countriesStore.getCountries) {
      countriesStore.countriesLoading = true
      await countriesStore.getCountriesApi()
      countriesStore.countriesLoading = false
      console.log(countriesStore.getCountries);
    }
  })

  const countriesArray = computed(() => {
    return countriesStore.getCountries
  })

</script>

<style scoped>
  .containerCards {
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    gap: 40px;
  }
</style>
