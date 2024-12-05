import { APP_CONFIG } from "@/helper/index";


export const getBaseUrl = (): string => {
  return APP_CONFIG.base_url || "http://localhost:5000/api/v1";
};
