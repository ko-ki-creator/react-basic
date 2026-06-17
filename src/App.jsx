import { useEffect, useState } from 'react'
import './App.css'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { MainContent } from './components/MainContent'
import { ThemeProvider } from './components/ThemeProvider'

function App() {
  const siteTitle = 'Reactの基礎を学ぼう';
  const currentYear = new Date().getFullYear();

  // const progress = 40; // 学習の進捗率
  const [progress, setProgress] = useState(0); // 初期値を0%

  // ブラウザ上部のタイトルを変更
  useEffect (() => {
    document.title = siteTitle;
  }, []); // コンポーネントの初回描画時にのみ実行

  return (
    <ThemeProvider>
      <Header siteTitle={siteTitle} />
      <MainContent progress={progress} setProgress={setProgress} /> 
      <Footer siteTitle={siteTitle} currentYear={currentYear} />
    </ThemeProvider>
  );
}

export default App
