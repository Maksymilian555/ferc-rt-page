  import Wrapper from "../../features/mainPage/Wrapper"
import Footer from "../../common/Footer"
import Sec1 from "../../features/mainPage/Sec1"
import Sec2 from "../../features/mainPage/Sec2"
import Sec3 from "../../features/mainPage/Shop"



function MainPage() {
  return (
    <main>
      <Wrapper sec1 = {<Sec1 />} sec2 = {<Sec2 />} shop={<Sec3 />} footer={<Footer />} />
    </main>
  );
}

export default MainPage;