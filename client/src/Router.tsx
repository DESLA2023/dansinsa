import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages";
import Gnb from "./components/common/gnb";
import Nav from "./components/common/nav";

export default function Router() {
   return (
      <BrowserRouter>
         <Gnb />
         <Routes>
            <Route path="/" element={<Main />} />
         </Routes>
         <Nav />
      </BrowserRouter>
   );
}
