<template>
  <div @click="openPopup">
    <img src="../assets/icons/dots.svg" alt="">
  </div>
</template>

<script setup>
function openPopup() {
  // do stuff
}
</script>

<style scoped>
div {
  cursor: pointer;
  background-color: lightgray;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  padding-top: 3px;
}

img {
  width: 24px;
  height: 24px;
  margin: auto;
}
</style>
