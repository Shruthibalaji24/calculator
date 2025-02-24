function App(){
  function A(){



    const a =["kp","shruthi","dari"];
    const b =Math.floor(Math.random(a)*3);
    return a[b]
  }
  return (
    <div>
  <div>Hello</div>
  <p>{A()}Welcome</p></div>
  );
}


export default App;
