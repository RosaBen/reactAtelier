import Avatar from './components/Avatar'
import './App.css'



const characters = [
  {
      image: "https://fastly.picsum.photos/id/4/200/300.jpg?hmac=y6_DgDO4ccUuOHUJcEWirdjxlpPwMcEZo7fz1MpuaWg",
      firstName: "Maggie",
      lastName: "Simpson"
  },
  {
      image: "https://picsum.photos/id/237/200/300",
      firstName: "Bart",
      lastName: "Simpson"
  }
]

function App() {

  return (
    <>
<Avatar character= {characters[0]}/>
<Avatar character= {characters[1]}/>
    </>
  )
}

export default App
