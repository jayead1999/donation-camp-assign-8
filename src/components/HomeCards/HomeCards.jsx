// import React from "react";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
// import { useLoaderData, useParams } from 'react-router-dom';
// import Swal from 'sweetalert2';
// import { saveDonationItem } from '../../utility/localStorage';

const HomeCards = ({ item }) => {
	const { id, title, category, thumbnail, category_bg, card_bg, text_color } =item;
	return (
		<Link to={`/details/${id}`}>
			<img src={thumbnail} alt={title} className="w-full" />
			<div className="p-3 rounded-lg" style={{ backgroundColor: card_bg }}>
				<span
					className="text-sm font-semibold px-2 py-1 rounded-md"
					style={{ backgroundColor: category_bg, color: text_color }}
				>
					{category}
				</span>
				<h3
					className="text-xl font-semibold mt-2"
					style={{ color: text_color }}
				>
					{title}
				</h3>
			</div>
		</Link>
	);
};



HomeCards.propTypes = {
	item: PropTypes.shape({
		id: PropTypes.number.isRequired,
		name: PropTypes.string.isRequired,
		description: PropTypes.string,
		amount: PropTypes.number
		// Add other fields as necessary
	}).isRequired,
  };

export default HomeCards;
