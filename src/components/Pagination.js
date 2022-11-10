import React from "react";

const Pagination = ({ productsPerPage, totalProducts, paginate }) => {
    const pageNumbers = []

    for (let i = 1; i <= (totalProducts / productsPerPage); i++) {
        pageNumbers.push(i)
    }
    return (
        <div>
            <ul className="mt-6">
{
    pageNumbers.map(number => (
        <li className="display inline ml-4 mt-4" key={number}>
<a class="hover:border-blue-500 hover:border-solid hover:bg-white hover:text-blue-500  rounded-md border-2 border-dashed border-slate-300 text-sm  text-slate-900 font-medium py-2 px-2 " href="!#" onClick={() => paginate(number)}>
    {number}
</a>
        </li>
    ))
}
            </ul>
        </div>
    )
}

export default Pagination