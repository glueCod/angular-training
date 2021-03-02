export interface Country {
    filter(arg0: (country: any) => void): Country;
    name: string,
    code: string,
    id: number,
    url: any
}
