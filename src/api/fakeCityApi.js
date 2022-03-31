import { FAKE_DATA_CITY } from "./Data/fakeDataCity";

const fakeCityApi = {
  getAll() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(FAKE_DATA_CITY);
      }, 300);
    });
  },
};
export default fakeCityApi;
