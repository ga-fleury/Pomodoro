<template>
  <div id="home">
    <h1>VueJS Pomodoro Clock</h1>
    <BaseTimer
      @timeUpdate="updateTime"
      @labelReset="labelReset"
      :CurrentRunState="isRunning"
      :clockSwitch="clockSwitcher"
    />
    <TimerControls
      @startUpdate="startClicked"
      @resetWasTriggered="resetClockSwitcher"
      :CurrentRunState="isRunning"
    />
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
      isRunning: false,
      clockSwitcher: false
    };
  },
  methods: {
    startClicked(value) {
      this.isRunning = value;
    },
    resetClockSwitcher() {
      this.clockSwitcher = !this.clockSwitcher;
    },
    updateTime(value) {
      this.timeElapsed = value;
    },
    labelReset(value) {
      this.isRunning = value;
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
