import { Link } from "react-router-dom";

function SportItem({ id, title}) { 
	return (
		<div className="call">
		<Link to={`/detail/${id}`}>
			<h2>{title}</h2>
			<p>{id}</p>
		</Link>
		</div>
	);
}


export default SportItem;
