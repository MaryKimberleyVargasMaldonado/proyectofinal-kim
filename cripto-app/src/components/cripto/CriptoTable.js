import React from "react";
import { Fragment } from "react/cjs/react.development";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifGridItem } from "./GifGridItem";
import PropTypes from "prop-types";

export const GifGrid = ({ category }) => {
	// U S E   F E T C H   G I F T S
	const { data: images, loading } = useFetchGifs(category);

	// I M A G E S
	/*
	const [images, setImages] = useState([]);


*/
	//getGifs();
	return (
		<Fragment>
			<h3 className="animate__animated animate__fadeIn">{category}</h3>
			{loading && <p className="animate__animate animate__flash">Loading...</p>}
			<div className="card-grid">
				{images.map((img) => (
					<GifGridItem key={img.id} {...img} />
				))}
			</div>
		</Fragment>
	);
};

/*
			<ol>
				{images.map((img) => (
					<li key={img.id}>{img.title}</li>
				))}
			</ol>*/

// P R O P T Y P E S
GifGrid.propTypes = {
	category: PropTypes.string.isRequired,
};
