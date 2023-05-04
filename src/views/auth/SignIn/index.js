import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Form } from 'formik';
import MyTextInput from '../../../components/common/MyTextInput';
import * as Yup from 'yup';
import { useNavigate } from "react-router-dom";
import ApiServices from '../../../services/ApiServices';
import * as ROUTES from '../../../constants/RouteConstant';
import * as URL from '../../../constants/apiConstant';
import StorageService from '../../../services/StorageService';
import {setAuthenticated} from '../../../redux/reducers/authReducer';
import { useGoogleLogin } from '@react-oauth/google';


const SignIn = () => {
    const dispatch = useDispatch();
    const [signInStatus, setSignInStatus] = useState(false);
    const [respStatus, setRespStatus] = useState(null)
    const navigate = useNavigate()
    const submitHandler = (values) => { 
        ApiServices.post(URL.SIGNIN, values)

            .then((res) => {
                if (res.data.status == 'success') {
                    dispatch(setAuthenticated(true))
                    StorageService.setToken(res.data.token);
                    StorageService.setUser(res.data.data);
                    navigate("/home", {replace:true});
                    // window.location.href = ROUTES.HOME;

                } else {
                    setRespStatus(res.data.message)
                    setSignInStatus(true)    
                }
            })
            const login = useGoogleLogin({
                onSuccess: tokenResponse => console.log(tokenResponse),
              });
    };
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
                onSubmit={submitHandler}
            >
                {({ handleSubmit }) => (
                    <Form onSubmit={handleSubmit}>
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
                        {signInStatus && <span> {respStatus}</span>}
                        <button type="submit">{!signInStatus?'Sign In':'Try Again'}</button>
                    </Form>
                )}
            </Formik>
            <button  onClick={() => login()}></button>
        </div>
    )
};

export default SignIn