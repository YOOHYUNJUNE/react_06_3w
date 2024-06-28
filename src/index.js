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
import MainWrap from './components/blog/MainWrap';
import BlogMain from './components/blog/BlogMain';
import Greeting from './components/Greeting';
import MyButton from './components/MyButton';
import ToolBar from './components/ToolBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Counter from './components/Counter(Hook)';
import Toggle from './components/Toggle';
import ConfirmButton from './components/ConfirmButton';
import NameForm from './components/NameForm';
import SignUp from './components/SignUp';
import Reservation from './components/Reservation';
import Dialog from './components/Dialog';
import SignUpDialog from './components/SignUpDialog';
import Test from './components/Test';
import Container from './components/ex1(상품출력)/Container';
import WordContainer from './components/ex2(단어추가)/WordContainer';
import ProductContainer from './components/ex3/ProductContainer';
import CartContainer from './components/예제/CartContainer';


const root = ReactDOM.createRoot(document.getElementById('root'));

// user 생성
const user = {
  // 이미지 주소 복사(링크X)
  // imgUrl : 'https://res.heraldm.com/content/image/2024/03/07/20240307050575_0.jpg',
  imgUrl : '/image/son_01.jpg', // public > image >
  userName : '손흥민'
}

const onClickLogoutHandle = (event) => {
  alert('로그인 페이지로 이동합니다.')
}
const onClickLoginHandle = (event) => {
  alert('로그아웃되었습니다.')
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
    {/* <ProfileCard></ProfileCard> */}

    {/* <ToolBar isLogin={false}
      onClickLogoutHandle={onClickLoginHandle}
      onClickLoginHandle={onClickLogoutHandle}
      ></ToolBar> */}

      {/* <Greeting isLogin={false}/> */}
      {/* <MyButton/> */}

      {/* <Counter/>
      <Toggle/>
      <ConfirmButton/> */}

      {/* <BlogMain></BlogMain> */}

      {/* <NameForm/> */}
      {/* <SignUp></SignUp> */}
      {/* <Reservation></Reservation> */}
      
      {/* <Dialog></Dialog> */}
      {/* <SignUpDialog/> */}
      {/* <Test></Test> */}

      {/* <Container></Container> */}
      {/* <WordContainer></WordContainer> */}

      <ProductContainer></ProductContainer>
      {/* <CartContainer></CartContainer> */}

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
