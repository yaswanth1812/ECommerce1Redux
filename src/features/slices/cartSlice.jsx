
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cart: [],
        amount: 0,
        totalAmount: 0,
        totalPrice: 0,

    },
    reducers: {
        addToCart(state, action) {
            const productId = action.payload;
            try {
                const exist = state.cart.find(
                    (product) =>
                        product.id === productId &&
                        product.size === productId.size &&
                        product.color === productId.color
                );
                if (exist) {
                    exist.amount++;
                    exist.totalPrice += productId.price;
                    state.totalAmount++;
                    state.totalPrice += productId.price;
                }
                else {
                    state.cart.push({
                        id: productId.id,
                        price: productId.price,
                        size: productId.size,
                        amount: 1,
                        img: productId.img,
                        totalPrice: productId.price,
                        name: productId.name,
                        text: productId.text,
                        color: productId.color,
                    });
                    state.totalAmount++;
                    state.totalPrice += productId.price
                }
            } catch (err) {
                return err;
            }
        },
        // removeFromCart(state, action) {
        //     const productId = action.payload;
        //     console.log(action.payload, "payload cart", productId)
        //     try {
        //         // const exist = state.cart.findIndex(
        //         //     (product) =>
        //         //         product.id === productId &&
        //         //         product.size === productId.size &&
        //         //         product.color === productId.color
        //         // );
        //         let exist = state.cart
        //         exist = state.cart.filter((cartitem) => cartitem.id !== productId.id)

        //         { { console.log(exist, "exist") } }
        //         if (exist.amount === 1) {
        //             state.cart = state.cart.filter((product) =>
        //                 product.id !== productId.id ||
        //                 product.size !== productId.size ||
        //                 product.color !== productId.color

        //             );
        //             state.totalAmount--;
        //             state.totalPrice -= productId.price;
        //         }
        //         else {
        //             exist.amount--;
        //             exist.totalPrice -= productId.price;
        //             state.totalAmount--;
        //             state.totalPrice -= productId.price;

        //         }
        //     }
        //     catch (err) {
        //         return err;
        //     }
        // }
        removeFromCart(state, action) {
            const productId = action.payload;
            try {
                // Filter out the product to remove
                state.cart = state.cart.filter((product) =>
                    product.id !== productId.id ||
                    product.size !== productId.size ||
                    product.color !== productId.color
                );
        
                // Update total amount and total price
                state.totalAmount--;
                state.totalPrice -= productId.price;
            } catch (err) {
                return err;
            }
        }

    },
});

export const { addToCart, removeFromCart,updateCartItem } = cartSlice.actions;
export default cartSlice.reducer;