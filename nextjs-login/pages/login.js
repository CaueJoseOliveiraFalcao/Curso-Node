import LoginCard from "../src/components/loginCard/loginCard"
import styles from "../styles/login.module.css"
import Input from "../src/components/inputs/input"
import Button from "../src/components/button/button"
Button
export default function LoginPage(){
    return(
        <div className={styles.background}>
            <LoginCard  title="Entre em sua Conta">
                <form className={styles.form}>
                    <Input type='text' placeholder="seu email"/>
                    <Input type='password' placeholder="sua senha"/>
                    <Button>Entrar</Button>
                </form>
            </LoginCard>
        </div>
    )
}