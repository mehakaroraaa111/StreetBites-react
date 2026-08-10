function Contact() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">

      <div className="text-center mb-10">
        <h1 className="text-5xl font-bold text-gray-800">
          Get In Touch
        </h1>

        <p className="text-xl text-gray-500 mt-3">
          We'd Love To Hear From You.
        </p>
      </div>


      <div className="max-w-6xl mx-auto grid grid-cols-5 gap-6">


        <div className="col-span-2 bg-white rounded-2xl shadow-lg p-8">

          <h2 className="text-2xl font-bold text-gray-800">
            Contact Information
          </h2>

          <div className="mt-10">
            <h3 className="font-semibold text-lg">
              Our Location
            </h3>

            <p className="text-gray-500 mt-2">
              123 Food Street, Bites City,
              <br />
              India - 302001
            </p>
          </div>

          <div className="mt-8">
            <h3 className="font-semibold text-lg">
              Email Us
            </h3>

            <p className="text-gray-500 mt-2">
              hello@streetbites.com
            </p>
          </div>

          <div className="mt-8">
            <h3 className="font-semibold text-lg">
              Call Us
            </h3>

            <p className="text-gray-500 mt-2">
              +91 03837547892
            </p>
          </div>

          <div className="mt-8">
            <h3 className="font-semibold text-lg">
              Working Hours
            </h3>

            <p className="text-gray-500 mt-2">
              Mon - Sun : 10:00 AM - 11:00 PM
            </p>
          </div>

        </div>


       
        <div className="col-span-3 bg-white rounded-2xl shadow-lg p-8">

          <h2 className="text-2xl font-bold text-gray-800">
            Send us a message
          </h2>

          <div className="grid grid-cols-2 gap-4 mt-8">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-300 rounded-lg p-4 outline-none focus:border-orange-500"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full border border-gray-300 rounded-lg p-4 outline-none focus:border-orange-500"
            />

          </div>

          <input
            type="text"
            placeholder="Subject"
            className="w-full mt-4 border border-gray-300 rounded-lg p-4 outline-none focus:border-orange-500"
          />

          <textarea
            placeholder="Your Message"
            rows="6"
            className="w-full mt-4 border border-gray-300 rounded-lg p-4 outline-none focus:border-orange-500 resize-none"
          ></textarea>

          <button className="w-full mt-5 bg-orange-500 text-white font-semibold py-4 rounded-lg hover:bg-orange-600 transition">
            Send Message
          </button>

        </div>

      </div>


   
      <div className="max-w-6xl mx-auto mt-8 bg-white rounded-2xl shadow-lg p-8">

        <div className="flex items-center justify-between gap-10">

          
          <div className="flex-1">

            <h2 className="text-2xl font-bold text-gray-800">
              Have questions or feedback?
            </h2>

            <p className="text-gray-500 mt-2">
              We are always here to help. Drop us a message and
              <br />
              we will get back to you as soon as possible.
            </p>

          </div>


         
          <div className="shrink-0">

            <img
              src="https://images.unsplash.com/photo-1547592180-85f173990554?q=80&w=800&auto=format&fit=crop"
              alt="Delicious food"
              className="w-56 h-36 object-cover rounded-2xl"
            />

          </div>

        </div>

      </div>

    </div>
  );
}

export default Contact;