import classes from './range.module.scss';

const Range = props => {

    const {mounthlyStateHandler, setbailState , bailState, savingStateHandler, savingState} = props;

    const rangeHendler = rangeVal => {
        setbailState(rangeVal);
        mounthlyStateHandler(bailState / 166.6);
        if(savingState !== ""){
          savingStateHandler(100.2);
        }
    };
    
    return (
      <div className={classes.range}>
        <h2>גובה ערבות</h2>

        <p className={classes.bail}>{bailState.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} ₪</p>

        <div className={classes.rangeDiv}>
            <input type="range" min={50000} max={2000000} className={classes.rangeInput} onChange={(event) => rangeHendler(event.target.value)}/>
            <div className={classes.rangevalDiv}>
            <p className={classes.rangevalMin}>₪50,000</p>
            <p className={classes.rangeval}>₪1,000,000</p>
            <p className={classes.rangevalMax}>₪2,000,000</p>
            </div>
        </div>
      </div>
    );
  }
  
  export default Range;