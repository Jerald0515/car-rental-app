import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Hero from './Hero';
import WhyChooseUs from './WhyChooseUs';
import Form from './carBooking/Form';
import Search from './Search';
import CarsFilter from './CarsFilter';
import CarsList from './CarsList';
import { getCarsList } from './Services';
import ToastMsg from './ToastMsg';
import { BookCreatedFlagContext } from './context/BookCreatedFlagContext';

function Home() {
  const [listOfCars, setListOfCars] = useState([]);
  const [carsOrgList,setCarsOrgList] = useState([]);
  const [showToastMsg, setShowToastMsg] = useState(false);

  useEffect(() => {
    getList();
  }, []);

  const getList = async () => {
    try {
      const result = await getCarsList(); // Corrected function name
      if (result && result.carRental) {
        setListOfCars(result.carRental);
        setCarsOrgList(result.carRental);
      } else {
        console.error("Invalid car list data:", result);
      }
    } catch (error) {
      console.error("Error fetching car list:", error);
    }
  };

  const filterCarList=(brand)=>{
    const filterList=carsOrgList.filter((item)=>item.carBrand==brand);
    setListOfCars(filterList);
  }

  const orderCarList=(order)=>{
    const sortedData = [...carsOrgList].sort((a, b)=>
    order==-1?a.price - b.price:b.price - a.price
  );
  setListOfCars(sortedData);
  }

  return (
    <>
    <BookCreatedFlagContext.Provider value={{ showToastMsg, setShowToastMsg }}>
      <Navbar />
      <Hero />
      <WhyChooseUs />
      <Search />
      <CarsFilter carsList={carsOrgList} 
      orderCarList={(value)=>orderCarList(value)} 
      setBrand={(value)=>filterCarList(value)}
      />
      <CarsList carsList={listOfCars} />
      {showToastMsg?<ToastMsg msg={'Booking Created Successfully!'} />:null}
      <Footer />
      </BookCreatedFlagContext.Provider>
    </>
  );
}

export default Home;
