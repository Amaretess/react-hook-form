import { FieldValues, useForm } from "react-hook-form";

interface FormData {
    name: string;
    age: number;
}

const Form = () => {

    // registers input fields using react-hook-form
    // ----------------------------> NESTED DESTRUCTURING IN JS
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

    const onSubmit = (data: FieldValues) => console.log(data)

    return (
        <form onSubmit={handleSubmit(onSubmit)} >
            <div className="mb-3">
                <label htmlFor="name" className="form-label">First name</label>
                <input
                    {...register('name', { required: true, minLength: 3 })}
                    type="text" className="form-control" placeholder="enter first name here" />
                {/* optional chaining */}
                {errors.name?.type === 'required' && <p className="text-danger" >The name field is required</p>}
                {errors.name?.type === 'minLength' && <p className="text-danger" >The name must be at least 3 characters</p>}
                <label htmlFor="age" className="form-label">Age</label>
                <input
                    {...register('age')}
                    type="number" className="form-control" />
                {errors.age?.type === 'required' && <p className="text-danger" >The age field is required</p>}

            </div>
            <button className="btn btn-primary" type="submit" >Submit</button>
        </form>
    )
}

export default Form