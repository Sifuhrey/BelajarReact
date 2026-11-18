import { useField } from "formik"


type SelectProps = React.SelectHTMLAttributes<HTMLSelectElement> & {
    label: string;
    name: string;
};

function MySelect({ label, ...props }: SelectProps) {
    const [field, meta] = useField(props)
    return (
        <div>
            <label htmlFor={props.id || props.name}>{label}</label>
            <select {...field} {...props} className=" p-1 rounded bg-white mx-2 border" />
            {meta.touched && meta.error ? (
                <div className="font-bold text-red-500">{meta.error}</div>
            ) : null}
        </div>
    )
}

export default MySelect