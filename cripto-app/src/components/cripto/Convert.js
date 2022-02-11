import axios from "axios";
import React from "react";
import { useState } from "react";

export const Convert = () => {
	const [coin, setCoin] = useState("");
	const [c1, setC1] = useState("USD");
	const [c2, setC2] = useState("AUD");
	const [rate, setRate] = useState([]);
	const myKey = "7c5f8bcfd67dcb29bede";

	// p a r a m e t e r s
	const getConv = (c1, c2) => {
		axios({
			method: "GET",
			url: `https://free.currconv.com/api/v7/convert?q=${c1}_${c2}&compact=ultra&apiKey=${myKey}`,
		})
			.then((response) => {
				console.log(response.data);
				setRate(response.data);
			})
			.catch((error) => {
				console.error(error);
			});
	};

	// r e t u r n
	return (
		<div>
			<h1 className="text-center">Convertidor de monedas</h1>
			<hr />

			<div className="row align-items-center ">
				{/* L   I   S   T   A    -     T    O    D   O    */}
				<div className="col-4 ">
					<input
						type="text"
						className="form-control text-uppercase"
						value={c1}
						onChange={(e) => setC1(e.target.value)}
					/>
				</div>

				{/*  A   G   R   E   G   A   R          N    U   E   V   O        T    O    D   O      */}
				<div className="col-4 ">
					<input
						type="text"
						className="form-control text-uppercase"
						value={c2}
						onChange={(e) => setC2(e.target.value)}
					/>
				</div>
				<div className="col-4 ">
					<button className="btnL btn solid " onClick={() => getConv(c1, c2)}>
						Convertir
					</button>
				</div>
			</div>

			<hr />
			<div className="col-5 align-items-center">
				<p className="text-uppercase">
					1 {c1} = {rate[`${c1}_${c2}`]}
				</p>
				{c2}
			</div>
		</div>
	);
};
