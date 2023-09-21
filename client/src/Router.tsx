import { Route, Routes, useLocation } from "react-router-dom";
import Main from "./pages";
import Gnb from "./components/common/gnb";
import Nav from "./components/common/nav";
import MyPage from "./pages/mypage";
import Login from "./pages/login";
import PrivateRoute from "./PrivateRoute";

type NavMatch = {
   [key: string]: JSX.Element;
};

const gnbMatch: NavMatch = {
   "/": (
      <Gnb
         left={<Gnb.Notification />}
         center={<Gnb.Logo />}
         right={<Gnb.Bag />}
      />
   ),
   "/my-page": (
      <Gnb left={<Gnb.GoBack />} center={<Gnb.Title>마이페이지</Gnb.Title>} />
   ),
   "/login": (
      <Gnb left={<Gnb.GoBack />} center={<Gnb.Title>로그인</Gnb.Title>} />
   ),
};

export default function Router() {
   const location = useLocation();
   return (
      <>
         {gnbMatch["/" + location.pathname.split("/")[1]]}
         <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/login" element={<Login />} />
            <Route
               path="/my-page"
               element={
                  <PrivateRoute>
                     <MyPage />
                  </PrivateRoute>
               }
            />
         </Routes>
         <Nav />
      </>
   );
}
