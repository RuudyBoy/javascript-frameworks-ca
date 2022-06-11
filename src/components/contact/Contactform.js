import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Select from "react-select";
import "../../App.css";
import { SPORTS } from "../../constants/SportList";


const schema = yup.object().shape({
    firstName: yup.string().required("Please enter your first name").min(3, "Must be at least 3 characters"),
    lastName: yup.string().required("Please enter your last name").min(4, "Must be at least 4 characters"),
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
            <h2>Form</h2>
            {errors.firstName && <span>{errors.firstName.message}</span>} 
            <input placeholder="First name" {...register("firstName")} />

            {errors.lastName && <span>{errors.lastName.message}</span>} 
            <input placeholder="Last name" {...register("lastName")} />
            
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