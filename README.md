# Simple Chat App (GitHub Pages + Firebase)

A minimal chat app with a static frontend (hosted on GitHub Pages) and a realtime backend (Firebase).

## How to Use

1. **Create a Firebase project** (https://firebase.google.com/).
2. Go to the Realtime Database section, create a database, and set rules to allow open read/write for testing:
    ```json
    {
      "rules": {
        ".read": true,
        ".write": true
      }
    }
    ```
   **(For production, use authentication and stricter rules!)**
3. Copy your Firebase config from your project settings and paste it in `app.js` (replace the placeholders).
4. Push this project to your GitHub repository.
5. Go to repository settings > Pages, and set your branch (e.g., `main`) and root folder (typically `/`) to enable GitHub Pages.
6. Open your deployed site and chat!

## Features

- Real-time messaging (any user on the same page sees new messages instantly).
- No backend server to maintain.
- Secure and scalable with Firebase.

## Note

- For production, you must use authentication and secure your database rules.
