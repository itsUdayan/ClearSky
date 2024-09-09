import { useRef, useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { API_KEY } from "../api";

const Search = ({ onSearchChange }) => {
  const [search, setSearch] = useState(null);
  const asyncPaginateRef = useRef();
  const URL = "http://api.openweathermap.org/geo/1.0/direct";
  const loadOptions = async (inputValue) => {
    if (inputValue !== null) {
      const response = await fetch(
        `${URL}?q=${inputValue}&limit=5&appid=${API_KEY}`
      );
      const data = await response.json();
      return {
        options: data.map((city) => {
          return {
            label: `${city.name}, ${city.country}`,
            value: `${city.lat} ${city.lon}`,
          };
        }),
      };
    }
  };

  const handleOnChange = (searchData) => {
    if (searchData !== null) {
      setSearch(searchData);
      onSearchChange(searchData);
    }
  };

  const handleFocus = () => {
    setSearch(null);
  };
  return (
    <div onClick={handleFocus}>
      <AsyncPaginate
        placeholder="Search for City"
        debounceTimeout={800}
        value={search}
        onChange={handleOnChange}
        loadOptions={loadOptions}
        ref={asyncPaginateRef}
      />
    </div>
  );
};

export default Search;
