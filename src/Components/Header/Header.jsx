import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Image,
  Input,
  SimpleGrid,
  Spacer,
  Text,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import React from "react";
import "./Header.css";
import { CgShoppingCart } from "react-icons/cg";
import {
  AiOutlineUser,
  AiOutlineHeart,
  AiOutlineLock,
  AiOutlineSearch,
  AiOutlineLeft,
  AiOutlineRight,
  AiOutlineMenu,
} from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addToCart, signoutPerformed } from "../../redux/action";
import { getToCartItem } from "../../Pages/details-page/detailsPageHelper";

export const Header = () => {
  const { cart, isAuth } = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    getToCartItem().then((res) => {
      dispatch(addToCart(res.data));
    });
  }, []);

  const handleSignout = () => {
    dispatch(signoutPerformed());
    navigate("/");
  };
  return (
    <Container id="header-container" maxW={"2xl"}>
      <Box id="navbar">
        <Flex id="nav_1" textAlign={"left"} pl={"20px"} align={"center"}>
          <Text fontSize={"12px"} color={"blackAlpha.700"}>
            Ships to:
          </Text>
          <Image
            m={"0 10px"}
            boxSize={"30px"}
            borderRadius={"50%"}
            src="https://ak1.ostkcdn.com/img/mxc/intFlag_IN.gif"
            alt=""
          />
          <Text as={"b"} fontSize={"12px"}>
            INDIA
          </Text>
        </Flex>
        <Flex
          h={{
            base: "40px",
            sm: "40px",
            md: "60px",
            lg: "80px",
          }}
          align={"center"}
          justify={"space-between"}
          borderBottom={{
            base: "0",
            sm: "0",
            md: "0",
            lg: "1px solid #cecece",
          }}
        >
          <Link to={"/furniture"}>
            <Box id="menuDiv_hamburger" fontSize={"30px"} ml={2}>
              {" "}
              <AiOutlineMenu />
            </Box>
          </Link>
          <Flex gap={"2px"} alignItems={"center"}>
            <Link to={"/"}>
              <Image
                mt={"5px"}
                ml={{
                  base: "15px",
                  sm: "15px",
                  md: "15px",
                  lg: "0px",
                }}
                w={{
                  base: "30px",
                  sm: "30px",
                  md: "30px",
                  lg: "30px",
                }}
                h={{
                  base: "30px",
                  sm: "30px",
                  md: "30px",
                  lg: "30px",
                }}
                src="https://media.glassdoor.com/sqll/14907/overstock-com-squarelogo-1529535998697.png"
                alt=""
              />
            </Link>
            <Link
              to={"/"}
              _hover={{
                textDecoration: "none",
              }}
              letterSpacing={"tighter"}
              end
            >
              <Heading
                fontWeight={"400"}
                fontSize={{
                  base: "0",
                  sm: "0",
                  md: "0",
                  lg: "35px",
                }}
              >
                overstock
              </Heading>
            </Link>
          </Flex>
          <Flex id="searchBox_Div">
            <Input
              borderRadius={"5px 0 0 5px"}
              h={"35px"}
              w={"4xl"}
              type="text"
              placeholder="Search... everything you find ships for free"
              _focus={{
                outline: "none",
              }}
            />
            <Button
              bg={"#ff1f2c"}
              borderRadius={"0 5px 5px 0"}
              h={"35px"}
              p={0}
            >
              <AiOutlineSearch fontSize={28} fontWeight={"800"} color="white" />{" "}
            </Button>
          </Flex>
          <Flex
            gap={5}
            align={"center"}
            justify={"space-between"}
            pr={"20px"}
            id={"accountDiv-Parent"}
          >
            <Box id="accountDiv">
              <Link to={"/signup"}>
                <Flex direction={"column"} align={"center"}>
                  <AiOutlineUser fontSize={"30px"} />
                  <Text fontSize={"13px"} color={"blackAlpha.800"}>
                    Account
                  </Text>
                </Flex>
              </Link>
              <Box id="account-hover">
                {!isAuth ? (
                  <>
                    <Link to={"/signup"}>
                      <Flex align={"center"} justify={"space-between"} mb={2}>
                        Sign in <AiOutlineRight />
                      </Flex>
                    </Link>
                    <Link to={"/signup"}>
                      <Flex align={"center"} justify={"space-between"} mb={2}>
                        Create an Account <AiOutlineRight />
                      </Flex>
                    </Link>
                  </>
                ) : null}

                <Text mb={2}>My Account</Text>
                <Text mb={2}>My Reviews</Text>
                <Text mb={2}>My Orders</Text>
                <Text>My Help</Text>
                {isAuth ? (
                  <>
                    <br />
                    <Link to={"/"}>
                      <Flex
                        align={"center"}
                        justify={"space-between"}
                        mb={2}
                        onClick={handleSignout}
                      >
                        Sign out <AiOutlineRight />
                      </Flex>
                    </Link>
                  </>
                ) : null}
              </Box>
            </Box>
            <Box>
              <Flex direction={"column"} align={"center"}>
                <AiOutlineHeart fontSize={"30px"} />
                <Text fontSize={"13px"} color={"blackAlpha.800"}>
                  Lists
                </Text>
              </Flex>
            </Box>
            <Box>
              <Link
                to={isAuth ? "/cart" : "/signup"}
                _hover={{
                  textDecoration: "none",
                }}
                end
              >
                <Flex direction={"column"} align={"center"}>
                  <CgShoppingCart fontSize={"30px"} />
                  {isAuth ? (
                    <Text
                      background={"white"}
                      p={"0 2px"}
                      pos={"absolute"}
                      top={"42px"}
                      right={"151px"}
                      zIndex={10}
                      fontSize="14px"
                      color={"red"}
                      fontWeight="800"
                    >
                      {typeof cart == "string" ? 0 : cart.length}
                    </Text>
                  ) : null}

                  <Text fontSize={"13px"} color={"blackAlpha.800"}>
                    Cart
                  </Text>
                </Flex>
              </Link>
            </Box>
            <Box>
              <Link to={"/checkout"}>
                {isAuth ? (
                  <Button
                    bg={"#2f3337"}
                    color={"white"}
                    fontSize={"15px"}
                    fontWeight={"400"}
                    p={"0px 10px"}
                    _hover={{
                      background: "blackAlpha.700",
                    }}
                  >
                    <AiOutlineLock /> Check Out
                  </Button>
                ) : null}
              </Link>
            </Box>
          </Flex>
        </Flex>
        <Flex
          id="Navlinks_div"
          gap={14}
          p={"0 20px"}
          align={"center"}
          justify={"space-between"}
          borderBottom={"1px solid #cecece"}
          height={"35px"}
          fontSize={"14px"}
        >
          <Box id="dropDiv_1">
            <Link
              to={"/furniture"}
              _hover={{
                textDecoration: "none",
              }}
              end
            >
              <Text>Furniture</Text>
            </Link>
            <Box id="drop_1">
              <Box>
                <Text id="brand_p" class="livingRoom">
                  Living Room furniture
                </Text>
                <Text class="sofa">Sofas & Couches</Text>
                <Text class="sectional">Sectionals</Text>
                <Text class="bench">Benches</Text>
                <Text class="ottoman">Ottomans & Poufs</Text>
                <Text class="accentChair">Accent Chairs</Text>
                <Text class="Recliner">Recliners</Text>
                <Text class="accentTables">Coffee & Accent Tables</Text>
                <Text class="tvStand">TV Stands</Text>
                <Text id="brand_p" class="patio">
                  Patio & Outdoor furniture
                </Text>
                <Text class="patio">Patio Furniture Sets</Text>
                <Text class="chair">Sofas, Chairs & Sectionals</Text>
                <Text class="diningSet">Dining Sets</Text>
                <Text class="sideTable">Coffee & Side Tables</Text>
                <Text class="chaiseLounghes">Chaise Lounghes</Text>
                <Text class="chair">Adirondack Chairs</Text>
                <Text class="swing">Hammocks & Swings</Text>
              </Box>
              <Box>
                <Text id="brand_p" class="bedroom">
                  Bedroom Furniture
                </Text>
                <Text class="bed">Beds</Text>
                <Text class="bedroomSet">Bedroom Sets</Text>
                <Text class="headboard">Headboards</Text>
                <Text class="bedFrame">Bed Frames</Text>
                <Text class="dressers">Dressers & Chests</Text>
                <Text class="nightstand">Nightstands</Text>
                <Text class="armoir">Armoires & Wardrobes</Text>
                <Text class="mattress">Mattress</Text>
                <Text class="kidsBed">Kids Beds</Text>
                <Text id="brand_p" class="officeFurniture">
                  Office Furniture
                </Text>
                <Text class="desk">Desks</Text>
                <Text class="officeChair">Office Chairs</Text>
                <Text class="smallSpaceDesk">Small Space Desks</Text>
                <Text class="officeShelves">Office Shelves & storage</Text>
                <Text class="fileCabinet">File Cabinets</Text>
                <Text class="officeTable">Office & Conference Tables</Text>
              </Box>
              <Box>
                <Text id="brand_p" class="bar">
                  Dining Kitchen & Bar
                </Text>
                <Text class="diningSet">Kitchen & Dining Sets</Text>
                <Text class="diningChair">Kitchen & Dining Chairs</Text>
                <Text class="dining">Kitchen & Dining Tables</Text>
                <Text class="barStool">Counter & Bar Stools</Text>
                <Text class="barTable">Bar Tables</Text>
                <Text class="buffet">Buffets & Sideboards</Text>
                <Text class="homeBar">Home Bars</Text>
                <Text class="kitchenIsland">Kitchen Islands & carts</Text>
                <Text class="kitchen">Kitchen Furniture</Text>
                <Text id="brand_p">More</Text>
                <Text class="diningTable">Kitchen & Dining Tables</Text>
                <Text class="barStool">Counter & Bar Stools</Text>
                <Text class="barTable">Bar Tables</Text>
                <Text class="buffets">Buffets & Sideboards</Text>
                <Text class="homeBar">Home Bars</Text>
                <Text class="kitchenIsland">Kitchen Islands & carts</Text>
                <Text class="kitchen">Kitchen Furniture</Text>
              </Box>
              <Box>
                <Image
                  w={"300px"}
                  p={"30px 30px 0 0"}
                  src="https://ak1.ostkcdn.com/images/products/14549401/Francie-Mid-Century-Modern-5-Piece-Dining-Set-by-Christopher-Knight-Home-ffcb8059-dae0-49ca-ae4d-1fec925b27ba_1000.jpg?imwidth=320"
                  alt=""
                />
                <Text id="extraOff_p">Extra 15% off</Text>
                <Text>Select Furniture by Christopher Knight</Text>
                <Text id="brand_p">More Ways to Shop</Text>
                <Text id="red_p">Featured sales</Text>
                <Text id="red_p">New Arrivals</Text>
                <Text id="red_p">Clearance</Text>
                <Text id="red_p">Furniture Advice</Text>
              </Box>
            </Box>
          </Box>
          <Box id="dropDiv_2">
            <Link to={"/rugs"} end>
              <Text>Rugs</Text>
            </Link>
            <Box id="drop_2">
              <Box>
                <Text id="brand_p" class="rug">
                  Area Rugs By Size
                </Text>
                <p class="rug">3'x5'</p>
                <p class="rug">4'x6'</p>
                <p class="rug">5'x8'</p>
                <p class="rug">6'x9'</p>
                <p class="rug">7'x9'</p>
                <p class="rug">8'x10'</p>
                <p class="rug">9'x10'</p>
                <p class="rug">10'x14'</p>
                <p class="rug">Runner</p>
                <Text id="brand_p" class="trendingRug">
                  Trending Rugs
                </Text>
                <p class="washableRug">Washable Rugs</p>
                <p class="roundRug">Round Rugs</p>
                <p class="shagRug">Shag Rugs</p>
                <p class="woolRug">Wool Rugs</p>
                <p class="juteRug">Jute Rugs</p>
                <p class="cowhideRug">Cowhide Rugs</p>
              </Box>
              <Box>
                <Text id="brand_p" class="rug">
                  Area Rugs By Color
                </Text>
                <p class="greyRug">Grey</p>
                <p class="blueRug">Blue</p>
                <p class="ivoryRug">Ivory</p>
                <p class="whiteRug">White</p>
                <p class="blackRug">Black</p>
                <p class="redRug">Red</p>
                <p class="brownRug">Brown</p>
                <p class="orangeRug">Orange</p>
                <p class="pinkRug">Pink</p>
                <Text id="brand_p" class="rug">
                  Area Rugs By Style
                </Text>
                <p class="modernRug">Modern & Contemporary</p>
                <p class="bohemianRug">Bohemian & Eclectic</p>
                <p class="PersianRug">Persian</p>
                <p class="geomatricRug">Geometric</p>
                <p class="abstractRug">Abstract</p>
                <p class="solidRug">Solid</p>
              </Box>
              <Box>
                <Text id="brand_p" class="rug">
                  Rugs By Type
                </Text>
                <p class="rug">Area Rugs</p>
                <p class="outdoorRug">Outdoor Rugs</p>
                <p class="rugPad">Rug Pads</p>
                <p class="rug">One of a Kind Rugs</p>
                <p class="kidRug">Kids & Tweens Rugs</p>
                <p class="doorMat">Door Mats</p>
                <p class="stairTreads">Stair Treads</p>
                <p class="kitchenMat">Kitchen Mats & Rugs</p>
                <p class="BathRug">Bath & Rugs</p>
              </Box>
              <Box>
                <Image
                  w={"300px"}
                  p={"30px 30px 0 0"}
                  src="https://ak1.ostkcdn.com/images/products/is/images/direct/de606948ccce443204e01475ccb723975954f245/Balta-Levine-Modern-Geometric-Berber-Shag-Area-Rug.jpg?imwidth=320"
                  alt=""
                />
                <Text id="extraOff_p">Extra 15% off</Text>
                <Text>Select Furniture by Christopher Knight</Text>
                <Text id="brand_p">More Ways to Shop</Text>
                <Text id="red_p">Featured sales</Text>
                <Text id="red_p">New Arrivals</Text>
                <Text id="red_p">Clearance</Text>
                <Text id="red_p">Furniture Advice</Text>
              </Box>
            </Box>
          </Box>
          <Box id="dropDiv_3">
            <Link to={"/decor"}>
              <Text>Decor</Text>
            </Link>
            <Box id="drop_3">
              <Box>
                <Text id="brand_p" class="mirror">
                  Mirrors
                </Text>
                <p class="wallMirror">Wall Mirrors</p>
                <p class="bathroomMirror">Bathroom Vanity Mirrors</p>
                <p class="floorMirror">Floor Mirrors</p>
                <p class="fullLengthMirror">Full Length Mirrors</p>
                <p class="rectangularMirror">Rectangular Mirrors</p>
                <p class="roundMirror">Round Mirrors</p>
                <p class="windowMirror">Window Mirrors</p>
                <p class="mirrorSet">Mirror Sets</p>
                <Text id="brand_p" class="art">
                  Art Gallery
                </Text>
                <p class="galleryWrappedCanvas">Gallery Wrapped Canvas</p>
                <p class="canvasArt">Canvas Art</p>
                <p class="framedArt">Framed Prints</p>
                <p class="unframedArt">Unframed Prints</p>
                <p class="metalArt">Metal Art</p>
                <p class="woodWallArt">Wood wall Art</p>
                <p class="matchingArtSet">Matching Sets</p>
              </Box>
              <Box>
                <Text id="brand_p" class="decorativeAccessories">
                  Decorative Accessories
                </Text>
                <p class="indoorFireplaces">Indoor Fireplaces</p>
                <p class="outdoorDecor">Outdoor Decor</p>
                <p class="accentPieces">Accent Pieces</p>
                <p class="slkPlants">Silk Plants</p>
                <p class="candles">Candles and Holders</p>
                <p class="vase">Vases</p>
                <p class="roomDivider">Room Dividers</p>
                <p class="photoFrame">Photo Frames and Albums</p>
                <p class="planter">Planters, Hangers & Stands</p>
                <Text id="brand_p" class="windowTreatments">
                  Window Treatments
                </Text>
                <p class="curtain">Curtains & Drapes</p>
                <p class="blinds">Blinds & Shades</p>
                <p class="curtainRod">Curtain Rods & Hardware</p>
                <p class="sheerCurtain">Sheer Curtains</p>
                <p class="blackotCurtain">Blackout Curtains</p>
                <p class="kitchenCurtain">Kitchen Curtains</p>
                <p class="valances">Valances</p>
              </Box>
              <Box>
                <Text id="brand_p" class="wallDecor">
                  Wall Decor
                </Text>
                <p class="decorativeShelves">Decorative Shelves</p>
                <p class="wallTapestries">Wall Tapestries</p>
                <p class="clock">Clocks</p>
                <p class="wallClocks">Wall Decals</p>
                <p class="acrylicWallArt">Acrylic Wall Art</p>
                <Text id="brand_p" class="throwPillow">
                  Throw Pillows
                </Text>
                <p class="accentPillow">Accent Pillows</p>
                <p class="outdoorPiloow">Outdoor Pillows</p>
                <p class="floorPillow">Floor Pillows</p>
                <p class="pouf">Poufs</p>
                <p class="pillowCover">Pillow Covers</p>
                <p class="bedRest">Bed Rest</p>
              </Box>
              <Box>
                <Image
                  w={"300px"}
                  p={"30px 30px 0 0"}
                  src="https://ak1.ostkcdn.com/images/products/is/images/direct/ee1cc0e4a0ff9956f448f775f1dcdd6c77d572fb/Glitzhome-42%22H-Halloween-Wooden-Coffin-Porch-Leaning-Decor.jpg"
                  alt=""
                />
                <Text id="extraOff_p">Extra 15% off</Text>
                <Text>Select Furniture by Christopher Knight</Text>
                <Text id="brand_p">More Ways to Shop</Text>
                <Text id="red_p">Featured sales</Text>
                <Text id="red_p">New Arrivals</Text>
                <Text id="red_p">Clearance</Text>
                <Text id="red_p">Furniture Advice</Text>
              </Box>
            </Box>
          </Box>
          <Box id="dropDiv_4">
            <Link to={"/bedding"} end>
              <Text>Bedding</Text>
            </Link>
            <Box id="drop_4">
              <Box>
                <Text id="brand_p" class="bedding">
                  Bedding
                </Text>
                <p class="comforterSet">Comforter Sets</p>
                <p class="duvetCover">Duvet Covers</p>
                <p class="bed">Bed in a Bag</p>
                <p class="quilt">Quilts & Coverlets</p>
                <p class="blanket">Blankets & Throws</p>
                <p class="showerCurtain">Shower Curtains</p>
                <p class="towel">Towels</p>
                <p class="bathroomMat">Bath & Mats</p>
                <p class="bathRobe">Bath Robes</p>
                <p class="bathAccessories">Bath Accessories</p>
                <p class="bathRobe">Bath Robes</p>
                <p class="bathRobe"> Kids Bath</p>
              </Box>
              <Box>
                <Text id="brand_p" class="beddingBasics">
                  Bedding Basics
                </Text>
                <p class="sheets">Sheets & Pillowcases</p>
                <p class="mattress">Mattress & Toppers</p>
                <p class="comforter">Comforters & Duvet Inserts</p>
                <p class="pillow">Pillows</p>
                <p class="cottonBedding">Cotton Bedding</p>
                <Text id="brand_p" class="kidsBedding">
                  Kids Bedding
                </Text>
                <p class="kidsSheet">Kids Sheets</p>
                <p class="kidComforter">Kids Comforter Sets</p>
                <p class="kidBed">Kids Bed in a Bag</p>
                <p class="kidQuilt">Kids Quilts</p>
                <p class="bed">Kids Bed Tents & Canopies</p>
                <p class="kidMattress">Kids Mattress</p>
              </Box>
              <Box>
                <Text id="brand_p" class="mattress">
                  Mattress
                </Text>
                <p class="twinMattress">Twin</p>
                <p class="twinMattress">Twin XL</p>
                <p class="fullMattress">Full</p>
                <p class="queenMattress">Queen</p>
                <p class="kingMattress">King</p>
                <p class="twinMattress">California King</p>
                <p class="airMattress">Air Mattress</p>
                <p class="mattress">Mattress in a Box</p>
                <Text id="brand_p" class="bathroomFurniture">
                  Bathroom Furniture
                </Text>
                <p class="bathroomVanities">Bathroom Vanities</p>
                <p class="bathroomMirror">Bathroom Vanity Mirrors</p>
                <p class="bathroomSink">Bathroom Sinks</p>
                <p class="bathroomFaucet">Bathroom Faucets</p>
                <p class="bathroomCabinet">Bathroom Cabinets</p>
                <p class="tub">Tubs</p>
                <p class="shower">Showers</p>
              </Box>
              <Box>
                <Image
                  w={"300px"}
                  p={"30px 30px 0 0"}
                  src="https://ak1.ostkcdn.com/images/products/is/images/direct/fa5e4b3598e2f3c6ba4a347857b5317eeaab3cb6/Barefoot-Bungalow-Topanga-Bohemian-Floral-Orange-Quilt-Set.jpg"
                  alt=""
                />
                <Text id="extraOff_p">Extra 15% off</Text>
                <Text>Select Furniture by Christopher Knight</Text>
                <Text id="brand_p">More Ways to Shop</Text>
                <Text id="red_p">Featured sales</Text>
                <Text id="red_p">New Arrivals</Text>
                <Text id="red_p">Clearance</Text>
                <Text id="red_p">Furniture Advice</Text>
              </Box>
            </Box>
          </Box>
          <Box id="dropDiv_5">
            <Link to={"/home_improvement"} end>
              <Text>Home Improve</Text>
            </Link>
            <Box id="drop_5">
              <Box>
                <Text id="brand_p" class="kitchen">
                  Kitchen
                </Text>
                <p class="rangeAndOven">ranges & Ovens</p>
                <p class="refrigerators">Refrigerators</p>
                <p class="kitchenFaucets">Kitchen Faucets</p>
                <p class="rangeAndOven">ranges & Ovens</p>
                <p class="refrigerators">Refrigerators</p>
                <p class="kitchenFaucets">Kitchen Faucets</p>
                <p class="rangeAndOven">ranges & Ovens</p>
                <p class="refrigerators">Refrigerators</p>
                <p class="kitchenFaucets">Kitchen Faucets</p>
                <Text id="brand_p" class="flooring">
                  Flooring & Wall
                </Text>
                <p class="tile">Tile</p>
                <p class="laminateFlooring">Laminate Flooring</p>
                <p class="vinylFlooring">Vinyl Flooring</p>
                <p class="wallpaper">Wallpaper</p>
                <p class="laminateFlooring">Laminate Flooring</p>
                <p class="vinylFlooring">Vinyl Flooring</p>
                <p class="wallpaper">Wallpaper</p>
              </Box>
              <Box>
                <Text id="brand_p" class="bathroom">
                  Bathroom
                </Text>
                <p class="bathroomVanities">Bathroom Vanities</p>
                <p class="bathroomMirror">Bathroom Vanity Mirrors</p>
                <p class="bathroomSink">Bathroom Sinks</p>
                <p class="bathroomFaucet">Bathroom Faucets</p>
                <p class="bathroomCabinet">Bathroom Cabinets</p>
                <p class="tub">Tubs</p>
                <p class="shower">Showers</p>
                <Text id="brand_p" class="bathroom">
                  Bathroom
                </Text>
                <p class="homeEssential">Home Essentials</p>
                <p class="vacuum">Vacuums & Floorcare</p>
                <p class="heating">Heating & Cooling</p>
                <p class="airQuality">Air Quality</p>
                <p class="sewingMachine">Sewing Machines</p>
                <p class="craftMachine">Craft Machines</p>
              </Box>
              <Box>
                <Text id="brand_p" class="storage">
                  Storage & Organization
                </Text>
                <p class="outdoorStorage">Outdoor Storage</p>
                <p class="garageStorage">Garage Storage</p>
                <p class="decorativeStorage">Decorative Storage</p>
                <p class="closetStorage">Closet Organizers</p>
                <p class="kitchenPantry">Kitchen & Pantry</p>
                <p class="cabinets">Cabinets</p>
                <p class="furnitureStorage">Furniture Storage</p>
                <p class="safes">Safes</p>
                <p class="laundry">Laundry Room</p>
              </Box>
              <Box>
                <Image
                  w={"300px"}
                  p={"30px 30px 0 0"}
                  src="https://ak1.ostkcdn.com/images/products/is/images/direct/538a45f243553fad39e5d9a2ea6d8c50c9ed0a6b/8-Shelves-Staggered-Bookshelf-Industrial-Etagere-Bookcase.jpg"
                  alt=""
                />
                <Text id="extraOff_p">Extra 15% off</Text>
                <Text>Select Furniture by Christopher Knight</Text>
                <Text id="brand_p">More Ways to Shop</Text>
                <Text id="red_p">Featured sales</Text>
                <Text id="red_p">New Arrivals</Text>
                <Text id="red_p">Clearance</Text>
                <Text id="red_p">Furniture Advice</Text>
              </Box>
            </Box>
          </Box>
          <Box id="dropDiv_6">
            <Link to={"/kitchen"} end>
              <Text>Kitchen</Text>
            </Link>
            <Box id="drop_6">
              <Box>
                <Text id="brand_p">Dinnerware</Text>
                <Text>ranges & Ovens</Text>
                <Text>Refrigerators</Text>
                <Text>Kitchen Faucets</Text>
                <Text>ranges & Ovens</Text>
                <Text>Refrigerators</Text>
                <Text>Kitchen Faucets</Text>
                <Text>ranges & Ovens</Text>
                <Text>Refrigerators</Text>
                <Text id="brand_p">Cookware & Bakeware</Text>
                <Text>Tile</Text>
                <Text>Laminate Flooring</Text>
                <Text>Laminate Flooring</Text>
                <Text>Vinyl Flooring</Text>
                <Text>Wallpaper</Text>
                <Text>Wallpaper</Text>
                <Text>Laminate Flooring</Text>
                <Text>Vinyl Flooring</Text>
                <Text>Wallpaper</Text>
              </Box>
              <Box>
                <Text id="brand_p">Kitchen Furniture</Text>
                <Text>ranges & Ovens</Text>
                <Text>Refrigerators</Text>
                <Text>Kitchen Faucets</Text>
                <Text>ranges & Ovens</Text>
                <Text>Refrigerators</Text>
                <Text>Kitchen Faucets</Text>
                <Text>ranges & Ovens</Text>
                <Text>Refrigerators</Text>
                <Text id="brand_p">Kitchen Appliances</Text>
                <Text>Tile</Text>
                <Text>Laminate Flooring</Text>
                <Text>Vinyl Flooring</Text>
                <Text>Wallpaper</Text>
                <Text>Wallpaper</Text>
                <Text>Wallpaper</Text>
                <Text>Laminate Flooring</Text>
                <Text>Vinyl Flooring</Text>
                <Text>Wallpaper</Text>
              </Box>
              <Box>
                <Text id="brand_p">Serveware</Text>
                <Text>ranges & Ovens</Text>
                <Text>Refrigerators</Text>
                <Text>Kitchen Faucets</Text>
                <Text>ranges & Ovens</Text>
                <Text>Refrigerators</Text>
                <Text>Kitchen Faucets</Text>
                <Text>ranges & Ovens</Text>
                <Text id="brand_p">Kitchen Storage</Text>
                <Text>Tile</Text>
                <Text>Laminate Flooring</Text>
                <Text>Vinyl Flooring</Text>
                <Text>Wallpaper</Text>
                <Text>Laminate Flooring</Text>
                <Text>Vinyl Flooring</Text>
                <Text>Wallpaper</Text>
                <Text>Wallpaper</Text>
                <Text>Laminate Flooring</Text>
                <Text>Vinyl Flooring</Text>
                <Text>Wallpaper</Text>
              </Box>
              <Box>
                <Image
                  w={"300px"}
                  p={"30px 30px 0 0"}
                  src="https://ak1.ostkcdn.com/images/products/is/images/direct/6a2fcd98ed80ede082617bbc17f68509457c13f9/Wooden-Round-Pastry-Serving-Plate-Rectangle-Food-Dish-Dried-Fruit-Tray-Tableware.jpg"
                  alt=""
                />
                <Text id="extraOff_p">Extra 15% off</Text>
                <Text>Select Furniture by Christopher Knight</Text>
                <Text id="brand_p">More Ways to Shop</Text>
                <Text id="red_p">Featured sales</Text>
                <Text id="red_p">New Arrivals</Text>
                <Text id="red_p">Clearance</Text>
                <Text id="red_p">Furniture Advice</Text>
              </Box>
            </Box>
          </Box>
          <Box id="dropDiv_7">
            <Link to={"/outdoor"} end>
              <Text>Outdoor</Text>
            </Link>
            <Box id="drop_7">
              <Box>
                <Text id="brand_p">Dinnerware</Text>
                <Text>ranges & Ovens</Text>
                <Text>Refrigerators</Text>
                <Text>Kitchen Faucets</Text>
                <Text>ranges & Ovens</Text>
                <Text>Refrigerators</Text>
                <Text>Refrigerators</Text>
                <Text>Kitchen Faucets</Text>
                <Text id="brand_p">Cookware & Bakeware</Text>
                <Text>Tile</Text>
                <Text>Vinyl Flooring</Text>
                <Text>Wallpaper</Text>
                <Text>Laminate Flooring</Text>
                <Text>Vinyl Flooring</Text>
                <Text>Wallpaper</Text>
                <Text>Laminate Flooring</Text>
                <Text>Vinyl Flooring</Text>
                <Text>Wallpaper</Text>
              </Box>
              <Box>
                <Text id="brand_p">Kitchen Furniture</Text>
                <Text>ranges & Ovens</Text>
                <Text>Refrigerators</Text>
                <Text>Kitchen Faucets</Text>
                <Text>ranges & Ovens</Text>
                <Text>Refrigerators</Text>
                <Text>Kitchen Faucets</Text>
                <Text>Refrigerators</Text>
                <Text>Kitchen Faucets</Text>
                <Text id="brand_p">Kitchen Appliances</Text>
                <Text>Tile</Text>
                <Text>Laminate Flooring</Text>
                <Text>Vinyl Flooring</Text>
                <Text>Wallpaper</Text>
                <Text>Laminate Flooring</Text>
                <Text>Vinyl Flooring</Text>
                <Text>Wallpaper</Text>
              </Box>
              <Box>
                <Text id="brand_p">Serveware</Text>
                <Text>ranges & Ovens</Text>
                <Text>Refrigerators</Text>
                <Text>Kitchen Faucets</Text>
                <Text>ranges & Ovens</Text>
                <Text>Refrigerators</Text>
                <Text>Kitchen Faucets</Text>
                <Text>ranges & Ovens</Text>
                <Text id="brand_p">Kitchen Storage</Text>
                <Text>Tile</Text>
                <Text>Laminate Flooring</Text>
                <Text>Vinyl Flooring</Text>
                <Text>Wallpaper</Text>
                <Text>Laminate Flooring</Text>
                <Text>Laminate Flooring</Text>
                <Text>Vinyl Flooring</Text>
                <Text>Wallpaper</Text>
              </Box>
              <Box>
                <Image
                  w={"300px"}
                  p={"30px 30px 0 0"}
                  src="https://ak1.ostkcdn.com/images/products/is/images/direct/97c88a8d00c67dc026fe0a2f3291c947cc5d8ca1/Vernon-Outdoor-Outdoor-50000-BTU-Rectangular-Fire-Pit-with-Tank-Holder-by-Christopher-Knight-Home.jpg"
                  alt=""
                />
                <Text id="extraOff_p">Extra 15% off</Text>
                <Text>Select Furniture by Christopher Knight</Text>
                <Text id="brand_p">More Ways to Shop</Text>
                <Text id="red_p">Featured sales</Text>
                <Text id="red_p">New Arrivals</Text>
                <Text id="red_p">Clearance</Text>
                <Text id="red_p">Furniture Advice</Text>
              </Box>
            </Box>
          </Box>
          <Box id="dropDiv_9">
            <Link to={"/lighting"} end>
              <Text>Lighting</Text>
            </Link>
            <Box id="drop_9">
              <Box>
                <Text id="brand_p">Dinnerware</Text>
                <Text>ranges & Ovens</Text>
                <Text>Refrigerators</Text>
                <Text>Kitchen Faucets</Text>
                <Text>ranges & Ovens</Text>
                <Text>Refrigerators</Text>
                <Text>Kitchen Faucets</Text>
                <Text>ranges & Ovens</Text>
                <Text>Refrigerators</Text>
                <Text>Kitchen Faucets</Text>
                <Text id="brand_p">Cookware & Bakeware</Text>
                <Text>Tile</Text>
                <Text>Laminate Flooring</Text>
                <Text>Vinyl Flooring</Text>
                <Text>Wallpaper</Text>
                <Text>Laminate Flooring</Text>
                <Text>Vinyl Flooring</Text>
                <Text>Wallpaper</Text>
              </Box>
              <Box>
                <Text id="brand_p">Kitchen Furniture</Text>
                <Text>ranges & Ovens</Text>
                <Text>Refrigerators</Text>
                <Text>Kitchen Faucets</Text>
                <Text>ranges & Ovens</Text>
                <Text>Refrigerators</Text>
                <Text>Kitchen Faucets</Text>
                <Text>ranges & Ovens</Text>
                <Text>Kitchen Faucets</Text>
                <Text id="brand_p">Kitchen Appliances</Text>
                <Text>Tile</Text>
                <Text>Laminate Flooring</Text>
                <Text>Vinyl Flooring</Text>
                <Text>Wallpaper</Text>
                <Text>Laminate Flooring</Text>
                <Text>Wallpaper</Text>
                <Text>Laminate Flooring</Text>
              </Box>
              <Box>
                <Text id="brand_p">Serveware</Text>
                <Text>ranges & Ovens</Text>
                <Text>Refrigerators</Text>
                <Text>Kitchen Faucets</Text>
                <Text>ranges & Ovens</Text>
                <Text>Kitchen Faucets</Text>
                <Text>ranges & Ovens</Text>
                <Text id="brand_p">Kitchen Storage</Text>
                <Text>Tile</Text>
                <Text>Laminate Flooring</Text>
                <Text>Vinyl Flooring</Text>
                <Text>Wallpaper</Text>
                <Text>Laminate Flooring</Text>
                <Text>Vinyl Flooring</Text>
                <Text>Wallpaper</Text>
              </Box>
              <Box>
                <Image
                  w={"300px"}
                  p={"30px 30px 0 0"}
                  src="https://ak1.ostkcdn.com/images/products/28594799/The-Curated-Nomad-Nayla-Nautical-Green-Table-Lamp-with-Burlap-Shade-1cd62ef7-5283-459d-b500-48fa127d79c7_320.jpg"
                  alt=""
                />
                <Text id="extraOff_p">Extra 15% off</Text>
                <Text>Select Furniture by Christopher Knight</Text>
                <Text id="brand_p">More Ways to Shop</Text>
                <Text id="red_p">Featured sales</Text>
                <Text id="red_p">New Arrivals</Text>
                <Text id="red_p">Clearance</Text>
                <Text id="red_p">Furniture Advice</Text>
              </Box>
            </Box>
          </Box>
          <Box id="dropDiv_10">
            <Link to={"/kids_baby"} end>
              <Text>Kids & Baby</Text>
            </Link>
            <Box id="drop_10">
              <Box>
                <Text id="brand_p">Dinnerware</Text>
                <Text>ranges & Ovens</Text>
                <Text>Refrigerators</Text>
                <Text>Kitchen Faucets</Text>
                <Text>ranges & Ovens</Text>
                <Text>Refrigerators</Text>
                <Text>Kitchen Faucets</Text>
                <Text>ranges & Ovens</Text>
                <Text>Refrigerators</Text>

                <Text id="brand_p">Cookware & Bakeware</Text>
                <Text>Tile</Text>
                <Text>Laminate Flooring</Text>
                <Text>Vinyl Flooring</Text>
                <Text>Wallpaper</Text>
                <Text>Laminate Flooring</Text>
                <Text>Vinyl Flooring</Text>
              </Box>
              <Box>
                <Text id="brand_p">Kitchen Furniture</Text>
                <Text>ranges & Ovens</Text>
                <Text>Refrigerators</Text>
                <Text>Kitchen Faucets</Text>
                <Text>ranges & Ovens</Text>
                <Text>Refrigerators</Text>
                <Text>Kitchen Faucets</Text>
                <Text>ranges & Ovens</Text>
                <Text>Refrigerators</Text>

                <Text id="brand_p">Kitchen Appliances</Text>

                <Text>Laminate Flooring</Text>
                <Text>Vinyl Flooring</Text>
                <Text>Wallpaper</Text>
                <Text>Wallpaper</Text>
                <Text>Laminate Flooring</Text>
                <Text>Vinyl Flooring</Text>
                <Text>Wallpaper</Text>
              </Box>
              <Box>
                <Text id="brand_p">Kids Bedding</Text>
                <Text>ranges & Ovens</Text>
                <Text>Refrigerators</Text>
                <Text>Kitchen Faucets</Text>
                <Text>ranges & Ovens</Text>
                <Text>Refrigerators</Text>
                <Text>Kitchen Faucets</Text>
                <Text>ranges & Ovens</Text>
              </Box>
              <Box>
                <Image
                  w={"300px"}
                  p={"30px 30px 0 0"}
                  src="https://ak1.ostkcdn.com/images/products/is/images/direct/2c973d86bac975d020ee827a95a06544d8a2615c/Dina-Dinosaurs-Kids-Area-Rug.jpg?imwidth=320"
                  alt=""
                />
                <Text id="extraOff_p">Extra 15% off</Text>
                <Text>Select Furniture by Christopher Knight</Text>
                <Text id="brand_p">More Ways to Shop</Text>
                <Text id="red_p">Featured sales</Text>
                <Text id="red_p">New Arrivals</Text>
                <Text id="red_p">Clearance</Text>
                <Text id="red_p">Furniture Advice</Text>
              </Box>
            </Box>
          </Box>
          <Box id="dropDiv_11">
            <Link to={"/more"} end>
              <Text>More</Text>
            </Link>
            <Box id="drop_11">
              <Box>
                <Text id="brand_p">Holiday</Text>
                <Text>ranges & Ovens</Text>
                <Text>Refrigerators</Text>
                <Text>Kitchen Faucets</Text>
                <Text>ranges & Ovens</Text>
                <Text>Kitchen Faucets</Text>
                <Text id="brand_p">Health & Beauty</Text>
                <Text>Tile</Text>
                <Text>Laminate Flooring</Text>
                <Text>Vinyl Flooring</Text>
                <Text>Wallpaper</Text>
                <Text>Laminate Flooring</Text>
                <Text>Vinyl Flooring</Text>
                <Text>Wallpaper</Text>
              </Box>
              <Box>
                <Text id="brand_p">Gifting</Text>
                <Text>ranges & Ovens</Text>

                <Text>Kitchen Faucets</Text>
                <Text>ranges & Ovens</Text>
                <Text>Refrigerators</Text>
                <Text>Kitchen Faucets</Text>
                <Text>Refrigerators</Text>
                <Text>Kitchen Faucets</Text>
                <Text id="brand_p">Exercise Equipemnts</Text>
                <Text>Tile</Text>
                <Text>Laminate Flooring</Text>
                <Text>Vinyl Flooring</Text>

                <Text>Wallpaper</Text>
                <Text>Laminate Flooring</Text>
                <Text>Vinyl Flooring</Text>
                <Text>Wallpaper</Text>
              </Box>
              <Box>
                <Text id="brand_p">Pet Supplies</Text>
                <Text>ranges & Ovens</Text>
                <Text>Refrigerators</Text>
                <Text>Kitchen Faucets</Text>
                <Text>ranges & Ovens</Text>
                <Text>Refrigerators</Text>
                <Text>Kitchen Faucets</Text>
                <Text>ranges & Ovens</Text>
                <Text id="brand_p">Entryway</Text>
                <Text>Tile</Text>
                <Text>Laminate Flooring</Text>
                <Text>Wallpaper</Text>
                <Text>Wallpaper</Text>
                <Text>Laminate Flooring</Text>
                <Text>Vinyl Flooring</Text>
                <Text>Wallpaper</Text>
              </Box>
              <Box>
                <Image
                  w={"300px"}
                  p={"30px 30px 0 0"}
                  src="https://ak1.ostkcdn.com/images/products/is/images/direct/330b18b3d83f74bb594b761389886094617cf872/Soozier-Sit-Up-Bench-Core-Workout-Adjustable-Thigh-Support-for-Home-Gym-Black.jpg"
                  alt=""
                />
                <Text id="extraOff_p">Extra 15% off</Text>
                <Text>Select Furniture by Christopher Knight</Text>
                <Text id="brand_p">More Ways to Shop</Text>
                <Text id="red_p">Featured sales</Text>
                <Text id="red_p">New Arrivals</Text>
                <Text id="red_p">Clearance</Text>
                <Text id="red_p">Furniture Advice</Text>
              </Box>
            </Box>
          </Box>
          <Spacer />
          <Box id="dropDiv_12">
            <Text>Ideas</Text>
            <Flex direction={"column"} id="drop_12" padding={0} gap={"20px"}>
              <Box>
                <Text m={"20px 0"}>More Ways to Shop</Text>
                <Box id="drop12_div">
                  <Box>
                    <img
                      src="https://ak1.ostkcdn.com/img/mxc/12202021-IdeasTab-R1MOD1.png"
                      alt=""
                    />
                    <Text>Room Ideas</Text>
                  </Box>
                  <Box>
                    <img
                      src="https://ak1.ostkcdn.com/img/mxc/12202021-IdeasTab-R1MOD2.png"
                      alt=""
                    />
                    <Text>Shop by Style</Text>
                  </Box>
                  <Box>
                    <img
                      src="https://ak1.ostkcdn.com/img/mxc/12202021-IdeasTab-R1MOD3.png"
                      alt=""
                    />
                    <Text>Shop by Room</Text>
                  </Box>
                  <Box>
                    <img
                      src="https://ak1.ostkcdn.com/img/mxc/02222021-ID4-Shop_Easter_Decor.png"
                      alt=""
                    />
                    <Text>Shop Easter Decor</Text>
                  </Box>
                </Box>
              </Box>
              <Box>
                <Text m={"20px 0"}>Inspiration & Ideas</Text>
                <Box id="drop12_div">
                  <Box>
                    <img
                      src="https://ak1.ostkcdn.com/img/mxc/12202021-IdeasTab-R2MOD1.png"
                      alt=""
                    />
                    <Text>Stylists Top & Shag Rugs</Text>
                  </Box>
                  <Box>
                    <img
                      src="https://ak1.ostkcdn.com/img/mxc/12202021-IdeasTab-R2MOD2.png"
                      alt=""
                    />
                    <Text>Pairing Lights & Seating</Text>
                  </Box>
                  <Box>
                    <img
                      src="https://ak1.ostkcdn.com/img/mxc/12202021-IdeasTab-R2MOD3.png"
                      alt=""
                    />
                    <Text>Multifunctional Furniture Guide</Text>
                  </Box>
                  <Box>
                    <img
                      src="https://ak1.ostkcdn.com/img/mxc/12202021-IdeasTab-R2MOD4.png"
                      alt=""
                    />
                    <Text>Best Faux-Down Comforters</Text>
                  </Box>
                </Box>
              </Box>
            </Flex>
          </Box>
          <Box id="dropDiv_13">
            <Text>Sales & deals</Text>
            <Flex
              direction={"column"}
              gap={4}
              id="drop_13"
              width={"870px"}
              align={"center"}
            >
              <Box
                id="drop13_div1"
                background={`no-repeat center/100% url("https://ak1.ostkcdn.com/img/mxc/05142018DealsSales_OUTLINED.svg")`}
              ></Box>
              <SimpleGrid columns={4} gap={4}>
                <Box border={"1px solid #cecece"}>
                  <img
                    src="https://ak1.ostkcdn.com/img/mxc/02172022-TNFlyoutINTL.jpg?imwidth=320"
                    alt=""
                  />
                  <Box>
                    <Text>Clearance Prices</Text>
                    <Text>On Winter Essentials</Text>
                  </Box>
                </Box>
                <Box border={"1px solid #cecece"}>
                  <img
                    src="https://ak1.ostkcdn.com/img/mxc/12132021-MOPS-StorageWithStyle.png?imwidth=320"
                    alt=""
                  />
                  <Box>
                    <Text>Storage with Style</Text>
                    <Text>Organize with Ease</Text>
                  </Box>
                </Box>
                <Box border={"1px solid #cecece"}>
                  <img
                    src="https://ak1.ostkcdn.com/img/mxc/12132021-MOPS-ShagRugs.png?imwidth=320"
                    alt=""
                  />
                  <Box>
                    <Text>Chik Shag Rugs</Text>
                    <Text>Shop Rugs Both Plush & Pretty</Text>
                  </Box>
                </Box>
                <Box border={"1px solid #cecece"}>
                  <img
                    src="https://ak1.ostkcdn.com/img/mxc/12132021-MOPS-MultifunctionalFurniture.png?imwidth=320"
                    alt=""
                  />
                  <Box>
                    <Text>multifunctional furniture</Text>
                    <Text>Furnish with form & function</Text>
                  </Box>
                </Box>
              </SimpleGrid>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </Container>
  );
};
