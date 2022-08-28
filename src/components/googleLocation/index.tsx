import { Box, TextField, CircularProgress } from "@mui/material";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
import { makeStyles } from "@mui/styles";
// import ProgressIndicator from "../../../components/Atoms/Loader/Loader";

export default function SearchBox({
  setCoordinates,
  coordinates,
  address,
  setAddress,
  helperText,
  error,
  label,
  required,
}: any) {
  const classes = useStyles();

  const handleSelect = async (value: any) => {
    const results = await geocodeByAddress(value);
    const latLng = await getLatLng(results[0]);
    setAddress({
      ...address,
      label: value,
    });
    setCoordinates(latLng);
  };
  return (
    <PlacesAutocomplete
      value={address.label}
      onChange={(e: Event) => setAddress({ ...address, value: e, label: e })}
      onSelect={handleSelect}
      shouldFetchSuggestions={address?.value?.length > 3}
      searchOptions={{ componentRestrictions: { country: ["pk"] } }}
    >
      {({
        getInputProps,
        suggestions,
        getSuggestionItemProps,
        loading,
      }: any) => (
        <Box>
          <TextField
            {...getInputProps({
              // placeholder: "Type address",
            })}
            label={label}
            autoFocus={true}
            required={required}
            type="text"
            InputProps={{ style: { fontSize: 14 } }}
            fullWidth
            helperText={error && helperText}
            error={error}
            // error={address?.label?.length > 0 ? null : error}
          />
          <Box className={classes.dropdown}>
            {loading && <CircularProgress />}
            {suggestions.map((suggestion: any) => {
              const className = suggestion.active
                ? "suggestion-item--active"
                : "suggestion-item";
              const style = suggestion.active
                ? { backgroundColor: "#fafafa", cursor: "pointer" }
                : { backgroundColor: "#ffffff", cursor: "pointer" };
              return (
                <Box
                  {...getSuggestionItemProps(suggestion, {
                    className,
                    style,
                  })}
                >
                  <pre
                    style={{
                      textAlign: "left",
                      background: "#f0f0f0",
                      padding: 20,
                    }}
                  >
                    {suggestion.description}
                  </pre>
                </Box>
              );
            })}
          </Box>
        </Box>
      )}
    </PlacesAutocomplete>
  );
}

const useStyles = makeStyles({
  dropdown: {
    position: "absolute",
    zIndex: 1000,
  },
});
