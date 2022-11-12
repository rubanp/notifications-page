<template>
  <main>
    <div class="wrapper">
      <NotificationPopup />
    </div>
  </main>
</template>

<style scoped>
main {
  width: 50%;
  display: flex;
  justify-content: center;
}

@media only screen and (max-width: 1200px) {
  main {
    width: 75%;
  }
}

@media only screen and (max-width: 800px) {
  main {
    width: 85%;
  }
}

@media only screen and (max-width: 600px) {
  main {
    width: 95%;
  }
}

</style>
