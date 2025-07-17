import LoginPage from '@/component/loginpage'

const Loginpage=async()=>{
    await new Promise((resolve) => setTimeout(resolve, 2000));
    return(
        <div>
            <LoginPage />
        </div>
    )
}

export default Loginpage;