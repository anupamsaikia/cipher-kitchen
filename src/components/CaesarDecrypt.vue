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

    <v-row justify="center" align="center">
      <v-col cols="1" style="justify-content: end;display: flex;">
        <v-btn
          fab
          light
          small
          outlined
          color="orange darken-3"
          @click="decrement"
        >
          <v-icon dark>mdi-minus</v-icon>
        </v-btn>
      </v-col>
      <v-col cols="8" sm="4" class="pb-0 pt-0">
        <v-text-field
          dense
          hide-details
          v-model="shift"
          type="number"
          label="Enter shift value here"
          outlined
          prepend-inner-icon="mdi-key-variant"
        ></v-text-field>
      </v-col>
      <v-col cols="1">
        <v-btn
          fab
          small
          light
          outlined
          color="orange darken-3"
          @click="increment"
        >
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </v-col>
    </v-row>

    <frequency-analyser
      :text="cipherText"
      :shift="shift"
      v-on:shift-increase="shift++"
      v-on:shift-decrease="shift--"
    ></frequency-analyser>
  </div>
</template>

<script>
import { decrypt } from "../ciphers/caesar";
import FrequencyAnalyser from "./FrequencyAnalyser";
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
  },

  components: {
    FrequencyAnalyser
  }
};
</script>

<style></style>
