import React, { useEffect, useState } from 'react';
import { styled } from "styled-components";
import axios from 'axios';
import BASE_URL from '../../config/apiConfig';

export default function Coupons() {
  const [couponCodesData, setCouponCodesData] = useState([])

    useEffect(() => {
        const fetchAllTickets = async () => {
            try{
                const response = await axios.get(`${BASE_URL}/coupons`);
                setCouponCodesData(response.data);
            }catch(error){
                console.log(error);
            }
        }
        fetchAllTickets();
    }, [])

  return (
    <Wrapper>
      <h2 className="text-k-secondary"> Coupons Codes </h2>
      <p className="small"> {couponCodesData && couponCodesData.length} Coupon Codes found</p>
    </Wrapper>
  )
}

const Wrapper = styled.div``