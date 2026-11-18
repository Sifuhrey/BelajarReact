import PageLayout from "../components/PageLayout"
import { Form, Formik } from "formik"
import * as Yup from "yup"
import MyTextInput from "../features/form/MyTextInput"
import MySelect from "../features/form/MySelect"
import MyCheckbox from "../features/form/MyCheckbox"

function FormPage() {
    return (
        <PageLayout>
            <Formik
                initialValues={{
                    firstName: '', lastName: '', email: '', acceptTerms: false, jobType: '',
                }}
                validationSchema={Yup.object({
                    firstName: Yup.string()
                        .max(15, 'Must be 15 characters or less')
                        .required('Required'),
                    lastName: Yup.string()
                        .max(20, 'Must be 20 characters or less')
                        .required('Required'),
                    email: Yup.string()
                        .email('Invalid email address')
                        .required('Required'),
                    acceptTerms: Yup.boolean()
                        .required('Required')
                        .oneOf([true], 'You must accept the terms and conditions.'),
                    jobType: Yup.string()
                        .oneOf(
                            ['designer', 'development', 'product', 'other'],
                            'Invalid Job Type'
                        )
                        .required('Required'),
                })}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2))
                        setSubmitting(false)
                    }, 400)
                }}
            >
                <Form className="flex flex-col gap-2 min-w-1/5 ">
                    <MyTextInput
                        label="First Name"
                        name="firstName"
                        type="text"
                        placeholder="Jane"
                    />
                    <MyTextInput
                        label="Last Name"
                        name="lastName"
                        type="text"
                        placeholder="Doe"
                    />
                    <MyTextInput
                        label="Email Address"
                        name="email"
                        type="email"
                        placeholder="jane@doe.com"
                    />
                    <MySelect label="Job Type" name="jobType">
                        <option value="">Select a job type here</option>
                        <option value="designer">Designer</option>
                        <option value="development">Developer</option>
                        <option value="product">Product Manager</option>
                        <option value="other">Other</option>
                    </MySelect>
                    <MyCheckbox name="acceptTerms">  I accept the terms and conditions</MyCheckbox>
                    <button type="submit" className="bg-white  p-2 rounded hover:bg-green-500">Submit</button>
                </Form>
            </Formik>
        </PageLayout>
    )
}

export default FormPage