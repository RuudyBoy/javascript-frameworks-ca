import { useState, useEffect } from "react";
import SportItem from "./Sport";
import { BASE_URL } from "../constants/api";

function SportPost() {
	const [sports, setSports] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(function () {
		async function fetchData() {
			try {
				const response = await fetch(BASE_URL);

				if (response.ok) {
					const json = await response.json();
					setSports(json);
				} else {
					setError("An error occured");
				}
			} catch (error) {
				setError(error.toString());
			} finally {
				setLoading(false);
			}
		}
		fetchData();
	}, []);

	if (loading) {
		return <div className="error-message">Waiting...</div>;
	}

	if (error) {
		return <div className="error-message"> We can`t access your content. Please refresh to try again.{error}</div>;
	}

	return (
		<div className="sports">
			{sports.map(function (sport) {
				const { id, title } = sport;
				return <SportItem key={id} id={id} title={title.rendered} />;
			})}
		</div>
	);
}

export default SportPost;