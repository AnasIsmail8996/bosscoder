import BossSolution from "../BossSolution/BossSolution";
import FirstPage from "../FirstPage/FirstPage";
import Footer from "../Footer/Footer";
import OurPrograms from "../OurPrograms/OurPrograms";
import PeoplsPage from "../PeoplsPage/PeoplsPage";
import Professionals from "../Professionals/Professionals";
import Scroll from "../Scroll/Scroll";
import SuccessPage from '../SuccessPage/Success'
import Support from "../Support/Support";

const Home = () => {
  return (
    <>
    <div>

<Scroll/>
<FirstPage/>
<SuccessPage/>
<OurPrograms/>
<Professionals/>
<PeoplsPage/>
<BossSolution/>
<Support/>
<Footer/>
    </div>
    </>
  )
}

export default Home;