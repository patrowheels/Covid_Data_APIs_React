import axios from "axios";

//documentation @https://covidtracking.com/data/api
//feel free to add more functions!


const covid = {
  getCurrentCovidStats: async () => {
    try {
      const response = await axios.get(
        "https://api.covidtracking.com/v1/states/current.json"
      );
      return response.data;
    } catch (error) {
      return error;
    }
  },

  getUsaPopulation: async () => {
      try {
        const response = await axios.get(
          "https://api.census.gov/data/2019/pep/charagegroups?get=NAME,POP&for=state:*"
        );
        return response.data;
      } catch (error) {
        return error;
      }
    },

  getUsaStateAbrs: async () => {
      try {
        const response = await axios.get(
          "https://worldpopulationreview.com/static/states/abbr-name.json"
        );
        return response.data;
      } catch (error) {
        return error;
      }
    },

  getHistoricDailyCovidStats: async () => {
    try {
      const response = await axios.get(
        "https://api.covidtracking.com/v1/states/daily.json"
      );
      return response.data;
    } catch (error) {
      return error;
    }
  }
};

export default covid;
