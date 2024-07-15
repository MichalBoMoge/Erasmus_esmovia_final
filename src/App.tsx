import './App.css'
import Body from './pages/Body/Body'
import Header from './common/Header/Header'
import Footer from './common/Footer/Footer'
import { MyProvider } from './app/ProviderContextComponent'
function App() {
  
  return (
    
    <MyProvider>
      <>
      <Header/>
      <Body/>
      <Footer/> 
      </>
      </MyProvider>

  )
}

export default App
