import { FAKE_DATA_COUNTRY } from "./Data/fakeDataCountry";

const fakeCountryApi = {
  getAll() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(FAKE_DATA_COUNTRY);
      }, 300);
    });
  },
};
export default fakeCountryApi;
