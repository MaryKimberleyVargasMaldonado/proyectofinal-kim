import React, { useEffect, useState } from "react";
import axios from "axios";
import { CriptoTable } from "./CriptoTable";
import "../../styles/cripto.css";
//npm i axios
export const Criptocoin = () => {
	// S E A R C H
	const [search, setSeach] = useState("");

	//  U S E   S T A T E
	const [coins, setCoins] = useState([]);

	//  G E T  C O I N S
	const getCoins = async () => {
		const resp = await axios.get(
			"https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
		);
		// console.log(resp.data);
		setCoins(resp.data);
	};

	// U S E   E F F E C T
	useEffect(() => {
		getCoins();
	}, []);

	// R E T U R N
	return (
		<div className="containerC ">
			<h1 style={{ textAlign: "center" }}>Cryptocurrency Market</h1>
			<input
				type="text"
				placeholder="Busca un tipo de moneda"
				className="form-control bg-dark text-light border-0 mt-4 text-center"
				onChange={(e) => setSeach(e.target.value)}
			/>
			<CriptoTable coins={coins} search={search} />
		</div>
	);
};
