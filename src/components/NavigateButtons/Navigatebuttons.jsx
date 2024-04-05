import React from 'react'
import { Button } from '@material-tailwind/react'
import clothes from "../../images/clothes.jpg"
import { filterProducts } from '../../features/slices/productSlice'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'


const Navigatebuttons=()=> {
    const buttons =['Hoodies', "Dresses", "Suits", "Shoes","Tees","Jeans","Jackets","Bags"];
    const dispatch = useDispatch();
  return (
    <div>
      <div className='flex items-center py-8'>
        {buttons.map((button,index)=>{
            return (
             <div key={index} className="mr-4"> 
            <Link to={"/FilterProducts/" + button}>
            <Button
             color="gray"
              size ="lg"
               variant="outlined" 
               ripple={true}
               className="text-black hover:ng-green-300 duration-300 ease-in-out "
            onClick={()=>dispatch(filterProducts(button))}>
              {button}
            </Button>
            </Link>
                </div>
            )
        })}

      </div>
      <div className="bg-green-300 p-2 w-[55] mx-auto rounded-md">
<h3 className="text-orange-900 text-center text-lg font-inter font-bold tracking-normal leading-none"> SALES UP TO 50%</h3>
      </div>
      <div className="flex justify-center item-center  py-4">
        <img  className="h-[600px] w-[70%] rounded-md shadow-lg shadow-gray-600" src={clothes} alt="clothes"></img>
      </div>
    </div>
  )
}

export default Navigatebuttons