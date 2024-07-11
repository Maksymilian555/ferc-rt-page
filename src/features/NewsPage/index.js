import "./styles.css";
import { getNewsById } from "./newsSlice";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";



function NewsPage() {

    const {id} = useParams()
    const news = useSelector(state => getNewsById(state, id))
    
    return (
        <>
        
        <section id="news" className="newsPage">
           <img src={require(`./NewsImages/${news.id}-a.jpg`)} className="newsPage_image" alt="Something that happend in last few months."></img>
           <div className="newsPage_info">
                <h1 className="newsPage_name">{news.name}</h1>
                <p className="newsPage_text">{news.text}</p>
           </div>
        </section>
        </>
    );
};

export default NewsPage;