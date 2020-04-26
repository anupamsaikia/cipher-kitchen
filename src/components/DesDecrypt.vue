<template>
  <div>
    <v-row justify="center">
      <v-col cols="12" sm="6" class="pb-0">
        <v-text-field
          outlined
          dense
          hide-details
          name="ciphertext"
          label="Enter ciphertext here"
          v-model="cipherText"
        ></v-text-field>
      </v-col>
      <v-col cols="12" sm="6" class="pb-0">
        <v-text-field
          outlined
          dense
          hide-details
          name="passowrd"
          label="Secret Password"
          v-model="password"
        ></v-text-field>
      </v-col>
      <v-col cols="12" sm="6" class="pb-0">
        <v-btn block dark color="green" @click="desDecrypt">
          <v-icon left dark>mdi-lock-open</v-icon> Decrypt</v-btn
        >
      </v-col>
      <v-col cols="12" sm="6" class="pb-0">
        <v-btn block dark color="grey darken-1" @click="reset">
          <v-icon left dark>mdi-replay</v-icon> Reset</v-btn
        >
      </v-col>
    </v-row>

    <v-row justify="center" v-if="output">
      <v-col cols="12" sm="8" class="mt-5 pt-5">
        <v-text-field
          dense
          outlined
          readonly
          label="Output"
          :value="output"
        ></v-text-field>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { decrypt } from "../ciphers/des";

export default {
  data: () => ({
    cipherText: "",
    password: "",
    output: null
  }),

  methods: {
    desDecrypt() {
      this.output = decrypt(this.cipherText, this.password);
    },
    reset() {
      this.cipherText = "";
      this.password = "";
      this.output = null;
    }
  }
};
</script>

<style></style>
