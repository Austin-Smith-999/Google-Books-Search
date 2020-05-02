// axios calls from API
import axios from "axios";

const ApiUrl = "https://www.googleapis.com/books/v1/volumes?q=";

export default{
    search: function (query) {
    return axios.get(ApiUrl + query);    
    },
    getBooks: function () {
        return axios.get("/api/save")
    },
    saveBooks: function (bookInfo) {
        return axios.post("/api/save", bookInfo);
    }
}

