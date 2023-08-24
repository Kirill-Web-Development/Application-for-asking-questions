# Application for asking questions

In this application, you can ask a question that will get into the database and be saved in localStorage. The authentication functionality is also provided, you can enter the desired login / password and get access to all questions.

## Technologies I have worked with.

- HTML
- [Bootstrap 5](https://getbootstrap.com/)
- Native JS:
    - asynchronous functions
    - fetch API (GET, POST)
- [Firebase](https://firebase.google.com/index.html):
    - realtime database for all questions
    - auth REST API (Sign in with email / password)

## Email / password for authentication

To get all the questions ever asked, enter the following data:
- Email: pxeyswes@firstmail.site
- Password: 123456 

## Database rules: 

{
  "rules": {
    ".read": "auth != null",  // 2023-9-12
    ".write": "now < 1694466000000",  // 2023-9-12
  }
}