export const getCoins = async (currency) => {
	// const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${encodeURI(
	// 	currency
	// )}&order=market_cap_desc&per_page=100&page=1&sparkline=false`;
	// const resp = await fetch(url);
	// const { data } = await resp.json();
	// const coins = data.map((crip) => {
	// 	return {
	// 		id: crip.id,
	// 		symbol: crip.symbol,
	// 		name: crip.name,
	// 		img: crip.image,
	// 		current_price: crip.current_price,
	// 		market_cap: crip.market_cap,
	// 		market_cap_rank: crip.market_cap_rank,
	// 		high_24h: crip.high_24h,
	// 		low_24h: crip.low_24h,
	// 		price_change_24h: crip.price_change_24h,
	// 		last_updated: crip.last_updated,
	// 		url: crip.images?.downsized_medium.url,
	// 	};
	// });
	// return coins;
};
