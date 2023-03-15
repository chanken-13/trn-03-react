import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import reportWebVitals from './reportWebVitals'

/*
  サンプルコード中の各コンポーネントを表示するためには、
  表示したいコンポーネントのインポート文とrenderメソッド内のコメントを解除してください
*/
import _Sample from './components/_Sample'
import App from './App';
import Hello from './components/Hello'
import Name from './components/Name'
import Message from './components/Message'
import ContainerSample from './components/ContainerSample'
import ContextSample from './components/ContextSample'
import UseStateSample from './components/UseStateSample'
import UseReducerSample from './components/UseReducerSample'
import MemoSample1 from './components/MemoSample1'
import MemoSample2 from './components/MemoSample2'
import UseCallbackSample from './components/UseCallbackSample'
import UseMemoSample from './components/UseMemoSample'
import UseEffectSample from './components/UseEffectSample'
import UseLayoutEffectSample from './components/UseLayoutEffectSample'
import UseContextSample from './components/UseContextSample'
import UseRefSample from './components/UseRefSample'
import UseImperativeHandleSample from './components/UseImperativeHandleSample'
import UseCustomHookSample from './components/UseCustomHookSample'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)
root.render(
  <div>
    <_Sample />
    <App />
    <Hello />
    <Name />
    <Message />
    <ContainerSample />
    <ContextSample />
    <UseStateSample initialValue={0} />
    <UseReducerSample initialValue={0} />
    <UseEffectSample />
    <UseLayoutEffectSample />
    <UseContextSample />
    <UseRefSample />
    <UseImperativeHandleSample />
    <UseCustomHookSample />
  </div>

  // <MemoSample1 />
  // <MemoSample2 />
  // <UseCallbackSample />
  // <UseMemoSample />
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
