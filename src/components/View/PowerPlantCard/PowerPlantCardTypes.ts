export interface IPowerPlantCardProps {
  id: string | number;
  title: string;
  status: string;
  statusDescription?: string;
  location: string;
  capacity: string;
  image?: string;
}
