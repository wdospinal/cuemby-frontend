export class Show {
    id: string;
    name: string;
    language: string;
    sumary: string;
    rating: {average: string};
    genres: Array<string>;
    schedule: { days: [string], time: string };
}
