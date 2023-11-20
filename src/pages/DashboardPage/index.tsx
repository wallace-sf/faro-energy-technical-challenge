import { type FC, useCallback } from 'react';

import { useDebounce } from 'usehooks-ts';

import { useQuery } from '@tanstack/react-query';

import { type IPowerPlant } from '~/globalTypes';
import { Select } from '~components/Control';
import { PageTitle, Pagination } from '~components/Display';
import { SpinnerIcon } from '~components/Icons';
import { PowerPlantList } from '~components/View';
import { powerPlantsKeys, checkStatusOk } from '~helpers';
import { usePagination } from '~hooks';
import { axiosInstance } from '~services';

import {
  LIMIT_PAGE_OPTIONS,
  DEFAULT_PAGE_SIZE,
} from './DashboardPageConstants';

const DashboardPage: FC = () => {
  const {
    page,
    limit,
    totalRecords,
    totalPages,
    setPage,
    setLimit,
    setTotalRecords,
    setTotalPages,
  } = usePagination({
    initialLimit: 12,
  });

  const debouncedPage = useDebounce(page, 500);
  const debouncedLimit = useDebounce(limit, 500);

  const { data, isFetching } = useQuery({
    queryKey: powerPlantsKeys.page(debouncedPage, debouncedLimit),
    queryFn: async () => {
      try {
        const response = await axiosInstance.get<IPowerPlant[]>(
          '/power-plants',
          {
            params: {
              _page: page,
              _limit: limit,
            },
          },
        );

        if (checkStatusOk(response.status)) {
          const totalPages = Math.ceil(50 / limit);

          setTotalPages(totalPages);
          setTotalRecords(50);

          return response.data;
        }

        throw new Error();
      } catch (error) {
        console.log(error);
      }
    },
    refetchOnWindowFocus: false,
  });

  const onChangeLimit = useCallback(
    (event: React.ChangeEvent<HTMLSelectElement>) => {
      setLimit(Number(event.target.value));
    },
    [setLimit],
  );

  const onPageChange = useCallback(
    (event: { selected: number }) => {
      setPage(event.selected + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    [setPage],
  );

  return (
    <>
      <PageTitle title="Usinas solares" />
      {isFetching ? (
        <div className="flex flex-col py-40 items-center h-auto">
          <SpinnerIcon className="text-blue-500 !w-10 !h-10" />
        </div>
      ) : (
        <>
          <section className="mb-10 rounded-lg py-5 px-4">
            <div className="-mx-4 flex flex-wrap items-center justify-between">
              <div className="px-4 w-full">
                <div className="flex justify-between items-center sm:flex w-full">
                  <div className="mb-4 mr-8 inline-flex items-center sm:block md:mb-0 lg:mr-5 lg:inline-flex xl:mr-8">
                    <label
                      htmlFor="brand"
                      className="mr-4 text-base font-medium text-dark"
                    >
                      Mostrar:
                    </label>
                    <Select
                      id="brand"
                      name="brand"
                      value={limit ?? DEFAULT_PAGE_SIZE}
                      options={LIMIT_PAGE_OPTIONS}
                      onChange={onChangeLimit}
                      showDefaultOption={false}
                      className="bg-white"
                    />
                  </div>
                  <p>{totalRecords} usinas encontradas</p>
                </div>
              </div>
            </div>
          </section>

          <PowerPlantList data={data} />
          <div className="flex flex-wrap justify-end mx-4">
            <Pagination
              forcePage={page - 1}
              pageCount={totalPages}
              onPageChange={onPageChange}
            />
          </div>
        </>
      )}
    </>
  );
};

export default DashboardPage;
