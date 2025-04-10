import './App.css'
import Hobbies from './components/Hobbies.jsx'

function App() {

  const hobbyList = [
    {name: "Fishing", ranking: 1},
    {name: "Basketball", ranking: 2},
    {name: "Dirtbiking", ranking: 3},
    {name: "Cars", ranking: 4}
  ]

  return (
   <>
    <Hobbies hobbies={hobbyList}/>
   </>
  )
}

export default App
