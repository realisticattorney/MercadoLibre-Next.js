import { useEffect } from 'react';

const FilterComponent = ({ filter, itemNumber }) => {
  console.log(filter);
  console.log(itemNumber);

  if (!filter) {
    return null;
  }

  let title;

  if (filter.name === 'Tiendas oficiales') {
    title = 'Official Stores';
  } else if (filter.name === 'Ubicación') {
    title = 'Location';
  } else if (filter.name === 'Precio') {
    title = 'Price';
  } else if (filter.name === 'Filtro por MercadoPago') {
    title = 'Accepts MercadoPago';
  } else if (filter.name === 'Marca') {
    title = 'Brand';
  } else if (filter.name === 'Filtro por fecha de comienzo') {
    title = 'Recently Published';
  } else if (filter.name === 'Filtro por calidad de vendedores') {
    title = 'Seller Reputation';
  } else if (filter.name === 'Condición') {
    title = 'Condition';
  } else if (filter.name === 'Marca') {
    title = 'Brand';
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
