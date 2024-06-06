import Wrapper from "../../common/Wrapper"
import Sec1 from "../../features/mainPage/Sec1"
import Sec2 from "../../features/mainPage/Sec2"
import Sec3 from "../../features/mainPage/Shop"
import Sec4 from "../../features/mainPage/NewsSec"
import Sec5 from "../../features/mainPage/YoutubeSec"




function MainPage() {
  return (
    <main>
      <Wrapper body = {<><Sec2/> <Sec4/> <Sec5/> <Sec3/> <Sec1/></>} />
    </main>
  );
}

export default MainPage;