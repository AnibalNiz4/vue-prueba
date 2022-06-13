<template>
  <div class="containerCard">

    <div class="flagAndTitle">
      <div class="flag">
        <img :src="img" alt="">
      </div>
      <div class="title">
        <h4>{{ title }}</h4>
        <p>{{ desc }}</p>
      </div>
    </div>

    <div class="data">
      <p class="dataText">{{ text1 }}</p>
      <p class="dataText">{{ text2 }}</p>
    </div>

  </div>
</template>

<script lang="ts">

  export default {
    props: ['img', 'title', 'desc', 'text1', 'text2']
  }

</script>

<style scoped>

  .containerCard {
    position: relative;
    width: 400px;
    height: 230px;
    border: 1px solid rgba(0, 0, 0, .4);
    border-radius: 15px;
    overflow: hidden;
  }

  .flagAndTitle {
    display: flex;
  }

  .flag {
    width: 200px;
    height: 170px;
    background: black;
    position: relative;
  }

  .flag img {
    width: 100%;
    height: 100%;
  }

  .title {
    width: 200px;
    height: 150px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .data {
    display: flex;
    width: 100%;
    justify-content: space-around;
    align-items: center;
    height: 70px;
  }


</style>
