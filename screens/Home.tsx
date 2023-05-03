import React, { useState } from "react";
import { FlatList, Linking, Modal, Pressable, View } from "react-native";
import { Button, Text } from "react-native-paper";
import { useSelector } from "react-redux";
import { Navigation } from "../navigation";
import { RootState } from "../store/store";

interface StationInformation {
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
}

export default function HomeScreen({ navigation }: Navigation) {

  const [detailsModal, setModalVisable] = useState(false) 
  
  const [stationDetails, setStationDetails]: Array<any> = useState([])

  const stationInformation = useSelector((state: RootState) => state.counter.value)

  //setStationDetails(stationInformation.stations[0])

  const IndividualStation = ({ index }: any) => {
    return (
      <View style={{ margin: 3, backgroundColor: 'white', borderWidth: 2, borderRadius: 8, flexDirection: 'row', justifyContent: 'center' }}>
        <Text variant="titleMedium" style={{ textAlign: 'center' }}>{index.name}</Text>
        <Pressable
          style={{ marginLeft: 10 }}
          android_ripple={{ color: 'white', borderless: true, foreground: true }}
          onPress={() => {
            setStationDetails(index)
            setModalVisable(!detailsModal)
          }}
        >
          <Text style={{ color: 'blue', }}>details</Text>
        </Pressable>
      </View>
    )
  }

  return (stationInformation ?
    <View style={{ flex: 1, justifyContent: 'center', backgroundColor: 'lightgrey' }}>
      <Modal
        animationType='slide'
        transparent={false}
        visible={detailsModal}
        onRequestClose={() => {
          setStationDetails([])
        }}
      >
        <View style={{ flex: 1, flexDirection: 'column', backgroundColor: 'lightgrey' }}>
          <View style={{ justifyContent: 'flex-start' }}>
            <Text variant="headlineLarge" style={{ textAlign: 'center', padding: 20, borderBottomWidth: 3 }}>Station Details</Text>
          </View>
          <Text variant="titleMedium" style={{ textAlign: 'center', margin: 5 }}>Name: {stationDetails.name}</Text>
          <Text variant="titleMedium" style={{ textAlign: 'center', margin: 5 }}>Has_Kiosk: {stationDetails.has_kiosk ? 'true' : 'false'}</Text>
          <Text variant="titleMedium" style={{ textAlign: 'center', margin: 5 }}>Region_ID: {stationDetails.region_id}</Text>
          <Text variant="titleMedium" style={{ textAlign: 'center', margin: 5 }}>Short_Name: {stationDetails.short_name}</Text>
          <Text variant="titleSmall" style={{ textAlign: 'center', margin: 5 }}>Station_ID: {stationDetails.station_id}</Text>
          <Text variant="titleSmall" style={{ textAlign: 'center', margin: 5 }}
            onPress={()=> {Linking.openURL(stationDetails.rental_uris.android)}}
          >Rental_URLs: {stationDetails.rental_uris.android}
          </Text>

          <Pressable
            style={{}}
            android_ripple={{ color: 'white', borderless: true, foreground: true }}
            onPress={() => {
              setModalVisable(!detailsModal)
            }}
          >
            <View style={{ height: 50, width: 200, backgroundColor: 'blue', alignContent: 'center', justifyContent: 'center', borderWidth: 2, borderRadius: 20, }}>
              <Text variant="titleMedium" style={{ textAlign: 'center', color: 'lightgrey' }}>close</Text>
            </View>
          </Pressable>
        </View>
      </Modal>
      <Text variant="displaySmall" style={{ textAlign: 'center', margin: 20 }}>Citi Bike Sharing</Text>
      <Text variant="headlineMedium" style={{ textAlign: 'center', margin: 5 }}>Station List</Text>
      <FlatList
        data={stationInformation.stations}
        renderItem={({ item }) => {
          console.log(item)
          return <IndividualStation index={item} />
        }}
      // keyExtractor={station => station.region_id}
      />
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button onPress={() => navigation.goBack()}>Go back home</Button>
      </View>
    </View>
    :
    <Text>Loading</Text>
  );
}
