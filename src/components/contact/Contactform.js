import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Select from "react-select";
import "../../App.css";
import { SPORTS } from "../../constants/registration";


const schema = yup.object().shape({
    name: yup.string().required("Please enter your name").min(3, "Must be at least 3 character"),
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

            
            <input placeholder="First name" {...register("name")} />
            {errors.name && <span>{errors.name.message}</span>}
            
            
             <input placeholder="Email"  {...register("email")} />
             {errors.email && <span>{errors.email.message}</span>}

            
             <textarea placeholder="Insert message here.."  {...register("message")} />
             {errors.message && <span>{errors.message.message}</span>}
            
             <Controller name="sports" control={control} render={({ field }) => 
             <Select isMulti options={SPORTS} {...field} />}/>
             
             <button>Send</button>

        </form>
    );
}

export default Reg;