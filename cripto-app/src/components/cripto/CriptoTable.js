import React from "react";
import { CriptoRow } from "./CriptoRow";

export const CriptoTable = ({ coins, search }) => {
	//  t i t l e s
	const title = [
		"#",
		"Coin",
		"Current Price",
		"High 24h",
		"Low 24h",
		"Price Change 24h",
		"Price % 24h",
		"Total Volume",
		"Mkt Cap",
	];
	//F I L T E R
	const coinsFiltered = coins.filter(
		(coin) =>
			coin.name.toLowerCase().includes(search.toLowerCase()) ||
			coin.symbol.toLowerCase().includes(search.toLowerCase())
	);

	// r e t u r n
	return (
		<>
			<table className="table table-dark mt-4 table-hover ">
				<thead>
					<tr>
						{title.map((t) => (
							<td key={t}>{t}</td>
						))}
					</tr>
				</thead>
				<tbody>
					{coinsFiltered.map((coin, index) => (
						<CriptoRow key={index} coin={coin} index={index + 1} />
					))}
				</tbody>
			</table>
		</>
	);
};
