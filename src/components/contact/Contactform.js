import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Select from "react-select";
import "../../App.css";
import { SPORTS } from "../../constants/registration";


const schema = yup.object().shape({
    name: yup.string().required("Please enter your firstname").min(3, "Must be at least 3 character"),
    email: yup.string().required("Please enter an email address").email("Please enter a valid email address"),
    message: yup.string().required("Please enter your message").min(10, "The message must be at least 10 characters"),
});

function Reg() {
    const { 
        register,handleSubmit,control,
        formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    function onSubmit(data) {
        console.log(data);

    }

    console.log(errors);

    return (
      
        <form onSubmit={handleSubmit(onSubmit)}>
            <h1>Form</h1>

            
           
            {errors.name && <span>{errors.name.message}</span>} 
            <input placeholder="First name" {...register("name")} />
            
            {errors.email && <span>{errors.email.message}</span>}
            <input placeholder="Email"  {...register("email")} />
            {errors.message && <span>{errors.message.message}</span>}
            <textarea placeholder="Insert message here.."  {...register("message")} />

            <Controller name="sports" control={control} render={({ field }) => 
            <Select isMulti options={SPORTS} {...field} />}/>
             
            <button>Send</button>

        </form>
    );
}

export default Reg;