<template>
  <div>
    <v-row justify="center">
      <v-col xs="12" sm="8" md="6" class="pb-0">
        <v-select
          :items="algorithms"
          v-model="selectedAlgo"
          label="Select cipher algorithm"
          outlined
          filled
          dense
          color="orange"
        ></v-select>
      </v-col>
    </v-row>

    <component :is="selectedAlgo"></component>
  </div>
</template>

<script>
import Caesar from "../components/Caesar.vue";
import Playfair from "../components/Playfair.vue";
import Des from "../components/Des.vue";

export default {
  name: "Home",
  data: () => ({
    selectedAlgo: "caesar",
    algorithms: [
      {
        text: "Caesar cipher",
        value: "caesar"
      },
      {
        text: "Playfair cipher",
        value: "playfair"
      },
      {
        text: "DES cipher",
        value: "des"
      }
    ]
  }),
  components: {
    Caesar,
    Playfair,
    Des
  }
};
</script>
