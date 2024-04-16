import { Fragment, useRef, useEffect } from 'react';
import {
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Button,
} from "@material-tailwind/react";
import { Tooltip } from "@material-tailwind/react";
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from '../../features/slices/cartSlice';

const Cart = ({ openModal, setOpen }) => {
  const cart = useSelector((state) => state.cart.cart);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const dispatch = useDispatch();
  const dialogBodyRef = useRef(null);

  useEffect(() => {
    // Adjust the max height of dialog body to fit the content
    if (dialogBodyRef.current) {
      const dialogBodyHeight = dialogBodyRef.current.offsetHeight;
      const maxHeight = window.innerHeight * 0.7; // 70% of window height
      if (dialogBodyHeight > maxHeight) {
        dialogBodyRef.current.style.maxHeight = `${maxHeight}px`;
      }
    }
  }, [cart]);

  return (
    <div>
      {cart && cart.length > 0 ? (
        <Fragment>
          <Dialog
            className='border-0 outline-0'
            open={openModal}
            handler={() => setOpen(false)}
            animate={{
              mount: { scale: 1, y: 0 },
              unmount: { scale: 0.9, y: -100 },
            }}
            size='lg'
          >
            <DialogHeader>Shopping Bag</DialogHeader>
            <DialogBody
              ref={dialogBodyRef}
              divider
              className='flex flex-col justify-center items-start overflow-y-auto max-h-[70vh]'
            >
              {cart.map((item, index) => (
                <div key={index} className='py-4 sm:py-2'>
                  <div className='border-b border-gray-200'>
                    <div className='grid grid-cols-2 gap-4'>
                      <img
                        className='h-[80px] rounded-md'
                        src={item.img}
                        alt={item.name}
                      />
                      <div className='flex flex-col justify-center'>
                        <h4 className='text-black text-base font-inter tracking-normal leading-none'>
                          {item.name}
                        </h4>
                        <p className='text-black text-xs font-inter tracking-normal leading-none'>
                          {item.text}
                        </p>
                      </div>
                    </div>
                    <div className='flex flex-col gap-2'>
                      <p className='text-black text-xs font-inter tracking-normal leading-none'>
                        Selected size:{" "}
                        <span className='ml-2'> {item.size}</span>
                      </p>
                      <p className='text-black text-xs font-inter tracking-normal leading-none'>
                        Selected color:{" "}
                        <span
                          className='ml-2 rounded-full px-2'
                          style={{ backgroundColor: item.color }}
                        ></span>
                      </p>
                      {/* <p className='text-black text-xs font-inter tracking-normal leading-none'>
                        Amount: <span className='ml-2'>{item.amount}</span>
                      </p> */}
                      <p className='text-black text-xs font-inter tracking-normal leading-none'>
                        Single Item Prices:{" "}
                        <span className='ml-2'>{item.price}$</span>
                      </p>
                      <p className='text-black text-xs font-inter tracking-normal leading-none'>
                        Total Item Price:{" "}
                        <span className='ml-2'>{item.totalPrice}$</span>
                      </p>
                      <div>
                        <Tooltip
                          content="Remove from the Cart"
                          placement="bottom"
                        >
                          <Button
                            onClick={() => dispatch(removeFromCart(item))}
                            size="sm"
                            color="red"
                            ripple={true}
                            variant="filled"
                          >
                            Remove
                          </Button>
                        </Tooltip>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </DialogBody>
            <DialogFooter className='flex justify-start items-center'>
              <p className='text-black text-base font-inter tracking-normal leading-none'>
                Total price of all Products:{' '}
                <span className='ml-2'>{totalPrice}$</span>
              </p>
            </DialogFooter>
          </Dialog>
        </Fragment>
      ) : (
        <Fragment>
          <Dialog
            className='border-0 outline-0'
            open={openModal}
            handler={() => setOpen(false)}
            animate={{
              mount: { scale: 1, y: 0 },
              unmount: { scale: 0.9, y: -100 },
            }}
            size='lg'
          >
            <DialogHeader>Shopping Bag</DialogHeader>
            <DialogBody divider>
              <div>
                <h1 className='text-black text-3xl font-inter font-bold tracking-normal leading-none py-4'>
                  Your bag is empty
                </h1>
                <p className='text-black text-base font-inter tracking-normal leading-none'>
                  Add some products
                </p>
              </div>
            </DialogBody>
          </Dialog>
        </Fragment>
      )}
    </div>
  );
};

export default Cart;
