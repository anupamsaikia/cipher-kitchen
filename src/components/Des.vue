<template>
  <div>
    <v-tabs
      v-model="tab"
      centered
      fixed-tabs
      background-color="purple lighten-5"
    >
      <v-tab> <span class="mdi mdi-lock-outline"></span> Encryption </v-tab>
      <v-tab>
        <span class="mdi mdi-lock-open-outline"></span> Decryption
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item>
        <des-encrypt></des-encrypt>
      </v-tab-item>

      <v-tab-item>
        <des-decrypt></des-decrypt>
      </v-tab-item>
    </v-tabs-items>

    <v-divider class="mt-5 mb-5"></v-divider>

    <div>
      <p class="subtitle-2 mb-0">Note:</p>
      <p class="caption mb-0">
        Here the DES algorithm uses the CBC (Cipher block chaining) mode, PKCS#7
        padding scheme and MD5 digest.
      </p>
      <p class="caption mb-0">
        This implementation is compatible with OpenSSL.
      </p>
    </div>
  </div>
</template>

<script>
import DesEncrypt from "./DesEncrypt.vue";
import DesDecrypt from "./DesDecrypt.vue";

export default {
  data: () => ({
    tab: null
  }),

  components: {
    DesEncrypt,
    DesDecrypt
  }
};
</script>

<style></style>
