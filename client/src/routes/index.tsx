import { BrowserRouter as Browser, Route, Routes } from "react-router-dom";

import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { Homepage } from "../views/Homepage";
import { EventForm } from "../views/EventForm";
import { EventShow } from "../views/EventShow";
import { SignUp } from "../views/users/SignUp";
import { SignIn } from "../views/users/SignIn";

const AppRoutes = () => {
  const userId = "0b1efcc3-3ffe-4d5e-9da6-7da55c42856a";
  return (
    <>
      <Browser>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/events" element={<Homepage />} />
          <Route path="/events/:eventId" element={<EventShow />} />
          <Route path="events/new" element={<EventForm />} />
          <Route path="/users/register" element={<SignUp />} />
          <Route path="/users/login" element={<SignIn />} />
          <Route path={"/users/" + userId + "/myEvents"} element={<SignIn />} />
        </Routes>
        <Footer></Footer>
      </Browser>
    </>
  );
};
export { AppRoutes };
