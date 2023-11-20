export type SVGElementType = React.SVGProps<SVGSVGElement>;

export type VariantType =
  | 'default'
  | 'dark'
  | 'red'
  | 'green'
  | 'yellow'
  | 'indigo'
  | 'purple'
  | 'pink';

export interface IPowerPlant {
  id: number;
  nome: string;
  localizacao: string;
  capacidade: string;
  status: string;
  latitude: number;
  longitude: number;
  anoConstrucao: number;
  fabricantePaineis: string;
  descricao: string;
  producao: IProduction[];
  irradiacao: Irradiation[];
  anoUltimaManutencao: number;
  eficienciaPaineis: string;
  proprietario: string;
  tipoConexao: string;
  subestacao: string;
  tempoVidaEstimado: string;
  certificacoes: string[];
  imagem: string;
  engenheiroResponsavel: string;
  areaTotal: string;
  garantiaEquipamentos: string;
  contratoEnergia: string;
  monitoramentoRemoto: boolean;
}

export interface IProduction {
  mes: string;
  valor: number;
}

export interface Irradiation {
  mes: string;
  valor: number;
}

export interface IOption {
  key: string;
  label: string;
  value: string;
  className?: string;
}
