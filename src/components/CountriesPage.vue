<template>
  <div class="row full-width">
    <p class="text-h3 col-xs-12 text-center q-pa-md shadow-3 q-pa-md rounded-borders">Countries of the World</p>

    <q-input
      bottom-slots
      v-model="text"
      label="Search your country"
      class="q-pa-md col-xs-12"
      counter
      clearable
      @keyup="searchCountry"
      :disable="loadingCountries"
    >
      <template v-slot:prepend>
        <q-icon name="place" color="primary"/>
      </template>
      <template v-slot:append>
        <q-icon name="favorite" color="red"/>
      </template>
    </q-input>

    <div class="row full-width justify-center">
      <div v-if="loadingCountries" class="col-12 text-h4 text-center">
        Finding countries...
      </div>
      <q-card v-else class="my-card q-ma-sm col-xs-12 shadow-5 col-sm-8 col-md-5 col-lg-4 rounded-borders" v-for="(country, index) in searchCountry" :key="index">
        <router-link :to="`/otra/${country['name']['common']}`">
          <q-card-section horizontal class="">
            <q-img
              :src="country['flags']['png']"
              class="img col-xs-5 rounded-borders"
              fit="cover"
            />

            <q-card-section class="col">
              <p class="text-h4 text-center">
                {{ country['name']['common'] }}
              </p>
              <p class="text-center">
                {{ country['name']['official'] }}
              </p>
            </q-card-section>
          </q-card-section>

          <q-separator />

          <q-card-actions>
            <q-btn flat round icon="las la-flag" dense />
            <q-btn flat dense>
              {{ country['region'] }}
            </q-btn>
            <q-btn flat dense>
              {{ country['subregion'] }}
            </q-btn>
          </q-card-actions>
        </router-link>
      </q-card>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { computed, onMounted, ref } from 'vue';
  import { useCountriesStore } from 'src/stores/storePinia';

  const countriesStore = useCountriesStore()

  onMounted(async () => {
    if(!countriesStore.getCountries) {
      countriesStore.countriesLoading = true
      await countriesStore.getCountriesApi()
      countriesStore.countriesLoading = false
    }
  })

  const countriesArray = computed(() => {
    return countriesStore.getCountries
  })

  const getCountriesLength = computed(() => {
    return countriesArray?.value?.length
  })

  const loadingCountries = computed(() => {
    return countriesStore.countriesLoading
  })

  const text = ref('')

  const searchCountry = computed(() => {
    if(!text.value) {
      return countriesStore?.getCountries?.slice(0, 30)
    } else {
      return countriesArray?.value?.filter((country) =>
        country.name.common.toLowerCase().includes(text.value.toLowerCase())
      ).slice(0, 30)
    }
  })

</script>




<style scoped>
  .my-card {
    max-height: 300px;
    position: relative;
    transition: all .2s;
    overflow: hidden;
  }

  .my-card:hover {
    transform: scale(1.03);
  }

  .loremText {
    word-wrap: break-word;
  }

  .hola {
    background: red;
  }

  .img {
    max-height: 150px;
  }


</style>
