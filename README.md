# Chat Prototype:

The engineering team would like you to complete a mini project/coding task. Details below, it should be a runnable project and code we can code review (Using public GitHub repository ideally). This will give you a good sense of our technology stack and your ability to pick it up. We hope you find it a fun exercise and chance to learn something new.  If you have any questions let us know.  Thank you!

# Summary:

Create a full stack React and Golang chat prototype where a user can join the chat and the system auto responses with a welcome message. System keeps track of number of messages. No database or persistence layer is needed, the full application state can restart on new browser window or server restart. Styling for good looks is not necessary, using whatever you can get out of the box with a component library like Material UI is fine. Showing an updated style will be nice. System should use web sockets for chat messages. Any additional helper libraries in the JavaScript or Go world are fine to use.  For UI side using create-react-app bootstrapper is fine.  For state management on UI feel free to use React’s new native options around hooks and contexts, Redux, or Apollo.  If using Apollo we do use this library for backend Go GraphQL, but likely not necessary for this project.  Github readme should describe how to start the frontend and backend services and run it, Docker setup is optional, not required.

# Steps:

Page 1:
Step 1 - Welcomes user and collects one input field, email. Offers “join chat” button.
Page 2:
Step 1 - User transitioned to a chat window which shows a message with their email that they joined the chat.
Step 2 - System automatically emits a welcome message introducing our Mount Sinai helper bot.
Step 3 - User can type any number of other messages that append to the window chat room and a message counter at top increments up as each message is added live.
