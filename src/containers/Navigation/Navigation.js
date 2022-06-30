import classes from './Navigation.module.scss';

const Navigation = () => {
    
    
    return (
      <div className={classes.Navigation}>
          <div className={classes.nav}>
              <p><span className={classes.selected}>1</span> פרטיי העברות</p>
              <p><span>2</span> פרטיי העסק</p>
              <p><span>3</span> פרטיי השכירות</p>
          </div>
      </div>
    );
  }
  
  export default Navigation;