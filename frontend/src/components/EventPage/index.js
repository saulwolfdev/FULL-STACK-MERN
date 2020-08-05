import React, { Fragment, useState, useMemo } from 'react';
import api from "../../services/api";
import camera from "../../assets/camera.png";
import { Container, Button, Form, FormGroup, Input, Label } from "reactstrap";
import "./EventPage.css";
const EventPage = () => {

	const user_id = localStorage.getItem("user")
	const [title, setTitle] = useState();
	const [description, setDescription] = useState();
	const [price, setPrice] = useState();
	const [sport, setSport] = useState();
	const [thumbnail, setThumbnail] = useState(null);
	const [date, setDate] = useState();


	const preview = useMemo(() => {
		return thumbnail ? URL.createObjectURL(thumbnail) : null;
	}, [thumbnail]);

	const handleSubmit = (e) => {
		e.preventDefault();
		const  user_id=localStorage.getItem("user");
		const eventData=new FormData();


		return ""
	}

	return (
		<Fragment>
			<Container>
				<h2>Create your Event</h2>
				<p>Please <strong>Login</strong> into your account</p>
				<Form onSubmit={handleSubmit}>
					<FormGroup>
						<Label>Upload Image: </Label>
						<Label id='thumbnail' style={{ backgroundImage: `url(${preview})` }} className={thumbnail ? 'has-thumbnail' : ''}>
							<Input type="file" onChange={evt => setThumbnail(evt.target.files[0])} />
							<img src={camera} style={{ maxWidth: "50px" }} alt="upload icon image" />
						</Label>
					</FormGroup>
					<FormGroup>
						<Label>Title</Label>
						<Input type="title" name="title" placeholder="Your title" onChange={(e) => setTitle(e.target.value)} />
					</FormGroup>
					<FormGroup>
						<Label>Description</Label>
						<Input type="description" name="description" placeholder="Your description" onChange={(e) => setDescription(e.target.value)} />
					</FormGroup>
					<FormGroup>
						<Label>Sport</Label>
						<Input type="sport" name="sport" placeholder="Your sport" onChange={(e) => setSport(e.target.value)} />
					</FormGroup>
					<FormGroup>
						<Label>Price</Label>
						<Input type="price" name="price" placeholder="Your Price" onChange={(e) => setPrice(e.target.value)} />
					</FormGroup>
					<FormGroup>
						<Label>Date</Label>
						<Input type="date" name="date" placeholder="Your date" onChange={(e) => setDate(e.target.value)} />
					</FormGroup>
					<Button>Submit</Button>
				</Form>
			</Container>
		</Fragment>
	);
}

export default EventPage;