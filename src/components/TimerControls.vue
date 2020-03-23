<template>
  <div class="control">
    <button @click="playPause()" class="control__button" id="start-btn">
      Start
    </button>
    <button class="control__button" id="stop-btn">Stop</button>
    <button class="control__button" id="reset-btn">Reset</button>
  </div>
</template>

<script>
export default {
  props: {
    runState: Boolean
  },
  data() {
    return {
      isRunning: this.runState
    };
  },
  methods: {
    playPause() {
      this.isRunning = !this.isRunning;
      console.log("isRunning agora é:" + this.isRunning);
      this.$emit("startUpdate", this.isRunning);
    }
  }
};
</script>

<style></style>
