export function convertToReactSelectOptions(datas) {
  return datas.map((data) => {
    return {
      value: data.id,
      label: data.title,
      desc: data.desc ? data.desc : "",
    };
  });
}
export function convertToReactSelectPermissionOptions(datas) {
  return datas.map((data) => {
    return {
      value: data.id,
      label: data.title,
      desc: data.desc ? data.desc : "",
    };
  });
}
// convert Email OPtions
export function convertToReactSelectEmailOptions(datas) {
  return datas.map((data) => {
    return {
      value: data.email,
      label: data.email,
    };
  });
}
// convert party Email OPtions
export function convertToReactSelectPartyEmailOptions(datas) {
  return datas.map((data) => {
    return {
      value: data.clientEmail,
      label: data.clientEmail,
    };
  });
}

// storing session token in localstorage
export function addToLocale(data) {
  console.log(data);
  const savedData = {
    token: data.token,
    userData: data.data,
  };
  localStorage.setItem("session-token", JSON.stringify(savedData));
}
// removing session token from lcoal storage
export function removeFromLocale() {
  localStorage.removeItem("session-token");
}
// checking if there is session token in localstorage
export function findInLocale() {
  const value = JSON.parse(localStorage.getItem("session-token"));
  console.log(value);
  if (value) {
    return value;
  }
}
