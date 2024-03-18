import Image from './components/Image'
import './App.css'
import Features from './components/Features'
import Bento from './components/Bento'

function App() {

  return (
    <div className='w-full h-full  '>
      <div className='relative h-screen grid place-items-center fade-in-text'>
        <h1 className='text-7xl font-bold '>Apple</h1>
        <div className='absolute top-0 right-[450px] blur-[100px] w-[100px] h-[150px] bg-white'>ff</div>
      </div>
      <Image/>
      <Features/>
      <Bento/>
    </div>
  )
}

export default App
