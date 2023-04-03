// import { useState, useEffect } from "react";
// import axios from "axios";


// const useFetch = (endpoint, query) => {
//   const [data, setData] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const axios = require("axios");

// const options = {
//   method: 'GET',
//   url: `https://jsearch.p.rapidapi.com/${endpoint}`,
//   headers: {
//     'X-RapidAPI-Key': 'd2c96ac3a9msh7f3b13d5d2787eap195a87jsnd5545b653b24',
//     'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
//   },
//   params: {...query},
  
// };

//   const fetchData = async () => {
//     setIsLoading(true);

//     try {
//       const response = await axios.request(options);

//       setData(response.data.data);
//       setIsLoading(false);
//     } catch (error) {
//       setError(error);
//       console.log(error)
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const refetch = () => {
//     setIsLoading(true);
//     fetchData();
//   };

//   return { data, isLoading, error, refetch };
// };

// export default useFetch;


// import { useState, useEffect } from "react";
// import axios from "axios";

// const useFetch = (endpoint, query) => {
//   const [data, setData] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const axios = require("axios");
//   const options = {
//     method: 'GET',
//     url: 'https://jsearch.p.rapidapi.com/search',
//     params: {query: 'Python developer in Texas, USA', page: '1', num_pages: '1'},
//     headers: {
//       'X-RapidAPI-Key': 'd2c96ac3a9msh7f3b13d5d2787eap195a87jsnd5545b653b24',
//       'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
//     }
//   };
  

//   const fetchData = async () => {
//     setIsLoading(true);

//     try {
//       const response = await axios.request(options);

//       setData(response.data.data);
//       setIsLoading(false);
//     } catch (error) {
//       setError(error);
//       console.log(error)
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const refetch = () => {
//     setIsLoading(true);
//     fetchData();
//   };

//   return { data, isLoading, error, refetch };
// };

// export default useFetch;



import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (endpoint, query) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const options = {
    method: "GET",
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    headers: {
      "X-RapidAPI-Key": 'd2c96ac3a9msh7f3b13d5d2787eap195a87jsnd5545b653b24',
      "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
    },
    params: { ...query },
  };

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const response = await axios.request(options);

      setData(response.data.data);
      setIsLoading(false);
    } catch (error) {
      setError(error);
      console.log(error)
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    setIsLoading(true);
    fetchData();
  };

  return { data, isLoading, error, refetch };
};

export default useFetch;