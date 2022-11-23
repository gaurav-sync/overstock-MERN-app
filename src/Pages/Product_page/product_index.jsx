import { Box, Grid, Heading, Spinner } from "@chakra-ui/react";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { SortContext } from "../../Components/Cotext";
import LeftBars from "./leftSidebar";
import { Products } from "./product_page1";
import SortDropdown from "./sortDropdown";

function Product_page_new() {
  const [user, setUser] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(searchParams.get("page") || 1);
  const [sort, setSort] = useState(searchParams.get("order") || "");
  const [filterDataCat, setfilterDataCat] = useState(
    searchParams.getAll("category") || []
  );
  const [filterDataBrand, setfilterDataBrand] = useState(
    searchParams.getAll("brands") || []
  );

  const changeOrder = (new_user) => {
    setUser(new_user);
  };
  return (
    <SortContext.Provider value={{ user, changeOrder }}>
      <Box
        mt={{
          base: "70px",
          sm: "70px",
          md: "70px",
          lg: "150px",
        }}
      >
        <SortDropdown
          page={page}
          sort={sort}
          setSort={setSort}
          filterDataCat={filterDataCat}
          filterDataBrand={filterDataBrand}
        />
        <Grid
          templateColumns={{
            base: "1fr",
            sm: "1fr",
            md: "1fr",
            lg: "0.3fr 1fr",
          }}
          spacing={20}
          gap={5}
        >
          <LeftBars
            sort={sort}
            page={page}
            filterDataCat={filterDataCat}
            setfilterDataCat={setfilterDataCat}
            filterDataBrand={filterDataBrand}
            setfilterDataBrand={setfilterDataBrand}
          />
          <Products
            page={page}
            setPage={setPage}
            sort={sort}
            filterDataCat={filterDataCat}
            filterDataBrand={filterDataBrand}
          />
        </Grid>
      </Box>
    </SortContext.Provider>
  );
}

export default Product_page_new;
