import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas, Photography } from "./components";

const App = () =>{

  return (
    <div className="App">
      <BrowserRouter>
        <div className='relative z-0 bg-black'>
        <div className= 'bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        {/* <Experience /> */}
        {/* <Tech /> */}
        <Works />
        <Photography />
        {/* <Feedbacks /> */}
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
