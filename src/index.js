import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ConfirmDialog from './components/ConfirmDialog';
import Clock from './components/Clock';
import Comment from './components/Comment';
import Team from './components/Team';
import Player from './components/Player';
import CommentList from './components/CommentList';
import NumberList from './components/NumberList';
import WelcomeDialog from './components/WelcomeDialog';
import ProfileCard from './components/ProfileCard';


const root = ReactDOM.createRoot(document.getElementById('root'));

// user 생성
const user = {
  // 이미지 주소 복사(링크X)
  // imgUrl : 'https://res.heraldm.com/content/image/2024/03/07/20240307050575_0.jpg',
  imgUrl : '/image/son_01.jpg', // public > image >
  userName : '손흥민'
}

root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Player playerName='손흥민' playerNumber='01'/> */}
    {/* <ConfirmDialog /> */}
    {/* <Clock /> */}
    {/* <Comment user={user} content='안녕하세요~' replydate='2024.06.25' /> */}
    {/* <Team></Team> */}
    {/* <CommentList></CommentList> */}
    {/* <NumberList></NumberList> */}

    {/* <WelcomeDialog /> */}
    <ProfileCard></ProfileCard>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
