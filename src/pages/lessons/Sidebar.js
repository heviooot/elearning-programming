import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="fixed flex flex-col w-64 h-screen bg-reallydark shadow-md font-roboto z-10 p-4 text-white overflow-y-auto">
      <Link to="/" className="w-48 font-mono text-3xl text-center rounded-xl mx-auto pb-3 pt-2 px-2 mt-4 mb-6 block bg-orange shadow-lg">
        dingoding.
      </Link>
      <h1 className="text-lg font-medium my-2">Pengenalan</h1>
      <p className="py-2 px-4 text-sm rounded-lg transition duration-200 ease-in-out hover:bg-orange hover:shadow-lg">Materi 1</p>
      <p className="py-2 px-4 text-sm rounded-lg transition duration-200 ease-in-out hover:bg-orange hover:shadow-lg">Materi 2</p>
      <p className="py-2 px-4 text-sm rounded-lg transition duration-200 ease-in-out hover:bg-orange hover:shadow-lg">Materi 3</p>
      <h1 className="text-lg font-medium my-2">Chapter 1</h1>
      <p className="py-2 px-4 text-sm rounded-lg transition duration-200 ease-in-out hover:bg-orange hover:shadow-lg">Materi 1</p>
      <p className="py-2 px-4 text-sm rounded-lg transition duration-200 ease-in-out hover:bg-orange hover:shadow-lg">Materi 2</p>
      <p className="py-2 px-4 text-sm rounded-lg transition duration-200 ease-in-out hover:bg-orange hover:shadow-lg">Materi 3</p>
      <h1 className="text-lg font-medium my-2">Chapter 2</h1>
      <p className="py-2 px-4 text-sm rounded-lg transition duration-200 ease-in-out hover:bg-orange hover:shadow-lg">Materi 1</p>
      <p className="py-2 px-4 text-sm rounded-lg transition duration-200 ease-in-out hover:bg-orange hover:shadow-lg">Materi 2</p>
      <p className="py-2 px-4 text-sm rounded-lg transition duration-200 ease-in-out hover:bg-orange hover:shadow-lg">Materi 3</p>
    </div>
  );
};

export default Sidebar;
