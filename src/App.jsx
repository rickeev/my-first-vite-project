import './App.css'
import Count from './Count'

function App() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
    }}>      
    <Count></Count>
    <button>+</button>
    </div>
  )
}

export default App
