export default function Doubledise() {
    const num1 = Math.floor(Math.random() * 3) + 1;
    const num2 = Math.floor(Math.random() * 3) + 1;
    const result = num1 === num2 ? "You win !!!":"You lose !!!";
    const styles = {color: num1 === num2 ?"green" : "red" ,
    backgroundColor: num1 === num2 ? "yellow" : "sky blue" ,
    };

   return <div style={styles}>

    <h2>{result}</h2>
    <h1>{num1}</h1>
    <h1>{num2}</h1>
   </div>
}
