import axios from 'axios'

const axiosServer = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
  timeout: 5000,
});

export function getEquipamentos(setList) {
  axiosServer
    .get("/equipamentos")
    .then((result) => {
      if(result.status !== 200){
      return
      }
      setList(result.data);
    })
    .catch((e) => console.log(e));
}

//  TO-DO
//  * implentar axios hook
//  * {error, data, isLoading}
 