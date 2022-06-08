<template>
  <div>
    <p class="text-h3 text-center q-ma-md shadow-3 q-pa-md rounded-borders">Countries of the World</p>

    <q-input
      bottom-slots
      v-model="text"
      label="Search your country"
      class="q-ma-md"
      counter
      clearable
      @keyup="searchCountry"
    >
      <template v-slot:prepend>
        <q-icon name="place" />
      </template>
      <template v-slot:append>
        <q-icon name="favorite" />
      </template>
    </q-input>

    <div class="row text-center full-width justify-center">
      <q-card class="my-card q-ma-sm col-xs-12 shadow-5 col-sm-8 col-md-5 col-lg-4 rounded-borders" v-for="(country, index) in data" :key="index">
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
  import FetchApi from 'src/FetchApi'
  import { ref } from 'vue';

  const { data } = FetchApi('https://restcountries.com/v3.1/all')
  console.log(data)

  const text = ref('')

  const searchCountry = () => {
    console.log(text.value);
  }
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
