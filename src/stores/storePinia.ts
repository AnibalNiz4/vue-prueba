import { defineStore } from 'pinia';

export const useCountriesStore = defineStore('countries', {
  state: () => ({
    countries: null,
    countriesLoading: false
  }),
  getters: {
    getCountries: (state) => state.countries,
    getLoading: (state) => state.countriesLoading
  },
  actions: {
    async getCountriesApi() {
      const resultApi = await fetch('https://restcountries.com/v3.1/all?_limit=5')
      const array = await resultApi.json()
      this.countries = array
    }
  },
});
