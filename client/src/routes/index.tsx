import { BrowserRouter as Browser, Route, Routes } from "react-router-dom";

import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { Homepage } from "../views/Homepage";
import { EventForm } from "../views/events/EventForm";
import { EventShow } from "../views/events/EventShow";
import { SignUp } from "../views/users/SignUp";
import { SignIn } from "../views/users/SignIn";
import { UserEvents } from "../views/events/UserEvents";

const AppRoutes = () => {
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
          <Route path={"/users/:userId/myEvents"} element={<UserEvents />} />
        </Routes>
        <Footer></Footer>
      </Browser>
    </>
  );
};
export { AppRoutes };
