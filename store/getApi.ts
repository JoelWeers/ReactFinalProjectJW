import store, { refresh } from "./store";


async function getArticlesFromApi() {
    try {
        console.log('request')
        let response = await fetch('https://gbfs.citibikenyc.com/gbfs/en/station_information.json')
        const json = await response.json()
        return json;
    } catch (error) {
        console.log("e")
        console.error((error));
    }
}

export interface StationInformation {
    data: {
        stations: ({
            has_kiosk: boolean;
            eightd_has_key_dispenser: boolean;
            region_id: string;
            lat: number;
            rental_uris: {
                android: string;
                ios: string;
            };
            eightd_station_services: {
                docks_availability?: string,
                off_dock_bikes_count?: number,
                off_dock_remaining_bike_capacity?: number,
                link_for_more_info?: string,
                id?: string,
                service_typ?: string,
                description?: string,
                name?: string,
                schedule_description?: string,
                bikes_availability?: string,
            }[];
            name: string;
            rental_methods:[];
            lon: number;
            short_name: string;
            capacity: number;
            station_type: string;
            legacy_id: string;
            stations_id: string;
            electric_bike_surcharge_waiver: boolean;
            external_id: string;
        })[];
    },
    last_updated: number;
    ttl: number;
}


export default async function fetchArticles() {
    const articles = await getArticlesFromApi()
    const articlesNotJson: StationInformation = <StationInformation>articles

    console.log("Fetch")

    store.dispatch(refresh(articlesNotJson.data))
}

