import React, { useEffect, useState } from 'react';

const BillDetailsCard = () => {
  const [billDetails, setBillDetails] = useState({
    rideCharge: 0,
    bookingFees: 0,
    discount: 0,
  });
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    // Fetch bill details from the backend
    const fetchBillDetails = async () => {
      try {
        const response = await fetch('/api/bill-details'); // Replace with your API endpoint
        const data = await response.json();
        setBillDetails(data);
      } catch (error) {
        console.error('Error fetching bill details:', error);
      }
    };

    fetchBillDetails();
  }, []);

  useEffect(() => {
    // Calculate total amount whenever billDetails changes
    const { rideCharge, bookingFees, discount } = billDetails;
    const total = rideCharge + bookingFees - discount;
    setTotalAmount(total);
  }, [billDetails]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="relative flex flex-col bg-clip-border rounded-xl bg-gradient-to-tr from-gray-900 to-gray-800 text-white shadow-gray-900/20 shadow-md w-full max-w-[25rem] p-8">
        <div className="relative pb-8 m-0 mb-8 overflow-hidden text-center  bg-transparent border-b border-white/10  ">
          <p className="block font-sans text-lg  font-normal leading-normal text-white uppercase">
            Bill Details
          </p>
        </div>
        <div className="p-0">
          <ul className="flex flex-col gap-4">
            <li className="flex items-center justify-between gap-4">
              <span className="p-1 border rounded-full border-white/20 bg-white/20">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-3 h-3">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
                </svg>
              </span>
              <p className="block font-sans p-3 text-base antialiased font-normal leading-relaxed text-inherit">
                Ride Charge 
              </p>
              <span>₹{billDetails.rideCharge.toFixed(2)}</span>
            </li>
            <li className="flex items-center justify-between gap-4">
              <span className="p-1 border rounded-full border-white/20 bg-white/20">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-3 h-3">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
                </svg>
              </span>
              <p className="block p-3  font-sans text-base antialiased font-normal leading-relaxed text-inherit">
                Booking Fees & Convenience Charges
              </p>
              <span>₹{billDetails.bookingFees.toFixed(2)}</span>
            </li>
            <li className="flex items-center mb-7 justify-between gap-4">
              <span className="p-1 border rounded-full border-white/20 bg-white/20">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-3 h-3">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
                </svg>
              </span>
              <p className="block p-3 font-sans text-base antialiased font-normal leading-relaxed text-inherit">
                Discount 
              </p>
              <span>- ₹{billDetails.discount.toFixed(2)}</span>
            </li>
            
          </ul>
        </div>
        <div className='flex items-center  border-t border-white/10 justify-between gap-4'>
          <p className="block  p-3 font-sans text-base antialiased font-normal leading-relaxed text-inherit">
            Total Amount 
          </p>
          <span>₹{totalAmount.toFixed(2)}</span>
        </div>
        <div className="p-0 mt-12 border-t border-white/10 ">
          <button
            className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-sm py-3.5 px-7 rounded-lg bg-white text-gray-900 shadow-md shadow-blue-gray-500/10 hover:shadow-lg hover:shadow-blue-gray-500/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none block w-full hover:scale-[1.02] focus:scale-[1.02] active:scale-100"
            type="button"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default BillDetailsCard;
