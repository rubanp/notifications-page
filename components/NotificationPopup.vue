<template>
  <div id="container">
    <header>
      <h1 id="notificationTitle">Notifications</h1>
      <div id="unreadNotifications">
        <p>{{ unread }}</p>
      </div>
      <a href="javascript:" @click="notificationsStore.markAllAsRead" id="markAllRead">Mark all as read</a>
    </header>
    <TransitionGroup name="list">
      <NotificationCard
        v-for="notification in allNotifications.value"
        :key="notification.uuid"
        :uuid="notification.uuid"
        :person="notification.person"
        :image="notification.profilePhoto"
        :timestamp="notification.timestamp"
        :message="notification.message"
        :object="notification.object"
        :read="notification.read"
        :popupVisible="notification.popupVisible">
      </NotificationCard>
    </TransitionGroup>
  </div>
</template>

<script setup>

// Imports
import {storeToRefs} from 'pinia';
import { useNotificationStore } from '~~/stores/notifications';

// Initialise Store
const notificationsStore = useNotificationStore();
const { unread, allNotifications, popupsVisible } = storeToRefs(notificationsStore)

// Methods
function clickToHidePopups(e) {
  if (e.target.id !== 'mark-popup') {
    notificationsStore.hideAllPopups()
  }
}

watch(popupsVisible, (newVisibility) => {
  if(newVisibility === 1) {
    setTimeout(() => {
      document.querySelector('body').addEventListener('click', clickToHidePopups)
    }, 10)
  } else if (newVisibility === 0) {
    document.querySelector('body').removeEventListener('click', clickToHidePopups)
  }
})

</script>

<style scoped>
#container {
  width: 100%;
  padding: 2em;
  display: flex;
  gap: 0.5em;
  flex-direction: column;
  align-items: flex-start;
  border: solid 1px var(--light-grayish-blue-2);
  border-radius: 10px;
  margin-top: 2em;
}

@media only screen and (max-width: 550px) {
  #container {
    padding: 2em 0.5em 2em 0.5em;
  }
}

header {
  display: flex;
  margin-bottom: 1.75em;
  width: 100%;
  cursor: pointer;
}

#markAllRead {
  text-decoration: none;
  color: var(--dark-grayish-blue);
  font-family: var(--primary-font);
  font-size: 1.125em;
  margin-left: auto;
  margin-top: 0.25em;
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

.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
}

#expand-icon {
  margin-left: auto;
  width: 24px;
  height: 24px;
  margin-top: 7px;
}
</style>
