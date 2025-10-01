import { useEffect, useState } from "react";
import { db } from "../../firebase";
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";

// eslint-disable-next-line react/prop-types
export default function ChatList({ selectChat }) {
  const [chats, setChats] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "chats"), orderBy("timestamp", "desc"));
    const unsub = onSnapshot(q, (snapshot) => {
      setChats(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    });
    return unsub;
  }, []);

  return (
    <div className="w-1/4 bg-gray-100 h-screen p-3">
      <h2 className="text-xl font-bold mb-4">Chats</h2>
      {chats.map(chat => (
        <div
          key={chat.id}
          onClick={() => selectChat(chat.id)}
          className="p-3 mb-2 bg-white rounded shadow cursor-pointer hover:bg-gray-200"
        >
          <b>{chat.name}</b>
        </div>
      ))}
    </div>
  );
}
