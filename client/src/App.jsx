import Analytics from "./components/Analytics"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import News from "./components/News"
import Cards from "./components/cards"
import Footer from "./components/footer"



function App() {
     
  return (
   <div className=''>
      <Navbar/>
      <Hero/>
      <Analytics/>
      <News/>
      <Cards/>
      <Footer/>
   </div>
  )
}

export default App
