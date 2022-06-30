import classes from './total.module.scss';

const Total = props => {

    const {mounthlyState, savingState} = props;

    return (
      <div className={classes.total}>

        <div className={classes.flexContainer}>

        <div className={classes.mounthly}>
                    <p>תשלום חודשי צפוי החל מ-</p>
                    <p className={classes.sum}>₪{mounthlyState.toLocaleString("en-US")}</p>
        </div>


        <div className={classes.saving}>
                    <p>חיסכון צפוי לתקופת השכירות</p>
                    <p className={classes.sum}>{savingState === ""? "" : "₪"}{savingState.toLocaleString("en-US")}</p>
                </div>

        </div>

      </div>
    );
  }
  
  export default Total;