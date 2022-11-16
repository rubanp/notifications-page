import anymatch from "anymatch";

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

  // Return all notifications
  const allNotifications = computed(() => {
    return notifications;
  })

  // Unread notifications
  const unread = computed(() => {
    return notifications.value.map((notification) => {
      return notification.read;
    }).reduce((total, current) => {
      if(current) {
        return total;
      } return total + 1
    }, 0)

    // return notifications.value.reduce((total, current) => {
    //   if(current.read) {
    //     return total;
    //   } return total + 1;
    // }, 0)
  })

  // When marking as read && helper for mark all as read
  function markAsRead(uuid) {
    notifications.value = notifications.value.map((notification) => {
      if (notification.uuid === uuid) {
        notification.read = true;
      } return notification;
    })
  }

  // When marking as unread on the popup
  function markAsUnread(uuid) {
    notifications.value = notifications.value.map((notification) => {
      if (notification.uuid === uuid) {
        notification.read = false;
      } return notification;
    })
  }

  // Helpers
  function showPopup(no) {
    notifications[no].popupVisible = true;
  }
  function hidePopup(no) {
    notifications[no].popupVisible = false;
  }

  // When clicking the mark all as read button
  function markAllAsRead() {
    notifications.forEach((notification, index) => {
      markAsRead(index);
    })
  }

  // When clicking on the body
  function hideAllPopups() {
    notifications.forEach((notification, index) => {
      hidePopup(index);
    })
  }

  // When clicking on the show popup button
  function showOnePopup(no) {
    notifications.forEach((notification, index) => {
      if(index === no) {
        showPopup(no);
      } else {
        hidePopup(index);
      }
    })
  }

  // Add notification
  function addNotification(notification) {
    notifications.push(notification);
  }

  return { allNotifications, unread, markAsRead, markAsUnread, markAllAsRead, hideAllPopups, showOnePopup, addNotification }

}) 
