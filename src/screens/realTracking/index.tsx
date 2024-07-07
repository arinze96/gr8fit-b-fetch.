import {
  Alert,
  PermissionsAndroid,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import MapView, { Marker, Polyline } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
import Geolocation from "@react-native-community/geolocation";
import styles from "./styles";
import { useGetUserLocationQuery } from "../../store/locationAPI";
import { successToast } from "../../utils/toaster";
import LocationDetails from "../../components/locationDetails";
import { envdata } from "../../../envData";



const RealTracking = () => {
  const [routeCoordinates, setRouteCoordinates] = useState<any>([]);
  const [currentPosition, setCurrentPosition] = useState<any>(null);
  const [stopPosition, setStopPosition] = useState<any>(null);
  const [watchId, setWatchId] = useState<any>(null);
  const mapRef: any = useRef();
  const destination = { latitude: 37.771707, longitude: -122.4053769 };
  
  const { data: userLocation } = useGetUserLocationQuery();

  useEffect(() => {
    const requestLocationPermission = async () => {
      if (Platform.OS === "android") {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: "Location Access Required",
            message:
              "This app needs to access your location to track your walk or running exercise",
            buttonPositive: "OK",
            buttonNegative: "Cancel",
            buttonNeutral: "Ask Me Later",
          }
        );
        if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
          Alert.alert("Location permission denied");
          return;
        }
      }
      startTracking();
    };

    requestLocationPermission();

    return () => {
      if (watchId !== null) {
        Geolocation.clearWatch(watchId);
        setWatchId(null);
        setStopPosition(currentPosition);
      }
    };
  }, []);

  const startTracking = () => {
    const id = Geolocation.watchPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        const newCoordinate = { latitude, longitude };
        setRouteCoordinates((prevCoords: any) => [
          ...prevCoords,
          newCoordinate,
        ]);
        setCurrentPosition(newCoordinate);
      },
      (error) => console.log(error),
      { enableHighAccuracy: true, distanceFilter: 1, interval: 1000 }
    );
    setWatchId(id);
    successToast("Location Tracking Has Started");
  };

  const stopTracking = () => {
    if (watchId !== null) {
      Geolocation.clearWatch(watchId);
      setWatchId(null);
    successToast("Location Tracking Has Stopped");
    }
  };

  

  return (
    <View style={{ flex: 1 }}>
      <View style={[styles.statusBar]}>
        <SafeAreaView>
          <StatusBar translucent barStyle={"light-content"} />
        </SafeAreaView>
      </View>
      <View style={styles.container}>
        {currentPosition && (
          <MapView
            style={StyleSheet.absoluteFill}
            initialRegion={{
              latitude: currentPosition.latitude,
              longitude: currentPosition.longitude,
              latitudeDelta: 0.01,
              longitudeDelta: 0.01,
            }}
            ref={mapRef}
          >
            <Marker coordinate={currentPosition} title="Current Position" />
            <Marker coordinate={stopPosition ? { latitude: stopPosition?.latitude, longitude: stopPosition?.longitude} : stopPosition} />
            <MapViewDirections
              origin={{
                latitude: currentPosition.latitude,
                longitude: currentPosition.longitude,
              }}
              destination={stopPosition ? { latitude: stopPosition?.latitude, longitude: stopPosition?.longitude} : stopPosition}
              apikey={envdata.GOOGLE_API_KEY}
              strokeWidth={7}
              strokeColor="red"
              optimizeWaypoints={true}
              onReady={(result) => {
                mapRef.current.fitToCoordinates(result.coordinates, {
                  edgePadding: {
                    right: 30,
                    bottom: 300,
                    left: 30,
                    top: 100,
                  },
                });
              }}
            />
            <Polyline coordinates={routeCoordinates} strokeWidth={5} />
          </MapView>
        )}
      </View>
      {userLocation && (
        <LocationDetails
          userLocation={userLocation}
          watchId={watchId}
          startTracking={() => startTracking()}
          stopTracking={() => stopTracking()}
        />
      )}
    </View>
  );
};

export default RealTracking;
