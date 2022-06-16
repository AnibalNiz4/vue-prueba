<template>
  <div class="containerHome">
    <p class="text-h3 text-center textTitle q-py-md shadow-2">Welcome to Countries Page!!</p>

    <q-card class="my-card q-pa-xl row justify-center cardContainer shadow-2">
      <div class="containerImg">
        <img class="imgHome" src="countries3.png">
      </div>

      <q-list class="col-9 q-mt-md">
        <q-item clickable class="bg-white shadow-3 q-my-sm">
          <q-item-section avatar>
            <q-icon color="primary" name="local_bar" />
          </q-item-section>

          <q-item-section>
            <q-item-label>Bar XYZ</q-item-label>
            <q-item-label caption>Have a drink.</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable class="bg-white shadow-3 q-my-sm">
          <q-item-section avatar>
            <q-icon color="red" name="local_gas_station" />
          </q-item-section>

          <q-item-section>
            <q-item-label>Gas Station</q-item-label>
            <q-item-label caption>Fill your gas tank.</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable class="bg-white shadow-3 q-my-sm">
          <q-item-section avatar>
            <q-icon color="amber" name="local_movies" />
          </q-item-section>

          <q-item-section>
            <q-item-label>Cinema XYZ</q-item-label>
            <q-item-label caption>Watch a movie.</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-card>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>

  .containerHome {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: url("countries2.png");
  }

  .textTitle {
    background: transparent;
    border-radius: 20px;
    margin: 0 30px;
    background: #09f;
    color: white;
    margin-bottom: 30px;
  }
  .imgHome {
    width: 250px;
    border-radius: 50%;
  }

  .cardContainer {
    background: #09f;
    margin: 0 30px;
    border-radius: 20px;
  }

</style>
