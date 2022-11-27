import {
  Badge,
  Box,
  Image,
  Icon,
  Container,
  Center,
  Button,
  Spinner,
  Heading,
  Skeleton,
} from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import { Grid, GridItem } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getFurniture,
  getFurnitureData,
  getFurnitureDataFilter,
  getLoading,
} from "../../redux/action";
import { Link, useSearchParams } from "react-router-dom";

function AirbnbCard({ elements }) {
  const [isHovered, setIsHovered] = useState(false);
  const property = {
    imageUrl: elements.thumbnails[0][6],
    imageAlt: "Rear view of modern home with pool",
    badge: elements.badges,
    title: elements.title,
    formattedPrice: elements.price,
    reviewCount: elements.reviews,
    rating: elements.rating,
    delivery: elements.delivery.free,
    id: elements.position,
  };

  return (
    <Link to={`/product/${property.id}`}>
      <Box
        maxW="sm"
        borderWidth="1px"
        overflow="hidden"
        onMouseEnter={() => {
          setIsHovered(true);
        }}
        onMouseLeave={() => {
          setIsHovered(false);
        }}
      >
        <Image src={property.imageUrl} alt={property.imageAlt} />

        <Box p="6" pl={1}>
          <Box
            fontWeight="bold"
            as="h1"
            lineHeight="tight"
            noOfLines={1}
            textAlign="left"
            color="red.600"
            fontSize="19px"
          >
            Sales Starts at USD {property.formattedPrice}
          </Box>

          <Box
            display="flex"
            mt="2"
            alignItems="center"
            style={{ display: isHovered ? "none" : "flex" }}
          >
            {Array(5)
              .fill("")
              .map((_, i) => (
                <StarIcon
                  key={i}
                  color={i < property.rating ? "yellow.500" : "gray.300"}
                />
              ))}
            <Box as="span" ml="2" color="gray.600" fontSize="sm">
              {property.reviewCount}
            </Box>
          </Box>
          <Box
            fontWeight="semibold"
            as="h3"
            lineHeight="tight"
            noOfLines={1}
            textAlign="left"
          >
            {property.title}
          </Box>
          {property.delivery && (
            <Box textAlign="left" mt={2}>
              <Badge colorScheme="green">Free Delivery</Badge>
            </Box>
          )}
        </Box>
      </Box>
    </Link>
  );
}
export const Products = ({
  page,
  setPage,
  sortby,
  filterDataCat,
  filterDataBrand,
}) => {
  const state = useSelector((state) => state);
  const { loading, error, furnitures } = state;
  const [totalItem, setTotalItems] = useState(0);
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();
  // -------------
  // console.log(totalItem, "totalllll");
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
        ).then((res) => {
          setTotalItems(res.data.total);
          dispatch(getFurniture(res.data));
        });
      } else {
        getFurnitureDataFilter(
          filterDataCat,
          filterDataBrand,
          undefined,
          undefined,
          page
        ).then((res) => {
          setTotalItems(res.data.total);
          dispatch(getFurniture(res.data));
        });
      }
    } else if (filterDataBrand.length == 0)
      if (sortby != "") {
        getFurnitureDataFilter(
          filterDataCat,
          undefined,
          "price",
          sortby,
          page
        ).then((res) => {
          setTotalItems(res.data.total);
          dispatch(getFurniture(res.data));
        });
      } else {
        getFurnitureDataFilter(
          filterDataCat,
          undefined,
          undefined,
          undefined,
          page
        ).then((res) => {
          setTotalItems(res.data.total);
          dispatch(getFurniture(res.data));
        });
      }
    else if (filterDataCat.length == 0) {
      if (sortby != "") {
        getFurnitureDataFilter(
          undefined,
          filterDataBrand,
          "price",
          sortby,
          page
        ).then((res) => {
          setTotalItems(res.data.total);
          dispatch(getFurniture(res.data));
        });
      } else {
        getFurnitureDataFilter(
          undefined,
          filterDataBrand,
          undefined,
          undefined,
          page
        ).then((res) => {
          setTotalItems(res.data.total);
          dispatch(getFurniture(res.data));
        });
      }
    } else {
      getFurnitureDataFilter(undefined, undefined, sortby, page).then((res) => {
        setTotalItems(res.data.total);
        dispatch(getFurniture(res.data));
      });
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
        ).then((res) => {
          setTotalItems(res.data.total);
          dispatch(getFurniture(res.data));
        });
      } else {
        getFurnitureDataFilter(
          filterDataCat,
          filterDataBrand,
          undefined,
          undefined,
          page
        ).then((res) => {
          setTotalItems(res.data.total);
          dispatch(getFurniture(res.data));
        });
      }
    } else if (!filterDataBrand.length && !filterDataCat.length) {
      getFurnitureDataFilter(undefined, undefined, "price", sortby, page).then(
        (res) => {
          setTotalItems(res.data.total);
          dispatch(getFurniture(res.data));
        }
      );
    } else if (filterDataBrand.length == 0)
      if (sortby != "") {
        getFurnitureDataFilter(
          filterDataCat,
          undefined,
          "price",
          sortby,
          page
        ).then((res) => {
          setTotalItems(res.data.total);
          dispatch(getFurniture(res.data));
        });
      } else {
        getFurnitureDataFilter(
          filterDataCat,
          undefined,
          undefined,
          undefined,
          page
        ).then((res) => {
          setTotalItems(res.data.total);
          dispatch(getFurniture(res.data));
        });
      }
    else if (filterDataCat.length == 0) {
      if (sortby != "") {
        getFurnitureDataFilter(
          undefined,
          filterDataBrand,
          "price",
          sortby,
          page
        ).then((res) => {
          setTotalItems(res.data.total);
          dispatch(getFurniture(res.data));
        });
      } else {
        getFurnitureDataFilter(
          undefined,
          filterDataBrand,
          undefined,
          undefined,
          page
        ).then((res) => {
          setTotalItems(res.data.total);
          dispatch(getFurniture(res.data));
        });
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

  // ---------
  if (loading) {
    return (
      <Center>
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            sm: "repeat(1, 1fr)",
            md: "repeat(1, 1fr)",
            lg: "repeat(3, 1fr)",
          }}
          gap={6}
          ml={3}
        >
          <Skeleton width="360px" height="500px"></Skeleton>
          <Skeleton width="360px" height="500px"></Skeleton>
          <Skeleton width="360px" height="500px"></Skeleton>
        </Grid>
      </Center>
    );
  }
  if (error) {
    return <Heading>Something Went Wrong.. Please Refresh</Heading>;
  }
  return (
    <>
      <Center key={Math.random()}>
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            sm: "repeat(1, 1fr)",
            md: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)",
          }}
          gap={{
            base: 2,
            sm: 2,
            md: 4,
            lg: 6,
          }}
        >
          {furnitures.map((elm) => (
            <AirbnbCard key={elm.position} elements={elm} />
          ))}
        </Grid>
      </Center>
      <Center
        pos={"relative"}
        left={{
          base: 0,
          sm: 0,
          md: 0,
          lg: "770px",
        }}
        mb="30px"
        mt="10px"
      >
        <Button
          colorScheme="blue"
          onClick={() => setPage((page) => +page - 1)}
          borderRadius="50%"
          disabled={page == 1}
        >
          -
        </Button>
        <Button colorScheme="white" color="black" disabled="true">
          {page}
        </Button>
        <Button
          colorScheme="blue"
          onClick={() => setPage((page) => +page + 1)}
          borderRadius="50%"
          disabled={page >= totalItem / 9}
        >
          +
        </Button>
      </Center>
    </>
  );
};
