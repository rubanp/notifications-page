<template>
  <div id="main">

    <div>

      <p id="text">
        <span id="person">{{ props.person }}</span>
        <span id="message">
          {{ props.message }}
          <span id="object"> {{ props.object }}</span>
        </span>
      </p>

      <p id="timestap">{{ props.timestamp }}</p>

    </div>

  </div>
</template>

<script setup>
  const props = defineProps(['person', 'timestamp', 'message', 'object', 'image'])
  console.log(props);
  const imgAlt = computed(() => {
    return `Profile photo of ${props.person}`
  })
</script>


<style scoped>
  #main {
    display: flex;
    width: 100%;
    min-height: 80px;
    padding: 1em;
  }

  img {
    margin: 0 1.25em;
    width: 45px;
    height: 45px;
    border-radius: 50%;
  }

  #person {
    color: var(--very-dark-blue);
  }

  #message {
    color: var(--dark-grayish-blue);
  }

  #object {
    font-weight: var(--bold);
  }
</style>
