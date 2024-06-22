import "./style.css"
import Header from "../Header";
import Footer from "../Footer";

const Wrapper = ({ body}) => (

    <div className="wrapper">
        <Header/>
        {body}
        <Footer/>
    </div> 
);

export default Wrapper;