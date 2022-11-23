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


export default function SortDropdown({ page, sort, setSort, filterDataCat, filterDataBrand }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [order, setOrder] = useState("");
  const dispatch = useDispatch();
  const [category, setCategory] = useState(searchParams.getAll("category") || []);
  const [brands, setBrands] = useState(searchParams.getAll("brands") || []);

  // useEffect(() => {
  //   if (sort !="") {
  //     dispatch(getLoading());
  //     getFurnitureDataWithParams({ _sort: "price", _order: sort },page).then(
  //       (res) => {
  //         dispatch(getFurniture(res.data));
  //       }
  //     );
  //   }
  //   else {
  //     dispatch(getLoading());
  //     dispatch(getFurnitureData());
  //   }
  // }, [sort,page,filterDataBrand,filterDataCat]);

  useEffect(() => {
    dispatch(getLoading())
    if (filterDataBrand.length && filterDataCat.length) {
      if (sort != "") {
        getFurnitureDataFilter(filterDataCat, filterDataBrand, "price", sort, page).then((res) => dispatch(getFurniture(res.data)))
      } else {
        getFurnitureDataFilter(filterDataCat, filterDataBrand, undefined, undefined, page).then((res) => dispatch(getFurniture(res.data)))
      }
    }
    else if (filterDataBrand.length == 0)
      if (sort != "") {
        getFurnitureDataFilter(filterDataCat, undefined, "price", sort, page).then((res) => dispatch(getFurniture(res.data)))
      } else {
        getFurnitureDataFilter(filterDataCat, undefined, undefined, undefined, page).then((res) => dispatch(getFurniture(res.data)))
      }
    else if (filterDataCat.length == 0) {
      if (sort != "") {
        getFurnitureDataFilter(undefined, filterDataBrand, "price", sort, page).then((res) => dispatch(getFurniture(res.data)))
      } else {
        getFurnitureDataFilter(undefined, filterDataBrand, undefined, undefined, page).then((res) => dispatch(getFurniture(res.data)))
      }
    } else {
      getFurnitureDataFilter(undefined, undefined, sort, page).then((res) => dispatch(getFurniture(res.data)))
    }
  }, [filterDataCat, filterDataBrand, page, sort])

  useEffect(() => {
    dispatch(getLoading())
    if (filterDataBrand.length && filterDataCat.length) {
      if (sort != "") {
        getFurnitureDataFilter(filterDataCat, filterDataBrand, "price", sort, page).then((res) => dispatch(getFurniture(res.data)))
      } else {
        getFurnitureDataFilter(filterDataCat, filterDataBrand, undefined, undefined, page).then((res) => dispatch(getFurniture(res.data)))
      }
    }else if(!filterDataBrand.length && !filterDataCat.length) {
      getFurnitureDataFilter(undefined, undefined,"price", sort, page).then((res) => dispatch(getFurniture(res.data)))
    }
    else if (filterDataBrand.length == 0)
      if (sort != "") {
        getFurnitureDataFilter(filterDataCat, undefined, "price", sort, page).then((res) => dispatch(getFurniture(res.data)))
      } else {
        getFurnitureDataFilter(filterDataCat, undefined, undefined, undefined, page).then((res) => dispatch(getFurniture(res.data)))
      }
    else if (filterDataCat.length == 0) {
      if (sort != "") {
        getFurnitureDataFilter(undefined, filterDataBrand, "price", sort, page).then((res) => dispatch(getFurniture(res.data)))
      } else {
        getFurnitureDataFilter(undefined, filterDataBrand, undefined, undefined, page).then((res) => dispatch(getFurniture(res.data)))
      }
    } 
  }, [])
  useEffect(() => {
    const obj = { page };
    if (filterDataBrand.length && filterDataCat.length) {
      if (sort != "") {
        obj.order = sort;
        obj.sort = "price"
      }
      obj.category = filterDataCat;
      obj.brands = filterDataBrand
    }
    else if (filterDataBrand.length == 0) {
      if (sort != "") {
        obj.order = sort;
        obj.sort = "price"
      }
      obj.category = filterDataCat;
    }
    else if (filterDataCat.length == 0) {
      if (sort != "") {
        obj.order = sort;
        obj.sort = "price"
      }
      obj.brands = filterDataBrand
    } else {
      if (sort != "") {
        obj.order = sort;
        obj.sort = "price"
      }
    }

    setSearchParams(obj);
  }, [filterDataCat, filterDataBrand, page, sort])

  useEffect(() => {
    if (sort !="") {
      dispatch(getLoading());
      getFurnitureDataWithParams({ _sort: "price", _order: sort },page).then(
        (res) => {
          dispatch(getFurniture(res.data));
        }
      );
    }
    else {
      dispatch(getLoading());
      dispatch(getFurnitureData());   
    }
  }, []);


  // useEffect(() => {
  //   dispatch(getLoading())
  //   if (brands.length && category.length) {
  //     if (sort != "") {
  //       getFurnitureDataFilter(category, brands, "price", sort).then((res) => dispatch(getFurniture(res.data)))
  //     } else {
  //       getFurnitureDataFilter(category, brands, undefined, undefined).then((res) => dispatch(getFurniture(res.data)))
  //     }
  //   }
  //   else if (brands.length == 0)
  //     if (sort != "") {
  //       getFurnitureDataFilter(category, undefined, "price", sort).then((res) => dispatch(getFurniture(res.data)))
  //     } else {
  //       getFurnitureDataFilter(category, undefined, undefined, undefined).then((res) => dispatch(getFurniture(res.data)))
  //     }
  //   else if (category.length == 0) {
  //     if (sort != "") {
  //       getFurnitureDataFilter(undefined, brands, "price", sort).then((res) => dispatch(getFurniture(res.data)))
  //     } else {
  //       getFurnitureDataFilter(undefined, brands, undefined, undefined).then((res) => dispatch(getFurniture(res.data)))
  //     }
  //   } else {
  //     dispatch(getFurnitureData());
  //   }
  // }, [category, brands])

  useEffect(() => {
    const obj = {
      page,
      order:sort,
      "_sort": "price"
    }
    if (brands.length > 0) {
      obj.brands = brands;
    }
    if (category.length > 0) {
      obj.category = category;
    }
    if (sort != "") setSearchParams(obj)
    else setSearchParams({ page });
  }, [sort])

  const handleSort = (e) => {
    setSort(e.target.value);
  };
  return (
    <HStack justifyContent="flex-end" m={3}>
      <Heading fontSize={22} fontWeight="normal" marginRight={2}>
        Sort By:{" "}
      </Heading>
      <Select w={200} onChange={handleSort} className="selector">
        <option value="" selected={sort=="" ? true : false}>Select option</option>
        <option value="desc" selected={sort=="desc" ? true : false}>Price : High to Low</option>
        <option value="asc" selected={sort=="asc" ? true : false}>Price : Low to High</option>
      </Select>
    </HStack>
  );
}



