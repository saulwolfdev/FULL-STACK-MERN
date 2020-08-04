import React, { Fragment, useState } from 'react';
import api from "../../services/api";
import { Container, Button, Form, FormGroup, Input } from "reactstrap";
const Register = ({ history }) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();
		console.log("result Register ok", email, password);

		const response = await api.post("/user/register/", { email, password, firstName, lastName });
		console.log(response)
		const userId = response.data._id || false;
		if (userId) {
			localStorage.setItem("user", userId)
			history.push("/dashboard");
		}
		else {
			const { message } = response.data
			console.log(message);

		}
	}
	return (
		<Fragment>
			<Container>
				<h2>Register:</h2>
				<p>Please <strong>Register</strong> into your account</p>
				<Form onSubmit={handleSubmit}>
					<FormGroup className="mb-2 mr-sm-2 mb-sm-0">
						<Input type="text" name="firstname" id="firstname" placeholder="Your firstname" onChange={(e) => setFirstName(e.target.value)} />
					</FormGroup>
					<FormGroup className="mb-2 mr-sm-2 mb-sm-0">
						<Input type="text" name="lastname" id="lastname" placeholder="Your lastname" onChange={(e) => setLastName(e.target.value)} />
					</FormGroup>
					<FormGroup className="mb-2 mr-sm-2 mb-sm-0">
						<Input type="email" name="email" id="email" placeholder="Your email" onChange={(e) => setEmail(e.target.value)} />
					</FormGroup>
					<FormGroup className="mb-2 mr-sm-2 mb-sm-0">
						<Input type="password" name="password" id="password" placeholder="Your password" onChange={(e) => setPassword(e.target.value)} />
					</FormGroup>
					<Button>Submit</Button>
				</Form>
			</Container>
		</Fragment>
	);
}

export default Register;