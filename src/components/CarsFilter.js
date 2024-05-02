import React, { useState, useEffect } from 'react'

function CarsFilter({ carsList, setBrand, orderCarList }) {
    const [brandList, setBrandList] = useState();

    const BrandSet = new Set()

    useEffect(() => {
        if (carsList) {
            filterCarList();
        }
    }, [carsList])

    const filterCarList = () => {
        carsList.forEach((element) => {
            BrandSet.add(element.carBrand)
        });
        console.log(BrandSet)
        setBrandList(Array.from(BrandSet))
    }
    return (
        <div className='mt-10 flex items-center justify-between'>
            <div>
                <h2 className='text-[30px] font-bold'>Cars Catalog</h2>
                <h2>Explore our cars you might like</h2>
            </div>
            <div className='flex gap-5'>
                <select
                    className='select select-bordered w-full max-w-xs'
                    onChange={(e) => orderCarList(e.target.value)}
                >
                    <option disabled selected>Price</option>
                    <option value={-1}>Min to Max</option>
                    <option value={1}>Max to Min</option>
                </select>
                <select onChange={(e) => setBrand(e.target.value)} className="select select-bordered w-full md:block max-w-xs hidden">
                    <option disabled selected>Manufucturer</option>
                    {brandList &&
                        brandList.map((brand, index) => (
                            <option key={index}>{brand}</option>
                        ))}
                </select>
            </div>
        </div>

    )
}

export default CarsFilter