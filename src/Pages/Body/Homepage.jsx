import React, { useState } from "react";
import "../../App.css";
import {
  Container,
  Box,
  Image,
  Heading,
  SimpleGrid,
  Text,
  Button,
  Flex,
  Spacer,
} from "@chakra-ui/react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { slides } from "./SliderData";
import { Footer } from "../../Components/Footer/Footer";
import { Navbar } from "../../Components/Navbar/Navbar";
export const Homepage = () => {
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(3);

  const handleLeft = () => {
    setStart(start - 1);
    setEnd(end - 1);
  };
  const handleRight = () => {
    setStart(start + 1);
    setEnd(end + 1);
  };

  return (
    <Container
      maxW="8xl"
      centerContent
      mt={{
        base: 70,
        sm: 70,
        md: 70,
        lg: 130,
      }}
    >
      <Navbar />
      <Container maxW="100%" centerContent>
        <Box
          background={`no-repeat center/100% url("https://ak1.ostkcdn.com/img/mxc/10032022-HP-A1-INTL-1400x550_DesktopA1_Intl_FallIntoSavings.jpg")`}
        >
          <Image
            src="https://ak1.ostkcdn.com/img/mxc/10032022-HP-A1-INTL-1400x550_DesktopA1_Intl_FallIntoSavings.svg"
            alt="header-pic2"
          />
        </Box>
        <Container
          maxW={{
            base: "100%",
            sm: "100%",
            md: "99%",
            lg: "98.5%",
          }}
        >
          <Box pt={8} pb={16}>
            <Heading
              pb={8}
              fontSize={{
                base: "20px",
                sm: "20px",
                md: "30px",
                lg: "35px",
              }}
            >
              Limited-Time Deals
            </Heading>
            <SimpleGrid
              columns={{
                base: 3,
                sm: 3,
                md: 3,
                lg: 6,
              }}
              gap={{
                base: 1,
                sm: 1,
                md: 2,
                lg: 4,
              }}
            >
              <Box>
                <Box bgColor="#f8f8f8">
                  <Image
                    src="https://ak1.ostkcdn.com/img/mxc/10032022_V2_HB_INTL_1.svg?imwidth=1920"
                    alt="limited-pic"
                  />
                </Box>
                <Text as="b">Rugs</Text>
              </Box>
              <Box>
                <Box bgColor="#f8f8f8">
                  <Image
                    src="https://ak1.ostkcdn.com/img/mxc/10032022_HB_INTL_2.svg?imwidth=1920"
                    alt="limited-pic"
                  />
                </Box>
                <Text as="b">Dining Room Furniture</Text>
              </Box>
              <Box>
                <Box bgColor="#f8f8f8">
                  <Image
                    src="https://ak1.ostkcdn.com/img/mxc/10032022_V2_HB_INTL_3.svg?imwidth=1920"
                    alt="limited-pic"
                  />
                </Box>
                <Text as="b">Living Room Furniture</Text>
              </Box>
              <Box>
                <Box bgColor="#f8f8f8">
                  <Image
                    src="https://ak1.ostkcdn.com/img/mxc/10032022_HB_INTL_4.svg?imwidth=1920"
                    alt="limited-pic"
                  />
                </Box>
                <Text as="b">Bedding</Text>
              </Box>
              <Box>
                <Box bgColor="#f8f8f8">
                  <Image
                    src="https://ak1.ostkcdn.com/img/mxc/10032022_HB_INTL_5.svg?imwidth=1920"
                    alt="limited-pic"
                  />
                </Box>
                <Text as="b">Home Decor</Text>
              </Box>
              <Box>
                <Box bgColor="#f8f8f8">
                  <Image
                    src="https://ak1.ostkcdn.com/img/mxc/10032022_HB_INTL_6.svg?imwidth=1920"
                    alt="limited-pic"
                  />
                </Box>
                <Text as="b">Lighting</Text>
              </Box>
            </SimpleGrid>
          </Box>
          <Box
            m="0 0 20px 0"
            position="reletive"
            background={`no-repeat center/100% url("https://ak1.ostkcdn.com/img/mxc/10032022-SB-LivingRoomFurniture-Desktop.jpg?imwidth=3840")`}
          >
            <Image
              src="https://ak1.ostkcdn.com/img/mxc/10032022-SB-LivingRoomFurniture-Desktop.svg?imwidth=1920"
              alt="section3-pic"
            />
          </Box>
          <Box w="95%" margin="40px auto">
            <Heading
              pb={9}
              fontSize={{
                base: "20px",
                sm: "20px",
                md: "30px",
                lg: "35px",
              }}
            >
              Fresh Finds In Each Category
            </Heading>
            <SimpleGrid
              columns={{
                base: 3,
                sm: 3,
                md: 3,
                lg: 6,
              }}
              gap={{
                base: 1,
                sm: 1,
                md: 2,
                lg: 6,
              }}
              fontSize="18px"
            >
              <Box>
                <Image
                  src="https://ak1.ostkcdn.com/img/mxc/11192021-CatSilo-Furniture.png?imwidth=1920"
                  alt="section4-pic"
                />
                <Text>Furniture</Text>
              </Box>
              <Box>
                <Image
                  src="https://ak1.ostkcdn.com/img/mxc/11152021-CatSilo-AreaRugs.png?imwidth=1920"
                  alt="section4-pic"
                />
                <Text>Area Rugs</Text>
              </Box>
              <Box>
                <Image
                  src="https://ak1.ostkcdn.com/img/mxc/11152021-CatSilo-BedBath.png?imwidth=1920"
                  alt="section4-pic"
                />
                <Text>Bedding</Text>
              </Box>
              <Box>
                <Image
                  src="https://ak1.ostkcdn.com/img/mxc/11152021-CatSilo-Decor.png?imwidth=1920"
                  alt="section4-pic"
                />
                <Text>Home Decor</Text>
              </Box>
              <Box>
                <Image
                  src="https://ak1.ostkcdn.com/img/mxc/CatSilo-Window-040721.jpg?imwidth=1920"
                  alt="section4-pic"
                />
                <Text>Window Treatments</Text>
              </Box>
              <Box>
                <Image
                  src="https://ak1.ostkcdn.com/img/mxc/11152021-CatSilo-Kitchen.png?imwidth=1920"
                  alt="section4-pic"
                />
                <Text>Kitchen</Text>
              </Box>
              <Box>
                <Image
                  src="https://ak1.ostkcdn.com/img/mxc/11192021-CatSilo-Outdoor.png?imwidth=1920"
                  alt="section4-pic"
                />
                <Text>Outdoor</Text>
              </Box>
              <Box>
                <Image
                  src="https://ak1.ostkcdn.com/img/mxc/01112021-CatSilo-HomeImp.jpg?imwidth=1920"
                  alt="section4-pic"
                />
                <Text>Home Improvement</Text>
              </Box>
              <Box>
                <Image
                  src="https://ak1.ostkcdn.com/img/mxc/11152021-CatSilo-Storage.png?imwidth=1920"
                  alt="section4-pic"
                />
                <Text>Storage</Text>
              </Box>
              <Box>
                <Image
                  src="https://ak1.ostkcdn.com/img/mxc/01112021-CatSilo-Mattresses.jpg?imwidth=1920"
                  alt="section4-pic"
                />
                <Text>Mattresses</Text>
              </Box>
              <Box>
                <Image
                  src="https://ak1.ostkcdn.com/img/mxc/11152021-CatSilo-Lighting.png?imwidth=1920"
                  alt="section4-pic"
                />
                <Text>Lighting</Text>
              </Box>
              <Box>
                <Image
                  src="https://ak1.ostkcdn.com/img/mxc/CatSilo-AllDeals-040721.jpg?imwidth=1920"
                  alt="section4-pic"
                />
                <Text>Shop All Deals</Text>
              </Box>
            </SimpleGrid>
          </Box>
          <Box margin={"40px auto"} overflow={"hidden"}>
            <Heading
              pt={10}
              pb={4}
              fontSize={{
                base: "20px",
                sm: "20px",
                md: "30px",
                lg: "35px",
              }}
            >
              Fall Home Updates for Every Budget
            </Heading>
            <Button
              style={{
                position: "reletive",
                left: "-625px",
                top: "230px",
                background: "white",
                padding: "25px 0px",
              }}
              disabled={start === 0}
              onClick={handleLeft}
            >
              <FaChevronLeft />
            </Button>
            <Button
              style={{
                position: "reletive",
                right: "-620px",
                top: "230px",
                background: "white",
                padding: "25px 0px",
              }}
              disabled={end === 7}
              onClick={handleRight}
            >
              <FaChevronRight />
            </Button>
            <SimpleGrid
              columns={{
                base: 1,
                sm: 1,
                md: 4,
                lg: 8,
              }}
              gap={{
                base: 1,
                sm: 1,
                md: 2,
                lg: 4,
              }}
              w="200%"
            >
              {slides.map(
                ({ image, heading, text }, index) =>
                  index <= end &&
                  index >= start && (
                    <Box bgColor="#f5f5f5" key={index}>
                      <Image src={image} alt="logo" />
                      <Heading
                        textAlign="left"
                        p="15px"
                        fontSize={{
                          base: "20px",
                          sm: "20px",
                          md: "20px",
                          lg: "22px",
                        }}
                      >
                        {heading}
                      </Heading>
                      <Text textAlign="left" p="0 15px 35px 15px">
                        {text}
                      </Text>
                    </Box>
                  )
              )}
            </SimpleGrid>
          </Box>
          <Box
            margin={"60px auto"}
            background={`no-repeat center/100% url("https://ak1.ostkcdn.com/img/mxc/10032022-SB-Bedding-Desktop.jpg?imwidth=3840")`}
          >
            <Image
              src="https://ak1.ostkcdn.com/img/mxc/10032022-SB-Bedding-Desktop.svg?imwidth=1920"
              alt="logo"
            />
          </Box>
          <Box mb="70px">
            <Heading
              mb={10}
              fontSize={{
                base: "20px",
                sm: "20px",
                md: "30px",
                lg: "35px",
              }}
            >
              Overstock Featured Brands
            </Heading>
            <SimpleGrid
              columns={{
                base: 2,
                sm: 2,
                md: 4,
                lg: 4,
              }}
              gap={{
                base: 2,
                sm: 2,
                md: 3,
                lg: 4,
              }}
            >
              <Box bgColor={"#f5f6f7"}>
                <Image
                  src="https://ak1.ostkcdn.com/img/mxc/HP_C_Mod_39470048.jpg?imwidth=1920"
                  alt="logo"
                />
                <Text as="b">Extra 20% off</Text>
                <Text>Select Rugs by</Text>
                <Text pb={2}>Artistic Weavers*</Text>
              </Box>
              <Box bgColor={"#f5f6f7"}>
                <Image
                  src="https://ak1.ostkcdn.com/img/mxc/HP_C_Mod_30806359.jpg?imwidth=1920"
                  alt="logo"
                />
                <Text as="b">Extra 15% off</Text>
                <Text>Select Furniture by </Text>
                <Text pb={2}>Middlebrook Designs*</Text>
              </Box>
              <Box bgColor={"#f5f6f7"}>
                <Image
                  src="https://ak1.ostkcdn.com/img/mxc/HP_C_Mod_24689791.jpg?imwidth=1920"
                  alt="logo"
                />
                <Text as="b">Extra 15% off</Text>
                <Text>Select Home Goods by </Text>
                <Text pb={2}>Angelo Home*</Text>
              </Box>
              <Box bgColor={"#f5f6f7"}>
                <Image
                  src="https://ak1.ostkcdn.com/img/mxc/HP_C_MOD_21238648.jpg?imwidth=1920"
                  alt="logo"
                />
                <Text as="b">Extra 15% off</Text>
                <Text>Select Bean Bags & More by</Text>
                <Text pb={2}>Christopher Knight*</Text>
              </Box>
            </SimpleGrid>
          </Box>
          <Box
            mb={"50px"}
            background={`no-repeat center/100% url("https://ak1.ostkcdn.com/img/mxc/030822-RIUpdate-Dsk.jpg?imwidth=3840)`}
          >
            <Image
              src="https://ak1.ostkcdn.com/img/mxc/030822-RIUpdate-Dsk.svg?imwidth=1920"
              alt="logo"
            />
          </Box>
          <Box mb="50px">
            <Heading
              mb={10}
              fontSize={{
                base: "20px",
                sm: "20px",
                md: "30px",
                lg: "35px",
              }}
            >
              We've Got Your Style
            </Heading>
            <SimpleGrid
              columns={{
                base: 1,
                sm: 1,
                md: 3,
                lg: 3,
              }}
              gap={{
                base: 2,
                sm: 2,
                md: 2,
                lg: 4,
              }}
            >
              <Box bgColor="#f5f5f5">
                <Image
                  src="https://ak1.ostkcdn.com/img/mxc/030822-SBS-Traditional.jpg?imwidth=1920"
                  alt=""
                />
                <Heading
                  textAlign="left"
                  p="15px"
                  fontSize={{
                    base: "20px",
                    sm: "20px",
                    md: "30px",
                    lg: "35px",
                  }}
                >
                  Traditional
                </Heading>
                <Text textAlign="left" p="0 15px 25px 15px">
                  Cozy designs, clean and classic, give this style it's
                  signature appeal.
                </Text>
              </Box>
              <Box bgColor="#f5f5f5">
                <Image
                  src="https://ak1.ostkcdn.com/img/mxc/030822-SBS-Farmhouse.jpg?imwidth=1920"
                  alt=""
                />
                <Heading
                  textAlign="left"
                  p="15px"
                  fontSize={{
                    base: "20px",
                    sm: "20px",
                    md: "30px",
                    lg: "35px",
                  }}
                >
                  Farmhouse
                </Heading>
                <Text textAlign="left" p="0 15px 25px 15px">
                  Country comforts abound in this fresh take on rustic home
                  decor.
                </Text>
              </Box>
              <Box bgColor="#f5f5f5">
                <Image
                  src="https://ak1.ostkcdn.com/img/mxc/030822-SBS-MidCenMod.jpg?imwidth=1920"
                  alt=""
                />
                <Heading
                  textAlign="left"
                  p="15px"
                  fontSize={{
                    base: "20px",
                    sm: "20px",
                    md: "30px",
                    lg: "35px",
                  }}
                >
                  Mid-Century Modern
                </Heading>
                <Text textAlign="left" p="0 15px 25px 15px">
                  Retro meets modern chic in these clean lines and vibrant tones
                </Text>
              </Box>
            </SimpleGrid>
          </Box>
          <Box mb={"70px"}>
            <Button
              background={"#2f3337"}
              color="white"
              p="15px 30px"
              _hover={{
                background: "blackAlpha.700",
              }}
            >
              See All Styles
            </Button>
          </Box>
          <Box mb={"50px"}>
            <Heading
              mb={10}
              fontSize={{
                base: "20px",
                sm: "20px",
                md: "30px",
                lg: "35px",
              }}
            >
              Trending Searches
            </Heading>
            <SimpleGrid
              columns={{
                base: 1,
                sm: 1,
                md: 2,
                lg: 3,
              }}
              gap={{
                base: 1,
                sm: 1,
                md: 2,
                lg: 4,
              }}
            >
              <Box background={"#f5f6f7"} p="10px 0">
                <Text color="#545658" as="b" fontSize={22}>
                  Mugs
                </Text>
              </Box>
              <Box background={"#f5f6f7"} p="10px 0">
                <Text color="#545658" as="b" fontSize={22}>
                  Blankets
                </Text>
              </Box>
              <Box background={"#f5f6f7"} p="10px 0">
                <Text color="#545658" as="b" fontSize={22}>
                  Cookie Cutters
                </Text>
              </Box>
              <Box background={"#f5f6f7"} p="10px 0">
                <Text color="#545658" as="b" fontSize={22}>
                  Air Fryers
                </Text>
              </Box>
              <Box background={"#f5f6f7"} p="10px 0">
                <Text color="#545658" as="b" fontSize={22}>
                  Kitchen Mixers
                </Text>
              </Box>
              <Box background={"#f5f6f7"} p="10px 0">
                <Text color="#545658" as="b" fontSize={22}>
                  Lamps
                </Text>
              </Box>
              <Box background={"#f5f6f7"} p="10px 0">
                <Text color="#545658" as="b" fontSize={22}>
                  Towels
                </Text>
              </Box>
              <Box background={"#f5f6f7"} p="10px 0">
                <Text color="#545658" as="b" fontSize={22}>
                  Tree Skirts
                </Text>
              </Box>
              <Box background={"#f5f6f7"} p="10px 0">
                <Text color="#545658" as="b" fontSize={22}>
                  Garland
                </Text>
              </Box>
              <Box background={"#f5f6f7"} p="10px 0">
                <Text color="#545658" as="b" fontSize={22}>
                  Fall Wreaths
                </Text>
              </Box>
              <Box background={"#f5f6f7"} p="10px 0">
                <Text color="#545658" as="b" fontSize={22}>
                  Christmas Trees
                </Text>
              </Box>
              <Box background={"#f5f6f7"} p="10px 0">
                <Text color="#545658" as="b" fontSize={22}>
                  Fireplaces
                </Text>
              </Box>
            </SimpleGrid>
          </Box>
        </Container>
      </Container>
      <Box w={"107.9%"} h="1px" background={"#cecece"} mb={10}></Box>
      <Box
        p={{
          base: "10px",
          sm: "10px",
          md: "30px",
          lg: "50px 100px",
        }}
        background={"#545658"}
        color="white"
        w="107.9%"
      >
        <SimpleGrid
          columns={{
            base: 1,
            sm: 1,
            md: 4,
            lg: 4,
          }}
          fontSize="15px"
          textAlign={"left"}
        >
          <Box>
            <Text as="b">MY ACCOUNT</Text>
            <Text m={"15px 0"}>Orders & Returns </Text>
            <Text m={"15px 0"}>Email Preferences</Text>
            <Text m={"15px 0"}>Account Settings</Text>
          </Box>
          <Box>
            <Text as="b">LET US HELP </Text>
            <Text m={"15px 0"}>Contact Customer Care</Text>
            <Text m={"15px 0"}>Shipping Information</Text>
            <Text m={"15px 0"}>Return Policy</Text>
            <Text m={"15px 0"}>International Help</Text>
            <Text m={"15px 0"}>Accessibility</Text>
          </Box>
          <Box>
            <Text as="b">COMPANY INFORMATION </Text>
            <Text m={"15px 0"}>About Overstock™</Text>
            <Text m={"15px 0"}>Contact Us</Text>
            <Text m={"15px 0"}>Careers</Text>
            <Text m={"15px 0"}>Investor Relations</Text>
            <Text m={"15px 0"}>Sell Your Products</Text>
            <Text m={"15px 0"}>Supply Chain Transparency</Text>
          </Box>
          <Box>
            <Text as="b">MORE WAYS TO SHOP </Text>
            <Text m={"15px 0"}>Tips & Ideas</Text>
            <Text m={"15px 0"}> Deals</Text>
            <Text m={"15px 0"}>Clearance</Text>
            <Text m={"15px 0"}>New Arrivals</Text>
          </Box>
        </SimpleGrid>
      </Box>
      <Footer />
    </Container>
  );
};
