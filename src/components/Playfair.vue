<template>
  <div>
    <v-tabs
      v-model="tab"
      centered
      fixed-tabs
      background-color="green lighten-5"
    >
      <v-tab><span class="mdi mdi-lock-outline"></span> Encryption</v-tab>
      <v-tab><span class="mdi mdi-lock-open-outline"></span> Decryption</v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item>
        <playfair-encrypt></playfair-encrypt>
      </v-tab-item>

      <v-tab-item>
        <playfair-decrypt></playfair-decrypt>
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script>
import PlayfairEncrypt from "./PlayfairEncrypt.vue";
import PlayfairDecrypt from "./PlayfairDecrypt.vue";
export default {
  data: () => ({
    tab: null
  }),

  components: {
    PlayfairEncrypt,
    PlayfairDecrypt
  }
};
</script>

<style></style>
