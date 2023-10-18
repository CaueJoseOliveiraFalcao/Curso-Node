import LoginCard from "../src/components/loginCard/loginCard";
import styles from "../styles/login.module.css"
import Input from "../src/components/inputs/input";
import Button from "../src/components/button/button";
export default function Cadastro(){
    return(
        <div className={styles.background}>
             <LoginCard  title="Crie sua Conta">
                <form className={styles.form}>
                    <Input type='text' placeholder="seu nome"/>
                    <Input type='text' placeholder="seu email"/>
                    <Input type='password' placeholder="sua senha"/>
                    <Button>Criar</Button>
                </form>
            </LoginCard>
        </div>
    )
}