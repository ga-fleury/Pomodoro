<template>
  <div id="home">
    <h1>VueJS Pomodoro Clock</h1>
    <BaseTimer :runState="isRunning" />
    <TimerControls :runState="isRunning" @startUpdate="startClicked" />
  </div>
</template>

<script>
import BaseTimer from "../components/BaseTimer";

import TimerControls from "../components/TimerControls";

export default {
  name: "home",
  components: {
    BaseTimer,
    TimerControls
  },
  data() {
    return {
      isRunning: false
    };
  },
  methods: {
    startClicked(value) {
      this.isRunning = value;
      console.log("isRunning agora é:" + this.isRunning);
    }
  }
};
</script>

<style>
body {
  background-color: #fff;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
}
</style>
