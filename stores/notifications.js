export const useNotificationStore = defineStore('notifications', () => {
  const notifications = ref([
    {
      id: 0,
      read: false,
      popupVisible: false
    }
  ]);

  const allNotifications = computed(() => {
    return notifications;
  })

  // When marking as read && helper for mark all as read
  function markAsRead(no) {
    notifications[no].read = true;
  }

  // When marking as unread on the popup
  function markAsUnread(no) {
    notifications[no].read = false;
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

  // Remove notification
  function addNotification(notification) {
    notifications.push(notification);
  }

  return { notifications }
}) 
