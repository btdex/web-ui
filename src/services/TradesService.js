import {isClientSide} from "../utils/isClientSide";

const BaseUrl = 'http://localhost:3001/api'

export async function getTrades(pair) {
  if(!isClientSide()) {
    return Promise.resolve([])
  }

  let response = await fetch(`${BaseUrl}/trades/${pair}`);
  return response.json()
}
