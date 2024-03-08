import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

export const loadProducts = createAsyncThunk(
  'products/load-all',

  async () => {
    const res = await fetch('http://localhost:3001/products');
    
    if(!res.ok) {
      throw new Error(`Can't fetch`)
    }
    
    const data = await res.json();
    return data
  }
)

const productSlice = createSlice({
    name: 'products',
    initialState: {
        products: []
      },
      extraReducers: (builder) => {
        builder
          .addCase(loadProducts.fulfilled, (state,action) => {
            state.products = action.payload 
          })
        }
})

export default productSlice.reducer