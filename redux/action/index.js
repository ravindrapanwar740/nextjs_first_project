
import { INCREMENT, DECREMENT } from '../constant';
import { API } from '../../api';
// import {callApi} from '../action/util'

export const createUser = async (data) => {
  console.log(data, "---createUser-data in action")
  const response = await fetch(API.SIGN_UP, {
    method: "POST",
    data,
  });
  console.log(response, "----response -----createUser")
  return response;
};

export const fetchUser = async () => {
  const response = await fetch(API.GET_USER, {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    },
  });

  const user = await response.json();
  console.log(user, "-------------fetchUser action me")
  // setName(user?.name);
}