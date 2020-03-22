<template>
  <div id="home">
    <h1>Pomodoro Clock</h1>
    <BaseTimer />
  </div>
</template>

<script>
import BaseTimer from "../components/BaseTimer";

export default {
  name: "home",

  components: {
    BaseTimer
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
