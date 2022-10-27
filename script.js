//const add = (
    
  //<div>
    //<img src=" https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" alt="" width="80px"></img>
    //<h1>Hello i am React!</h1>
  //</div>
//)
//ReactDOM.render(add,document.querySelector("body"))
function App() {
  const date = new Date()
  const hours = date.getHours() % 12
  const minutes = date.getMinutes()
 
  return (
      <h1>It is currently about {hours}:{minutes}  o'clock!</h1>
      
  )
}

ReactDOM.render(<App />, document.getElementById("root"))