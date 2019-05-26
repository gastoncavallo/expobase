import { api } from "../config";

const PREFIX = "/user";

export const login = () => api.post(PREFIX + "/login");
