import Header from "./Header"
import Wrapper from "./Wrapper"
import Footer from "./Footer"

function App() {
  return (
    <main>
      <Header />
      <Wrapper footer={<Footer />} />
    </main>
  );
}

export default App;

