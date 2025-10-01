import { Routes, Route } from "react-router-dom";
import SignIn from "./pages/Auth/SignIn";
import SignUp from "./pages/Auth/SignUp";
import MainChatView from "./pages/Chat-Box/MainChatView";

function App() {
  return (
    <Routes>
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/chat" element={<MainChatView />} />
    </Routes>
  );
}

export default App;
