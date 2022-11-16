Tech Stack:
Nuxt
Vue
Pinia

For this project I used Frontend Mentors notification page design but I decided 
to challenge myself by making the notifications dynamic and more interactive.

The original design only showed a `Mark all as read`, but I wanted to create a 
more comprehensive system.

I decided to emulate the key parts Facebook's notification component on their 
desktop site.

The additional features I wanted to include were:
- Show the additional options button onhover, which is styled as a variation of 
  the three ellipses
- Provide `Mark as read` and `Remove` options for each notification when this 
  additional options button is clicked
- Keep track of state and update styling and the total unread notifications 
  number accordingly
- Finally, I wanted to include a form where you submit more notifications to be 
  added to simulate a backend 

These features required the use of a more comprehensive state management 
solution so I decided to use Pinia, the recommended tool for Vue projects.

I enjoyed grappling with the logic for this project, particularly categorising 
the notifications and breaking each notification message into separate parts.
