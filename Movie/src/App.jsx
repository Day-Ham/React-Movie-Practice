import './App.css'

function App() {
 
  return (
    <>
    <div>
      <p>
        Hello World!
      </p>
    </div>
    <Text display="Hello"/>
    <Text display=" "/>
    <Text display="Dae "/>
    <Text display="Han "/>
    </>
  )
}
function Text({display}){
  return(
    <div>
      <p>
        {display}
      </p>
    </div>
  )
}

export default App
