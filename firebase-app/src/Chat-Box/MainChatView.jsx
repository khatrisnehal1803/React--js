import { useState } from "react";
import ChatList from "./ChatList";
import ChatView from "./ChatView";

export default function MainChatView() {
  const [selectedChat, setSelectedChat] = useState(null);

  return (
    <div className="flex h-screen">
      <ChatList selectChat={setSelectedChat} />
      {selectedChat ? (
        <ChatView chatId={selectedChat} />
      ) : (
        <div className="flex-1 flex items-center justify-center">
          <h2 className="text-xl text-gray-500">Select a chat to start messaging</h2>
        </div>
      )}
    </div>
  );
}
