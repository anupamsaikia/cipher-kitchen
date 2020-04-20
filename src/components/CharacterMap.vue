<template>
  <div>
    <v-row no-gutters="">
      <v-col cols="12">
        <div class="letter-container">
          <span
            v-for="letter in letters"
            :key="letter"
            class="letter primary--text "
            >{{ letter }}</span
          >
        </div>
      </v-col>
      <v-col cols="12">
        <div class="letter-container">
          <span v-for="n in 26" :key="n" class="letter grey--text">&darr;</span>
        </div>
      </v-col>
      <v-col cols="12">
        <div class="letter-container">
          <span
            v-for="letter in shiftedLetters"
            :key="letter"
            class="letter orange--text text--darken-3"
          >
            {{ letter }}</span
          >
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  props: ["shift"],

  data: () => ({
    letters: []
  }),

  computed: {
    shiftedLetters: function() {
      return this.rotateArray(this.letters, this.shift);
    }
  },

  methods: {
    rotateArray(arr, count) {
      //count = count * -1;
      let newArr = Array.from(arr);
      count -= newArr.length * Math.floor(count / newArr.length);
      newArr.push.apply(newArr, newArr.splice(0, count));
      return newArr;
    }
  },

  created: function() {
    let letters = [];
    for (let i = 0; i < 26; i++) {
      letters.push(String.fromCharCode(65 + i));
    }
    this.letters = letters;
  }
};
</script>

<style scoped>
.letter-container {
  display: flex;
}

.letter {
  flex: auto;
  font-family: "Courier New", Courier, monospace;
}
</style>
