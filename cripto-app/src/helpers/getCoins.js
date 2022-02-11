export const getCoins = async () => {
	const url = `https://api.giphy.com/v1/gifs/search?q=usd&limit=10&api_key=sVSVPu4u5ynazdwT8mfWb2l3lP13T6XZ`;
	const resp = await fetch(url);
	const { data } = await resp.json();

	const coins = data.map((cc) => {
		return {
			id: cc.id,
			symbol: cc.symbol,
			name: cc.name,
			image: cc.image,
			current_price: cc.current_price,
			high_24h: cc.high_24h,
			low_24h: cc.low_24h,
			price_change_24h: cc.price_change_24h,
			last_updated: cc.last_updated,
			// url: img.images?.downsized_medium.url,
		};
	});

	return coins;
};
