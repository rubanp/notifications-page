export const useNotificationStore = defineStore('notifications', () => {

  const notifications = ref([
    {
      uuid: '1c3c4ff0-9ce7-4cd5-b110-018243020991',
      person: "Mark Webber",
      profilePhoto: "/mark-webber.jpg",
      timestamp: "1m ago",
      message: "reacted to your recent post",
      object: {
        post: "My first tournament today!"
      },
      read: false,
      popupVisible: false,
    },
    {
      uuid: '5fe320c7-89d5-4981-a5eb-7848f8451594',
      person: "Angela Gray",
      profilePhoto: "/angela-gray.jpg",
      timestamp: "5m ago",
      message: "followed you",
      object: {},
      read: false,
      popupVisible: false,
    },
    {
      uuid: '96ee142c-45a9-4515-a8eb-fde6e08d5d42',
      person: "Jacob Thompson",
      profilePhoto: "/jacob-thompson.jpg",
      timestamp: "5 days ago",
      message: "has joined your club",
      object: {
        group: "Chess Club"
      },
      read: false,
      popupVisible: false,
    },
    {
      uuid: '558f92b9-561d-4674-b3e9-5b7d9872a65a',
      person: "Rizky Hasanuddin",
      profilePhoto: "/rizky-hasanuddin.jpg",
      timestamp: "1 week ago",
      message: "sent you a private message",
      object: {
        message: "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game."
      },
      read: true,
      popupVisible: false,
    },
    {
      uuid: '33270f7c-126c-47be-b612-879757d9671b',
      person: "Nathan Peterson",
      profilePhoto: "/nathan-peterson.jpg",
      timestamp: "2 weeks ago",
      message: "reacted to your recent post",
      object: {
        post: "5 end-game strategies to increase your win rate",
      },
      read: true,
      popupVisible: false,
    },
    {
      uuid: '09d0b244-9009-475c-9f31-0e2714a849ee',
      person: "Anna Kim",
      profilePhoto: "/anna-kim.jpg",
      timestamp: "2 weeks ago",
      message: "left your group",
      object: {
        group: "Board Games Club"
      },
      read: true,
      popupVisible: false,
    }
  ])

  // Properties
  // ==========

  const allNotifications = computed(() => {
    return notifications;
  })

  // Total number of unread notifications
  const unread = computed(() => {
    return notifications.value.map((notification) => {
      return notification.read;
    }).reduce((total, current) => {
      if(current) {
        return total;
      } return total + 1
    }, 0)
  })

  // Total number of visible additional info popups. Should not exceed 1.
  const popupsVisible = computed(() => {
    return notifications.value.map((notification) => {
      return notification.popupVisible;
    }).reduce((total, current) => {
      if (!current) {
        return total;
      } return total + 1;
    }, 0)
  })

  // Mark as Read and Unread
  // =======================
  function markAsRead(uuid) {
    notifications.value = notifications.value.map((notification) => {
      if (notification.uuid === uuid) {
        notification.read = true;
      } return notification;
    })
  }

  function markAsUnread(uuid) {
    notifications.value = notifications.value.map((notification) => {
      if (notification.uuid === uuid) {
        notification.read = false;
      } return notification;
    })
  }

  function markAllAsRead() {
    notifications.value = notifications.value.map((notification) => {
      notification.read = true;
      return notification;
    })
  }

  // Hide and Show Popups
  // ====================

  function showPopup(uuid) {
    notifications.value = notifications.value.map((notification) => {
      if (notification.uuid === uuid) {
        notification.popupVisible = true;
      } return notification;
    })
  }

  function hidePopup(uuid) {
    notifications.value = notifications.value.map((notification) => {
      if (notification.uuid === uuid) {
        notification.popupVisible = false;
      } return notification;
    })
  }

  function hideAllPopups() {
    notifications.value = notifications.value.map((notification) => {
      notification.popupVisible = false;
      return notification;
    })
  }

  function showOnePopup(uuid) {
    hideAllPopups();
    showPopup(uuid);
  }

  // Remove Notifications
  // ============================

  function removeNotification(uuid) {
    const index = notifications.value.findIndex(notification => notification.uuid === uuid)
    if (index > -1) {
      notifications.value.splice(index, 1)
    } else {
      return new Error('Notification not found');
    }
  }

  return {
    allNotifications,
    unread,
    popupsVisible,
    markAsRead,
    markAsUnread,
    markAllAsRead,
    showPopup,
    hidePopup,
    hideAllPopups,
    showOnePopup, 
    removeNotification
  }

}) 
