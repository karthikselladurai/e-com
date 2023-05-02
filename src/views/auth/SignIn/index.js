import React from 'react';
import { Formik, Form } from 'formik';
import MyTextInput from '../../../components/common/MyTextInput';
import * as Yup from 'yup';
import { Navigate } from "react-router-dom";
import ApiServices from '../../../services/ApiServices'

const SignIn = () => {
    const submitHandler = (values)=>{
        console.log(">>>>>>>>>>>>>>>>>>>>>>>",values);
        ApiServices.post('user/login',values)
        .then((res)=>{
            console.log('res',res);
        })
        .catch((err)=>{
            console.log('error',err);
        })
        // Navigate('/');

    }
    return (
        <div>
            <h1>Sign In</h1>
            <Formik
                initialValues={{
                    email_id: '',
                    password: ''
                }}
                validationSchema={Yup.object({
                    email_id: Yup.string()
                        .email('Invalid email address')
                        .required('Required'),
                    password: Yup.string()
                        .min(4, 'Must be 4 characters')
                        .required('Required')
                })}
                // onSubmit={(values, { setSubmitting }) => {
                //     setTimeout(() => {
                //         alert(JSON.stringify(values));
                //         setSubmitting(false);
                //     }, 400);
                // }}
            >
                <Form onSubmit={submitHandler}>
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
export default SignIn