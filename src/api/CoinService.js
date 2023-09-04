import axios from "axios";

export default class CoinService {
    static async getAll(page) {
        const response = await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false`)
        return response.data
    }

    static async getOne(id) {
        const response = await axios.get(`https://api.coingecko.com/api/v3/coins/${id}`)
        return response.data
    }
} 