### Tech Stack:
- Nuxt
- Vue
- Pinia

### Overview
For this project I used Frontend Mentors notification page design but I decided 
to challenge myself by making the notifications dynamic and more interactive.

The original design only showed a `Mark all as read`, but I wanted to create a 
more comprehensive system.

The additional features I included were:
- Show an 'additional options' button on hovering over notifications
- Provide `Mark as read` and `Remove` options for each notification when this 
  additional options button is clicked
- Keep track of unread notifications and popup visibility and update DOM accordingly

These features required the use of a more comprehensive state management 
solution so I decided to use Pinia, the recommended tool for Vue projects.
