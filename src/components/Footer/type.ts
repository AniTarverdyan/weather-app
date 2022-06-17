export interface IFooter {
    city: string,
};

export interface IItemContent {
    dt_txt: string,
    main: {
        temp: number,
    },
    weather: string[]
}
