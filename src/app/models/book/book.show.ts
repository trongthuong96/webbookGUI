import { AuthorShow } from "../author/author.show";
import { ChapterShow } from "../chapter/chapter.show";
import { GenreShow } from "../genre/genre.show";

export class BookShow {
    id?: number;
    title?: string;
    slug?: string;
    author?: string;
    description?: string;
    coverImage?: string;
    createdAt?: Date;
    updatedAt?: Date;
    status?: string;
    genresShow?: GenreShow[];
    authorShow?: AuthorShow;
    chapterShow?: ChapterShow[];
}