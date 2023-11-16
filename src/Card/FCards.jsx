import React, {Component} from 'react'
import Cards from './CardUI';
import './FCards.css';
import sdg1 from "../assets/E_PRINT_12.jpg";
import sdg2 from "../assets/E_WEB_13.png";
import sdg3 from "../assets/E_PRINT_15.jpg";
import sdg4 from "../assets/E_PRINT_17.jpg";

class FCards extends Component{
    render() {
        return (

                <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <h2 className="sdg-title"> Sustainable Development Goals</h2>
                        <h1 className="sdg-title-2"> Making A Difference,<br/> Together.</h1>
                    </div>
                    <div className="col-md-3">
                        <Cards cardId="1" imgsrc={sdg1} title="Responsible Consumption And Production"
                        para="Ensure sustainable consumption and production patterns." />
                    </div>
                    <div className="col-md-3">
                        <Cards cardId="2" imgsrc={sdg2} title="Climate Action"
                        para="Take urgent action to combat climate change and its impacts."/>
                    </div>
                    <div className="col-md-3">
                        <Cards cardId="3" imgsrc={sdg3} title="Life on Land"
                        para="Protect, restore and promote sustainable use of terrestial ecosystems, sustainably manage forests, combat desertification, and halt and reverse land degradation and halt biodiversity loss."/>
                    </div>
                    <div className="col-md-3">
                        <Cards cardId="4" imgsrc={sdg4} title="Partnerships for the Goals"
                         para="Strengthen the means of implementation and revitalize the Global Partnership for Sustainable Development. "/>
                    </div>
                </div>
            </div>
        );
    }
}

export default FCards;