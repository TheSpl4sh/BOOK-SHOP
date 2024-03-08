import React from 'react'
import { Formik, Form, Field } from 'formik'
import '../style/form.scss'
import { formSchema } from '../features/schemas'
import { useDispatch, useSelector } from 'react-redux'
import { handleCheckout } from '../features/cartSlice'



const CheckoutForm = () => {
    const cart = useSelector(state => state.cart.cart)
    const dispatch = useDispatch()

    const dispatchedHandleCheckout = () => {
        dispatch(handleCheckout())
    }

    const initialValues = {
        name: "",
        surName: "",
        age: "",
        address: "",
        phone: "",
    }

    const customHandleSubmit = (value, actions) => {
        console.log(value)
        console.log(cart)
        dispatchedHandleCheckout()
      }

  return (
    <Formik initialValues={initialValues} validationSchema={formSchema} onSubmit={customHandleSubmit}>
        {({errors, handleSubmit}) => (
            <Form onSubmit={handleSubmit} className='cart-container__form-item' >
                <label htmlFor='name'>Name:</label>
                <Field 
                    className="cart-container__field"
                    name='name'
                    type='text'
                />
                <p>{errors.name}</p>
                <br/>

                <label htmlFor='surName'>Surname:</label>
                <Field 
                    className="cart-container__field"
                    name='surName'
                    type='text'
                />
                <p>{errors.surName}</p>
                <br/>

                <label htmlFor='age'>Age:</label>
                <Field 
                    className="cart-container__field"
                    name='age'
                    type='number'
                />
                <p>{errors.age}</p>
                <br/>

                <label htmlFor='address'>Address:</label>
                <Field 
                    className="cart-container__field"
                    name='address'
                    type='text'
                />
                <p>{errors.address}</p>
                <br/>

                <label htmlFor='phone'>Phone number:</label>
                <Field 
                    className="cart-container__field"
                    name='phone'
                    type='text'
                />
                <p>{errors.phone}</p>
                <br/>
                <br/>

                <button type='submit' className='cart-container__button-checkout'>Checkout</button>
            </Form> 
        )}
    </Formik>
  )
}

export default CheckoutForm