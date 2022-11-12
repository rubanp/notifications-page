<template>
  <div id="main">

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
        </span>
        <span id="read" :class="{hide: read, block: !read}"></span>
      </p>
      <p id="timestamp">{{ props.timestamp }}</p>
      <p id="objectMessage" :class="{hide: !isMessage}">{{ props.object.message }}</p>
    </div>

    <a href="javascript:" id="pictureLink">
      <img id="picture" :src="props.object.picture" alt="" :class="{hide: !isComment}">
    </a>

  </div>
</template>

<script setup>
  const props = defineProps(['person', 'timestamp', 'message', 'object', 
                            'image', 'read'])
  const imgAlt = computed(() => {
    return `Profile photo of ${props.person}`
  })
  const emptyObject = ref(Object.keys(props.object).length === 0)
  const isGroup = ref(Object.keys(props.object).includes('group'));
  const isComment = ref(Object.keys(props.object).includes('picture'));
  const isMessage = ref(Object.keys(props.object).includes('message'));
  const read = props.read;
</script>


<style scoped>
  #main {
    display: flex;
    width: 100%;
    min-height: 80px;
    padding: 1em 1em 1em 0;
    font-family: var(--primary-font);
  }

  #avatarImage {
    margin: 1.25em;
    width: 45px;
    height: 45px;
    border-radius: 50%;
  }

  #content {
    margin-right: 1em;
  }

  #text {
    margin-top: 1.125em;
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

  #picture {
    height: 45px;
    width: 45px;
    border-radius: 7px;
  }

  #pictureLink {
    margin-left: auto;
    margin-top: 1.25em;
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
