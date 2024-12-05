import { APP_CONFIG } from "@/helper/config/index";


export const getBaseUrl = (): string => {
  return APP_CONFIG.base_url || "http://localhost:5000/api/v1";
};
