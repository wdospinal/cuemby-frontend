export class Show {
    id: string;
    name: string;
    language: string;
    summary: string;
    likes: number;
    rating: {average: string};
    image: {medium: string};
    genres: Array<string>;
    schedule: { days: [string], time: string };
}
