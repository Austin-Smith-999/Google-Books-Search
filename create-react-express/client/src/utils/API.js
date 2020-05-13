// axios calls from API
import axios from "axios";

const ApiUrl = "https://www.googleapis.com/books/v1/volumes?q=";

export default{
    search: function (query) {
    return axios.get(ApiUrl + query);    
    },
    getBooks: function () {
        return axios.get("/api/books")
    },
    saveBooks: function (bookInfo) {
        console.log("save books function working!!");
        return axios.post("/api/books", bookInfo);
    }
}

