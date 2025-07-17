import SignupPage from '@/component/signuppage'

const Signuppage=async()=>{
    await new Promise((resolve) => setTimeout(resolve, 2000));
    return(
        <div>
            <SignupPage />
        </div>
    )
}

export default Signuppage;