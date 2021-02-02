import { Card, CardInfo, CardImg, CardTitle } from '../CardStyleComponents/CardStyleComponents';
import lock from '../padlock.png';
import '../components.css';
import Checkbox from '../Checkbox/Checkbox';
import '../Button/button.scss';
import { NavLink } from 'react-router-dom';
import { Component } from 'react';

class SignUp extends Component {

    constructor(props) {
        super(props);
        this.state = [
            { email: '', correct: false },
            { password: '', correct: false },
            { firstName: '', correct: false },
            { LastName: '', correct: false }
        ];
    }

    handleChange = ({ target }) => {
        let actualValue = target.value;
        let isValueValid;
        switch (target.name) {
            case "password": {
                isValueValid = (/(?=.*[a-z])(?=.*[A-Z])......../.test(actualValue));
                break;
            } case "email-for-sign-up": {
                isValueValid = /...+@..+\...+/.test(actualValue);
                break;
            } case "firstName": {
                isValueValid = /...+/.test(actualValue);
                break;
            } case "lastName": {
                isValueValid = /...+/.test(actualValue);
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
                            Sign up
                    </CardTitle>
                        <div className="names" >

                            <input type="text"
                                id="firstName"
                                required
                                placeholder="First Name*"
                                name="firstName"
                                value={this.state.firstName}
                                onChange={this.handleChange}
                            ></input>

                            <input type="text" id="lastName" required placeholder="Last Name*"
                                name="lastName"
                                value={this.state.lastName}
                                onChange={this.handleChange}
                            ></input>
                        </div>

                        <input type="text"
                            id="email-for-sign-up"
                            required
                            placeholder="Email Address*"
                            name="email-for-sign-up"
                            value={this.state.email}
                            onChange={this.handleChange}
                        ></input>

                        <input type="text" id="password" required placeholder="Password*"
                            name="password"
                            value={this.state.password}
                            onChange={this.handleChange}
                        ></input>

                        <Checkbox text="I want to receive inspiration, marketing, promotions and updates via email." />
                        <button className='sign-up'> SIGN UP</button>
                        <div>
                            <NavLink to={"/sign-in"}><button className='three'>Already have an account? Sign in</button></NavLink>
                        </div>
                        <p className="copyright">Copyright ©Your Website 2021</p>
                    </CardInfo>
                </Card>
            </div >
        );
    }
}

export default SignUp;