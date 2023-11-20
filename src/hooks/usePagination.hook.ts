import { useState, useCallback } from 'react';

import { useQueryParam, NumberParam, withDefault } from 'use-query-params';

interface UsePaginationParams {
  initialLimit?: number;
  initialPage?: number;
  initialTotalPages?: number;
}

export const usePagination = ({
  initialLimit = 12,
  initialPage = 1,
  initialTotalPages = 1,
}: UsePaginationParams) => {
  const [page, setPage] = useQueryParam(
    'page',
    withDefault(NumberParam, initialPage),
  );
  const [limit, setLimit] = useQueryParam(
    'limit',
    withDefault(NumberParam, initialLimit),
  );
  const [totalPages, setTotalPages] = useState(initialTotalPages);
  const [totalRecords, setTotalRecords] = useState(0);

  return {
    page,
    totalRecords,
    totalPages,
    limit,
    setPage,
    setTotalPages,
    setTotalRecords,
    setLimit,
    nextPage: useCallback(() => {
      setPage(page + 1);
    }, [page, setPage]),
    prevPage: useCallback(() => {
      setPage(page - 1);
    }, [page, setPage]),
  };
};
