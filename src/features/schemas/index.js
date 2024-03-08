import * as yup from "yup";

const phoneRules = /^\+[0-9]{12}$/

export const formSchema = yup.object().shape({
    name: yup.string().min(2).required("The field must not be empty"),
    surName: yup.string().min(2).required("The field must not be empty"),
    age: yup.number().positive().integer().required("The field must not be empty"),
    address: yup.string().required("The field must not be empty"),
    phone: yup.string().matches(phoneRules, { message: "Please enter a phone number in the format +380000000000" }).required("The field must not be empty"),
})