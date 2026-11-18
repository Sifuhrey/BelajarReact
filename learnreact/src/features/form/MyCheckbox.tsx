import { useField } from "formik"

type CheckboxProps = React.InputHTMLAttributes<HTMLInputElement> & {
    name: string;
    children: React.ReactNode;
};

function MyCheckbox({ children, ...props }: CheckboxProps) {
    const [field, meta] = useField({ ...props, type: 'checkbox' })
    return (
        <div>
            <label>
                <input type="checkbox" {...field} {...props} />
                {children}
            </label>
            {meta.touched && meta.error ? (
                <div className="font-bold text-red-500">{meta.error}</div>
            ) : null}
        </div>
    )
}
export default MyCheckbox