export type LocationDTO = {
  /* Name of the found location */
  name: string;
  /* Name of the found location in different languages. The list of names can be different for different locations */
  local_names: Record<string, string>;
  /* Geographical coordinates of the found location (latitude) */
  lat: number;
  /* Geographical coordinates of the found location (longitude) */
  lon: number;
  /* Country of the found location */
  country: string;
  /* (where available) State of the found location */
  state: string;
}
