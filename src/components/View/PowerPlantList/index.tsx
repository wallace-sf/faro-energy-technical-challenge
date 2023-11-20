import { useMemo, type FC } from 'react';

import { type IPowerPlant } from '~/globalTypes';

import { PowerPlantCard } from '../PowerPlantCard';

interface IPowerPlantListProps {
  data?: IPowerPlant[];
}

export const PowerPlantList: FC<IPowerPlantListProps> = ({ data = [] }) => {
  const renderedPowerPlants = useMemo(() => {
    return data.map((powerPlant) => (
      <li key={powerPlant.id} className='className="flex justify-center"'>
        <PowerPlantCard
          id={powerPlant.id}
          title={powerPlant.nome}
          status={powerPlant.status}
          capacity={powerPlant.capacidade}
          location={powerPlant.localizacao}
          image={powerPlant.imagem}
        />
      </li>
    ));
  }, [data]);

  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-5 4k:grid-cols-6 gap-3">
      {renderedPowerPlants}
    </ul>
  );
};
