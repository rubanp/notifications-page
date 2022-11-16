<template>
  <div id="container">
    <header>
      <h1 id="notificationTitle">Notifications</h1>
      <div id="unreadNotifications">
        <p>{{ unread }}</p>
      </div>
    </header>
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
      :popupVisbile="notification.popupVisible">
    </NotificationCard>
  </div>
</template>

<script setup>

import {storeToRefs} from 'pinia';
import { useNotificationStore } from '~~/stores/notifications';

const notificationsStore = useNotificationStore();

const { unread, allNotifications } = storeToRefs(notificationsStore)

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
