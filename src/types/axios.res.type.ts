import {AxiosResponse} from "axios";

export type IAxiosRes<T> = Promise<AxiosResponse<T>>