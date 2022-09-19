import logo from '../assets/logo/logo.svg'
import {useLocation,useNavigate} from 'react-router-dom';

export default function Header(){

  const location=useLocation();
  const navigate=useNavigate();
  console.log(location);

  function pathMathRouter(route){
    if(route === location.pathname){
      return true
    }
  }


  return(
    <div className=' border-b shadow-sm  sticky top-0 z-50'>
      <header className='flex justify-between items-center px-3 max-w-6xl mx-auto'>
        <div>
          <img src={logo} alt='logo' className='h-5 cursor-pointer'/>
        </div>
        <div>
          <ul className='flex space-x-10'>
            <li className={`py-3 
            text-sm 
            font-semibold 
            text-gray
            border-b-[3px] 
            border-b-transparent
              cursor-pointer
            ${pathMathRouter('/') && "text-black border-b-red-500" }
            `}
            
            onClick={()=>navigate('/')}
            >Home</li>
        
             <li className={`py-3 
            text-sm 
            font-semibold 
            text-gray
            border-b-[3px] 
            border-b-transparent
              cursor-pointer
            ${pathMathRouter('/offers') && "text-black border-b-red-500" }
            `}
                 
            onClick={()=>navigate('/offers')}
            >Offers</li>
               <li className={`py-3 
            text-sm 
            font-semibold 
            text-gray
            border-b-[3px] 
            border-b-transparent
            cursor-pointer
            ${pathMathRouter('/sign-in') && "text-black border-b-red-500" }
            `}
                 onClick={()=>navigate('/sign-in')}
            >Sign In</li>
          </ul>
        </div>
      </header>
    </div>
  )
}
