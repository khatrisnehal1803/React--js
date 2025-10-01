import { useEffect, useState } from "react";
import { db, auth } from "../../firebase";
import { collection, addDoc, onSnapshot, orderBy, query, serverTimestamp } from "firebase/firestore";

// eslint-disable-next-line react/prop-types
export default function ChatView({ chatId }) {
  const [messages, setMessages] = useState([]);
  const [msg, setMsg] = useState("");

  useEffect(() => {
    if (!chatId) return;
    const q = query(
      collection(db, "chats", chatId, "messages"),
      orderBy("timestamp")
    );
    const unsub = onSnapshot(q, (snapshot) => {
      setMessages(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    });
    return unsub;
  }, [chatId]);

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!msg.trim()) return;

    await addDoc(collection(db, "chats", chatId, "messages"), {
      text: msg,
      uid: auth.currentUser?.uid,
      email: auth.currentUser?.email,
      timestamp: serverTimestamp(),
    });
    setMsg("");
  };

  return (
    <div className="w-3/4 flex flex-col h-screen">
      <div className="flex-1 overflow-y-auto p-3">
        {messages.map(m => (
          <p
            key={m.id}
            className={`p-2 my-1 rounded ${
              m.uid === auth.currentUser?.uid
                ? "bg-green-200 text-right"
                : "bg-gray-200 text-left"
            }`}
          >
            <b>{m.email}</b>: {m.text}
          </p>
        ))}
      </div>
      <form onSubmit={sendMessage} className="flex p-3 border-t">
        <input
          className="flex-1 p-2 border rounded"
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
          placeholder="Type a message..."
        />
        <button className="ml-2 p-2 bg-green-500 text-white rounded">
          Send
        </button>
      </form>
    </div>
  );
}
