import Header from "../../components/header"
import HeaderLogin from "../../components/headerLogin"
import SignupPage from "../../components/signUp"
export default function Signup({
}) {
    return (
        <div>
            <Header />
            <HeaderLogin heading="Signup to create an account"
                paragraph="Already have an account? "
                linkName="Login"
                linkUrl="/login" />
            <SignupPage />
        </div>
    )
}