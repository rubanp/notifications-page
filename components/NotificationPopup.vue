<template>
  <div id="container">
    <header>
      <h1 id="notificationTitle">Notifications</h1>
      <div id="unreadNotifications">
        <p>{{ unread }}</p>
      </div>
    </header>
    <NotificationCard
      v-for="notification in notifications"
      :key="notification.id"
      :person="notification.person"
      :image="notification.profilePhoto"
      :timestamp="notification.timestamp"
      :message="notification.message"
      :object="notification.object" 
      :read="notification.read">
    </NotificationCard>
  </div>
</template>

<script setup>
const unread = ref(3)

const notifications = ref([
  {
    id: 1,
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
    id: 2,
    person: "Angela Gray",
    profilePhoto: "/angela-gray.jpg",
    timestamp: "5m ago",
    message: "followed you",
    object: {},
    read: false,
  },
  {
    id: 3,
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
    id: 4,
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
    id: 5,
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
    id: 6,
    person: "Anna Kim",
    profilePhoto: "/anna-kim.jpg",
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
#container {
  width: 100%;
  padding: 2em;
  display: flex;
  gap: 0.5em;
  flex-direction: column;
  align-items: flex-start;
}

@media only screen and (max-width: 550px) {
  #container {
    padding: 2em 0.5em 2em 0.5em;
  }
}

header {
  display: flex;
}

#notificationTitle {
  font-size: 1.5em;
  color: var(--very-dark-blue);
  font-family: var(--primary-font);
}

#unreadNotifications {
  margin-left: 0.5em;
  color: var(--white);
  font-family: var(--primary-font);
  background-color: var(--blue);
  border-radius: 6px;
  min-width: 32px;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0.325em;
}

</style>
