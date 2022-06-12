export interface ICity {
    country: string;
    lat: string;
    lng: string;
    name: string;
}

export interface ILoader {
    loading: boolean,
    setLoading: any
    }

    export interface IUnit {
        unit?: string,
        setUnit?: any;
    }