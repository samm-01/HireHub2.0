import Header from "../../components/header"
import LoginPage from '../../components/login'
import HeaderLogin from "../../components/headerLogin"
export default function Login({
}) {
    return (
        <div>
            <Header />
            <HeaderLogin heading="Login to your account"
                paragraph="Don't have an account yet? "
                linkName="Signup"
                linkUrl="/signup" />
            <LoginPage />
        </div>
    )
}