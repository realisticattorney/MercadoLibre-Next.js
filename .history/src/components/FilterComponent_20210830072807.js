const FilterComponent = ({ filter, itemNumber }) => {
  console.log(filter);
  console.log(itemNumber);

  if (!filter) {
    return null;
  }

  let title;

  switch (filter.name) {
    case 'Tiendas oficiales':
      title = 'Official Stores';
    case 'Ubicación':
      title = 'Location';
    case 'Precio':
      title = 'Price';
    case 'Filtro por MercadoPago':
      title = 'Accepts MercadoPago';
    case 'Filtro por fecha de comienzo':
      title = 'Recently Published';
    case 'Filtro por calidad de vendedores':
      title = 'Seller Reputation';
    case 'Marca':
      title = 'Brand';
    case 'Condición':
      title = 'Condition';
    default:
      title = '';
  }

  return (
    <div>
      <ul>
        <h4 className="font-semibold text-lg">{title}</h4>
        {filter.values.slice(0, 8).map((value) => (
          <li className="my-2">
            <a href="#" className="text-gray-700">
              {value.name}
              <span className="text-gray-500 font-light text-sm">
                {' '}
                ({Math.floor(value.results / 100)})
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilterComponent;
