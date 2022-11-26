import { Heading, HStack, Select } from "@chakra-ui/react";
import { createContext } from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import {
  getFurniture,
  getFurnitureData,
  getFurnitureDataFilter,
  getFurnitureDataWithParams,
  getLoading,
} from "../../redux/action";

export default function SortDropdown({
  page,
  sortby,
  setSort,
  filterDataCat,
  filterDataBrand,
}) {
  const state = useSelector((state) => state);
  const { loading, error, furnitures } = state;
  const [searchParams, setSearchParams] = useSearchParams();
  const [order, setOrder] = useState("");
  const dispatch = useDispatch();
  const [category, setCategory] = useState(
    searchParams.getAll("category") || []
  );
  const [brands, setBrands] = useState(searchParams.getAll("brands") || []);

  useEffect(() => {
    dispatch(getLoading());
    if (filterDataBrand.length && filterDataCat.length) {
      if (sortby != "") {
        getFurnitureDataFilter(
          filterDataCat,
          filterDataBrand,
          "price",
          sortby,
          page
        ).then((res) => dispatch(getFurniture(res.data)));
      } else {
        getFurnitureDataFilter(
          filterDataCat,
          filterDataBrand,
          undefined,
          undefined,
          page
        ).then((res) => dispatch(getFurniture(res.data)));
      }
    } else if (filterDataBrand.length == 0)
      if (sortby != "") {
        getFurnitureDataFilter(
          filterDataCat,
          undefined,
          "price",
          sortby,
          page
        ).then((res) => dispatch(getFurniture(res.data)));
      } else {
        getFurnitureDataFilter(
          filterDataCat,
          undefined,
          undefined,
          undefined,
          page
        ).then((res) => dispatch(getFurniture(res.data)));
      }
    else if (filterDataCat.length == 0) {
      if (sortby != "") {
        getFurnitureDataFilter(
          undefined,
          filterDataBrand,
          "price",
          sortby,
          page
        ).then((res) => dispatch(getFurniture(res.data)));
      } else {
        getFurnitureDataFilter(
          undefined,
          filterDataBrand,
          undefined,
          undefined,
          page
        ).then((res) => dispatch(getFurniture(res.data)));
      }
    } else {
      getFurnitureDataFilter(undefined, undefined, sortby, page).then((res) =>
        dispatch(getFurniture(res.data))
      );
    }
  }, [filterDataCat, filterDataBrand, page, sortby]);

  useEffect(() => {
    dispatch(getLoading());
    if (filterDataBrand.length && filterDataCat.length) {
      if (sortby != "") {
        getFurnitureDataFilter(
          filterDataCat,
          filterDataBrand,
          "price",
          sortby,
          page
        ).then((res) => dispatch(getFurniture(res.data)));
      } else {
        getFurnitureDataFilter(
          filterDataCat,
          filterDataBrand,
          undefined,
          undefined,
          page
        ).then((res) => dispatch(getFurniture(res.data)));
      }
    } else if (!filterDataBrand.length && !filterDataCat.length) {
      getFurnitureDataFilter(undefined, undefined, "price", sortby, page).then(
        (res) => dispatch(getFurniture(res.data))
      );
    } else if (filterDataBrand.length == 0)
      if (sortby != "") {
        getFurnitureDataFilter(
          filterDataCat,
          undefined,
          "price",
          sortby,
          page
        ).then((res) => dispatch(getFurniture(res.data)));
      } else {
        getFurnitureDataFilter(
          filterDataCat,
          undefined,
          undefined,
          undefined,
          page
        ).then((res) => dispatch(getFurniture(res.data)));
      }
    else if (filterDataCat.length == 0) {
      if (sortby != "") {
        getFurnitureDataFilter(
          undefined,
          filterDataBrand,
          "price",
          sortby,
          page
        ).then((res) => dispatch(getFurniture(res.data)));
      } else {
        getFurnitureDataFilter(
          undefined,
          filterDataBrand,
          undefined,
          undefined,
          page
        ).then((res) => dispatch(getFurniture(res.data)));
      }
    }
  }, []);
  useEffect(() => {
    const obj = { page };
    if (filterDataBrand.length && filterDataCat.length) {
      if (sortby != "") {
        obj.order = sortby;
        obj.sortby = "price";
      }
      obj.category = filterDataCat;
      obj.brands = filterDataBrand;
    } else if (filterDataBrand.length == 0) {
      if (sortby != "") {
        obj.order = sortby;
        obj.sortby = "price";
      }
      obj.category = filterDataCat;
    } else if (filterDataCat.length == 0) {
      if (sortby != "") {
        obj.order = sortby;
        obj.sortby = "price";
      }
      obj.brands = filterDataBrand;
    } else {
      if (sortby != "") {
        obj.order = sortby;
        obj.sortby = "price";
      }
    }

    setSearchParams(obj);
  }, [filterDataCat, filterDataBrand, page, sortby]);

  useEffect(() => {
    if (sortby != "") {
      dispatch(getLoading());
      getFurnitureDataWithParams({ sortby: "price", order: sortby }, page).then(
        (res) => {
          dispatch(getFurniture(res.data));
        }
      );
    } else {
      dispatch(getLoading());
      dispatch(getFurnitureData());
    }
  }, []);

  useEffect(() => {
    const obj = {
      page,
      order: sortby,
      sortby: "price",
    };
    if (brands.length > 0) {
      obj.brands = brands;
    }
    if (category.length > 0) {
      obj.category = category;
    }
    if (sortby != "") setSearchParams(obj);
    else setSearchParams({ page });
  }, [sortby]);

  const handleSort = (e) => {
    setSort(e.target.value);
  };
  return (
    <HStack justifyContent="flex-end" m={3}>
      <Heading fontSize={22} fontWeight="normal" marginRight={2}>
        Sort By:{" "}
      </Heading>
      <Select w={200} onChange={handleSort} className="selector">
        <option value="" selected={sortby == "" ? true : false}>
          Select option
        </option>
        <option value="desc" selected={sortby == "desc" ? true : false}>
          Price : High to Low
        </option>
        <option value="asc" selected={sortby == "asc" ? true : false}>
          Price : Low to High
        </option>
      </Select>
    </HStack>
  );
}
