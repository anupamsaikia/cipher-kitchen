<template>
  <div>
    <h1>Caesar cipher</h1>
    <v-row>
      <v-col xs="6">
        <v-textarea
          outlined
          name="input-7-4"
          label="Enter plaintext"
          v-model="plainText"
        ></v-textarea>
      </v-col>

      <v-col xs="6">
        <v-textarea
          outlined
          readonly
          name="input-7-"
          label="Ciphetext"
          :value="cipherText"
          hint="Ciphertext is read only"
        ></v-textarea>
      </v-col>
    </v-row>

    <div>
      <v-text-field
        label="Enter shift value"
        prepend-inner-icon="mdi-key-variant"
        type="number"
        hint="Default value of 3 will be used if left empty"
        persistent-hint
        outlined
        v-model="shift"
      ></v-text-field>
      <v-btn color="teal" dark @click="encryptMsg">Encrypt</v-btn>
    </div>
  </div>
</template>

<script>
import * as caesar from "../ciphers/caesar";
export default {
  name: "Caesar",
  data: () => ({
    plainText: "",
    shift: null,
    cipherText: ""
  }),
  methods: {
    encryptMsg: function() {
      const shift = parseInt(this.shift);

      if (isNaN(shift)) {
        // use 3 as default value
        this.cipherText = caesar.encrypt(this.plainText, 3);
      } else {
        this.cipherText = caesar.encrypt(this.plainText, shift);
      }
    }
  }
};
</script>
