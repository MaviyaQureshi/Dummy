import RadioButtons from './RadioButtons';
import './CSS/Structure.css';
import Content from './Content';
import TBD from './TBD';

const Structure = () => {
    return (
        <body className="container">
            <span className="vessel">
                <div className="radiobuttons">
                    <RadioButtons />
                </div>
                <div className="main-content">
                    <Content />
                </div>
                <div className="tbd">
                    <TBD />
                </div>
            </span>
        </body>
    )
}

export default Structure