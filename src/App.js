import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout/Layout";
import MyPage from "./components/Content/MyPage/MyPage";
import MainPage from "./components/Content/MainPage/MainPage";
import MyFriends from "./components/Content/MyFriends/MyFriends";
import LoginContainer from "./components/Content/LoginContainer/LoginContainer";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="page/" element={<MyPage />} />
          <Route path="page/:id" element={<MyPage />} />
          <Route path="friends/" element={<MyFriends />} />
          <Route path="login/" element={<LoginContainer />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
