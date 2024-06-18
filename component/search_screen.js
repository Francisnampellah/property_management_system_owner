import { View, Text } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { Button } from "react-native-paper";
import { MyContext } from "../hooks/context_provider";
import { TouchableOpacity } from "react-native-gesture-handler";
import { dataset } from "../data/search_test";

export default function Search_screen() {
  const { activeSearch, setActiveSearch } = useContext(MyContext);
  const { searchInput, setSearchInput } = useContext(MyContext);
  const { activeFilters, setActiveFilters } = useContext(MyContext);

  const [data, setData] = useState(dataset);

  useEffect(() => {
    setData(filterData());
  }, [searchInput, activeFilters]);

  const filterData = () => {
    let filteredData = dataset;

    // Apply search input filter
    if (searchInput.trim() !== "") {
      filteredData = filteredData.filter((item) =>
        item.name.toLowerCase().includes(searchInput.toLowerCase())
      );
    }

    // Apply active filters
    if (activeFilters.length > 0) {
      filteredData = filteredData.filter((item) =>
        activeFilters.includes(item.category.toLowerCase())
      );
    }

    return filteredData;
  };

  const handleSearchCancel = () => {
    setActiveSearch(false);
    setSearchInput("");
    setActiveFilters([]);
  };

  return (
    <View clasName="flex flex-1">
      <TouchableOpacity onPress={handleSearchCancel}>
        <Button style={{ alignSelf: "flex-end", paddingHorizontal: 8 }}>
          Cancel
        </Button>
      </TouchableOpacity>

      <View className="flex flex-row flex-wrap">
        {data.map((item) => (
          <Text>{item.name}</Text>
        ))}
      </View>
    </View>
  );
}
