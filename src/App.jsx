import { useFormik,Formik,Form,Field } from "formik";
import formValidationSchema from "./ValidationSchema";

const App = () =>{ 
  const formInitialValiues = { 
    fname : " ",
    lname : " ",
    email : " ",
    password : " "
  }
  const {handleSubmit,handleChange,handleBlur,touched,values,errors} = useFormik({
    initialValues: formInitialValiues,
    onSubmit : (values,action) =>{
      console.log(values);
      action.resetForm();
    },
    validationSchema : formValidationSchema
  })
  return(
    <Formik>
    <Form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="fname">First-Name:</label>
        <Field type="text" name="fname" value={values.fname} onChange={handleChange} onBlur={handleBlur}
          style={errors.fname && touched.fname ? {border :"1px solid red"} : {border : "3px solid rgb(14, 14, 118)"} }
        />
        {errors.fname && touched.fname  ? (<span style={{color:"red"}}>{errors.fname}</span>):null}
      </div>
      <div>
        <label htmlFor="lname">Last-Name:</label>
        <Field type="text" name="lname"  value={values.lname} onChange={handleChange} onBlur={handleBlur}
         style={errors.lname && touched.lname ? {border :"1px solid red"} : {border : "3px solid rgb(14, 14, 118)"} }
        />
        {errors.lname && touched.lname  ? (<span style={{color:"red"}}>{errors.lname}</span>):null}
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <Field type="email" name="email" value={values.email} onChange={handleChange} onBlur={handleBlur}
         style={errors.email && touched.email ? {border :"2px solid red"} : {border : "3px solid rgb(14, 14, 118)"} }
        />
        {errors.email && touched.email ? (<span style={{color:"red"}}>{errors.email}</span>):null}
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <Field type="password" name="password" value={values.password} onChange={handleChange} onBlur={handleBlur}
         style={errors.password && touched.password ? {border :"1px solid red"} : {border : "3px solid rgb(14, 14, 118)"} }
        />
        {errors.password && touched.password ? (<span style={{color:"red"}}>{errors.password}</span>):null}
      </div>
      <input type="submit" value="Submit Form" />
    </Form>
    </Formik>
  )
}

export default App
