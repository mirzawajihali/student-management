import React from 'react';

const SellToken = () => {
    return (
        <div>
           <div className="flex items-center justify-center p-12">
  <div className="mx-auto w-full max-w-[550px] bg-white">
    <form>
      {/* Full Name */}
      <div className="mb-5">
        <label htmlFor="name" className="mb-3 block text-base font-medium text-[#07074D]">
          Full Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Full Name"
          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        />
      </div>

      {/* Phone Number */}
      <div className="mb-5">
        <label htmlFor="phone" className="mb-3 block text-base font-medium text-[#07074D]">
          Phone Number
        </label>
        <input
          type="text"
          name="phone"
          id="phone"
          placeholder="Enter your phone number"
          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        />
      </div>

      <label className="mb-5 block text-base font-semibold text-[#07074D] sm:text-xl">
          Token Details
        </label>

      {/* Date */}
      <div className="-mx-3 flex flex-wrap">
        <div className="w-full px-3 sm:w-1/2">
          <div className="mb-5">
            <label htmlFor="date" className="mb-3 block text-base font-medium text-[#07074D]">
              Date
            </label>
            <input
              type="date"
              name="date"
              id="date"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
        </div>

        

        {/* Time (Night or Day) */}
        <div className="w-full px-3 sm:w-1/2">
          <div className="mb-5">
            <label htmlFor="time" className="mb-3 block text-base font-medium text-[#07074D]">
              Time
            </label>
            <select
              name="time"
              id="time"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            >
              <option value="day">Day</option>
              <option value="night">Night</option>
            </select>
          </div>
        </div>
      </div>

      {/* Address Details */}
      <div className="mb-5 pt-3">
       
      <div className="w-full">
  <div className="mb-5">
    <select
      name="token-hall"
      id="token-hall"
      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
    >
      <option value="" disabled selected>Your Hall</option>
      <option value="Non Residential">Non Residential</option>
      <option value="Shahid Lt. Selim Hall">Shahid Lt. Selim Hall</option>
      <option value="Shahid Shahidul Islam Hall">Shahid Shahidul Islam Hall</option>
      <option value="Shahid Abdul Hamid Hall">Shahid Abdul Hamid Hall</option>
      <option value="Tin Shed Hall (Extension)">Tin Shed Hall (Extension)</option>
      <option value="Shahid President Ziaur Rahman Hall">Shahid President Ziaur Rahman Hall</option>
      <option value="Bangabandhu Sheikh Mujibur Rahman Hall">Bangabandhu Sheikh Mujibur Rahman Hall</option>
      <option value="Deshratna Sheikh Hasina Hall">Deshratna Sheikh Hasina Hall</option>
    </select>
  </div>
</div>

          {/* Room Number */}
          <div className="w-full  ">
            <div className="mb-5">
              <input
                type="text"
                name="room-number"
                id="room-number"
                placeholder="Room Number"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
          </div>

          {/* Token of Which Hall */}
          <div className="w-full ">
  <div className="mb-5">
    <select
      name="token-hall"
      id="token-hall"
      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
    >
      <option value="" disabled selected>Token of Which Hall</option>
      <option value="Shahid Lt. Selim Hall">Shahid Lt. Selim Hall</option>
      <option value="Shahid Shahidul Islam Hall">Shahid Shahidul Islam Hall</option>
      <option value="Shahid Abdul Hamid Hall">Shahid Abdul Hamid Hall</option>
      <option value="Tin Shed Hall (Extension)">Tin Shed Hall (Extension)</option>
      <option value="Shahid President Ziaur Rahman Hall">Shahid President Ziaur Rahman Hall</option>
      <option value="Bangabandhu Sheikh Mujibur Rahman Hall">Bangabandhu Sheikh Mujibur Rahman Hall</option>
      <option value="Deshratna Sheikh Hasina Hall">Deshratna Sheikh Hasina Hall</option>
    </select>
  </div>
</div>
        </div>
      

      {/* Submit Button */}
      <div>
        <button
          type="submit"
          className="hover:shadow-form w-full rounded-md bg-gray-900 py-3 px-8 text-center text-base font-semibold text-white outline-none"
        >
          Sell Token
        </button>
      </div>
    </form>
  </div>
</div>
        </div>
    );
};

export default SellToken;