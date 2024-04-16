import axios from "axios";

export const fetchData = async (link) => {
    try {
        const { data } = await axios.get(link);
        console.log(data);
        return data;
    } catch (err) {
        console.log(err);
    }
};
