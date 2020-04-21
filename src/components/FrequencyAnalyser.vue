<template>
  <div>
    <v-row justify="center" align="center">
      <v-col
        md="1"
        class="hidden-xs-only"
        style="justify-content: end;display: flex;"
      >
        <v-btn fab dark small color="primary" @click="decreaseShift">
          <v-icon dark>mdi-chevron-left</v-icon>
        </v-btn>
      </v-col>

      <v-col xs="12" sm="8" md="6">
        <v-sparkline
          :value="displayedFrequencies"
          :labels="displayedLabels"
          :gradient="gradient"
          type="bar"
          show-labels
          height="50"
        ></v-sparkline>
        <v-sparkline
          :value="englishLangFrequencies"
          :labels="labels"
          :gradient="gradient"
          type="bar"
          show-labels
          height="50"
        ></v-sparkline>
      </v-col>

      <v-col md="1" class="hidden-xs-only">
        <v-btn fab dark small color="primary" @click="increaseShift">
          <v-icon dark>mdi-chevron-right</v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  props: {
    text: String,
    shift: Number
  },
  data: () => ({
    gradient: ["#ff5e62", "#ff9966"],
    labels: [],
    englishLangFrequencies: []
  }),
  computed: {
    frequencies: function() {
      let input = this.text.toUpperCase().replace(/[^A-Z]/g, "");

      let frequencies = input.split("").reduce((freqs, letter) => {
        freqs[letter] ? freqs[letter]++ : (freqs[letter] = 1);
        return freqs;
      }, {});

      let values = [];

      for (let i = 0; i < 26; i++) {
        values.push(frequencies[String.fromCharCode(65 + i)] || 0);
      }
      return values;
    },
    displayedFrequencies: function() {
      let f = this.frequencies;
      return this.rotateArray(f, this.shift);
    },
    displayedLabels: function() {
      return this.rotateArray(this.labels, this.shift);
    }
  },

  methods: {
    increaseShift() {
      this.$emit("shift-decrease");
    },
    decreaseShift() {
      this.$emit("shift-increase");
    },
    rotateArray(arr, count) {
      //count = count * -1;
      let newArr = Array.from(arr);
      count -= newArr.length * Math.floor(count / newArr.length);
      newArr.push.apply(newArr, newArr.splice(0, count));
      return newArr;
    }
  },

  created: function() {
    let labels = [];
    for (let i = 0; i < 26; i++) {
      labels.push(String.fromCharCode(65 + i));
    }
    this.labels = labels;

    // data from wikipedia, 1 = 0.001%
    this.englishLangFrequencies = [
      8167,
      1492,
      2202,
      4253,
      12702,
      2228,
      2015,
      6094,
      6966,
      153,
      1292,
      4025,
      2406,
      6749,
      7507,
      1929,
      95,
      5987,
      6327,
      9356,
      2758,
      978,
      2560,
      150,
      1994,
      77
    ];
  }
};
</script>

<style></style>
