export function convertToReactSelectOptions(datas) {
  return datas.map((data) => {
    return {
      value: data.id,
      label: data.title,
      desc: data.desc ? data.desc : "",
    };
  });
}

// storing session token in localstorage
export function addToLocale(data) {
  console.log(data);
  localStorage.setItem("session-token", JSON.stringify(data.token));
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
    return true;
  } else {
    return false;
  }
}
