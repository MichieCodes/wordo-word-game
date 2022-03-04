import Tile from './Components/Tile'

import './App.css'

function App() {
  return (
    <div className="App">
      {Array.from(Array(5), () => <Tile/>)}
    </div>
  )
}

export default App
