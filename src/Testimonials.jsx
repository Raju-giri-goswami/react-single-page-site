import React from "react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Matt Cannon",
      date: "September 1, 2023",
      feedback:
        "Lorem ipsum dolor sit amet consectetur. Arcu nisi diam eget id turpis donec et morbi.",
      image: "images/Ellipse-95.png",
    },
    {
      name: "Jane Doe",
      date: "August 15, 2023",
      feedback:
        "Sit eu nisl non scelerisque vestibulum pulvinar. Condimentum massa bibendum pretium tincidunt sed vel.",
      image: "images/Ellipse-95.png",
    },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl font-bold mb-8 px-20">What Our Students Are Saying!</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((item, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-lg">
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 mx-auto rounded-full mb-4"
              />
              <h3 className="font-bold text-lg">{item.name}</h3>
              <time className="text-gray-500 text-sm">{item.date}</time>
              <p className="mt-4 text-gray-600">{item.feedback}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
