
// eslint-disable-next-line react/prop-types
const ItemList = ({ items }) => {
  return (
    <div className="item-list">
      {items.map((item) => (
        <div key={item.id} className="item-card">
          <h3>{item.title}</h3>
          <p>{item.description}</p>
          <p><strong>Price:</strong> ${item.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
