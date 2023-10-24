import AnimatedText from './components/AnimatedText'
import Accordion from './components/Accordion';

export default function App() {
  

  return (
    <div>
      <AnimatedText
        phrases="This is an accordion that you will no love a lot. It does a lot of things so you can consume information"
      />

      <Accordion />

      <div className='h-screen'>

      </div>

      <div className='h-screen'>
      <AnimatedText
        phrases="This has a lot of good text you can read and it's amazing. BTW check out more of our works here."
      />
      </div>
    

      
    </div>
  );
}
