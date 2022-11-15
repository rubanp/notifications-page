<script setup>

  const props = defineProps(['person', 'timestamp', 'message', 'object', 
                            'image', 'read', 'no']);
  const popupHidden = ref(true)
  const imgAlt = computed(() => {
    return `Profile photo of ${props.person}`
  })
  const emptyObject = ref(Object.keys(props.object).length === 0)
  const isGroup = ref(Object.keys(props.object).includes('group'));
  const isMessage = ref(Object.keys(props.object).includes('message'));
  const read = props.read;

  function togglePopup() {
    popupHidden.value = !popupHidden.value
  }

</script>

<template>
  <div class="notification-card" :class="{blueBackground: !read}">

    <img :src="props.image" :alt="imgAlt" id="avatarImage">

    <div id="content">
      <p id="text">
        <span id="person"><a href="javascript:" id="personLink">
            {{ props.person }}&nbsp;&nbsp;
        </a></span>
        <span id="message">
          {{ props.message }}
          <span id="object" :class="{group: isGroup, hide: emptyObject}"><a 
              href="javascript:"> &nbsp;&nbsp;{{ props.object.post || 
              props.object.group }}</a></span>
        <span id="read" :class="{hide: read, block: !read}"></span>
        </span>
      </p>
      <p id="timestamp">{{ props.timestamp }}</p>
      <p id="objectMessage" :class="{hide: !isMessage}">{{ props.object.message }}</p>
    </div>

    <div class="popup-container">
      <MarkPopup class="popup-activate" @click="togglePopup" :class="{block: !popupHidden}"/>
    </div>

    <Popup class="popup" v-if="!popupHidden"/>
  </div>
</template>

<style scoped>

  .popup {
    position: absolute;
    top: 60px;
    right: 0px;
    z-index: 999;
  }

  .popup-activate {
    margin-top: 1.5em;
    display: none;
  }

  .popup-container {
    position: relative;
    min-width: 62px;
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
    margin-left: auto;
  }

  .notification-card:hover .popup-activate {
    display: block;
  }

  .block {
    display: block;
  }

  .notification-card {
    display: flex;
    width: 100%;
    min-height: 80px;
    font-family: var(--primary-font);
    position: relative;
    border-radius: 10px;
    padding: 0 1.25em 0 1.25em
  }

  .blueBackground {
    background-color: var(--light-grayish-blue-1);
  }

  #avatarImage {
    margin: 1.25em 1.25em 1.25em 0;
    width: 45px;
    height: 45px;
    border-radius: 50%;
  }

  #content {
    margin: 1em 1em 1em 0;
  }

  #text {
    margin-top: 0.125em;
  }

  #person {
    color: var(--very-dark-blue);
    font-weight: var(--bold);
  }

  #person:hover {
    color: var(--blue);
  }

  #message {
    color: var(--dark-grayish-blue);
  }

  #object {
    font-weight: var(--bold);
  }

  #object:hover {
    color: var(--blue);
  }

  #timestamp {
    color: var(--grayish-blue);
  }

  .group {
    color: var(--blue);
  }

  .hide {
    display: none;
  }

  .block {
    display: inline-block;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  #read {
    margin-bottom: 1px;
    margin-left: 0.4em;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: var(--red);
  }

  #objectMessage {
    margin-top: 1em;
    color: var(--dark-grayish-blue);
    border: solid 1px;
    border-color: var(--light-grayish-blue-2);
    border-radius: 5px;
    padding: 1em;
  }
</style>
