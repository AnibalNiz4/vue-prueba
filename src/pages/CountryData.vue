<template>
  <div>
    <p class="text-h2 q-ma-lg text-center">Country dates</p>
    <div v-for="(country, index) in data" :key="index" class="q-ma-md row justify-center">
      <q-card class="my-card col-8" flat bordered>
        <q-item>
          <q-item-section avatar>
            <q-avatar>
              <img :src="country['flags']['png']">
            </q-avatar>
          </q-item-section>

          <q-item-section>
            <q-item-label>{{ country['name']['common'] }}</q-item-label>
            <q-item-label caption>
              {{ country['region'] }}
            </q-item-label>
          </q-item-section>
        </q-item>

        <q-separator />

        <q-card-section horizontal>
          <q-card-section>
            <p class="text-center">Borders</p>
            <q-list bordered separator>
              <q-item v-for="(border, index) in country['borders']" :key="index">
                <q-item-section>
                  <q-item-label overline>{{ border }}</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-card-section>

          <q-separator vertical />

          <q-card-section class="col-4 self-center">
            <img class="mapCountry" :src="country['coatOfArms']['png']" />
          </q-card-section>

          <q-card-section class="col-6 self-center hola text-center">
            <q-card class="my-card">
              <q-card-section class="bg-primary text-white">
                <div class="text-h4">{{ country['name']['common'] }}</div>
                <div class="text-subtitle2">{{ country['subregion'] }}</div>
              </q-card-section>

              <q-separator />

              <q-item class="lenguages" v-for="(lenguage, index) in country['languages']" :key="index">
                <q-item-section>
                  <q-item-label class="itemLenguages" overline>{{ lenguage }}</q-item-label>
                </q-item-section>
              </q-item>
            </q-card>

              <a class="shadow-5 bg-primary aBtn q-pa-sm row justify-center text-white q-mt-md rounded-3" :href="country['maps']['googleMaps']" target="_blank">Google Maps</a>
          </q-card-section>


        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { useRoute } from 'vue-router';
  import FetchApi from 'src/FetchApi'

  const countryName = useRoute()

  const { data } = FetchApi(`https://restcountries.com/v3.1/name/${countryName.params.country}`)

  function btnMap (map: string) {
    window.location.href = map
  }


</script>

<style scoped>
  .mapCountry {
    width: 14rem;
    height: 14rem;
    margin-left: 1.3rem;
  }

  .lenguages {
    display: inline-block;
  }

  .q-item {
    min-height: 0;
    padding: 1rem;
  }

  .aBtn {
    border-radius: .3rem;
    transition: all .2s;
  }

  .aBtn:hover {
    transform: scale(1.02);
  }

</style>
