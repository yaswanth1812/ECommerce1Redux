import React, {useState} from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Input,
    Button,
  } from "@material-tailwind/react";
  import {login} from '../../features/slices/authSlice';
  import {useDispatch} from "react-redux";
  // import {useHistory} from "react-router-dom"

  
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
    // const history = useHistory();
      const handleSignIn = ()=>{
       
  
        const {name,password,image} = values;

        const specialChar =  /[!@#$%^&*(),.?":{}|<>]/;
        const capital = /[A-z]/;
        const  numberReg = /[0-9]/;

        if(!specialChar.test(password) || !capital.test(password) || ! numberReg.test(password)){
          alert("Password must contain at least one special character, one capital letter, and one number")
          return; 
        }
        dispatch(login(values));
      }
  return (
    <div className="grid grid-cols-1 items-center justify-items-center h-screen" style={{backgroundImage:'url(https://wallpaperbat.com/img/759579-cybersecurity-wallpaper.png)'}}>
      <Card className="w-96">
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
        <Input label="Image URL Address" 
        size="lg" 
        type="text"
         name="image" 
         value={values.image}
         onChange={onChange}
         />
         <div className='-ml-2.5'></div>
      </CardBody>
      <CardFooter className="pt-0">
        <Button 
        variant="gradient" 
        fullWidth
         onClick={handleSignIn}> 
          Sign In
        </Button>
        <Typography variant="small" className="mt-6 flex justify-center">
      Image is Optional
        </Typography>
      </CardFooter>
      {/* <CardFooter className='pt-1'>
          <Button
            variant='gradient'
            fullWidth
            onClick={handleSkip}>
            Skip
          </Button>
        </CardFooter> */}

    </Card>
    </div>
  )
}

export default LogIn
