import { type FC } from 'react';

import ReactPaginate from 'react-paginate';

import { type IPaginationProps } from './PaginationTypes';

export const Pagination: FC<IPaginationProps> = ({ ...props }) => {
  return (
    <div className="flex justify-end py-7 px-8">
      <ReactPaginate
        {...props}
        breakLabel="..."
        nextLabel="&#8250;"
        previousLabel="&#8249;"
        className="flex space-x-2 align-items-center"
        nextAriaLabel="Próxima página"
        previousAriaLabel="Página anterior"
        previousLinkClassName="cursor-pointer p-0 font-medium text-body dark:text-bodydark flex h-8 w-8 items-center justify-center rounded hover:bg-blue-500 hover:text-white"
        pageClassName="cursor-pointer p-0 font-medium text-body dark:text-bodydark flex h-8 w-8 items-center justify-center rounded hover:bg-blue-500 hover:text-white"
        pageLinkClassName="w-8 h-8 flex items-center justify-center"
        activeClassName="bg-blue-500 !text-white hover:bg-[#d9d9d9]"
        nextLinkClassName="cursor-pointer p-0 font-medium text-body dark:text-bodydark flex h-8 w-8 items-center justify-center rounded hover:bg-blue-500 hover:text-white"
        disabledLinkClassName="opacity-40 pointer-events-none"
        breakClassName="w-8 h-8 hover:bg-[#c9c9c9] hover:text-white flex items-center justify-center rounded"
        pageRangeDisplayed={3}
        marginPagesDisplayed={1}
        renderOnZeroPageCount={null}
        disableInitialCallback
      />
    </div>
  );
};
