"use client"
import Card from '@/components/Common/CategoryCard/Card';
import { Navbar } from '@/components/Common/Navbar/Navbar';
import React, { useState } from 'react'
import { useEffect } from 'react'
import { axiosClient } from '@/lib/axios/axiosClient';
import { categories, categoryDetail } from '@/data';
import Link from 'next/link';
import ProtectedRoute from '@/lib/ProtectedRoute/ProtectedRoute';
const Category = () => {

  // const [responseData, setResponseData] = useState([]);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axiosClient.post('', {
  //         // "category": "",
  //       });
  //       setResponseData(response.data);
  //       console.log('Response Data:', responseData);
  //     } catch (error) {
  //       console.error('Error:', error);
  //     }
  //   };

  //   fetchData();
  // }, []);
  return (
    <>
      <Navbar />
      <ProtectedRoute>
      <div className='flex flex-col gap-10 items-center justify-around h-auto p-10'>
        {/* {categories.map((item, index) => (
          <Card key={index} heading={item.title} description={item.description} />
        ))} */}
          {categories.map((item, index) => (
          <Link href={`/category/${encodeURIComponent(item.title)}`} key={index}>
            <Card heading={item.title} description={item.description} />
          </Link>
        ))}
      </div>
      </ProtectedRoute>
    </>
  )
}
export default Category;
