import { useField } from "formik"

type MyTextInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
    label: string
    name: string
}

function MyTextInput({ label, ...props }: MyTextInputProps) {
    const [field, meta] = useField(props)
    return (
        <>
            <label htmlFor={props.id || props.name}>{label}</label>
            <input className="border bg-white rounded-md p-1 invalid:border-red-500 invalid:text-red-700 focus:text-green-700 focus:outline-green-600 " aria-label={label} aria-required="true" {...field} {...props} />
            {meta.touched && meta.error ? (
                <div className="font-bold text-red-500">{meta.error}</div>
            ) : null}
        </>
    )
}
export default MyTextInput