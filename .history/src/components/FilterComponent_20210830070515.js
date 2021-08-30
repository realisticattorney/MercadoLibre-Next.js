const FilterComponent = ({ availableFilters, itemNumber }) => {
  if (!availableFilters) {
    return null;
  }

  let title;

  switch(available_filters[itemNumber].name) {
    case 'Tiendas oficiales':
      title = 'Official Stores';
    case 'Ubicación':
      title = 'Location';
    case 'Precio':
      title = 'Price';
    case 'Filtro por MercadoPago':
      title = 'Accepts MercadoPago';
    case 'Filtro por fecha de comienzo':
      title = 'Published';
    case 'Ubicación':
      title = 'Location';
    case 'Ubicación':
      title = 'Location';
    case 'Ubicación':
      title = 'Location';
    case 'Ubicación':
      title = 'Location';
      

  return (
    <div>
      <ul>
        <h4 className="font-semibold text-lg">{available_filters[itemNumber].name}</h4>
        {availableFilters[itemNumber]?.values.slice(0, 8).map((filter) => (
          <li className="my-2">
            <a href="#" className="text-gray-700">
              {filter.name}
              <span className="text-gray-500 font-light text-sm">
                {' '}
                ({Math.floor(filter.results / 100)})
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilterComponent;
