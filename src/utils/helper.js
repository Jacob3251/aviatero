import { format, parseISO } from "date-fns";

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
  // console.log(value);
  if (value) {
    return value;
  }
}
export function getFileExtension(url) {
  const regex = /(?:\.([^.]+))?$/;
  const matches = url.match(regex);
  return matches && matches[1] ? matches[1] : "";
}
// download file name creator
export const customFileName = (title, link) => {
  // console.log(link);
  const address = link
    .split("https://consultancy-crm-serverside-1.onrender.com/")[1]
    .split(".")[1];
  return title + "." + address;
};
// export site configs

export const site_sensitive_info = {
  site_origin: "https://consultancy-crm-serverside-1.onrender.com/",
};

// format date

export function formatDate(dateString) {
  // Parse the ISO date string
  const date = parseISO(dateString);

  // Format the date to "d'th' MMMM, yyyy"
  const formattedDate = format(date, "do MMMM, yyyy");

  return formattedDate;
}

export function stringMatcher(string1, string2) {
  if (string1 === string2) {
    return true;
  }
  return false;
}
export const permissionChecker = (user, permissionId) => {
  return user.permissions.includes(permissionId);
};
// all the permission codes
export const permissionNames = {
  MODIFY_EMAILS: {
    name: "Modify Saved Emails",
    id: "20e647b5-b58b-47ce-a8da-d9c9ce2ea435",
  },
  SEND_NEWSLETTERS: {
    name: "Send Newsletters",
    id: "f433286e-0f99-4cc6-b974-e512f82f3064",
  },
  SITE_MODIFICATION: {
    name: "Site Modification",
    id: "cb18aad3-9bac-4b91-8f52-cad65959fea4",
  },
  MODIFY_TESTIMONIAL: {
    name: "Modify Testimonials",
    id: "26cdd8c1-35d0-47d5-b7bc-3d9fdd982ea2",
  },
  BLOG_MODIFICATION: {
    name: "Blog Modification",
    id: "729e24cb-6c4d-469f-a679-a9463caa51c8",
  },
  CREATE_ROLE: {
    name: "Create Roles",
    id: "95296a16-86bd-4717-b8e7-3b8dc028c682",
  },
  MODIFY_NOTIFICATION: {
    name: "Modify Notifications",
    id: "dab78a33-98a7-4393-8e9d-df83bf156d52",
  },
  MODIFY_LEAD: {
    name: "Modify Leads",
    id: "f2032af3-7898-4ea6-a8f8-66a9231d43cb",
  },
  MODIFY_CLIENT: {
    name: "Modify Clients",
    id: "ec87ad29-652a-4bba-85ef-6cb94079bcc8",
  },
  USER_MODIFICATION: {
    name: "User Modification",
    id: "6f340a96-a114-4724-811e-07d0445356e9",
  },
  VIEW_DASHBOARD_DATA: {
    name: "View Dashboard Data",
    id: "9aacc911-4680-483e-903d-431f2b0a4a88",
  },
  VIEW_CLIENTS: {
    name: "View Clients",
    id: "35594e85-6669-4c64-8682-a2b2f4365ad9",
  },
  VIEW_LEADS: {
    name: "View Leads",
    id: "79ac7048-42ec-43c6-a414-a5dfd1ed1e48",
  },
  VIEW_SENT_NEWSLETTERS: {
    name: "View Sent Newsletters",
    id: "91a6ff40-accd-4df6-9c66-b9aef584ba33",
  },
  MODIFY_SENT_NEWSLETTERS: {
    name: "Modify Sent Newsletters",
    id: "4dbe6499-0ec5-44a9-894e-eda77c0bbf38",
  },
  VIEW_ROLES: {
    name: "View Roles",
    id: "c1d7c490-f901-4965-bd82-c7bdce908b74",
  },
};
