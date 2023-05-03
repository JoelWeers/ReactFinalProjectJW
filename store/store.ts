import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

export interface StationInformation {
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
        rental_methods: [];
        lon: number;
        short_name: string;
        capacity: number;
        station_type: string;
        legacy_id: string;
        stations_id: string;
        electric_bike_surcharge_waiver: boolean;
        external_id: string;
    })[];
}

const initialState = { value: ({} as StationInformation | Record<string, never>) }

const counter = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        refresh: (state, action: PayloadAction<any>) => {
            state.value = action.payload
            // console.log(action.payload)
        }
    },
})

const store = configureStore({
    reducer: {
        counter: counter.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            immutableCheck: false,
            serializableCheck: false,
        }),
})

export const useAppDispatch: () => AppDispatch = useDispatch

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export const { refresh } = counter.actions

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store