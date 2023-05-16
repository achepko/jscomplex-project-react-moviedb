export interface IGenre {
    id: number,
    name: string
}

export interface IGenresService {
    genres: IGenre[]
}

export interface IGenreInitialState {
    genres:IGenre[]
}