import { Heading } from './components/Heading'
import { Text } from './components/Text'
import './styles/global.css'

export function App() {
  return (
    <div className='mx-auto flex flex-col items-center'>
      <div className='flex flex-col gap-1 items-center mt-56'>
         <img src='src/source/react.svg' className='mb-7'/>
         <Heading size='lg'>Ignite Lab</Heading>
         <Text size='sm'>Login and start using</Text>
      </div>
      
      <div>
        
      </div>
    </div>
  )
}

