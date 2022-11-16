<template>
  <div class="popup-card">
    <img src="../assets/notification-popup.svg" alt="" class="popup-svg">
    <div class="popup-content">
      <a class="action" @click="$emit('readStatusChange', readStatus)">
        <img class="icon" src="../assets/icons/tick.svg" alt="">
        <p>Mark as {{ readStatus }}</p>
      </a>
      <a class="action">
        <img class="icon" src="../assets/icons/remove.svg" alt="">
        <p>Remove</p>
      </a>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(['read']);

const readStatus = computed(() => {
  if (props.read) {
    return 'unread';
  } return 'read';
})

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

p {
  font-size: 14px;
  padding-top: 2px;
}
</style>
