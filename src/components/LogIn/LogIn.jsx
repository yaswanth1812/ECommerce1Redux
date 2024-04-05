import React, {useState} from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Input,
    Checkbox,
    Button,
  } from "@material-tailwind/react";
  import {login} from '../../features/slices/authSlice';
  import {useDispatch} from "react-redux"
  
const LogIn = () => {
    const initialState ={
         name:"",
         password:"",
         image:"",
    };
    const [values,setValues] =useState(initialState);
    const onChange =(e) => {
        const {name, value} =e.target;
        setValues({...values,[name]:value});
    };
    const dispatch = useDispatch();
  return (
    <div>
      <Card className="grid grid-cols-1 items-center justify-items-center h-screen">
      <CardHeader
        variant="gradient"
        color="gray"
        className="mb-4 grid h-28 place-items-center"
      >
        <Typography variant="h3" color="white">
          Sign In
        </Typography>
      </CardHeader>
      <CardBody className="flex flex-col gap-4">
        <Input label="UserName"
         size="lg" 
          type="text" 
          name="name"
         value={values.name}
         onChange={onChange}
          />
        <Input label="Password"
         size="lg"
          type="password" 
          name="password" 
          value={values.password}
         onChange={onChange}
         />
        <Input label="Image URL Adress" 
        size="lg" 
        type="text"
         name="image" 
         value={values.image}
         onChange={onChange}
         />
        <div className="-ml-2.5">
          <Checkbox label="Remember Me" />
        </div>
      </CardBody>
      <CardFooter className="pt-0">
        <Button variant="gradient" fullWidth onClick={()=> dispatch(login(values))}> 
          Sign In
        </Button>
        <Typography variant="small" className="mt-6 flex justify-center">
      Image is Optional
        </Typography>
      </CardFooter>
    </Card>
    </div>
  )
}

export default LogIn