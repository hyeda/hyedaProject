// App.js
import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Posts from "./pages/Posts";
import PostDetail from "./pages/PostDetail";
import PostForm from "./pages/PostForm";
import Login from "./pages/Login";
import Layout from "./shared/Layout";
import { loadDiaries, saveDiaries } from "store/localStorage";

function App() {
  const [diaries, setDiaries] = useState([]); // 일기 데이터 상태 관리

  useEffect(() => {
    const savedDiaries = loadDiaries();
    setDiaries(savedDiaries);
  }, []);

  const handleSetDiaries = (updatedDiaries) => {
    setDiaries(updatedDiaries);
    saveDiaries(updatedDiaries);
  };

  return (
    <Layout>
    <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/posts" element={<Posts diaries={diaries} />} />
        <Route path="/posts/new" element={<PostForm setDiaries={handleSetDiaries} />} />
        <Route path="/posts/edit/:postId" element={<PostForm diaries={diaries} setDiaries={handleSetDiaries} />} />
        <Route path="/posts/:postId" element={<PostDetail diaries={diaries} setDiaries={handleSetDiaries} />} />
    </Routes>
    </Layout>
  );
}

export default App;
