import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./Login/Login";
import Register from "./Register/Register";
import Homepage from "./HomePage/Homepage";
import Layout from "./Layout/Layout";
import PostCard from "./component/PostCard";
import ReelsIdeas from "./ReelsIdeas/ReelsIdeas";
import Storyideas from "./Storyideas/Storyideas";
import ReelSingleIdea from "./ReelsIdeas/ReelSingleIdea/ReelSingleIdea";
import Storysingleideas from "./Storyideas/Storysingleideas/Storysingleideas";
import Storytemplates from "./Storytemplates/Storytemplates";
import Storysingletemplates from "./Storytemplates/Storytemplatesideas/Storysingletemplates";
import Printable from "./Printable/Printable";
import Emailtextmarketing from "./EmailText Marketing/Emailtextmarkiting";
import Branding from "./Branding/Branding";
import Brandingedior from "./Branding/branding/Brandingeditor";
import Socialmedia from "./Socialmedia/Socialmedia";
import Usedcontent from "./Usedcontent/Usedcontent";
import Favorite from "./Favorite/Favorite";
import Examplecontent from "./Examplecontent/Examplecontent";
import Contentcalendar from "./ContentCalendar/Contentcalendar.js";
import Setting from "./Setting/Setting.js";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/ContentCalendar" element={<Contentcalendar />} />
        <Route path="/Reels" element={<ReelsIdeas />} />
        <Route path="/Storyideas" element={<Storyideas />} />
        <Route path="/UsedContent" element={<Usedcontent />} />
        <Route path="/Reels/:id" element={<ReelSingleIdea />} />
        <Route path="/Storyideas/:id" element={<Storysingleideas />} />
        <Route path="/storytemplates" element={<Storytemplates />} />
        <Route path="/storytemplates/:id" element={<Storysingletemplates />} />
        <Route path="/printable" element={<Printable />} />
        <Route path="/Emailtextmarketing" element={<Emailtextmarketing />} />
        <Route path="/branding" element={<Branding />} />
        <Route path="/brandingeditor" element={<Brandingedior />} />
        <Route path="/Socialmedia" element={<Socialmedia />} />
        <Route path="/Favorite" element={<Favorite />} />
        <Route path="/Contentvault" element={<Examplecontent />} />
        <Route path="/setting" element={<Setting />} />
      </Routes>
      {/* <Layout>
      </Layout> */}
    </Router>
  );
}

export default App;
