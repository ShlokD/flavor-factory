const Contact = () => {
  return (
    <div className="flex flex-col w-full text-white p-4">
      <h1 className="text-center self-center text-4xl font-bold">Contact</h1>

      <h2 className="text-center text-3xl font-bold p-2 my-4 ">Contact Info</h2>
      <div className="flex flex-col justify-center p-4 text-xl">
        <div className="flex gap-2">
          <p className="text-green-500">Address</p>
          <address className="break-words w-2/3">
            4th G Main Rd, HRBR Layout, Kalyan Nagar
          </address>
        </div>
        <div className="flex  gap-2">
          <p className="text-green-500">Phone</p>
          <address>098 86 312605</address>
        </div>
        <div className="flex gap-2">
          <p className="text-green-500">Email</p>
          <p>flavor.factory@something.com</p>
        </div>
      </div>
      <img src="contact1.jpg" alt="" />
      <h2 className="text-center text-3xl font-bold p-2 my-4">Timings</h2>
      <div className="flex flex-col justify-center p-4 text-xl">
        <div className="flex  gap-2">
          <p className="text-green-500">Lunch</p>
          <p>12:00 to 16:00</p>
        </div>
        <div className="flex  gap-2">
          <p className="text-green-500">Dinner</p>
          <p>19:00 to 00:30</p>
        </div>
        <div className="flex gap-2">
          <p className="text-green-500">Weekly Closed</p>
          <p>Monday</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
