import React, { useState } from 'react';

const MyPaginationComponent = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10); // Adjust as needed

  // Calculate indexes for slicing data
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  // Calculate total pages
  const totalPages = Math.ceil(data.length / itemsPerPage);

  // Handle page changes
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Render page numbers
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      {/* Render current items */}
      <ul>
        {currentItems.map((item, index) => (
          <li key={index}>{item.name}</li> // Example: assuming items have a 'name'
        ))}
      </ul>

      {/* Pagination controls */}
      <nav>
        <ul className="pagination">
          <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
            <button onClick={() => paginate(currentPage - 1)} className="page-link">
              Previous
            </button>
          </li>
          {pageNumbers.map(number => (
            <li key={number} className={`page-item ${currentPage === number ? 'active' : ''}`}>
              <button onClick={() => paginate(number)} className="page-link">
                {number}
              </button>
            </li>
          ))}
          <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
            <button onClick={() => paginate(currentPage + 1)} className="page-link">
              Next
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MyPaginationComponent;







import React, { useState, useEffect } from 'react';

// Pagination Component (Alternate Style)
const Pagination = ({ totalPages, currentPage, onPageChange }) => {
  const getPageNumbers = () => {
    const pages = [];
    const maxPagesToShow = 5; // Max number of page buttons to show (excluding prev/next)
    const half = Math.floor(maxPagesToShow / 2);

    // Always add the first page
    pages.push(1);

    // Determine start and end for the central block of pages
    let startPage = Math.max(2, currentPage - half);
    let endPage = Math.min(totalPages - 1, currentPage + half);

    // Adjust if we are too close to the beginning or end
    if (currentPage - half <= 1) {
      endPage = Math.min(totalPages - 1, maxPagesToShow);
    }
    if (currentPage + half >= totalPages) {
      startPage = Math.max(2, totalPages - maxPagesToShow + 1);
    }


    // Add leading ellipsis if needed
    if (startPage > 2) {
      pages.push('...');
    }

    // Add central pages
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    // Add trailing ellipsis if needed
    if (endPage < totalPages - 1) {
      pages.push('...');
    }

    // Always add the last page if it's not already in the list and not 1
    if (totalPages > 1 && pages.indexOf(totalPages) === -1) {
      pages.push(totalPages);
    }

    // Ensure page 2 is shown if page 1 is active and totalPages > 1
    if (currentPage === 1 && totalPages > 1 && pages.length < maxPagesToShow + 2) {
        if (pages.indexOf(2) === -1) {
            pages.splice(1, 0, 2); // Insert 2 after 1
        }
    }


    // Filter out duplicates and ensure correct order, important for the dynamic page number logic
    const uniquePages = [];
    const seen = new Set();
    for (const page of pages) {
        if (!seen.has(page)) {
            uniquePages.push(page);
            seen.add(page);
        }
    }
    return uniquePages.sort((a, b) => {
        if (a === '...') return 1; // Send '...' to end for sorting
        if (b === '...') return -1;
        return a - b;
    });
  };

  const pageNumbers = getPageNumbers();

  return (
    <nav aria-label="Page navigation" className="flex justify-center my-8">
      <ul className="flex items-center space-x-1"> {/* Reduced space */}
        {/* Previous Button */}
        <li>
          <button
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={`
              inline-flex items-center justify-center px-3 py-2 text-sm font-medium
              text-gray-600 bg-white border border-gray-200 rounded-lg hover:bg-gray-100
              focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
              disabled:opacity-40 disabled:cursor-not-allowed transition-colors duration-200
            `}
            aria-label="Previous Page"
          >
            	<svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" 				xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" 				strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
            Prev
          </button>
        </li>

        {/* Page Numbers */}
        {pageNumbers.map((page, index) => (
          <li key={index}>
            {page === '...' ? (
              <span
                className="px-3 py-2 text-sm font-medium text-gray-500"
                aria-hidden="true"
              >
                ...
              </span>
            ) : (
              <button
                onClick={() => onPageChange(page)}
                className={`
                  inline-flex items-center justify-center px-4 py-2 text-sm font-medium
                  ${currentPage === page
                    ? 'bg-blue-600 text-white rounded-lg shadow-sm' // Active state: Blue filled button
                    : 'text-gray-700 bg-white rounded-lg hover:bg-gray-100' // Inactive state: White, subtle hover
                  }
                  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
                  transition-colors duration-200
                `}
                aria-current={currentPage === page ? 'page' : undefined}
                aria-label={`Page ${page}`}
              >
                {page}
              </button>
            )}
          </li>
        ))}

        {/* Next Button */}
        <li>
          <button
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`
              inline-flex items-center justify-center px-3 py-2 text-sm font-medium
              text-gray-600 bg-white border border-gray-200 rounded-lg hover:bg-gray-100
              focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
              disabled:opacity-40 disabled:cursor-not-allowed transition-colors duration-200
            `}
            aria-label="Next Page"
          >
            Next
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
          </button>
        </li>
      </ul>
    </nav>
  );
};

// Main App Component
function App() {
  const [currentPage, setCurrentPage] = useState(3); // Initial page from your image
  const totalPages = 10; // Total pages from your image

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
      // In a real application, you would typically fetch data for the newPage here.
      console.log(`Navigating to page: ${newPage}`);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4 font-inter">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Modern Pagination Example</h1>

      <div className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-lg text-center">
        <p className="text-gray-700 mb-4">
          Current Page: <span className="font-semibold text-blue-600">{currentPage}</span> / {totalPages}
        </p>
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
        <p className="text-gray-500 text-sm mt-4">
          This version has filled active buttons and cleaner inactive ones.
        </p>
      </div>
    </div>
  );
}

export default App;