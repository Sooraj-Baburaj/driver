import { BASE_API, CRM_API, USER_BASE_API } from "../assets/constants";
import _ from "lodash";

export const invokeApi = async (url, data) => {
  let newUrl = url;
  console.log({ data });
  if (!_.isEmpty(data)) {
    console.log("lllll");
    newUrl += "?" + new URLSearchParams({ ...data });
  }
  console.log("frtching...");
  return await fetch(`${BASE_API}/${newUrl}`)
    .then((res) => res.json())
    .then((response) => {
      return { response };
    })
    .catch((error) => ({ error }));
};

export const postApi = async (url, formElement) => {
  var form_data = new FormData();
  for (var key in formElement) {
    form_data.append(key, formElement[key]);
  }
  return await fetch(`${BASE_API}/${url}`, {
    method: "POST",
    body: form_data,
  })
    .then((res) => res.json())
    .then((response) => {
      return { response };
    })
    .catch((error) => ({ error }));
};

export const UserpostApi = async (url, formElement, crm = false) => {
  var form_data = new FormData();
  for (var key in formElement) {
    form_data.append(key, formElement[key]);
  }
  return await fetch(`${crm ? CRM_API : USER_BASE_API}/${url}`, {
    method: "POST",
    body: form_data,
  })
    .then((res) => res.json())
    .then((response) => {
      return { response };
    })
    .catch((error) => ({ error }));
};
