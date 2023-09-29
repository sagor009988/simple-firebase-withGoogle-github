import { getAuth, signInWithPopup, signOut } from "firebase/auth";
import app from "../../firebase/firebase.init";
import { GoogleAuthProvider } from "firebase/auth";
import { useState } from "react";
import { setItem } from "localforage";
import { GithubAuthProvider } from "firebase/auth";


const Login = () => {
    const [value,setvalue]=useState(null)
    const auth=getAuth(app)
   
    const provider = new GoogleAuthProvider();
    const githubAuthProvider=new GithubAuthProvider();
    
   const handleGoogleLogin=()=>{
    signInWithPopup(auth,provider)
    .then(result=>{
        const user=result.user
        setvalue(user);
    })
    .catch(error=>{
        console.log('hello',error.code);
    })

   }
   const handleLogOut =()=>{
    signOut(auth)
    .then(result=>{
        setvalue(null)
    })
    .catch(error=>{
        console.log('logout error',error.code);
    })
   }

   const handleGitLogin=()=>{
    signInWithPopup(auth,githubAuthProvider)
    .then(result=>{
        const user=result.user
        console.log(user);
        setvalue(user)
    })
    .catch(error=>{
        console.log(error);
    })
   }

    return (
       <div>{ value?
        
        
        <button onClick={handleLogOut}>Log Out</button>:
        <div>
             <button onClick={handleGoogleLogin}>GOOGLE LOGIN</button>
             <button onClick={handleGitLogin}>GItHUB Login</button>
        </div>
       }
       {
        value && <div>
            <h2>user:{value?.displayName}</h2>
            <h2>email:{value.email}</h2>
            <img src={value.photoURL} alt="" />
        </div>
        
       }
       </div>
    );
};

export default Login;