import { useRef, useEffect, useState } from "react"
import Header from "./Header"
import Wrapper from "./Wrapper"
import Footer from "./Footer"
import Sec1 from "./Sec1"
import Sec2 from "./Sec2"
import Sec3 from "./Shop"



function App() {
  return (
    <main>
      <Header />
      <Wrapper sec1 = {<Sec1 />} sec2 = {<Sec2 />} shop={<Sec3 />} footer={<Footer />} />
    </main>
  );
}

export default App;

