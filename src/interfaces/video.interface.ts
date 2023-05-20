
export interface IVideosService {
    id: number;
    results: IVideo[];
}
export interface IVideo {
    key: string;
    name: string;
    site:string,
    type:string

}