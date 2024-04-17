import "./style.css";

const Wrapper = ({ footer, sec1, sec2, shop}) => (

    <div className="wrapper">
        {sec2}
        {shop}
        {sec1}
        {footer}
    </div>
);

export default Wrapper;