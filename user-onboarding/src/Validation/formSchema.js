import * as yup from 'Yup';

const formSchema = yup.object().shape({
    username: yup
        .string()
        .trim()
        .required('Username required')
        .min(3, 'Must be at least 3 characters long'),
    email: yup
        .string()
        .email('Enter valid email address')
        .required('Email is required'),
    password: yup
        .string()
        .required('Password required')
        .min(6, 'Password must be at least 6 characters long'),
    tos: yup
        .boolean()
        .oneOf([true], 'Terms must be accepted')
})

export default formSchema;