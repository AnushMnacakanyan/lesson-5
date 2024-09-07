import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { string } from "prop-types";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const schema = yup
    .object()
    .shape({
        name: yup.string().required("Please enter your name"),
        age: yup.number().required("Please enter your age"),
        surname: yup.string().required("Please enter your surname"),
        email: yup.string().email().required("Please enter your email"),
        password: yup.string().min(8).required("Please enter your password"),
    })
    .required();
export const AddUser = ({ onAdd }) => {
    const notify = () => toast.success("your details have been successfull added!");
    const {
        register,
        reset,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(schema),
    })
    const save = (data) => {
        onAdd(data)
        notify()
        reset()
    }
    return <>
        <h3>AddUser</h3>
        <form onSubmit={handleSubmit(save)} >
            <input
                type="text"
                placeholder="Add your name"
                {...register("name")}
            />
            {errors.name && <p style={{ color: "red" }}>{errors.name.message}</p>}
            <input
                type="text"
                placeholder="Add your surname"
                {...register("surname")}
            />
            {errors.surname && <p style={{ color: "red" }}>{errors.surname.message}</p>}
            <input
                type="text"
                placeholder="Add your age"
                {...register("age")}
            />
            {errors.age && <p style={{ color: "red" }}>{errors.age.message}</p>}
            <input
                type="text"
                placeholder="Add your email "
                {...register("email")}
            />
            {errors.email && <p style={{ color: "red" }}>{errors.email.message}</p>}
            <input
                type="text"
                placeholder="Add your password"
                {...register("password")}
            />
            {errors.password && <p style={{ color: 'red' }}>{errors.password.message}</p>}
            <button>save</button>

        </form>
    </>
}