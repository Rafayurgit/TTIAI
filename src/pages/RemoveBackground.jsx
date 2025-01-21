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
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Remove Image Background</h2>
      <div className="w-full max-w-md">
        <input
          type="file"
          accept="image/*"
          className="w-full p-3 mb-4 border border-gray-300 rounded shadow-sm"
          onChange={handelFileChange}
        />
        <button className="w-full bg-green-500 text-white py-2 rounded shadow"
        disabled={isProcessing}
        onClick={handelRemoveBg}
        >
          {isProcessing ? ("Processing...") : ("Remove Background")}
        </button>
      </div>
      
      <div className="mt-6">
        <h3 className="text-lg text-gray-700 mb-2">Processed Image:</h3>
        {uploadedImage ? (
          <div>
            <img src={uploadedImage} alt="Uploaded" className='w-64 h-64 object-cover border border-gray-300 rounded' />
          </div>
        ) : (
        <div className="w-64 h-64 bg-gray-300 border border-gray-300 rounded flex items-center justify-center">
          <p className="text-gray-500">No image yet</p>
        </div>
        )}
        
      </div>
    </div>
  );
};

export default RemoveBackground;
