import Canvas from '@/canvas'
import Customizer from '@/components/Customizer'
import HomeSection from '@/components/HomeSection'


export default function Home() {
  return (
    <main className='app transition-all ease-in'>
      <HomeSection/>
      <Canvas/>
      <Customizer/>

    </main>
  )
}
