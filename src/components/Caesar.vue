<template>
  <div>
    <v-tabs
      v-model="tab"
      centered
      fixed-tabs
      background-color="orange lighten-5"
    >
      <v-tab><span class="mdi mdi-lock-outline"></span> Encryption</v-tab>
      <v-tab><span class="mdi mdi-lock-open-outline"></span> Decryption</v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item>
        <caesar-encrypt></caesar-encrypt>
      </v-tab-item>

      <v-tab-item>
        <caesar-decrypt></caesar-decrypt>
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script>
import CaesarEncrypt from "./CaesarEncrypt.vue";
import CaesarDecrypt from "./CaesarDecrypt.vue";
export default {
  name: "Caesar",
  data: () => ({
    tab: null
  }),
  methods: {},
  components: {
    CaesarEncrypt,
    CaesarDecrypt
  }
};
</script>
