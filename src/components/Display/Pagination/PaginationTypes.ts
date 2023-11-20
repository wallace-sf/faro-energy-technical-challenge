import { type ReactPaginateProps } from 'react-paginate';

export interface IPaginationProps {
  forcePage: ReactPaginateProps['forcePage'];
  pageCount: ReactPaginateProps['pageCount'];
  onPageChange: ReactPaginateProps['onPageChange'];
}
