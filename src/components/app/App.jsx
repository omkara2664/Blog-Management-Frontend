import { Routes, Route } from "react-router-dom";
import { Blogs } from "../blogs/Blogs";
import { AllBlogs } from "../all-blogs/AllBlog";
import { BlogEdit } from "../blogs/components/blog-edit/BlogEdit";
import { Navbar } from "../common/navbar/Navbar";
import { SignIn } from "../sign-in/SignIn";
import { SignUp } from "../sign-up/SignUp";
import { Home } from "../home/Home";
import { OnCategory } from "../all-blogs/OnCategory";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <header className="header">
        <Navbar />
      </header>
      <main className="main">
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/AllBlogs" element={<AllBlogs />} />
          <Route path="/blogs/:id" element={<BlogEdit />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/" element={<Home />} />
          < Route path="/BlogOnCata" element={<OnCategory />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
