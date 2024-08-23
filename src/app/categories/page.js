"use client"
import Card from '@/components/Common/CategoryCard/Card';
import { Navbar } from '@/components/Common/Navbar/Navbar';
import React from 'react'
 const Category = () => {
  return (
    <>
    <Navbar/>
    <div className='flex flex-col gap-10 items-center justify-around h-auto p-10'>
    <Card/>
    <Card/>
    <Card/>

    </div>
    </>
  )
}
export default Category;
