import classes from './nav.module.scss';
import logo from "../../assets/logo.png";

const Nav = () => {
   
   
    return (
    <div className={classes.nav}>
      <img src={logo} alt="logo"/>
      <p className={classes.phoneNumber}>תמיכה: 03-5451500</p>
      <hr />
     </div>
    );
}

export default Nav;