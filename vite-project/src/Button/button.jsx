
import styles from './Button.module.css'
function Button(){
  const styles = {
       width: "100px",
       height: "80px",
       borderRadius: "10px",
       backgroundColor: "aqua",
       color: "aliceblue",
       cursor: "pointer",
  }  
  return(
      <button style={styles}>Click me</button>
    );
}

export default Button