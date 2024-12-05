import Cookies from "js-cookie";

export const setToCookies = (key: string, token: string) => {
  if (!key || typeof window === "undefined") {
    return "";
  }
  return Cookies.set(key, token, { expires: 7 }); // cookie expiration in (days)
};

export const getFromCookies = (key: string) => {
  if (!key || typeof window === "undefined") {
    return "";
  }
  return Cookies.get(key);
};

export const removeFromCookies = (key: string) => {
  if (!key || typeof window === "undefined") {
    return "";
  }
  return Cookies.remove(key);
};
