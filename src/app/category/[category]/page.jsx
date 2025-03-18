'use client'
import { axiosClient } from "@/lib/axios/axiosClient";
import { categoryDetail } from "../../../data"; // Adjust the import path
import { useEffect, useState } from "react";
import AudioCard from "@/components/Common/AudioCard/AudioCard";
import Headingv2 from "@/components/Common/Headings/Headingv2";
import Heading from "@/components/Common/Headings/Heading";

export default function CategoryPage({ params }) {
  const { category } = params;
  const decodedCategory = decodeURIComponent(category);
  const data = categoryDetail[decodedCategory] || null;

  if (!data) {
    return <p>Category not found.</p>;
  }

  const [responseData, setResponseData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosClient.post('/filter', {
          "category": decodedCategory,
        });
        // console.log(response.data);
        setResponseData(response.data);
        // console.log("New Data:")
        console.log('Response Data:', responseData);

      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, [category]);

  return (
    <div className="p-10">
      <div style={{backgroundImage: "url('/assets/sbg.jpg')"}} className="w-full h-[300px] bg-cover bg-center rounded-[100px] flex items-center justify-center ">
      <h1 className="text-8xl font-bold tracking-widest  p-10 rounded-[50px]  ">{data.title}</h1>
      {/* <Heading text={data.title}/> */}
      </div>
      <p className="mt-4 text-lg">{data.description}</p>
      <div className=" min-h-[40vh] h-auto flex items-center justify-center flex-col gap-5" >

      {responseData && responseData.map((item)=>(
        <AudioCard title={item.title} duration={item.duration} />
      ))}
      </div>

    </div>

  );
}
