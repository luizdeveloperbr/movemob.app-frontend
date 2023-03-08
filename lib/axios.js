import axios from 'axios'
const BACKEND_URL = "https://movemob-app-backend-vmg2asjqiq-uc.a.run.app";

const axiosServer = axios.create({
  baseURL: BACKEND_URL,
  timeout: 5000,
});

export function getEquipamentos(setList) {
  axiosServer
    .get("/equipamentos")
    .then((result) => {
      setList(result.data);
    })
    .catch((e) => console.log(e));
}
