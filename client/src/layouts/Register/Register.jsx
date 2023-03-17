import { useState } from "react";
import {Form, Formik} from "formik";
import { createregisterrequest, getuserexist } from "../../api/register.api";
export default function Register(params) {


    return <section className="w-full h-screen mt-4">

        <div className="w-1/2 h-1/2 rounded-xl mx-auto relative align-middle bg-violet-500 text-white">
            <div className="text-center pt-2 w-full rounded-md bg-violet-400">
                <h1 className="inline text-4xl font-semibold text-violet-600"> F<span className=" text-rose-600 ">akeG</span><span className=" text-violet-600">ram</span></h1>
            </div>
            <h2 className="text-center font-bold text-gray-200 text-2xl">Register</h2>
        


<Formik

initialValues={{
    username: "",
    email: "",
    pass: "",
    confirmpassword:""
}}
onSubmit={async(values, actions) => {
    console.log(values);  
    try{  
    const data = await getuserexist(values);
    try{
 const data = await createregisterrequest(values);
 console.log(data);
 actions.resetForm();
    } catch(error){
console.log(error);  
  }

}catch(error){
    console.log(error);
}

}} 
>

    {({handleChange, handleSubmit, values}) => (
               <Form className="w-full  relative" 
               onSubmit={handleSubmit}
               >

                   <div className="flex my-4">

                       <div className="mx-auto w-full block relative text-center my-2 ">
                           <label htmlFor="username" className="block mx-auto my-1 text-lg font-semibold text-white">Username</label>
                           <input 
                           type="text" name="username" id="username" className="block mx-auto pl-2 h-9 w-3/4 rounded-lg bg-violet-900 text-violet-200 outline-2  outline  outline-gray-600 hover:outline-gray-400 font-black text-lg font-serif  " 
                           
                           autoComplete="off" onChange={handleChange} value={values.username} />

                       </div>


                       <div className="mx-auto w-full block relative text-center my-2">
                           <label htmlFor="mail" className="text text-lg font-semibold text-white">Mail</label>
                           <input type="email" name="email" id="mail" className="block mx-auto pl-2 h-9 w-3/4 rounded-lg bg-violet-900 text-violet-200 outline-2  outline  outline-gray-600 hover:outline-gray-400 font-black text-lg font-serif  " autoComplete="off" onChange={handleChange} value={values.email} />

                       </div>

                   </div>
                   <div className="flex mb-8 mt-4">
                       <div className="mx-auto w-full block relative text-center my-2">
                           <label htmlFor="pswrd" className=" text-lg font-semibold">Password</label>
                           <input type="password" name="pass" id="pswrd" className="block mx-auto pl-2 h-9 w-3/4 rounded-lg bg-violet-900 text-violet-200 outline-2  outline  outline-gray-600 hover:outline-gray-400 " onChange={handleChange} value={values.password} />
                       </div>
                       <div className="mx-auto w-full block relative text-center my-2">
                           <label htmlFor="pswrd" className=" text-lg font-semibold">Confirm password</label>
                           <input type="password"  id="pswrd" name="confirmpassword" className="block mx-auto pl-2 h-9 w-3/4 rounded-lg bg-violet-900 text-violet-200 outline-2  outline  outline-gray-600 hover:outline-gray-400 " onChange={handleChange} value={values.confirmpassword}/>
                       </div>
                   </div>

                   <input type="submit" value="Send" className="block mx-auto h-12 w-3/4 rounded-lg cursor-pointer bg-violet-800 hover:bg-violet-600  focus:bg-violet-700 border-2 border-b-0  focus:border-t-0 focus:border-b-2"/>

               </Form>
    )}
 
                </Formik>
     
    
    


            </div>
        
    </section>


};





