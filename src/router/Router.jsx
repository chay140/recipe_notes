import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import MyPage from "../pages/MyPage";
import Layout from "../layout/Layout";
import Login from "../pages/Login";
import ProtectedRoute from "./ProtectedRoute";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/mypage" element={<MyPage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
