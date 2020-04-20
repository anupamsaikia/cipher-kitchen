<template>
  <div>
    <v-row justify="center">
      <v-col sm="6" class="pb-0">
        <v-textarea
          outlined
          name="plaintext"
          label="Enter plaintext here"
          v-model="plainText"
        ></v-textarea>
      </v-col>
      <v-col sm="6" class="pb-0">
        <v-textarea
          outlined
          filled
          readonly
          name="ciphertext"
          label="Ciphetext"
          :value="cipherText"
          hint="This field is read only"
          ref="cipherElement"
        ></v-textarea>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" sm="6">
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
          <v-col cols="8" class="pb-0 pt-0">
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

        <v-row justify="center">
          <v-col cols="6" sm="12" md="6">
            <v-btn block color="grey darken-1" dark @click="clearAll">
              <v-icon left dark>mdi-delete</v-icon>
              Clear all
            </v-btn>
          </v-col>
          <v-col cols="6" sm="12" md="6">
            <v-btn block color="grey darken-1" dark @click="copyCipherText">
              <v-icon left dark>mdi-content-copy</v-icon>
              Copy ciphertext
            </v-btn>
          </v-col>
        </v-row>
      </v-col>

      <v-col cols="12" sm="6">
        <h3>Character mapping</h3>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { encrypt } from "../ciphers/caesar";
export default {
  data: () => ({
    plainText: "",
    shift: 0
  }),
  computed: {
    cipherText: function() {
      let shift = parseInt(this.shift, 10);

      if (isNaN(shift)) {
        // use 0 as default value
        return encrypt(this.plainText, 0);
      } else {
        return encrypt(this.plainText, shift);
      }
    }
  },
  methods: {
    increment() {
      this.shift = parseInt(this.shift, 10) + 1;
    },
    decrement() {
      this.shift = parseInt(this.shift, 10) - 1;
    },
    clearAll() {
      this.plainText = "";
      this.shift = 0;
    },
    copyCipherText() {
      let textToCopy = this.$refs.cipherElement.$el.querySelector("textarea");
      textToCopy.select();
      document.execCommand("copy");
      textToCopy.blur();
    }
  }
};
</script>

<style></style>
