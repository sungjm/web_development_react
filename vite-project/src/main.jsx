import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import App2 from './App2.jsx'
// import Hello4 from './hello.jsx'
// import App3 from './App3.jsx'
// import HeaderText from './App4.jsx'
import Counter from './App5.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <App2 /> */}
    {/* <Hello3 firstName="로버트" lastName="패틴슨"/> */}
    {/* <Hello4 firstName="로버트" lastName="패틴슨"/> */}
    {/* <App3 /> */}
    {/* <HeaderText text="저는 오늘 방특이 끝났습니다"/> */}
    <Counter />
  </React.StrictMode>,
)
