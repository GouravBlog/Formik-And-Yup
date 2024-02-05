import {useState} from "react"
import { useFormik,Formik,Form,Field } from "formik";
import * as yup from "yup";
import formValidationSchema from "./ValidationSchema";
// import {useFormik,Formik,Form,Field} from 'formik';
// import * as yup from "yup";
// import "./App.css"

// function App() {
//   let [inputval,setInputVal] = useState("");
//   let [dateval,setDateVal] = useState("");
//   let [data,setData] = useState([]);

// // const handleSubmit = (e) =>{
// //   e.preventDefault()
// //   setData([...data,inputval,dateval]);
// //   console.log(data.inputVal)
// // }
//   // const {handleBlur,handleChange,handleReset,handleSubmit,touched,errors,values} = useFormik({
//   //   initialValues:{
//   //     fname : "",
//   //     lname : "",
//   //     email : "",
//   //     password : ""
//   //   },
//   //   validationSchema: yup.object({
//   //     fname : yup.string()
//   //             .min(3,'minimum 3 character required')
//   //             .max(15,'maximimum 15 character required')
//   //             .required("first name is required"),
//   //     lname : yup.string()
//   //             .min(3,'minimum 3 character required')
//   //             .max(15,'maximimum 15 character required')
//   //             .required("last name is required"),
//   //     email : yup.string()
//   //             .email("please enter correct email")
//   //             .required("email is required"),
//   //     password : yup.string()
//   //             .required("password is required"),
//   //   })
//   //   ,
//   //   onSubmit:(values)=>{
//   //     console.log(values)
//   //   }
//   // })
//   return (
//     <div>
//     <>
//     {/* <form onSubmit={handleSubmit}>
//       <div>
//         <label htmlFor="">First Name :</label>
//         <input type="text" name="fname" id="fname" value={values.fname} onChange={handleChange} onBlur={handleBlur} className ={errors.fname&&touched.fname?'problem':'normal'} autocomplete="off"/>
//         {errors.fname&&touched.fname?<p>{errors.fname}</p>:null}
//       </div>
//       <div>
//         <label htmlFor="">Last Name :</label>
//         <input type="text" name="lname" id="lname" value={values.lname} onChange={handleChange} onBlur={handleBlur}
//         className ={errors.lname&&touched.lname?'problem':'normal'} autocomplete="off"/>
//         {errors.lname&&touched.lname?<p>{errors.lname}</p>:null}
//       </div>
//       <div>
//         <label htmlFor="">Email :</label>
//         <input type="email" name="email" id='email' value={values.email} onChange={handleChange} onBlur={handleBlur} className ={errors.email&&touched.email?'problem':'normal'} autocomplete="off"/>
//         {errors.email&&touched.email?<p>{errors.email}</p>:null}
//       </div>
//       <div>
//         <label htmlFor="">Password :</label>
//         <input type="password" name="password" id='password' value={values.password} onChange={handleChange} onBlur={handleBlur} className ={errors.password&&touched.password?'problem':'normal'} autocomplete="off"/>
//         {errors.password&&touched.password?<p>{errors.password}</p>:null}
//       </div>
      
//       <button className="form-button">Submit Form</button>
//       <a href="" style={{paddingTop:"10px"}}>Allready Have a Account</a>
//     </form> */}
//     </>
//     {/* <form onSubmit={(e)=>{handleSubmit(e)}}>
//       <input type="text" value={inputval} onChange={(e)=>setInputVal(e.target.value)}/>
//       <input type="date"  value={dateval} onChange={(e)=>setDateVal(e.target.value)}/>
//       <button className="form-button">Add</button>
//     </form>
//     {data.map((d,i)=>{
//       return(
//         <div key={i}>
//           <span>{d}</span>
//         </div>
        
//       )
//     })} */}
    
   
//     <form>
//       <div className="input-div">
//         <label htmlFor="name">Name:</label>
//         <input type="text" name="name"/>
//       </div>
//       <div className="input-div">
//         <label htmlFor="email">Email:</label>
//         <input type="email" name="email"/>
//       </div>
//       <div className="input-div">
//         <label htmlFor="password">Password:</label>
//         <input type="password" name="password"/>
//       </div>
//       <input type="submit" value="Submit Form" />
//     </form>
//     </div>

//   )
// }
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
