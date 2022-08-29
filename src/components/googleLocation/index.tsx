import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
import { makeStyles } from "@mui/styles";
import { Box, CircularProgress, TextField } from "@mui/material";

export default function SearchBox({
  setCoordinates,
  coordinates,
  address,
  setAddress,
  helperText,
  error,
  label,
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
      onChange={(e: any) => setAddress({ ...address, value: e, label: e })}
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
            {...getInputProps()}
            label={label}
            autoFocus={true}
            type="text"
            InputProps={{ style: { fontSize: 14 } }}
            fullWidth
            error={error}
            helperText={helperText}
          />
          <Box className={classes.dropdown}>
            {loading && <CircularProgress size={"small"} />}
            {suggestions.map((suggestion: any, index: number) => {
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
                  key={index}
                >
                  <pre
                    style={{
                      textAlign: "left",
                      color: "black",
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
