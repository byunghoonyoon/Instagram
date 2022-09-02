import React, { useState, useEffect } from "react";
import About from "./routes/About";
import Home from "./routes/Home";
import Join from "./routes/Join";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Grid from "./components/Grid";
import Image from "./components/Image";
import axios from "axios";
import Login from "./components/Login";
import Head from "./components/Head";
import Profile from "./components/Profile";
import Layout from "./layouts/Layout";
import "./App.css";
import { useRecoilState } from "recoil";
import { authenticatedState } from "./recoil/auth";
// 14,15번쨰 줄 두개 추가할것. (로그인 정보를 전역으로 공유하기위함)
function App() {
  const [logined, setLogined] = useRecoilState(authenticatedState);
  const [loginToggle, setLoginToggle] = useState(false);
  const [error, setError] = useState(null);

  const onLoginToggle = () => {
    setLoginToggle(!loginToggle);
  };

  const joinMember = async (nameValue, phoneValue, IdValue, passWordValue) => {
    try {
      const data = await axios.post(`http://localhost:3002/joinMember`, {
        username: nameValue,
        phone: phoneValue,
        userid: IdValue,
        password: passWordValue,
      });
      // setUsers(data.data);
    } catch (e) {
      setError(e);
    }
  };

  const onLogin = async (idValue, passwordValue) => {
    try {
      const data = await axios.post(`http://localhost:3002/loginMember`, {
        userid: idValue,
        password: passwordValue,
      });
      // let a = 5;
      // {
      //   a = 5 ? console.log("a=5입니다") : console.log("a=5가 아닙니다.");
      // }
      // auto_increment 하는 유저 번호가 필요할까??
      setLogined(data.data.authenticated);
      onLoginToggle();
      console.log(logined);
    } catch (e) {
      setError(e);
    }
  };
  //https://velog.io/@jjhstoday/AWS-EC2%EC%97%90-React-Node.js-%EC%95%B1-%EB%B0%B0%ED%8F%AC%ED%95%98%EA%B8%B0-1-AWS-EC2-instance-%EC%83%9D%EC%84%B1
  // AWS React 연결 블로그
  return (
    <div>
      {logined ? (
        // 로그인 되었을때의 프론트 상황이어야 함.
        <Router>
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  onLoginToggle={onLoginToggle}
                  setLoginToggle={setLoginToggle}
                  loginToggle={loginToggle}
                  onLogin={onLogin}
                  logined={logined}
                  setLogined={setLogined}
                />
              }
            />
            <Route path="/about" element={<About />} />
            <Route
              path="/join"
              element={
                <Join joinMember={joinMember} onLoginToggle={onLoginToggle} />
              }
            />
          </Routes>
          {/*  로그인 된 프론트 상황 여기까지. */}
        </Router>
      ) : (
        // 로그인이 되지 않았을 때의 프론트여야함.
        <Router>
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  onLoginToggle={onLoginToggle}
                  setLoginToggle={setLoginToggle}
                  loginToggle={loginToggle}
                  onLogin={onLogin}
                  logined={logined}
                  setLogined={setLogined}
                />
              }
            />
            <Route path="/about" element={<About />} />
            <Route
              path="/join"
              element={
                <Join joinMember={joinMember} onLoginToggle={onLoginToggle} />
              }
            />
          </Routes>
          {/*  로그인 안 된 프론트 상황 여기까지. */}
        </Router>
      )}
    </div>
  );
}

export default App;

// Git 작업순서
// 1.git init (git 폴더생성. 초기화?)
// 2.git remote -v  -> https://github.com/byunghoonyoon/???  아마 다르게 나올거임.
// 3.git remote set-url origin https://github.com/byunghoonyoon/Instagram
// 위 3번으로 인해 원격저장소가 제 git으로 지정됩니다.
// 4.다시 2번 실행후, git remote set-url origin https://github.com/byunghoonyoon/Instagram 잘나오는지 확인
// 5.git config --global user.name"byunghoonyoon" -> Github Id에 Github 이름쓰세요
// 6.git config --global user.email "qudgns0218@gmail.com" -> Github 로그인하는 이메일 쓰세요
// 무시하세요 https://github.com/SBS-Instagram/Instagram
// 7-1. Windows라면 git config --global core.autocrlf true
// 7-2. Mac이라면 git config --global core.autocrlf input
// 8. git add .
// 9. git commit -m " 주석내용 "
// 10. git push origin master
// https://wiken.io/b/8222/9066 상세하게 나와있음.
// 네명이서 작업을 같이 하며 병합,다운,업로드 할때 에러가 날수도 있음.
