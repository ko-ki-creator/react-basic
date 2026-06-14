import './App.css'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { MainContent } from './components/MainContent'

function App() {
  const siteTitle = 'Reactの基礎を学ぼう';
  const currentYear = new Date().getFullYear();

  const progress = 40; // 学習の進捗率

  return (
    <>
      <Header siteTitle={siteTitle} />
      <MainContent progress={progress} /> 
      <Footer siteTitle={siteTitle} currentYear={currentYear} />
    </>
  );
}

export default App
