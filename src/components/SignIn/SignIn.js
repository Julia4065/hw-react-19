import { Card, CardInfo, CardImg, CardTitle } from '../CardStyleComponents/CardStyleComponents';
import lock from '../padlock.png';
import '../components.css';
import Checkbox from '../Checkbox/Checkbox';
import '../Button/button.scss';
import { NavLink } from 'react-router-dom';
import { Component } from 'react';
import '../Input/input.css';


class SignIn extends Component {

    constructor(props) {
        super(props);
        this.state = [
            { email: '', correct: false },
            { password: '', correct: false }
        ];
    }

    handleChange = ({ target }) => {
        let actualValue = target.value;
        let isValueValid;
        switch (target.name) {
            case "password": {
                isValueValid = (/(?=.*[a-z])(?=.*[A-Z])......../.test(actualValue));
                break;
            } case "email": {
                isValueValid = /...+@..+\...+/.test(actualValue);
                break;
            }
        }

        if (isValueValid) {
            if (!target.id.includes("green") && !target.id.includes("red")) {
                target.id = target.id + '-green';
            } else if (target.id.includes("red")) {
                target.id = target.id.replace("red", "green");
            }
            this.setState({ [target.name]: target.value, correct: true });
        } else {
            if (!target.id.includes("red") && !target.id.includes("green")) {
                target.id = target.id + '-red';
            } else if (target.id.includes("green")) {
                target.id = target.id.replace("green", "red");
            }
            this.setState({ [target.name]: target.value, correct: false });
        }
    }

    render() {
        return (
            <div>
                <Card>
                    <div className="image-background">
                        <CardImg src={lock} alt="" />
                    </div>
                    <CardInfo>
                        <CardTitle>
                            Sign in
                    </CardTitle>

                        <input type="text"
                            id="email"
                            required
                            placeholder="Email Address*"
                            name="email"
                            value={this.state.email}
                            onChange={this.handleChange}
                        ></input>

                        <input type="text" id="password" required placeholder="Password*"
                            name="password"
                            value={this.state.password}
                            onChange={this.handleChange}
                        ></input>

                        <Checkbox text="Remember me" />

                        <button className='sign-in'> SIGN IN</button>
                        <div>
                            <button className='one'>Forgot password?</button>
                            <NavLink to={"/sign-up"}><button className='two'>Don't have an account? Sign Up</button></NavLink>
                        </div>
                        <p className="copyright">Copyright ©Your Website 2021</p>
                    </CardInfo>
                </Card>
            </div >
        );
    }
}

export default SignIn;