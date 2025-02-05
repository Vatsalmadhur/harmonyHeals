'use client'
import { axiosClient } from "@/lib/axios/axiosClient";
import { categoryDetail } from "../../../data"; // Adjust the import path
import { useEffect, useState } from "react";
import AudioCard from "@/components/Common/AudioCard/AudioCard";
import Headingv2 from "@/components/Common/Headings/Headingv2";

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
        const response = await axiosClient.post('', {
          "category": decodedCategory,
        });
        // console.log(response.data);
        setResponseData(response.data);
        // console.log("New Data:")
        // console.log('Response Data:', responseData);

      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, [category]);

  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold">{data.title}</h1>
      <Headingv2/>
      <p className="mt-4 text-lg">{data.description}</p>
      <div className=" min-h-[40vh] h-auto flex items-center justify-center flex-col gap-5" >

      {responseData && responseData.map((item)=>(
        <AudioCard title={item.title} duration={item.duration} />
      ))}
      </div>

    </div>

  );
}
