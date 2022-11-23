import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
    Checkbox,
    CheckboxGroup
} from '@chakra-ui/react'
import { useContext, useEffect } from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import { SortContext } from '../../Components/Cotext'
import { getFurniture, getFurnitureDataFilter, getFurnitureDataWithParams, getLoading } from '../../redux/action'




export const LeftBars = ({ sort, page, filterDataCat, setfilterDataCat, filterDataBrand, setfilterDataBrand }) => {
    const { order_new } = useContext(SortContext);
    const [searchParams, setSearchParams] = useSearchParams();
    const dispatch = useDispatch();

    const filterCat = (e) => {
        let isChecked = e.target.checked;
        if (isChecked)
            setfilterDataCat([...filterDataCat, e.target.value]);
        else {
            let afterfilterDataCat = filterDataCat.filter((elm) => elm != e.target.value)
            setfilterDataCat(afterfilterDataCat);
        }
    }

    const filterBrand = (e) => {
        let isChecked = e.target.checked;
        if (isChecked)
            setfilterDataBrand([...filterDataBrand, e.target.value]);
        else {
            let afterfilterDataBrand = filterDataBrand.filter((elm) => elm != e.target.value)
            setfilterDataBrand(afterfilterDataBrand);
        }
    }
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
        }

        setSearchParams(obj);
    }, [filterDataCat, filterDataBrand, page, sort])


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

    // useEffect(() => {
    //     console.log(filterDataBrand,"brands");
    //     console.log(filterDataCat,"category");
    //     console.log(window.document.querySelector(".categoryClass").value);
    // },[filterDataCat])

    // const checking = (e) => {
    //     console.log(e.target.value);
    //     filterDataBrand.map((elm)=>{
    //         if(elm==e.target.value){
    //             e.target.checked = true;
    //         }})
    //     filterDataCat.map((elm)=>{
    //         if(elm==e.target.value){
    //             e.target.checked = true;
    //         }})
    // }

    // const isCheckedCat = (e) => {
    //     let flag = false;
    //     filterDataCat.map((elm)=> {
    //         if(elm==e.target.value) flag = true;
    //     })
    //     return flag;
    // }
    // const isCheckedBrands = (val) => {
    //     // return filterDataBrand.find((elm)=> elm==e.target.value)
    //     // let flag = false;
    //     // filterDataBrand.map((elm)=> {
    //     //     if(elm==e.target.value) flag = true;
    //     // })
    //     alert("sdfs")
    //     for(let i=0;i<filterDataBrand.length;i++) {
    //         // console.log(e.target.value);
    //         if(filterDataBrand[i]===val) return true;
    //     }
    //     return false;
    // }



    return (
        <Box>
            <Accordion allowToggle>
                <AccordionItem>
                    <h2>
                        <AccordionButton>
                            <Box flex='1' textAlign='left' p={2}>
                                Categories
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4} textAlign="left">
                        <CheckboxGroup defaultValue={filterDataCat}>
                            <Checkbox colorScheme='red' value="furniture" onChange={filterCat} >
                                Furniture
                            </Checkbox>
                            <br />
                            <br />
                            <Checkbox colorScheme='red' value="rugs" onChange={filterCat} >
                                Rugs
                            </Checkbox>
                            <br /><br />
                            <Checkbox colorScheme='red' value="bedding" onChange={filterCat} >
                                Beds
                            </Checkbox>
                            <br /><br />
                        </CheckboxGroup>
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
            <Accordion allowToggle>
                <AccordionItem>
                    <h2>
                        <AccordionButton>
                            <Box flex='1' textAlign='left' p={2}>
                                Brand
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4} textAlign="left">
                        <CheckboxGroup defaultValue={filterDataBrand}>
                            <Checkbox colorScheme='red' value="Everbilt" onChange={filterBrand} >
                                Everbilt
                            </Checkbox>
                            <br />
                            <br />
                            <Checkbox colorScheme='red' value="Home Decorators Collection" onChange={filterBrand} >
                                Home Decorators Collection
                            </Checkbox>
                            <br /><br />
                            <Checkbox colorScheme='red' value="Artistic Weavers" onChange={filterBrand} >
                                Artistic Weavers
                            </Checkbox>
                            <br /><br />
                            <Checkbox colorScheme='red' value="Foss" onChange={filterBrand} >
                                Foss
                            </Checkbox>
                            <br /><br />
                            <Checkbox colorScheme='red' value="nuLOOM" onChange={filterBrand} >
                                nuLOOM
                            </Checkbox>
                            <br /><br />
                            <Checkbox colorScheme='red' value="3M" onChange={filterBrand} >
                                3M
                            </Checkbox>
                            <br /><br />
                            <Checkbox colorScheme='red' value="TrafficMaster" onChange={filterBrand} >
                                TrafficMaster
                            </Checkbox>
                        </CheckboxGroup>
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
            <Accordion allowToggle>
                <AccordionItem>
                    <h2>
                        <AccordionButton>
                            <Box flex='1' textAlign='left' p={2}>
                                Ratings
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4} textAlign="left">
                        <Checkbox colorScheme='red' >
                            More than 3
                        </Checkbox>
                        <br />
                        <br />
                        <Checkbox colorScheme='red'>
                            Less than 3
                        </Checkbox>
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
            <Accordion allowToggle>
                <AccordionItem>
                    <h2>
                        <AccordionButton>
                            <Box flex='1' textAlign='left' p={2}>
                                Price
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4} textAlign="left">
                        <Checkbox colorScheme='red' >
                            Less than 1000
                        </Checkbox>
                        <br />
                        <br />
                        <Checkbox colorScheme='red'>
                            Greater than 1000 and less than 2000
                        </Checkbox>
                        <br /><br />
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
        </Box>
    )
}
export default LeftBars;