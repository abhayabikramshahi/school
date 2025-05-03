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
    <div className="min-h-screen bg-white text-black px-6 py-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-semibold mb-8 text-center">
          Upload {uploadType === 'vacancy' ? 'Vacancy' : 'Notice'}
        </h1>

        <div className="flex justify-center gap-4 mb-8">
          <button
            onClick={() => handleTypeChange('vacancy')}
            className={`px-5 py-2.5 rounded-md font-medium transition-all ${
              uploadType === 'vacancy'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-black hover:bg-gray-200'
            }`}
          >
            Vacancy
          </button>
          <button
            onClick={() => handleTypeChange('notice')}
            className={`px-5 py-2.5 rounded-md font-medium transition-all ${
              uploadType === 'notice'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-black hover:bg-gray-200'
            }`}
          >
            Notice
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            placeholder="Title (optional)"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
          />

          <textarea
            placeholder="Description (optional)"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={4}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg resize-none"
          />

          <input
            type="file"
            multiple
            accept="image/*"
            onChange={handleImageChange}
            className="w-full text-black file:mr-4 file:py-2 file:px-4 file:border file:border-gray-300 file:rounded-md file:bg-white file:text-black hover:file:bg-gray-100"
          />

          {/* Side-by-side preview */}
          {images.length > 0 && (
            <div className="flex gap-4 mt-4 overflow-x-auto pb-2">
              {images.map((img, idx) => (
                <div
                  key={idx}
                  className="min-w-[120px] h-[100px] rounded-md border border-gray-300 overflow-hidden flex-shrink-0"
                >
                  <img
                    src={img.preview}
                    alt={`preview-${idx}`}
                    className="object-cover w-full h-full"
                  />
                </div>
              ))}
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-md text-lg font-medium hover:bg-blue-700 transition-all"
          >
            Upload {uploadType === 'vacancy' ? 'Vacancy' : 'Notice'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default VacancyNoticeUploader;
