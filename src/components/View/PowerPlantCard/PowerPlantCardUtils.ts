import { type VariantType } from '~/globalTypes';

export const getVariantByStatus = (status: string): VariantType => {
  return (
    ({
      ['Operacional'.toLowerCase()]: 'green',
      ['Problemas Técnicos'.toLowerCase()]: 'red',
      ['Em Manutenção'.toLowerCase()]: 'yellow',
      ['Em Construção'.toLowerCase()]: 'indigo',
      ['Desativada'.toLowerCase()]: 'dark',
      ['Sob Recuperação'.toLowerCase()]: 'purple',
      ['Testes em Andamento'.toLowerCase()]: 'pink',
    }[status.toLowerCase()] as VariantType) ?? 'default'
  );
};
