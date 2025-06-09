//rafc
const name = "Mahir";
const ans=(a,b)=>a*b;
const specialclass="simple-class";
const Greet = () => {
  return (
    <div>
      <h1>hello mahir</h1>
      <p>2+2 = {2 + 2}</p>
      <p>Noob react code by {name} Siam</p>
      <p>5*5 = {ans(5,5)}</p>
      <p>my friends list {[riyad,shawon,shafayet]}</p>
      <p className="{specialclass}">this is special class dynamic</p>
    </div>
  );
}; 
export default Greet;
