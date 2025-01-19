import React,{useState} from 'react';


const GeneratePhoto = () => {

  const [userInput , setuserInput ]= useState();
  const [generateImage, setGenerateImage]= useState();

  const handelSubmit=()=>{
    if(userInput.trim()){
      setGenerateImage("url");
    }else{
      alert("Enter valid promt")
    }
  }

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center p-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Generate AI Photo</h2>
      <div className="w-full max-w-md">
        <input
          type="text"
          placeholder="Enter a prompt"
          className="w-full p-3 mb-4 border border-gray-300 rounded shadow-sm" 
          onChange ={(e)=> setuserInput(e.target.value)}
        />
        <button className="w-full bg-blue-500 text-white py-2 rounded shadow" onClick={handelSubmit}>
          Generate
        </button>
      </div>
      <div className="mt-6">
        <h3 className="text-lg text-gray-700 mb-2">Generated Image: </h3>
        <div className="w-64 h-64 bg-gray-300 border border-gray-300 rounded flex items-center justify-center">
          <p className="text-gray-500">No image yet </p>
        </div>
      </div>
    </div>

  );
};

export default GeneratePhoto;
