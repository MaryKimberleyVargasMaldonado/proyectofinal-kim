import { useEffect, useState } from "react/cjs/react.development";
import { getCoins } from "../helpers/getCoins";

export const useFetch = (currency) => {
	const [state, setState] = useState({
		data: [],
		loading: true,
	});

	// U S E   E F F E C T  con lista de dependencias
	useEffect(() => {
		return getCoins(currency).then((coins) => {
			setState({ data: coins, loading: false });
		});
	}, [currency]); // para que sólo se dispare una única vez

	return state; // {data:[], loading:true}
};
