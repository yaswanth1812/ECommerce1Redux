import React from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Tooltip,
}
    from "@material-tailwind/react"
    import {Button} from "@material-tailwind/react"
import { useDispatch } from 'react-redux'
import { addToCart } from '../../features/slices/cartSlice'




const ProductsectionItem = ({id, img, name, text, size, price, color, totalPrice}) => {
    const dispatch =useDispatch();

    const defaultSize = size[0];
    const defaultColor = color[0];
  return (
    <div>
      <Card className="mt-6 w-96">
        <Typography 
        variant='h4'
        className='mb-2 absolute -rotate-45 top-12 right-8 z-10 text-red-700'>
            SALES%
        </Typography>
      <CardHeader floated={false} className='h-96'>
        <img
          src={img} alt={name} />
      </CardHeader>
      <CardBody className='text-center'>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {name}
        </Typography>
        <Typography color='gray' className='font-medium' textGradient>
          {text}
        </Typography>
        <div className='flex justify-between items-center pt-4'>
        <Typography color='blue' className='font-medium' textGradient>
          Size left:{defaultSize}
        </Typography>
        <Typography color='gray' className='font-medium' textGradient>
          Color: {" "}<span className='px-2 rounded-full ml-2' style={{backgroundColor:defaultColor}}></span>
        </Typography>
        </div>
      </CardBody>
      <CardFooter className="pt-0">
        <Tooltip content ="Add to Cart" placement="bottom">
            <Button onClick={()=> dispatch
                (addToCart({
                    id: id,
                    img: img,
                    text: text,
                    amount: 1,
                    price: price,
                    totalPrice: totalPrice,
                    name:name,
                    size:defaultSize,
                    color: defaultColor,
                }))} 
                size="lg" color="gray" variant="outlined" ripple={true}>
                Add to Cart
            </Button>
        </Tooltip>
      </CardFooter>
    </Card>
    </div>
  )
}

export default ProductsectionItem
