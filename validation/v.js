const form = document.querySelector("#form")
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password =  document.querySelector("#password");
const cpassword = document.querySelector("#cpassword");

form.addEventListener('submit',(e)=>{
   
    if(!validateInputs()){
        e.preventDefault();
    }
})

function validateInputs()
{
    const usernameval = username.value.trim()
    const emailval = email.value.trim();
    const passwordval = password.value.trim();
    const cpasswordval = cpassword.value.trim();

    let success = true

 if(usernameval==='')
    {
        success = false;
    setError(username,'username is required')
   }
 else
 {
    setSuccess(username)
 }

 if(emailval==='')
    {
        success = false;
        setError(email,'email is required')
    }
    else if(!validateEmail(emailval))
    {
        setError(email,'please enter valid email')
    }
    else
    {
        setSuccess(email);
    }

    if(passwordval==='')
        {
            success = false;
           setError(password,'password is required')
        }
        else if(passwordval.length<8)
        {
            setError(password,'password must b morethan 8 values')
        }
        else
        {
            setSuccess(password)
        }

        if(cpasswordval==='')
            {
                success = false;
                setError(cpassword,'please conform your password')
            }
            else if(cpasswordval!==passwordval)
            {
               setError(cpassword,'password mismatch')   
            }
            else{
                setSuccess(cpassword)
            }
            return success;
 
}

function setError(element,message)
{
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error')

    errorElement.innerText = message;
    inputGroup.classList.add('error')
    inputGroup.classList.remove('success')

}

function setSuccess(element)
{
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error')

    errorElement.innerText = '';
    inputGroup.classList.add('success')
    inputGroup.classList.remove('error')

}
const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
