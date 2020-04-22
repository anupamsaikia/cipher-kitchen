<template>
  <div>
    <v-row justify="center">
      <v-col sm="6" class="pb-0">
        <v-textarea
          outlined
          name="ciphertext"
          label="Enter ciphertext here"
          v-model="cipherText"
        ></v-textarea>
      </v-col>
      <v-col sm="6" class="pb-0">
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

    <v-row>
      <v-col cols="12" sm="6">
        <v-row justify="center" align="center">
          <v-col cols="12" class="pt-0">
            <v-text-field
              dense
              hide-details
              v-model="keyPhrase"
              label="Enter key phrase here"
              outlined
              prepend-inner-icon="mdi-key-variant"
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row justify="center" align="center">
          <v-col cols="12" class="pb-0">
            <v-text-field
              dense
              v-model="keyTable"
              label="Generated key table string"
              hint="Key table is automatically generated"
              outlined
              readonly
              prepend-inner-icon="mdi-key-variant"
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row justify="center">
          <v-col cols="6" sm="12" md="6">
            <v-btn block color="grey darken-1" dark @click="reset">
              <v-icon left dark>mdi-replay</v-icon>
              Reset
            </v-btn>
          </v-col>
        </v-row>
      </v-col>

      <v-col cols="12" sm="6">
        <p class="subtitle-2 mb-0">Key table :</p>

        <v-row justify="center">
          <v-col cols="10" lg="6" xl="5">
            <div class="t-container">
              <div v-for="(n, i) in 5" :key="i" class="t-row">
                <div
                  v-for="(n, j) in 5"
                  :key="i + j"
                  class="t-col green--text text--darken-4"
                >
                  {{ keyTable.charAt(5 * i + j) }}
                </div>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { decrypt, getKeyTableString } from "../ciphers/playfair.js";
export default {
  data: () => ({
    cipherText: "",
    keyPhrase: ""
  }),

  computed: {
    plainText: function() {
      return decrypt(this.cipherText, this.keyPhrase).toString();
    },
    keyTable: function() {
      return getKeyTableString(this.keyPhrase);
    }
  },

  methods: {
    reset() {
      this.cipherText = "";
      this.keyPhrase = "";
    }
  }
};
</script>

<style scoped>
.t-container {
  border: solid 1px rgba(150, 150, 150, 0.7);
}
.t-row {
  display: flex;
}
.t-col {
  flex: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Courier New", Courier, monospace;
  font-weight: bold;
  border: solid 1px rgba(150, 150, 150);
  background-color: #e8f5e9;
  height: 40px;
}
</style>
