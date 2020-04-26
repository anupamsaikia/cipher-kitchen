<template>
  <div>
    <v-row justify="center">
      <v-col cols="12" sm="6" class="pb-0">
        <v-text-field
          outlined
          dense
          hide-details
          name="plaintext"
          label="Enter plaintext here"
          v-model="plainText"
        ></v-text-field>
      </v-col>
      <v-col cols="12" sm="6" class="pb-0">
        <v-text-field
          outlined
          dense
          hide-details
          name="password"
          label="Secret Password"
          v-model="password"
        ></v-text-field>
      </v-col>
      <v-col cols="12" sm="6" class="pb-0">
        <v-btn block dark color="primary lighten-1" @click="desEncrypt">
          <v-icon left dark>mdi-lock</v-icon> Encrypt</v-btn
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
          persistent-hint
          label="Ciphertext"
          hint="Base64 encoded ciphertext"
          :value="output.cipherText"
        ></v-text-field>
      </v-col>
      <v-col cols="12" sm="8" class="pt-0">
        <v-text-field
          dense
          outlined
          readonly
          persistent-hint
          label="Salt"
          hint="Salt in hexadecimal"
          :value="output.salt"
        ></v-text-field>
      </v-col>
      <v-col cols="12" sm="8" class="pt-0">
        <v-text-field
          dense
          outlined
          readonly
          persistent-hint
          label="Key"
          hint="Key in hexadecimal"
          :value="output.key"
        ></v-text-field>
      </v-col>
      <v-col cols="12" sm="8" class="pt-0">
        <v-text-field
          dense
          outlined
          readonly
          persistent-hint
          label="IV"
          hint="Initialization vector in hexadecimal"
          :value="output.iv"
        ></v-text-field>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { encrypt } from "../ciphers/des";
export default {
  data: () => ({
    plainText: "",
    password: "",
    output: null
  }),

  methods: {
    desEncrypt() {
      this.output = encrypt(this.plainText, this.password);
    },
    reset() {
      this.plainText = "";
      this.password = "";
      this.output = null;
    }
  }
};
</script>

<style></style>
