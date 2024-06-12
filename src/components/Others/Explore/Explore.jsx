const Explore = () => {
  return (
    <div className="bg-slate-50">
      <div className=" py-5 lg:py-20 container mx-auto ">
        <div className=" font-serif">
          <h2 className="mx-5 md:mx-0 text-3xl font-serif mb-5 border-l-4 pl-3 border-green-600">
            Know more about me
          </h2>
        </div>
        <div className="mt-10 mx-5 lg:mx-0">
          <h2 className="text-2xl font-semibold text-black font-serif mb-4">
            I&apos;m Kahafil Ora, a managing director
          </h2>
          <div className="flex flex-col md:flex-row font-serif">
            <p className="text-gray-600 mb-4 md:w-3/4 text-lg">
              Md. Kahafil Ora is a highly experienced and knowledgeable
              cybersecurity professional with a passion for teaching and
              training. With over 16 years of industry experience, he possesses
              a deep understanding of various cybersecurity domains, including
              network security, information security, ethical hacking, incident
              response, and risk management. Md. Kahafil Ora is dedicated to
              empowering individuals and organizations with the necessary skills
              and knowledge to defend against cyber threats effectively.
              <br></br>
              <br></br>
              He, M.Sc in CS, CCNA, MCP, MCSA, MCSE, RHCT, RHCSA, RHCE has
              extensive experience in Cybersecurity, IT Infrastructure, and
              Technology Training. Currently, he is taking care of the whole
              business operation of Goinnovior Limited (IT Services and
              Consulting Firm) as a Managing Director, and working at
              Codeinnovior (Technology Training Media) as CEO.
            </p>
            <div className="md:ml-20 mt-6 md:mt-0 text-lg">
              <p className="text-gray-800 mb-2">
                <strong>Name:</strong> Kahafil Ora
              </p>
              <hr className="pb-2"></hr>
              <p className="text-gray-800 mb-2">
                <strong>Email:</strong> kahafil@goinnovior.com
              </p>
              <hr className="pb-2"></hr>
              <p className="text-gray-800 mb-2">
                <strong>Phone:</strong> +880177777777777
              </p>
              <hr className="pb-2"></hr>
              <p className="text-gray-800 mb-2">
                <strong>Address:</strong> Mirpur, DOHS, Dhaka, Bangladesh
              </p>
              <hr className="pb-2"></hr>
            </div>
          </div>
          <div className="mt-10">
            <a
              href="/path-to-your-cv"
              download
              className="bg-black text-white px-6 py-3 rounded-md shadow-md hover:bg-green-600 transition duration-300"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;
