import axios from "axios";

let baseUrl = "http://localhost:4000/api/products";

export const getAllProductsFromServer = (searchItem, sortOption, page, limit) => {
    const queryParams = { params: { search: searchItem, sort: sortOption, page, limit } };
    return axios.get(baseUrl, queryParams);
}
export const getProductById = (id) => {
    return axios.get(`${baseUrl}/${id}`);
}
export const deleteP = (id) => {
    return axios.delete(`${baseUrl}/${id}`);
}
export const addProduct = async (product) => {
    try {
        console.log("Adding: " , product);
        const response = await axios.post(baseUrl, product);
        return response.data;
    } catch (error) {
        throw new Error("Failed to add product: " + error.message);
    }


}

