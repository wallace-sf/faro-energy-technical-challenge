import { useMemo, type FC } from 'react';

import { Link } from 'react-router-dom';

import { getVariantByStatus } from '~helpers';

import { ArrowIcon, MapMarkerIcon, ThunderBoltIcon } from '../../Icons';
import { Badge } from '../Badge';
import { type IPowerPlantCardProps } from './PowerPlantCardTypes';

export const PowerPlantCard: FC<IPowerPlantCardProps> = ({
  id,
  title = '',
  status = '',
  location = '',
  capacity = '',
  image = '',
  item,
}) => {
  const statusVariant = useMemo(() => getVariantByStatus(status), [status]);

  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="min-h-[210px]">
        <img className="rounded-t-lg" src={image} alt={title} />
      </div>
      <div className="p-5">
        <Link to="#">
          <h5
            className="mb-3 text-2xl font-bold tracking-tight text-gray-900 dark:text-white line-clamp-1"
            title={title}
          >
            {title}
          </h5>
        </Link>
        <div className="flex items-center mb-3">
          <Badge variant={statusVariant} className="inline-block line-clamp-1">
            {status}
          </Badge>
          <div className="flex items-center">
            <span className="inline-block mr-2">
              <ThunderBoltIcon className="w-5 h-5 text-blue-500" />
            </span>
            <span className="break-words">{capacity}</span>
          </div>
        </div>
        <div className="flex items-start mb-5">
          <span className="inline-block mr-2 pt-[2px]">
            <MapMarkerIcon className="w-5 h-5 text-red-500" />
          </span>
          <span className="inline-block line-clamp-2 h-[48px]" title={location}>
            {location}
          </span>
        </div>
        <div className="flex justify-end">
          <Link
            to={`/power-plant/${id}`}
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            state={item}
          >
            Veja mais
            <ArrowIcon className="rtl:rotate-180 w-3.5 h-3.5 ms-2" />
          </Link>
        </div>
      </div>
    </div>
  );
};
