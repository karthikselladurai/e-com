import React from 'react';
import ReactDOM from 'react-dom';
import {MyTextInput} from '../../../components/common/index'
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
// const MyCheckbox = ({ children, ...props }) => {
//     const [field, meta] = useField({ ...props, type: 'checkbox' });
//     return (
//         <div>
//             <label className="checkbox-input">
//                 <input type="checkbox" {...field} {...props} />
//                 {children}
//             </label>
//             {meta.touched && meta.error ? (
//                 <div className="error">{meta.error}</div>
//             ) : null}
//         </div>
//     );
// };

// const MySelect = ({ label, ...props }) => {
//     const [field, meta] = useField(props);
//     return (
//         <div>
//             <label htmlFor={props.id || props.name}>{label}</label>
//             <select {...field} {...props} />
//             {meta.touched && meta.error ? (
//                 <div className="error">{meta.error}</div>
//             ) : null}
//         </div>
//     );
// };
const SignUp = () => {
    return (
        <div>
            <h1>Sign Up</h1>
            <Formik
                initialValues={{
                    user_name: '',
                    mobile_number: '',
                    email_id: '',
                    password: '',
                }}
                validationSchema={Yup.object({
                    user_name: Yup.string()
                        .max(15, 'Must be 15 characters or less')
                        .required('Required'),
                    mobile_number: Yup.string()
                        .matches(/^[0-9]{10}$/, 'Invalid Mobile Number')
                        .required('Required'),
                    email_id: Yup.string()
                        .email('Invalid email address')
                        .required('Required'),
                    password: Yup.string()
                        .min(4, 'Must be 4 characters')
                        .required('Required')
                })}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values));
                        setSubmitting(false);
                    }, 400);
                }}
            >
                <Form>
                    <MyTextInput
                        label="First Name"
                        name="user_name"
                        type="text"
                        placeholder="Jane"
                    />

                    <MyTextInput
                        label="Mobile Number    "
                        name="mobile_number"
                        type="text"
                        placeholder="963852741"
                    />

                    <MyTextInput
                        label="Email Address"
                        name="email_id"
                        type="email"
                        placeholder="jane@formik.com"
                    />
                    <MyTextInput
                        label="Password"
                        name="password"
                        type="password"
                        placeholder="*****"
                    />
                    <button type="submit">Sign In</button>
                </Form>
            </Formik>
        </div>
    )         
};
export default SignUp;