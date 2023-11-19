import { type FC } from 'react';

import { PowerPlantCard } from '~components/View';

const DashboardPage: FC = () => {
  return (
    <>
      <PowerPlantCard
        id="1"
        title="Usina Solar A"
        status="Em Construção"
        location="R. Hermógenes Píres dos Santos, 2-58 - Conj. Hab. Gabriel do O, Mococa - SP, 13732-599"
        capacity="50 MW"
      />
    </>
  );
};

export default DashboardPage;
