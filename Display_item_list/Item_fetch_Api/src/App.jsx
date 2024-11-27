import { useState, useEffect } from 'react';
import { fetchItems } from './services/api';
import ItemList from './components/ItemList';
import Pagination from './components/Pagination';

const App = () => {
  const [items, setItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    const loadItems = async () => {
      try {
        const data = await fetchItems();
        
    
        if (Array.isArray(data)) {
          setItems(data);
        } else {
          console.error('Fetched data is not an array', data);
        }
      } catch (error) {
        console.error('Failed to load items', error);
      }
    };

    loadItems();
  }, []);

  
  const totalPages = Math.ceil(items.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = Array.isArray(items) ? items.slice(startIndex, startIndex + itemsPerPage) : [];

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className="App">
      <h1>Item List</h1>
      <ItemList items={currentItems} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default App;