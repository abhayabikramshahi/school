import React from 'react';

function Notices() {
  return (
    <>
      <div className="container mx-auto px-4">
        <div className="notices py-6">
          <div className="title text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800">Notices</h1>
          </div>
          <div className="box flex flex-col md:flex-row items-center bg-blue-600 text-white rounded-lg shadow-md overflow-hidden p-6">
            <div className="img w-full md:w-1/2 p-4">
              <img
                src="https://i.pinimg.com/474x/55/ff/fd/55fffd0c36df65c2a8f4139057022e3a.jpg"
                alt="Notice"
                className="w-full h-60 object-cover rounded-lg"
              />
            </div>
            <div className="des w-full md:w-1/2 p-4">
              <h2 className="text-2xl font-semibold mb-4">
                Notice Title is important and we are going
              </h2>
              <p className="text-base leading-relaxed">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum velit totam
                excepturi aspernatur deserunt unde inventore eos asperiores assumenda nobis
                similique voluptas amet architecto laboriosam, nulla perspiciatis atque laudantium
                accusantium? Tempore, dicta!
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="gap my-12"></div>
    </>
  );
}

export default Notices;
