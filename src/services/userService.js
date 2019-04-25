import http from "./httpService";
import { api } from "../config.json";

const apiEndpoint = api + "/profile/";

export function register(user) {
    return http.post(apiEndpoint, {
        email: user.email,
        password: user.password,
        name: user.name
    });
}