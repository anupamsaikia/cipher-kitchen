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
              readonly=""
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
          <v-col cols="6" sm="12" md="6">
            <v-btn block color="grey darken-1" dark @click="copyCipherText">
              <v-icon left dark>mdi-content-copy</v-icon>
              Copy ciphertext
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
import { encrypt, getKeyTableString } from "../ciphers/playfair.js";
export default {
  data: () => ({
    plainText: "",
    keyPhrase: "a"
  }),

  computed: {
    cipherText: function() {
      console.log(typeof encrypt(this.plainText, this.keyPhrase));
      return encrypt(this.plainText, this.keyPhrase).toString();
    },
    keyTable: function() {
      return getKeyTableString(this.keyPhrase);
    }
  },

  methods: {
    reset() {
      this.plainText = "";
      this.keyPhrase = "a";
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
