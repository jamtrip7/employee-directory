import axios from "axios";

const directoryUrl = {
    fetchRandomEmployees: function() {
        return axios.get("https://randomuser.me/api/?results=100");
    }
};

export default directoryUrl;