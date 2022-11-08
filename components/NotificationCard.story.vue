<template>
  <Story title="Notification Card">
    <Variant title="Follow">
      <NotificationCard person="Angela Gray" timestamp="5m ago" 
      message="followed you" image="/angela-gray.jpg" object="{}" read="false"/>
    </Variant>
    <Variant title="Post Reaction">
      <NotificationCard person="Mark Webber" timestamp="5m ago" message="reacted to your recent post" image="/mark-webber.jpg" :object="marksPost" read="true"/>
    </Variant>
    <Variant title="Group Join">
      <NotificationCard person="Jacob Thompson" timestamp="5 days ago" 
        message="has joined your group" image="/jacob-thompson.jpg" 
        :object="chessClub" read="false"/>
    </Variant>
    <Variant title="Picture Comment">
      <NotificationCard person="Kimberly Smith" timestamp="2 weeks ago" 
      message="commented on your picture" image="/kimberly-smith.jpg" 
      :object="picture" read="false"/>
    </Variant>
    <Variant title="Private Message">
      <NotificationCard person="Rizky Hasanuddin" timestamp="1 week ago" 
      message="sent your a private message" image="/rizky-hasanuddin.jpg" 
      :object="message" read="false"/>
    </Variant>
  </Story>
</template>

<script setup>
const marksPost = {
  post: "My first tournament today!",
}

const chessClub = {
  group: "Chess Club",
}

const picture = {
  picture: "/playing-chess.jpg"
}

const message = {
  message: "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game."
}
</script>
