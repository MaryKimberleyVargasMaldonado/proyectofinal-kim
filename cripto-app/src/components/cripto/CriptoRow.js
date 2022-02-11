import React from "react";

export const CriptoRow = ({ coin, index }) => {
	// console.log(coin, index);
	return (
		<tr>
			<td>{index}</td>
			<td>
				<img
					src={coin.image}
					alt={coin.symbol}
					style={{ width: "7%" }}
					className="me-4 img-fluid"
				/>
				<span>{coin.name}</span>&nbsp;
				<span className="ms-3 text-muted text-uppercase">{coin.symbol}</span>
			</td>
			<td> {coin.current_price} US$</td>
			<td> {coin.high_24h} US$</td>
			<td> {coin.low_24h} US$</td>
			<td> {coin.price_change_24h} US$</td>
			<td
				className={
					coin.price_change_percentage_24h > 0 ? "text-success" : "text-danger"
				}
			>
				{coin.price_change_percentage_24h} %
			</td>
			<td> {coin.total_volume}</td>
			<td> {coin.market_cap}</td>
		</tr>
	);
};
