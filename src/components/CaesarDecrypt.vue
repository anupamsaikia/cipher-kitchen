<template>
  <div>
    <v-row>
      <v-col xs="6" class="pb-0">
        <v-textarea
          outlined
          name="ciphertext"
          label="Enter ciphertext here"
          v-model="cipherText"
        ></v-textarea>
      </v-col>
      <v-col xs="6" class="pb-0">
        <v-textarea
          outlined
          filled
          readonly
          name="plaintext"
          label="Plaintext"
          :value="plainText"
          hint="This field is read only"
        ></v-textarea>
      </v-col>
    </v-row>

    <v-row justify="center">
      <v-col cols="12" sm="6" class="pb-0 pt-0">
        <v-text-field
          v-model="shift"
          type="number"
          label="Enter shift value here"
          outlined
          prepend-inner-icon="mdi-key-variant"
          append-outer-icon="mdi-plus"
          @click:append-outer="increment"
          prepend-icon="mdi-minus"
          @click:prepend="decrement"
        ></v-text-field>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { decrypt } from "../ciphers/caesar";
export default {
  data: () => ({
    cipherText: "",
    shift: 0
  }),
  computed: {
    plainText: function() {
      let shift = parseInt(this.shift, 10);

      if (isNaN(shift)) {
        // use 0 as default value
        return decrypt(this.cipherText, 0);
      } else {
        return decrypt(this.cipherText, shift);
      }
    }
  },

  methods: {
    increment() {
      this.shift = parseInt(this.shift, 10) + 1;
    },
    decrement() {
      this.shift = parseInt(this.shift, 10) - 1;
    }
  }
};
</script>

<style></style>
