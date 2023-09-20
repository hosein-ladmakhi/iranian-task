import { httpGetClient } from "@/lib";
import { GetUsersResponse } from "@/@types";

export const fetchUsers = () => httpGetClient<GetUsersResponse>("/users");
