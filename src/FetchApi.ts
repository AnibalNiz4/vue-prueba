import { ref } from 'vue';

export default function FetchApi(url: string) {

  const data = ref(null)
  const errorApi = ref(null)

  try {
    fetch(url)
      .then((res) => res.json())
      .then((json) => data.value = json)
  } catch (error: any) {
    errorApi.value = error
  }

  return { data, errorApi }

}
