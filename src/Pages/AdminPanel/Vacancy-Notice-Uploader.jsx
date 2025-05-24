import React, { useState } from 'react';

const VacancyNoticeUploader = () => {
  const [uploadType, setUploadType] = useState('vacancy');
  const [images, setImages] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleTypeChange = (type) => {
    setUploadType(type);
    setImages([]);
    setTitle('');
    setDescription('');
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    const filePreviews = files.map(file => ({
      file,
      preview: URL.createObjectURL(file),
    }));
    setImages(filePreviews);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (images.length === 0) {
      alert("Please upload at least one image.");
      return;
    }

    const payload = {
      type: uploadType,
      title,
      description,
      files: images.map(img => img.file.name),
    };

    console.log(payload);
    alert(`${uploadType.toUpperCase()} submitted with ${images.length} image(s)!`);
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
        <h2 className="text-3xl font-bold mb-6 text-center text-blue-700">
          Upload {uploadType === 'vacancy' ? 'Vacancy' : 'Notice'}
        </h2>

        <div className="flex justify-center gap-4 mb-6">
          {['vacancy', 'notice'].map((type) => (
            <button
              key={type}
              onClick={() => handleTypeChange(type)}
              className={`px-6 py-2 rounded-full font-semibold text-sm transition-all border ${
                uploadType === type
                  ? 'bg-blue-600 text-white border-blue-600 shadow-md'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border-gray-300'
              }`}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </button>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium mb-1">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter title (optional)"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter description (optional)"
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Upload Images</label>
            <input
              type="file"
              multiple
              accept="image/*"
              onChange={handleImageChange}
              className="block w-full text-sm text-gray-600
                file:mr-4 file:py-2 file:px-4
                file:rounded-md file:border-0
                file:text-sm file:font-semibold
                file:bg-blue-50 file:text-blue-700
                hover:file:bg-blue-100"
            />
          </div>

          {images.length > 0 && (
            <div className="mt-4">
              <p className="mb-2 text-sm font-medium text-gray-600">Preview:</p>
              <div className="flex gap-3 overflow-x-auto pb-1">
                {images.map((img, idx) => (
                  <div
                    key={idx}
                    className="min-w-[100px] h-[80px] rounded-lg border border-gray-300 overflow-hidden"
                  >
                    <img
                      src={img.preview}
                      alt={`preview-${idx}`}
                      className="object-cover w-full h-full"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-md font-semibold text-lg hover:bg-blue-700 transition duration-200"
          >
            Upload {uploadType === 'vacancy' ? 'Vacancy' : 'Notice'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default VacancyNoticeUploader;
