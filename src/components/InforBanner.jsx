import React from 'react';

const InfoBanner = () => {
  return (
    <div className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-2xl mx-auto px-6 py-8 text-center">
        {/* Info Text */}
        <p className="text-2xl font-semibold text-gray-800 mb-2">
          Premium Quality Imitation Jewellery at Best Prices!
        </p>
        <p className="text-gray-600 text-base mb-4">
          Discover our timeless collection and elevate your style effortlessly.
        </p>
        {/* Call to Action Button */}
        <a 
          href="#shop-now"
          className="inline-block px-6 py-2.5 bg-gray-100 text-gray-800 font-medium rounded-full hover:bg-gray-200 transition duration-200"
        >
          Shop Now
        </a>
      </div>
    </div>
  );
};

export default InfoBanner;





// import React from 'react';

// const InfoBanner = () => {
//   return (
//     <div className="bg-white border-b border-gray-100">
//       <div className="container mx-auto px-4 py-3">
//         <div className="grid gap-4 lg:flex lg:items-center lg:justify-between">
//           {/* Info Text */}
//           <div className="space-y-1 text-center lg:text-left">
//             <p className="text-base font-medium text-gray-900">
//               Premium Quality Imitation Jewellery at Best Prices!
//             </p>
            {/* <div className="text-sm text-gray-600 flex flex-col lg:flex-row lg:items-center lg:gap-4">
              <p className="flex items-center justify-center lg:justify-start">
                <svg className="w-4 h-4 mr-1 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                No Exchange/Return/Refund/COD
              </p>
              <p className="flex items-center justify-center lg:justify-start">
                <svg className="w-4 h-4 mr-1 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                Unboxing video required for exchange/return!
              </p>
            </div> */}
        //   </div>

          {/* WhatsApp Button */}
          {/* <div className="flex justify-center lg:justify-end">
            <a
              href="https://bit.ly/34uWZhX"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
            >
              <svg 
                className="w-5 h-5 mr-2" 
                viewBox="0 0 24 24" 
                fill="currentColor"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Chat on WhatsApp
            </a>
          </div> */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default InfoBanner;