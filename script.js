
function App() {
  const date = new Date()
  const hours = date.getHours() % 12
  const minutes = date.getMinutes()
  const seconds = date.getSeconds()
  return (
      <h1>It is currently about {hours}:{minutes}:{seconds} o'clock!</h1>
      
  )
}


