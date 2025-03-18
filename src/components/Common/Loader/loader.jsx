// components/Loader.jsx
import React from "react";

const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black text-white z-50">
      <div className="animate-spin w-16 h-16 border-4 border-white border-t-transparent rounded-full"></div>
    </div>
  );
};

export default Loader;
