import styles from "../App.module.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

function Form() {
    
    const schema = yup.object().shape({
        fullName: yup.string().required("full name  is required"),
        email: yup.string().email().required(),
        age: yup.number().positive().integer().min(18).required(),
        password: yup.string().min(4).max(20).required(),
        confirmPassword: yup.string().oneOf([yup.ref("password"), null, "passwords don't match"]).required(),
        
    });
    
    const { register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data) => {
        console.log(data);
    };  

    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="your full name"
          {...register("fullName")}
        />
        <p>{errors.fullName?.message}</p>
        <input type="email" placeholder="your email" {...register("email")} />
        <p>{errors.email?.message}</p>
        <input type="number" placeholder="your age" {...register("age")} />
        <p>{errors.age?.message}</p>
        <input
          type="password"
          placeholder="password"
          {...register("password")}
        />
        <p>{errors.password?.message}</p>
        <input
          type="password"
          placeholder="confirm password"
          {...register("confirmPassword")}
        />
        <p>{errors.confirmPassword?.message}</p>
        <input type="submit" placeholder="submit" />
      </form>
    );
}

export default Form;
