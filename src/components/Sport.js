import { Link } from "react-router-dom";

function SportItem({ id, title}) { 
	return (
		<div className="sport-list">
		<Link to={`/detail/${id}`}>
			<h2>{title}</h2>
			<p>{id}</p>
		</Link>
		</div>
	);
}


export default SportItem;
