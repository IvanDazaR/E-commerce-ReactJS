import Layout from "../../Components/Layout";
import Input from "../../Components/Input/Input";
import { useState } from "react";

function SignIn() {
    const [name, setName] = useState({field:'', valid: null})
    const [email, setEmail] = useState({field: '', valid: null})
    const [password, setPassword] = useState({field: '', valid: null})
    const [validForm, setValidForm] = useState(null);
    
    const regex = {
      // name: /^[a-zA-Z0-9_-]{4,16}$/, // Letras, numeros, guion y guion_bajo
      name: /^[a-zA-ZÀ-ÿ\s]{4,16}$/, // Letras y espacios, pueden llevar acentos.
      password: /^.{4,12}$/, // 4 a 12 digitos.
      email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    }

    const onSubmit = (event) => {
      event.preventDefault();
      if (
        name.valid  === 'true' &&
        email.valid  === 'true' &&
        password.valid === 'true' 
      ){
        setValidForm(true);
        setName({field: '', valid: null});
        setEmail({field: '', valid: null});
        setPassword({field: '', valid: null});
        setTimeout(() => {
          setValidForm(null);
        }, 2000);
      } else {
        setValidForm(false);
      }
    }
    return (
        <Layout>
            <h1 className='font-bold text-lg'>Sign In</h1>
            <form action="" onSubmit={onSubmit} className='w-80'>
              <Input 
                state={name}
                setState={setName}
                tipo="text"
                label="Your name"
                placeholder="Ivan Daza"
                name="name"
                legend="The name must be between 4 and 16 digits and can only contain letters and spaces."
                regex={regex.name}
              />
              <Input 
                state={email}
                setState={setEmail}
                tipo="email"
                label="Your email"
                placeholder="youremail@correo.com"
                name="email"
                legend="Mail can only contain letters, numbers, periods, hyphens, and underscores."
                regex={regex.email}
              />
              <Input 
                state={password}
                setState={setPassword}
                tipo="password"
                label="Your password"
                // placeholder="youremail@correo.com"
                name="password"
                legend="The password must be between 4 and 12 digits."
                regex={regex.password}
              />
             
              <div className='flex flex-col justify-center'>
                <button className='bg-black text-white w-full h-10 rounded'>
                  Create
                </button>
                {validForm === true ? 
                  <p className='text-green-600'>Form sent successfully!</p>
                  : validForm === false ? <p className='text-red-600'><b>Error:</b> Please fill out the form correctly</p>
                  : null
                }
              </div>
            </form>
        </Layout>
    )
  }
  
  export default SignIn