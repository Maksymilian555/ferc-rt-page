import "./style.css";

const Wrapper = ({ footer, sec1, sec2, sec3}) => (

    <div className="wrapper">
        {sec1}
        {sec2}
        {sec3}
        {footer}
    </div>
);

export default Wrapper;