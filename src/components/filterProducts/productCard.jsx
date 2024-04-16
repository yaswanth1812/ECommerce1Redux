import React from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
} from "@material-tailwind/react";
import {  useDispatch } from 'react-redux';
import { SingleProduct } from '../../features/slices/productsSlice';
import {Link,useParams} from "react-router-dom"

const ProductCard = ({id,name,text,img,price,colors}) => {
  const dispatch = useDispatch();
  const {type} = useParams();
  return (
    <Link to={`/filteredProducts/${type}/${id}`}>
       <Card className="mt-6 sm:w-full md:w-80 lg:w-96" onClick={() => dispatch(SingleProduct(id))}>
      <CardHeader color="blue-gray" className="relative h-64 sm:h-72 md:h-80 lg:h-96">
        <img src={img} alt="img-blur" className='object-cover w-full h-full'/>
      </CardHeader>
      <CardBody className='text-center'>
        <Typography variant="h5" className="mb-2">
          {name}
        </Typography>
        <Typography>
          {text}
        </Typography>
      </CardBody>
      <CardFooter divider className="flex items-center justify-between py-3">
        <Typography variant='small'>{price}$</Typography>
        <Typography variant="small" color="gray" className='flex-gap-1'>
          <div>
{colors?.map((color,index)=>{
    return (
    <i className='fas fa-map-marker-alt fa-sm mt-[3px] p-2 rounded-full mr-4'  
    key={index}
    style={{backgroundColor:color}}
    />
    );
})}
</div>

        </Typography>
      </CardFooter>
    </Card>
    </Link>
  )
}

export default ProductCard
