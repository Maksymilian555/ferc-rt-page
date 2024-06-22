import Wrapper from "../../common/Wrapper"
import LastSec from "../../features/mainPage/Sec1"
import FrontSec from "../../features/mainPage/Sec2"
import ShopSec from "../../features/mainPage/Shop"
import NewsSec from "../../features/mainPage/NewsSec"
import YtSec from "../../features/mainPage/YoutubeSec"




function MainPage() {
  return (
    <main>
      <Wrapper body = {<><FrontSec/> <NewsSec/> <YtSec/> <ShopSec/> <LastSec/></>} />
    </main>
  );
}

export default MainPage;