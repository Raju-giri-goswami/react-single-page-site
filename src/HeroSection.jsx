import React from "react";

const HeroSection = () => {
  return (
    <section className="lg:py-20 sm:py-10 py-8 px-20">
      <div className="container mx-auto flex flex-col md:flex-row">
        <div className="md:w-1/2 pt-12">
          <h1 className="lg:text-5xl sm:text-4xl text-2xl font-bold">
            Career Opportunities in
          </h1>
          <h1 className="lg:text-5xl sm:text-4xl text-2xl font-bold text-cyan-400">
            Digital Marketing
          </h1>
          <p className="py-4">Digital marketing course so good, you only pay-after-placement</p>
          <ul className="list-disc ml-5">
            <li>Specialization: Performance Marketing</li>
            <li>Min salary of Rs 4.5 LPA</li>
            <li>50 seats only</li>
          </ul>
          <div className="flex gap-6 py-6">
            <button className="bg-cyan-400 text-white font-bold px-6 py-2 rounded-lg">
              Book 2 Days Demo
            </button>
            <button className="bg-white border-2 border-gray-300 font-bold px-6 py-2 rounded-lg">
              Download Curriculum
            </button>
          </div>
        </div>
        <div className="md:w-1/2 relative flex justify-center">
          <img src="/images/Ellipse-92.png" alt="Background" className="h-96 w-96" />
          <div className="absolute top-10 left-15 bg-white shadow-lg rounded-lg p-8">
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-900">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full rounded-md border py-2 px-3"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-900">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full rounded-md border py-2 px-3"
                />
              </div>
              <div>
                <label htmlFor="mobile" className="block text-sm font-medium text-gray-900">
                  Mobile Number
                </label>
                <input
                  type="text"
                  id="mobile"
                  className="w-full rounded-md border py-2 px-3"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white font-bold py-2 rounded-lg"
              >
                Register Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
