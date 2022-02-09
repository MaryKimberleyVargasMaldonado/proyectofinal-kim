import { useEffect, useState } from "react/cjs/react.development";
import { getCoins } from "../helpers/getCoins";

export const useFetchGifs = (category) => {
	const [state, setState] = useState({
		data: [],
		loading: true,
	});

	// U S E   E F F E C T  con lista de dependencias
	useEffect(() => {
		return getCoins(category).then((imgs) => {
			setState({ data: imgs, loading: false });
		});
	}, [category]); // para que sólo se dispare una única vez

	return state; // {data:[], loading:true}
};
