import {createSlice} from "@reduxjs/toolkit";
import { storeData } from "../../assests/data/dummyData";

export const productSlice = createSlice({
    name: "products",
    initialState:{
    FilterProducts:
     JSON.parse(sessionStorage.getItem("FilterData")) || storeData,
     SingleProduct:
      JSON.parse(sessionStorage.getItem("oneProduct")) || storeData,
      error: false,
    },
    reducers: {
        filterProducts(state, action) {
            try{
const filter = storeData.filter(
    (product)=> product.type === action.payload);
 state.FilterProducts = filter;
 state.error = false;
 const saveState =JSON.stringify(filter);
 sessionStorage.setItem("FilterData", saveState)
            }
            catch (err){
                console.error("Error filtering products:",err)
            }
        },
        setSingleProduct(state,action) {
            try{
                const oneProduct =storeData.filter(
                    (product)=> product.id === action.payload);
                    state.SingleProduct = oneProduct;
                    const saveState =JSON.stringify(oneProduct);
                    sessionStorage.setItem("oneProduct",saveState)

            }
            catch (err){
                return err
            }
        },  
        filterGender(state, action){
            try{
                const gender = state.FilterProducts.filter(
                    (product)=>product.gender === action.payload
                );
                state.error = false;
                state.FilterProducts = gender;
                const oneGenderType = gender.length >0;
                if(oneGenderType){
                    state.error = false;
                    const saveState = JSON.stringify(gender);
                    sessionStorage.setItem("filterData",saveState);
                }
                else{
                    state.error = true;
                    state.FilterProducts =[];
                }

            } catch (err){
                return err;
            }
        },
        sortByPrice(state, action){
            try{
                 const price = state.FilterProducts.sort((a,b)=>
                    a.price > b.price ? -1 : 1
                 );
                 state.FilterProducts = price;
                 let count = price.length;
                 if(count > 1){
                    const noError = false;
                    state.error = noError;
                    if(!noError){
                        state.FilterProducts = price;
                        const saveState = JSON.stringify(price);
                        sessionStorage.setItem("filterData",saveState);
                    }
                 }
                 else{
                    state.error =true;
                    state.FilterProducts =[];
                 }
            }catch(err){
                    return err;
            }
        },
        filterByColor(state, action){
            try{
                const color =state.FilterProducts.filter((product) => 
                product.color.includes(action.payload)
            );
            state.error =false;
            state.FilterProducts = color;
            if(color.length <=0){
                state.error = true;
                state.FilterProducts = color;
                const saveState = JSON.stringify(color);
                sessionStorage.setItem("filterData",saveState)

            }
            }catch(err){
                return err;
            }
        },
        filterBySize(state, action){
            try{
                const size = state.FilterProducts.filter((product)=> product.size.includes(action.payload));
                state.error = false;
                state.FilterProducts = size;
                if(size.length <= 0){
                    state.error = true;
                    state.FilterProducts =[];
                }
                else{
                    state.error = false;
                    state.FilterProducts = size;
                    const saveState = JSON.stringify(size);
                    sessionStorage.setItem("filterData",saveState)
                }
            }catch(err){
                return err
            }
        }
    },
})

export const {
    setSingleProduct,
    filterProducts,
    filterGender, 
    sortByPrice,
    filterByColor,
    filterBySize,
} = productSlice.actions;
export default productSlice.reducer;