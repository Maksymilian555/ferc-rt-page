import "./style.css";
import { getNewsById } from "../../NewsPage/newsSlice";
import { selectNews } from "../../NewsPage/newsSlice";
import { useSelector } from "react-redux";
import { toNews } from "../../../routes";
import { NavLink } from "react-router-dom";


function NewsSec() {
    const news = useSelector(selectNews)
    return(
        
    <section id="news" className="newsSec">
            <div className="newsSec_flexMrg">
                <div className="newsSec_secFlex">
                        <h1 className="newsSec_header">Wiadomości</h1>
                        <div className="newsSec_body">
                           {
                                news.map(news => (
                            (news.id < 3 ) ? 
                            <NavLink to={toNews({id: news.id})} className={(news.id == 1) ? "newsSec_mainNews": "newsSec_mediumNews"}>
                            <div >
                                <h2 className="newsSec_newsName">{news.name}</h2>
                            </div>
                            </NavLink>
                            : ""
                            ))
                            }
                            <div className="newsSec_firstBox">
                            {
                                news.map(news => (
                                (news.id >= 3 ) ? 
                            <NavLink to={toNews({id: news.id})} className={ (news.id == 3) ? "newsSec_smallNews" : (news.id == 4) ?" newsSec_smallNews newsSec_smallNews--second" : "none"}>
                            <div >
                                <h2 className="newsSec_newsName">{news.name}</h2>
                            </div>
                            </NavLink>
                            :
                            ""
                            ))
                            }
                            </div>  
                        </div>
                </div>
            </div>  
    </section>
    
    )
};

export default NewsSec;