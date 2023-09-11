"use client"
import { useRouter } from "next/router";
import {useState} from "react"

function HouseList() {

    const [catalog, setCatalog] = useState([
        {
          id: 1,
          name: 'Item 1',
          price: 10.99,
        },
        {
          id: 2,
          name: 'Item 2',
          price: 15.99,
        },
        // Add more items as needed
      ]);
    const [currentPage, setCurrentPage] = useState(1);

    const handleClick =() =>{
        console.log("A")
      }
    
  const pageSize = 15;

  const totalPages = Math.ceil(catalog.length / pageSize);

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const currentPageData = catalog.slice(startIndex, endIndex);

  return (
   <div className="m-5">
  <div className="col-span-8">
    <div className="mt-4 flex">
      <label className="sr-only">Search</label>
      <div className="relative mt-1 flex">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <svg
            className="h-5 w-5 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clipRule="evenodd"
            ></path>
          </svg>
        </div>
        <input
          type="text"
          id="table-search"
          className="block w-80 rounded-lg border border-gray-300 bg-gray-50 p-2 pl-10 text-sm text-gray-900 focus:border-violet-400 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          placeholder="Buscar un Empleado"
        />
      </div>
      <button className="ml-9 flex items-center justify-center text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm text-center dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-800 md:w-20 lg:w-30" onClick={handleClick}> Placeholder </button>
    </div>
   {/* headers de la tabla  */}
        <div className="my-6 overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400">
    {/* datos que toma de la api */}
            <tbody>
              {catalog.slice(startIndex, endIndex).map((data: any, index) => (
                <tr
                  className="border-b bg-white dark:border-gray-700 dark:bg-gray-900"
                  key={index}
                >
                  <th
                    scope="row"
                    className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
                  >
                    {data["id"]}
                  </th>
                  <td className="px-6 py-4">{data["name"]}</td>
                  <td className="px-6 py-4">{data["surname"]}</td>
                  <td className="px-6 py-4">{data["email"]}</td>
                  <td className="px-6 py-4">{data["status"]}</td>
                  <td className="px-6 py-4">
                    {data["status"] === "Activo" && <>
                    <a
                      href="#"
                      
                      className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                    >
                      Placeholder
                    </a>
                    </>}
                    {data["status"] === "Desactivado" && <>
                    <a
                      href="#"
                      
                      className="font-medium text-red-600 hover:underline dark:text-red-500"
                    >
                      Placeholder
                    </a>
                    </>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
    {/* parte inferior de la tabla */}
        <div>
          <nav
            className="flex items-center justify-between pt-4"
            aria-label="Table navigation"
          >
            <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
              Showing{" "}
              <span className="font-semibold text-gray-900 dark:text-white">
                {startIndex + 1}-{Math.min(endIndex, catalog.length)}
              </span>{" "}
              of{" "}
              <span className="font-semibold text-gray-900 dark:text-white">
                {catalog.length}
              </span>
            </span>
            <ul className="inline-flex items-center -space-x-px">
              {/* Código para generar los enlaces de paginación */}
              {[...Array(totalPages)].map((_, page) => (
                <li key={page}>
                  <a
                    href="#"
                    className={`px-3 py-2 leading-tight ${
                      page + 1 === currentPage
                        ? "text-blue-600 border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:bg-gray-700 dark:border-gray-700 dark:text-white"
                        : "text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    }`}
                    onClick={() => setCurrentPage(page + 1)}
                  >
                    {page + 1}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default HouseList