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

    <v-divider class="mt-5 mb-5"></v-divider>

    <div>
      <p class="subtitle-2 mb-0">Note:</p>
      <p class="caption mb-0">
        Here the Playfair algorithm combines the letter "I" and "J" which is
        represented as "I".
      </p>
      <p class="caption">
        The letter "X" is used as filler character
      </p>
    </div>
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
