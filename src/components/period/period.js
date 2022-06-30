import classes from './period.module.scss';
import { useState } from 'react';


const Peroid = props => {

    const {savingStateHandler} = props;

    const [peroidsButtons] = useState({
        half:{
            text: "חצי שנה",
            saving: 94
        },
        year:{
            text: "שנה",
            saving: 95
        },
        twoYear:{
            text: "שנתיים",
            saving: 98
        },
        threeYear:{
            text: "שלוש שנים",
            saving: 100.2
        },
        fourYear:{
            text: "ארבע שנים",
            saving: 100.5
        },
        fiveYear:{
            text: "חמש שנים",
            saving: 100.8
        }
    });


    const [selectedButtonState, setSelectedButtonState] = useState('');

    const peroidButtonsHandler = (text, num) => {
        setSelectedButtonState(text);
        savingStateHandler(num);
    }

    const PeroidButtons = (
        <div className={classes.peroidsButtonsDiv}>
            {Object.entries(peroidsButtons).map((ele, index) => {
                return(
                    <button className={selectedButtonState !==ele[1].text ? classes.peroidsButton : classes.peroidselectedButton}
                     onClick={() => peroidButtonsHandler(ele[1].text, ele[1].saving)} key={index}>{ele[1].text}</button>
                )
   
            })}
        </div>
    );
    
    return (
        <div className={classes.Peroid}>
        <h2>תקופת הערבות</h2>
        {PeroidButtons}
        </div>
    );
  
    } 
  export default Peroid;