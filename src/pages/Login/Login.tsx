import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import CInput from "../../common/CInput/CInput";
import "./Login.css"
import { myContext } from "../../app/ProviderContextComponent";
import {LoginMe} from "../../services/api-calls"
import { Credentials, Answer } from "../../interfaces";

const Login: React.FC = () => {

    const {user, setUser, logout}= useContext(myContext)

    const [credentials, setCredentials] = useState<Credentials>({
        name: "",
        password: "",
    });




    const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {

        setCredentials((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    }
    const navigate = useNavigate();
    const loginFunction = async (): Promise<any> => {
        const fetched: Answer = await LoginMe(credentials)
            .then(res => {
                setUser({
                      name: res.username,
                      token: res.token
                  });
                  navigate("/profile")

            })
            .catch(error => console.log(error))

    };

    return (
        <div className="login-design">
            <h1 className="display-1 text-primary">Log in</h1>
            <div className="fm w-50 flex-column justify-content-center  bg-secondary text-white rounded">
                <div className="mb-3">
                    <label form="value" className="form-label">type your login</label>
                            <CInput
                        type={"text"}
                        name={"name"}
                        design={"form-control"}
                        placeholder={"your login"}
                        onChange={inputHandler}
                    />
                <small className="form-text text-danger"></small>
                </div>

                <div className="mb-3">
                    <label form="value" className="form-label">type your password</label>
                            <CInput
                        type={"password"}
                        name={"password"}
                        design={"form-control"}
                        placeholder={"your password"}
                        onChange={inputHandler}
                    />
                <small className="form-text text-danger"></small>
                </div>

                {credentials.name !== "" &&
                    credentials.password !== "" && (
                        <button className="btn btn-primary" onClick={loginFunction}>Submit</button>

                    )}
                
            </div>

        </div>
    )



}

export default Login