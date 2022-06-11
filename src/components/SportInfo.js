import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { BASE_URL } from "../constants/api";

function SportInfo() {
	const [sport, setSport] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	let history = useHistory();

	const { id } = useParams();

	if (!id) {
		history.push("/");
	}

	const url = BASE_URL + "/" + id;

	useEffect(
		function () {
			async function fetchData() {
				try {
					const response = await fetch(url);

					if (response.ok) {
						const json = await response.json();
						setSport(json);
					} else {
						setError("An error occured:( Try refreshing the page");
					}
				} catch (error) {
					setError(error.toString());
				} finally {
					setLoading(false);
				}
			}
			fetchData();
		},
		[url]
	);

	if (loading) {
		return <div>Waiting...</div>;
	}

	if (error) {
		return <div> We can`t access your content. Please refresh to try again. {error}</div>;
	}
	
	return (
		<div className="sport-info">
			<h1>{sport.title.rendered}</h1>
			<p dangerouslySetInnerHTML={{__html: sport.excerpt.rendered}} />
			<p>{sport.date}</p>
		</div>
	);
}

export default SportInfo;