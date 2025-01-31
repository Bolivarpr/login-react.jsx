import {FaUser, FaLock} from "react-icons/fa";

import {useState} from "react";

import './Login.css'

const Login = () => {

    const [username, setUsername] = useState("");
    const [passworld, setPassworld] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        alert("Enviando os dados:" + username + " - " + passworld)
    };

  return (
    <div className='container'>
        <form onSubmit={handleSubmit}>
            <h1>Acesse o sistema</h1>
            <div className="input-field">
            <input
                type="email" 
                placeholder="E-mail"
                onChange={(e) => setUsername(e.target.value)} 
            />
            <FaUser className="icon" />
            </div>
            <div className="input-field">
            <input 
                type="passworld" 
                placeholder="Senha"
                onChange={(e) => setPassworld(e.target.value)}
             />
            <FaLock className="icon" />
            </div>

            <div className="recall-forget">
                 <label>
                    <input type="checkbox" />
                    Lembrar Senha 
                 </label>
                    <a href="#">Esqueceu a senha?</a>
            </div>
            <button>Entrar</button>

            <div className="signup-link">
                 <p>
                    Não tem uma conta? <a href="#">Registrar</a>
                </p>
            </div>

        </form>
    </div>
  )
}

export default Login