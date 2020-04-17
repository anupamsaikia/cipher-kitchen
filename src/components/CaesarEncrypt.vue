<template>
  <div>
    <v-row>
      <v-col xs="6" class="pb-0">
        <v-textarea
          outlined
          name="plaintext"
          label="Enter plaintext here"
          v-model="plainText"
        ></v-textarea>
      </v-col>
      <v-col xs="6" class="pb-0">
        <v-textarea
          outlined
          filled
          readonly
          name="ciphertext"
          label="Ciphetext"
          :value="cipherText"
          hint="This field is read only"
        ></v-textarea>
      </v-col>
    </v-row>

    <v-row justify="center">
      <v-col xs="12" sm="8" md="6" class="pb-0 pt-0">
        <v-text-field
          label="Enter shift value here"
          prepend-inner-icon="mdi-key-variant"
          type="number"
          outlined
          dense
          v-model="shift"
        ></v-text-field>
      </v-col>
    </v-row>

    <v-row justify="center">
      <v-col xs="12" sm="8" md="6">
        <v-btn block color="orange" dark @click="encryptMsg">
          <v-icon left dark>mdi-lock</v-icon>
          Encrypt
        </v-btn>
      </v-col>
    </v-row>

    <v-row justify="center">
      <v-col xs="6" sm="4" md="3">
        <v-btn block color="grey darken-1" dark>
          <v-icon left dark>mdi-content-copy</v-icon>
          Copy plaintext
        </v-btn>
      </v-col>
      <v-col xs="6" sm="4" md="3">
        <v-btn block color="grey darken-1" dark>
          <v-icon left dark>mdi-content-copy</v-icon>
          Copy ciphertext
        </v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { encrypt } from "../ciphers/caesar";
export default {
  data: () => ({
    plainText: "",
    cipherText: "",
    shift: null
  }),
  methods: {
    encryptMsg: function() {
      const shift = parseInt(this.shift);

      if (isNaN(shift)) {
        // use 0 as default value
        this.cipherText = encrypt(this.plainText, 0);
      } else {
        this.cipherText = encrypt(this.plainText, shift);
      }
    }
  }
};
</script>

<style></style>
