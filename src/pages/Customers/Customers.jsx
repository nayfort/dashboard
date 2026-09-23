import { useState } from 'react';
import Search from "../../assets/svg/Search.jsx";
import './index.css';

const Customers = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [data, setData] = useState([
    { name: 'Jane Cooper', company: 'Microsoft', phone: '225-555-0118', email: 'jane@microsoft.com', country: 'United States', status: 'Active' },
    { name: 'Floyd Miles', company: 'Yahoo', phone: '205-555-0100', email: 'floyd@yahoo.com', country: 'Kiribati', status: 'Inactive' },
    { name: 'Ronald Richards', company: 'Adobe', phone: '302-555-0107', email: 'ronald@adobe.com', country: 'Israel', status: 'Inactive' },
    { name: 'Marvin McKinney', company: 'Tesla', phone: '252-555-0126', email: 'marvin@tesla.com', country: 'Iran', status: 'Active' },
    { name: 'Jerome Bell', company: 'Google', phone: '629-555-0129', email: 'jerome@google.com', country: 'Réunion', status: 'Active' },
    { name: 'Kathryn Murphy', company: 'Microsoft', phone: '406-555-0120', email: 'kathryn@microsoft.com', country: 'Curaçao', status: 'Active' },
    { name: 'Jacob Jones', company: 'Yahoo', phone: '208-555-0112', email: 'jacob@yahoo.com', country: 'Brazil', status: 'Active' },
    { name: 'Kristin Watson', company: 'Facebook', phone: '704-555-0127', email: 'kristin@facebook.com', country: 'Åland Islands', status: 'Inactive' },
    { name: 'Ray Pole', company: 'Apple', phone: '236-575-0217', email: 'pole@apple.com', country: 'United States', status: 'Active' },
  ]);

  const handleStatusToggle = (email) => {
    setData((customers) => customers.map((customer) => customer.email === email
      ? { ...customer, status: customer.status === 'Active' ? 'Inactive' : 'Active' }
      : customer));
  };

  const itemsPerPage = 8;

  const handlePreviousPage = () => {
    setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => (prev < pages ? prev + 1 : prev));
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    setCurrentPage(1);
  };

  const query = searchQuery.trim().toLowerCase();
  const filteredData = data.filter((customer) =>
      customer.name.toLowerCase().includes(query) ||
      customer.company.toLowerCase().includes(query) ||
      customer.phone.includes(query) ||
      customer.email.toLowerCase().includes(query) ||
      customer.country.toLowerCase().includes(query)
  );

  const pages = Math.max(1, Math.ceil(filteredData.length / itemsPerPage));
  const displayedData = filteredData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
      <>
        <div className='greetingTitle'>Hello Evano 👋🏼,</div>
        <div className='customersContainer'>
          <div className='customersPageHeader'>
            <div className='membersTitle'>
              <h1 className='customersTableTitle'>All Customers</h1>
              <div className='activeCustomersTitle'>Active Members</div>
            </div>
            <div className='searchTableElement'>
              <Search />
              <input
                  type="search"
                  aria-label="Search customers"
                  value={searchQuery}
                  onChange={handleSearchChange}
                                    placeholder='Search'
              />
            </div>
          </div>
          <div className="tableScroll" role="region" aria-label="Customer directory" tabIndex={0}>
          <table>
            <thead>
            <tr>
              <th className='custTableTitle'>Customer Name</th>
              <th className='custTableTitle'>Company</th>
              <th className='custTableTitle'>Phone Number</th>
              <th className='custTableTitle'>Email</th>
              <th className='custTableTitle'>Country</th>
              <th className='custTableTitle'>Status</th>
            </tr>
            </thead>
            <tbody>
            {displayedData.map((customer) => (
                <tr key={customer.email}>
                  <td className='tableDataEl'>{customer.name}</td>
                  <td className='tableDataEl'>{customer.company}</td>
                  <td className='tableDataEl'>{customer.phone}</td>
                  <td className='tableDataEl'>{customer.email}</td>
                  <td className='tableDataEl'>{customer.country}</td>
                  <td>
                    <button
                        className={customer.status === 'Active' ? 'buttonActive' : 'buttonInactive'}
                        aria-label={`Toggle status for ${customer.name}`}
                        aria-pressed={customer.status === 'Active'}
                        onClick={() => handleStatusToggle(customer.email)}>
                      {customer.status}
                    </button>
                  </td>
                </tr>
            ))}
            {displayedData.length === 0 && <tr><td colSpan={6} className="emptyState">No customers found. Try another search.</td></tr>}
            </tbody>
          </table>
          </div>
          <div className='paginationContainer'>
            <div className='displayPagesData'>
              Showing data {filteredData.length === 0 ? 0 : (currentPage - 1) * itemsPerPage + 1} to {Math.min(currentPage * itemsPerPage, filteredData.length)} of {filteredData.length} entries
            </div>
            <nav className="pagination" aria-label="Customer pages">
              <button aria-label="Previous page" onClick={handlePreviousPage} disabled={currentPage === 1} className='paginationButtons'>
                {'<'}
              </button>
              {Array.from({ length: pages }, (_, i) => (
                  <button
                      key={i}
                      aria-label={`Page ${i + 1}`}
                      aria-current={currentPage === i + 1 ? 'page' : undefined}
                      onClick={() => setCurrentPage(i + 1)}
                      className={`paginationButtons ${currentPage === i + 1 ? 'active' : ''}`}>
                    {i + 1}
                  </button>
              ))}
              <button aria-label="Next page" onClick={handleNextPage} disabled={currentPage === pages} className='paginationButtons'>
                {'>'}
              </button>
            </nav>
          </div>
        </div>
      </>
  );
};

export default Customers;
