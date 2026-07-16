import axios from 'axios';

const backendUrl = 'https://localhost:3000/vocabs/';

export const viewAllWords = async () => {
    try {
        const response = await axios.get(backendUrl);
        return response.data;
    } catch (err) {
        console.error(err);
        return null;
    }
};

export const viewWordById = async (id) => {
    try{
        const response = await axios.get(backendUrl + "/" + id);
        return response.data;
    } catch (err) {
        console.error(err);
        return null;
    }
};

export const addNewWord = async (word) => {
    try {
        const response = await axios.post(backendUrl, word);
        return response.data;
    } catch (err) {
        console.error(err);
        return null;
    }
};

export const editWord = async (id, word) => {
    try {
        const response = await axios.put(backendUrl + "/" + id, word);
        return response.data;
    } catch (err) {
        console.error(err);
        return null;
    }
};

export const deleteWord = async (id) => {
    try {
        const response = await axios.delete(backendUrl + "/" + id);
        return response.data;
    } catch (err) {
        console.error(error);
        return null;
    }
};
            