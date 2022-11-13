<template>
  <div class="popup-card">
    <img src="../assets/notification-popup.svg" alt="" class="popup-svg">
    <div class="popup-content">
      <div class="action">
        <img class="icon" src="../assets/icons/tick.svg" alt="">
        <p>Mark as {{ status }}</p>
      </div>
      <div class="action">
        <img class="icon" src="../assets/icons/remove.svg" alt="">
        <p>Remove</p>
      </div>
    </div>
  </div>
</template>

<script setup>
const status = 'read'
</script>

<style scoped>

img {
  margin-right: 0.75em;
}

.popup-card {
  position: relative;
}

.popup-content {
  position: absolute;
  top: 20px;
  left: 12px;
  display: flex;
  flex-direction: column;
  gap: 0.5em;
}

.icon {
  display: inline-block;
}

.action {
  display: flex;
  border-radius: 5px;
}

.action:hover {
  cursor: pointer;
  opacity: 0.6;
}
</style>
