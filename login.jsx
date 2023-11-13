
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './login.css'

function App() {

  return (
    <>
      <div className='centerForm'>
        <div className='transactPro'>
        <div className='box'></div>
        <h1 style={{color: 'black'}}>Transact</h1><h1>Pro</h1>
        </div>
        <div>
        <input  type='text' placeholder='Username'/>
        </div>
        <div>
        <input type='password' placeholder='Password'/>   
        </div>
        <button className='login'>Login</button>
        <div className='linkDiv'>
        <a className='link'>forgot password?</a>
        </div>
      </div>
    </>
  )
}

export default App
