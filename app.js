// app.js

// 1. Your Firebase project config
const firebaseConfig = {
  apiKey: "AIzaSyACKwA0lhyma_DOenzBXzhzO73PG1c9JZM",
  authDomain: "minimal-chatapp-c5738.firebaseapp.com",
  databaseURL: "https://minimal-chatapp-c5738-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "minimal-chatapp-c5738",
  storageBucket: "minimal-chatapp-c5738.firebasestorage.app",
  messagingSenderId: "667023433854",
  appId: "1:667023433854:web:ae91c96b95978a0ea0382f",
  measurementId: "G-QTQLW9WWDR" // You can remove this if you're not explicitly using Firebase Analytics
};

// Initialize Firebase using the COMPAT method (this is the only one you need!)
firebase.initializeApp(firebaseConfig);

// If you want to use Firebase Analytics with the compat SDK, you'd add:
// firebase.analytics();
// (Requires adding <script src="https://www.gstatic.com/firebasejs/9.23.0/firebase-analytics-compat.js"></script> to your HTML)

// Get a reference to the Realtime Database service
const db = firebase.database();

const messagesDiv = document.getElementById('messages');
const messageInput = document.getElementById('messageInput');
const sendBtn = document.getElementById('sendBtn');

// Listen for new messages (This looks perfect!)
db.ref('messages').on('child_added', snapshot => {
  const msg = snapshot.val();
  const msgEl = document.createElement('div');
  msgEl.textContent = msg.text;
  messagesDiv.appendChild(msgEl);
  messagesDiv.scrollTop = messagesDiv.scrollHeight;
});

// Send message (This looks perfect!)
sendBtn.onclick = () => {
  const text = messageInput.value.trim();
  if (text) {
    db.ref('messages').push({ text });
    messageInput.value = '';
  }
};

messageInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') sendBtn.onclick();
});
