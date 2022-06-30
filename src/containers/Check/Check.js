import { useState } from 'react';
import Peroid from '../../components/period/period';
import Range from '../../components/range/range';
import Total from '../../components/total/total';
import classes from './Check.module.scss';

const Check = () => {
  
  const [bailState, setbailState] = useState(50000);
  const [mounthlyState, setMounthlyState] = useState((300).toLocaleString("en-US"));
  const [savingState, setSavingState] = useState('');

  const mounthlyStateHandler = num => {
    setMounthlyState(Math.floor(num).toLocaleString("en-US"));
  }

  const savingStateHandler = num => {
    setSavingState(Math.floor((100 * bailState) / num));
  }
    
    return (
      <div className={classes.Check}>

        <h1>בדיקת זכאות לערבות</h1>

        <div className={classes.range}>
        <Range mounthlyStateHandler={mounthlyStateHandler} 
        savingStateHandler={savingStateHandler } 
        bailState={bailState} 
        setbailState={setbailState}
        savingState={savingState}/>
        </div>

        <div className={classes.Peroid}>
        <Peroid savingStateHandler={savingStateHandler}/>
        </div>

        <div className={classes.Total}>
        <Total mounthlyState={mounthlyState} savingState={savingState}/>
        </div>

        <div className={classes.nextButtonDiv}>
          <button className={classes.nextButton}>המשך</button>
        </div>

      </div>
    );
  }
  
  export default Check;