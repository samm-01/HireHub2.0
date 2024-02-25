const fixedInputClass = "rounded-md appearance-none relative lg:w-1/4 sm:w-1/3 px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-md"


import React from "react"
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import axios from "axios";

export default function Registraion() {
    const initialValues = {
        username: "",
        password: ""
    };
    const validationSchema = yup.object().shape({
        username: yup.string().min(3).max(15).required(),
        password: yup.string().min(4).max(20).required(),
    })
    const onSubmit = (data) => {
        axios.post("http://localhost:3001/auth", data).then(() => {
            console.log(data);
        })
    };
    return <div> <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema} >
        <Form className="text-center">

            {/* <label> Username: </label> */}
            <Field autocomplete="off" className={fixedInputClass} id="inputCreatePost" name="username" placeholder="Username" />
            <ErrorMessage name="username" component="span" />
            <br />
            <br />

            {/* <label> Password: </label> */}
            <Field autocomplete="off" className={fixedInputClass} id="inputCreatePost" name="password"
                type="password" placeholder="Password" />
            <ErrorMessage name="password" component="span" />

            <button type="submit" className=" shadow-md bg-slate-200 p-3 m-4 rounded-md block center mx-auto"> Submit Post</button>
        </Form>
    </Formik> </div>
}