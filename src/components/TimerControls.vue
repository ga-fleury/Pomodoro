<template>
  <div class="control">
    <button @click="playPause()" class="control__button" id="start-btn">
      {{ playLabel }}
    </button>
    <button @click="resetTrigger()" class="control__button" id="reset-btn">
      Reset
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isRunning: false,
      playLabel: "Start"
    };
  },
  watch: {
    isRunning(value) {
      value ? (this.playLabel = "Pause") : (this.playLabel = "Start");
    }
  },
  methods: {
    playPause() {
      this.isRunning = !this.isRunning;
      this.$emit("startUpdate", this.isRunning);
    },
    resetTrigger() {
      this.$emit("resetWasTriggered");
      this.isRunning = false;
    }
  }
};
</script>

<style lang="scss">
.control {
  &__button {
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
    text-transform: lowercase;
    color: #fff;
    background-color: #42b983;
    margin: 20px;
    padding: 0.2rem 1rem;
    border: #42b983 5px solid;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
      color: #42b983;
      background-color: #fff;
    }
  }
}
</style>
