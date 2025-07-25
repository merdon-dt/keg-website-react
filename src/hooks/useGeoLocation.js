import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateLocation, errorLocation } from "../features/user/userSlice";

export default function useGeoLocation(detect) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [data, setData] = useState({});
  const [city, setcity] = useState(null);

  const dispatch = useDispatch();

  //   fetch city information

  const FullInformation = () => {};

  useEffect(() => {
    const successHandler = async (e) => {
      setLoading(false);
      setError(null);
      setData(e.coords);

      const apiurl = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${e.coords.latitude}&longitude=${e.coords.longitude}&localityLanguage=en`;
      try {
        const response = await fetch(apiurl);
        const data = await response.json();

        setcity(data?.city);
      } catch (error) {}

      FullInformation();
    };
    const errorHandler = (e) => {
      setError(e.message);
      setLoading(false);

      dispatch(errorLocation(error));
    };
    navigator.geolocation.getCurrentPosition(successHandler, errorHandler);
    const id = navigator.geolocation.watchPosition(
      successHandler,
      errorHandler
    );
    return () => navigator.geolocation.clearWatch(id);
  }, [detect]);

  return { loading, error, data, city };
}
