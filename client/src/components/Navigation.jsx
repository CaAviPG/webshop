import {Link} from 'react-router-dom'

export function Navigation() {
  return (
    <div className='flex justify-between py-3'>
        <Link to="/products">
          <div className='bg-green-400 px-3 py-2 rounded-lg'><h1 className='font-bold text-3xl mb-4'>Hipermercados Lottus</h1></div>
            
        </Link>
        <button className='bg-indigo-500 px-3 py-2 rounded-lg'>
          <Link to="/products-create">create product</Link>
        </button>
    </div>
  )
}

