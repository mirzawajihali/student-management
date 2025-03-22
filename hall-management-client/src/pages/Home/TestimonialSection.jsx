import React, { useRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import required modules
import { Navigation } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const TestimonialSection = () => {
  const prevButtonRef = useRef(null);
  const nextButtonRef = useRef(null);

  return (
    <section className="py-24 bg-gradient-to-b from-[#BDDDFC]/30 to-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap lg:flex-nowrap justify-center lg:justify-between items-center gap-8 max-w-sm sm:max-w-2xl lg:max-w-full mx-auto">
          {/* Left Section */}
          <div className="w-full lg:w-2/5 text-center lg:text-left">
            <span className="text-sm text-[#6A89A7] font-medium mb-4 block">
              Testimonials
            </span>
            <h2 className="text-4xl font-bold text-[#384959] leading-[3.25rem] mb-8">
              Our Students{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-tr from-[#88BDF2] to-[#384959]">
                Feedback
              </span>
            </h2>
            {/* Slider Controls */}
            <div className="flex items-center justify-center lg:justify-start gap-10">
              <button
                ref={prevButtonRef}
                className="group flex justify-center items-center border border-[#384959] w-12 h-12 transition-all duration-500 rounded-lg hover:bg-[#384959]"
              >
                <svg
                  className="h-6 w-6 text-[#384959] group-hover:text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.9999 12L4.99992 12M9.99992 6L4.70703 11.2929C4.3737 11.6262 4.20703 11.7929 4.20703 12C4.20703 12.2071 4.3737 12.3738 4.70703 12.7071L9.99992 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button
                ref={nextButtonRef}
                className="group flex justify-center items-center border border-[#384959] w-12 h-12 transition-all duration-500 rounded-lg hover:bg-[#384959]"
              >
                <svg
                  className="h-6 w-6 text-[#384959] group-hover:text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 12L19 12M14 18L19.2929 12.7071C19.6262 12.3738 19.7929 12.2071 19.7929 12C19.7929 11.7929 19.6262 11.6262 19.2929 11.2929L14 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Right Section - Slider */}
          <div className="w-full lg:w-3/5">
            <Swiper
              modules={[Navigation]}
              spaceBetween={30}
              slidesPerView={1}
              navigation={{
                prevEl: prevButtonRef.current,
                nextEl: nextButtonRef.current,
              }}
              onBeforeInit={(swiper) => {
                swiper.params.navigation.prevEl = prevButtonRef.current;
                swiper.params.navigation.nextEl = nextButtonRef.current;
              }}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
              }}
              className="testimonial-swiper"
            >
              {/* Slide 1 */}
              <SwiperSlide>
                <div className="group bg-white border border-gray-300 rounded-2xl p-6 transition-all duration-500 hover:border-[#88BDF2] h-full">
                  <div className="flex items-center gap-5 mb-5 sm:mb-9">
                    <img
                      className="w-16 h-16 rounded-full object-cover"
                      src="https://randomuser.me/api/portraits/men/32.jpg"
                      alt="avatar"
                    />
                    <div className="grid gap-1">
                      <h5 className="text-[#384959] font-medium">Ahmed Khan</h5>
                      <span className="text-sm text-[#6A89A7]">Computer Science</span>
                    </div>
                  </div>
                  <div className="flex items-center mb-5 sm:mb-9 gap-2 text-[#88BDF2]">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5"
                        viewBox="0 0 18 17"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.10326 1.31699C8.47008 0.57374 9.52992 0.57374 9.89674 1.31699L11.7063 4.98347C11.8519 5.27862 12.1335 5.48319 12.4592 5.53051L16.5054 6.11846C17.3256 6.23765 17.6531 7.24562 17.0596 7.82416L14.1318 10.6781C13.8961 10.9079 13.7885 11.2389 13.8442 11.5632L14.5353 15.5931C14.6754 16.41 13.818 17.033 13.0844 16.6473L9.46534 14.7446C9.17402 14.5915 8.82598 14.5915 8.53466 14.7446L4.91562 16.6473C4.18199 17.033 3.32456 16.41 3.46467 15.5931L4.15585 11.5632C4.21148 11.2389 4.10393 10.9079 3.86825 10.6781L0.940384 7.82416C0.346867 7.24562 0.674378 6.23765 1.4946 6.11846L5.54081 5.53051C5.86652 5.48319 6.14808 5.27862 6.29374 4.98347L8.10326 1.31699Z"
                          fill="currentColor"
                        />
                      </svg>
                    ))}
                  </div>
                  <p className="text-sm text-[#6A89A7] leading-6 transition-all duration-500 group-hover:text-[#384959]">
                    "The student hub platform has completely transformed my university experience. I was able to find tutoring opportunities that not only helped me earn extra income but also reinforced my understanding of the subjects."
                  </p>
                </div>
              </SwiperSlide>

              {/* Slide 2 */}
              <SwiperSlide>
                <div className="group bg-white border border-gray-300 rounded-2xl p-6 transition-all duration-500 hover:border-[#88BDF2] h-full">
                  <div className="flex items-center gap-5 mb-5 sm:mb-9">
                    <img
                      className="w-16 h-16 rounded-full object-cover"
                      src="https://randomuser.me/api/portraits/women/44.jpg"
                      alt="avatar"
                    />
                    <div className="grid gap-1">
                      <h5 className="text-[#384959] font-medium">Fatima Ahmed</h5>
                      <span className="text-sm text-[#6A89A7]">Electrical Engineering</span>
                    </div>
                  </div>
                  <div className="flex items-center mb-5 sm:mb-9 gap-2 text-[#88BDF2]">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5"
                        viewBox="0 0 18 17"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.10326 1.31699C8.47008 0.57374 9.52992 0.57374 9.89674 1.31699L11.7063 4.98347C11.8519 5.27862 12.1335 5.48319 12.4592 5.53051L16.5054 6.11846C17.3256 6.23765 17.6531 7.24562 17.0596 7.82416L14.1318 10.6781C13.8961 10.9079 13.7885 11.2389 13.8442 11.5632L14.5353 15.5931C14.6754 16.41 13.818 17.033 13.0844 16.6473L9.46534 14.7446C9.17402 14.5915 8.82598 14.5915 8.53466 14.7446L4.91562 16.6473C4.18199 17.033 3.32456 16.41 3.46467 15.5931L4.15585 11.5632C4.21148 11.2389 4.10393 10.9079 3.86825 10.6781L0.940384 7.82416C0.346867 7.24562 0.674378 6.23765 1.4946 6.11846L5.54081 5.53051C5.86652 5.48319 6.14808 5.27862 6.29374 4.98347L8.10326 1.31699Z"
                          fill="currentColor"
                        />
                      </svg>
                    ))}
                  </div>
                  <p className="text-sm text-[#6A89A7] leading-6 transition-all duration-500 group-hover:text-[#384959]">
                    "I love the food token exchange feature! It saved me money when I couldn't use all my meal credits. The marketplace for second-hand goods is also amazing - I found all my textbooks at half the price."
                  </p>
                </div>
              </SwiperSlide>

              {/* Slide 3 */}
              <SwiperSlide>
                <div className="group bg-white border border-gray-300 rounded-2xl p-6 transition-all duration-500 hover:border-[#88BDF2] h-full">
                  <div className="flex items-center gap-5 mb-5 sm:mb-9">
                    <img
                      className="w-16 h-16 rounded-full object-cover"
                      src="https://randomuser.me/api/portraits/men/22.jpg"
                      alt="avatar"
                    />
                    <div className="grid gap-1">
                      <h5 className="text-[#384959] font-medium">Rafsan Rahman</h5>
                      <span className="text-sm text-[#6A89A7]">Business Studies</span>
                    </div>
                  </div>
                  <div className="flex items-center mb-5 sm:mb-9 gap-2 text-[#88BDF2]">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5"
                        viewBox="0 0 18 17"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.10326 1.31699C8.47008 0.57374 9.52992 0.57374 9.89674 1.31699L11.7063 4.98347C11.8519 5.27862 12.1335 5.48319 12.4592 5.53051L16.5054 6.11846C17.3256 6.23765 17.6531 7.24562 17.0596 7.82416L14.1318 10.6781C13.8961 10.9079 13.7885 11.2389 13.8442 11.5632L14.5353 15.5931C14.6754 16.41 13.818 17.033 13.0844 16.6473L9.46534 14.7446C9.17402 14.5915 8.82598 14.5915 8.53466 14.7446L4.91562 16.6473C4.18199 17.033 3.32456 16.41 3.46467 15.5931L4.15585 11.5632C4.21148 11.2389 4.10393 10.9079 3.86825 10.6781L0.940384 7.82416C0.346867 7.24562 0.674378 6.23765 1.4946 6.11846L5.54081 5.53051C5.86652 5.48319 6.14808 5.27862 6.29374 4.98347L8.10326 1.31699Z"
                          fill="currentColor"
                        />
                      </svg>
                    ))}
                  </div>
                  <p className="text-sm text-[#6A89A7] leading-6 transition-all duration-500 group-hover:text-[#384959]">
                    "Thanks to the internship listings on this platform, I secured a position at a leading company in my field. The application process was straightforward, and I received guidance every step of the way."
                  </p>
                </div>
              </SwiperSlide>

              {/* Slide 4 */}
              <SwiperSlide>
                <div className="group bg-white border border-gray-300 rounded-2xl p-6 transition-all duration-500 hover:border-[#88BDF2] h-full">
                  <div className="flex items-center gap-5 mb-5 sm:mb-9">
                    <img
                      className="w-16 h-16 rounded-full object-cover"
                      src="https://randomuser.me/api/portraits/women/29.jpg"
                      alt="avatar"
                    />
                    <div className="grid gap-1">
                      <h5 className="text-[#384959] font-medium">Nusrat Jahan</h5>
                      <span className="text-sm text-[#6A89A7]">Architecture</span>
                    </div>
                  </div>
                  <div className="flex items-center mb-5 sm:mb-9 gap-2 text-[#88BDF2]">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5"
                        viewBox="0 0 18 17"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.10326 1.31699C8.47008 0.57374 9.52992 0.57374 9.89674 1.31699L11.7063 4.98347C11.8519 5.27862 12.1335 5.48319 12.4592 5.53051L16.5054 6.11846C17.3256 6.23765 17.6531 7.24562 17.0596 7.82416L14.1318 10.6781C13.8961 10.9079 13.7885 11.2389 13.8442 11.5632L14.5353 15.5931C14.6754 16.41 13.818 17.033 13.0844 16.6473L9.46534 14.7446C9.17402 14.5915 8.82598 14.5915 8.53466 14.7446L4.91562 16.6473C4.18199 17.033 3.32456 16.41 3.46467 15.5931L4.15585 11.5632C4.21148 11.2389 4.10393 10.9079 3.86825 10.6781L0.940384 7.82416C0.346867 7.24562 0.674378 6.23765 1.4946 6.11846L5.54081 5.53051C5.86652 5.48319 6.14808 5.27862 6.29374 4.98347L8.10326 1.31699Z"
                          fill="currentColor"
                        />
                      </svg>
                    ))}
                  </div>
                  <p className="text-sm text-[#6A89A7] leading-6 transition-all duration-500 group-hover:text-[#384959]">
                    "The study groups feature helped me connect with peers in my architectural design courses. We collaborated on projects and shared resources, which significantly improved my academic performance."
                  </p>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;