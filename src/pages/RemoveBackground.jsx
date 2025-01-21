import React, {useState} from 'react';

const RemoveBackground = () => {

  const[uploadedImage, setUploadedImage]= useState(null);
  const [isProcessing, setIsProcessing]= useState(false);
  const [processedImage, setProcessedImage]= useState(null);

  const handelFileChange =(event)=>{
    const file= event.target.files[0];
    if(file){
      const reader=new FileReader();
      reader.onload=()=>{
        setUploadedImage(reader.result)
      }
      reader.readAsDataURL(file);
    }
  }

  const handelRemoveBg=()=>{
    if(!uploadedImage){
      alert("Upload an image first")
      return;
    }

    setIsProcessing(true);
    setTimeout(()=>{
      setProcessedImage(uploadedImage)
      setIsProcessing(false)
    },2000)
  }

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center p-8">
      <h2 className="text-4xl font-extrabold text-gray-800 mb-8">Remove Image Background</h2>

      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-semibold mb-2">Upload Image</label>
          <input
            type="file"
            accept="image/*"
            className="w-full p-3 mb-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition ease-in-out"
            onChange={handelFileChange}
          />
        </div>

        <button
          className={`w-full py-2 rounded-lg shadow-md transition duration-300 ease-in-out ${isProcessing ? 'bg-gray-500' : 'bg-green-500 hover:bg-green-600'} text-white`}
          disabled={isProcessing}
          onClick={handelRemoveBg}
        >
          {isProcessing ? "Processing..." : "Remove Background"}
        </button>
      </div>

      <div className="mt-8">
        <h3 className="text-lg text-gray-700 mb-2">Processed Image:</h3>
        {processedImage ? (
          <div className="w-64 h-64 flex items-center justify-center bg-gray-300 border-2 border-gray-300 rounded-lg overflow-hidden">
            <img src={processedImage} alt="Processed" className="w-full h-full object-cover" />
          </div>
        ) : (
          <div className="w-64 h-64 bg-gray-300 border-2 border-gray-300 rounded-lg flex items-center justify-center">
            <p className="text-gray-500">No image yet</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default RemoveBackground;
