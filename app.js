// 1. Replace these with your Firebase project config
const firebaseConfig = {
  apiKey: "your own key",
  authDomain: "minimal-chatapp-c5738.firebaseapp.com",
  databaseURL: "https://minimal-chatapp-c5738-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "minimal-chatapp-c5738",
  storageBucket: "minimal-chatapp-c5738.firebasestorage.app",
  messagingSenderId: "667023433854",
  appId: "1:667023433854:web:ae91c96b95978a0ea0382f",
  measurementId: "G-QTQLW9WWDR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


firebase.initializeApp(firebaseConfig);
const db = firebase.database();

const messagesDiv = document.getElementById('messages');
const messageInput = document.getElementById('messageInput');
const sendBtn = document.getElementById('sendBtn');

// Listen for new messages
db.ref('messages').on('child_added', snapshot => {
  const msg = snapshot.val();
  const msgEl = document.createElement('div');
  msgEl.textContent = msg.text;
  messagesDiv.appendChild(msgEl);
  messagesDiv.scrollTop = messagesDiv.scrollHeight;
});

// Send message
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
