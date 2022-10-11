import { useState } from "react";
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import FormError from "../common/FormError";
import { TOKEN_PATH } from "../../constants/api";

const url = 'https://noroff-cors.herokuapp.com/' + TOKEN_PATH;

const schema =yup.object({
    Username: yup.string().required("Please enter your username"),
    Password: yup.number().required("Please enter your password"),
  }).required();

export default function LoginForm() {
    const [submitting, setSubmitting] = useState(false);
	const [loginError, setLoginError] = useState(null);
    
	const { register, handleSubmit, formState:{ errors } } = useForm({
        resolver: yupResolver(schema)
      });
    
      async function onSubmit(data) {
		setSubmitting(true);
        setLoginError(null);

		console.log(data);

		try {
			const response = await axios.post(url, data);
			console.log("response", response.data);
		} catch (error) {
			console.log("error", error);
            setLoginError(error.toString());
		} finally {
			setSubmitting(false);
		}
	}

	return (
		<>
			<form onSubmit={handleSubmit(onSubmit)}>
            {loginError && <FormError>{loginError}</FormError>}
            <fieldset disabled={submitting}>
                <div>
                    <input name="username" {...register("Username", { required: true, maxLength: 5})} />
					{errors.username && <FormError>This field is required</FormError>}
                </div>
				<div>
                    <input name="password" {...register("Password", { required: true })} />
					{errors.password && <FormError>This field is required</FormError>}
                </div>
            <button>{submitting ? "Loggin in..." : "Login"}</button>
            </fieldset>
			</form>
		</>
	);
}