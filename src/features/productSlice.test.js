import productReducer,{ loadProducts } from "./productSlice";

global.fetch = jest.fn()

const initialState = {
    products: []
  }

describe('ProductSlice', () => {
    it('should fetch products with resolved responce', async() => {
        const mockProducts = [{
                color: 'green',
                id: 1,
                name: "Final Offer",
                price: 50,
                image_link: "./img/image-1.jpg",
            }]
            fetch.mockResolvedValue({
                ok:true,
                json: () => Promise.resolve(mockProducts)
            })

        const dispatch = jest.fn()
        const thunk = loadProducts()

        await thunk(dispatch)

        const {calls} = dispatch.mock
        expect(calls).toHaveLength(2)

        const [start, end] = calls

        expect(start[0].type).toBe('products/load-all/pending')
        expect(end[0].type).toBe('products/load-all/fulfilled')
        expect(end[0].payload).toBe(mockProducts)
    })

    it('should change status with "loadProducts.fulfilled" action', () => {
        const products = [ {
            color: 'green',
            id: 1,
            name: "Final Offer",
            price: 50,
            image_link: "./img/image-1.jpg",
        }]

        const state = productReducer(initialState, loadProducts.fulfilled(products))
        
        expect(state).toEqual({
            products
        })
    })

})