<template>
</template>

<script setup>

const notifications = reactive([
  {
    person: "Mark Webber",
    profilePhoto: "/mark-webber.jpg",
    timestamp: "1m ago",
    message: "reacted to your recent post",
    object: {
      post: "My first tournament today!"
    },
    read: false,
  },
  {
    person: "Angela Gray",
    profilePhoto: "/angela-gray.jpg",
    timestamp: "5m ago",
    message: "followed you",
    object: {},
    read: false,
  },
  {
    person: "Jacob Thompson",
    profilePhoto: "/jacob-thompson.jpg",
    timestamp: "5 days ago",
    message: "has joined your club",
    object: {
      group: "Chess Club"
    },
    read: false,
  },
  {
    person: "Rizky Hasanuddin",
    profilePhoto: "/rizky-hasanuddin.jpg",
    timestamp: "1 week ago",
    message: "sent you a private message",
    object: {
      message: "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game."
    },
    read: true,
  },
  {
    person: "Kimberly Smith",
    profilePhoto: "/jacob-thompson.jpg",
    timestamp: "1 week ago",
    picture: "playing-chess.jpg",
    message: "commented on your picture",
    object: {
      picture: "/playing-chess.jpg"
    },
    read: true,
  },
  {
    person: "Nathan Peterson",
    profilePhoto: "/nathan-peterson.jpg",
    timestamp: "2 weeks ago",
    message: "reacted to your recent post",
    object: {
      post: "5 end-game strategies to increase your win rate",
    },
    read: true,
  },
  {
    person: "Anna Kim",
    timestamp: "2 weeks ago",
    message: "left your group",
    object: {
      group: "Board Games Club"
    },
    read: true,
  }
])
</script>

<style scoped>
/* code... */
</style>
