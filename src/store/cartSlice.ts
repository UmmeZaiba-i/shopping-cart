import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface CartItem{
    id: number;
    name:string;
    price:number;
    quantity:number;
}

interface CartState{
    items: CartItem[];
}

const initialState: CartState={
    items:[],
}

const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        addItem: (state, action: PayloadAction<CartItem>)=>{
            state.items.push(action.payload);
        },
        removeItem:(state, action: PayloadAction<number>)=>{
            state.items = state.items.filter(item=> item.id!== action.payload);
        },
        updateQuantity: (state, action:PayloadAction<{id:Number; quantity:number}>)=>{
            const item = state.items.find(item => item.id ===action.payload.id);
            if(item){
                item.quantity = action.payload.quantity;
            }
        },
    }
})

export const {addItem, removeItem, updateQuantity} = cartSlice.actions;

export default cartSlice.reducer;