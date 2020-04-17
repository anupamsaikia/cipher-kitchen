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
        <v-row>
          <v-col xs="6" class="pb-0">
            <v-textarea
              outlined
              name="input-7-4"
              label="Enter plaintext here"
              v-model="plainText"
            ></v-textarea>
          </v-col>
          <v-col xs="6" class="pb-0">
            <v-textarea
              outlined
              filled
              readonly
              name="input-7-"
              label="Ciphetext"
              :value="cipherText"
              hint="Ciphertext is read only"
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
            <v-btn block color="grey darken-1" dark @click="encryptMsg">
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
      </v-tab-item>

      <v-tab-item>
        <h4>Decryption</h4>
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script>
import * as caesar from "../ciphers/caesar";
export default {
  name: "Caesar",
  data: () => ({
    tab: null,
    plainText: "",
    shift: null,
    cipherText: ""
  }),
  methods: {
    encryptMsg: function() {
      const shift = parseInt(this.shift);

      if (isNaN(shift)) {
        // use 0 as default value
        this.cipherText = caesar.encrypt(this.plainText, 0);
      } else {
        this.cipherText = caesar.encrypt(this.plainText, shift);
      }
    }
  }
};
</script>
