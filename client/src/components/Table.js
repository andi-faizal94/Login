import React from 'react';
import DataTable from 'react-data-table-component';
import './table.css';
const customStyles = {
  rows: {
    style: {
      minHeight: '72px', // override the row height
    },
  },
  headCells: {
    style: {
      paddingLeft: '1px', // override the cell padding for head cells
      paddingRight: '1px',
      wordRbreak: 'break-all',
    },
  },
  headRow: {
    style: {
      backgroundColor: 'red',
      wordRbreak: 'break-word',
    },
  },
  cells: {
    style: {
      paddingLeft: '8px', // override the cell padding for data cells
      paddingRight: '8px',
    },
  },
};

const caseInsensitiveSort = (rowA, rowB) => {
  const a = rowA.title.toLowerCase();
  const b = rowB.title.toLowerCase();

  if (a > b) {
    return 1;
  }

  if (b > a) {
    return -1;
  }

  return 0;
};

const columns = [
  {
    name: 'No',
    selector: (row) => row.no,
    sortable: true,
    sortFunction: caseInsensitiveSort,
  },
  {
    name: 'Tanggal Input',
    selector: (row) => row.year,
    sortable: true,
    sortFunction: caseInsensitiveSort,
  },
  {
    name: 'User Input',
    selector: (row) => row.year,
    sortable: true,
    sortFunction: caseInsensitiveSort,
  },
  {
    name: 'Tanggal Berhalangan',
    selector: (row) => row.year,
    sortable: true,
    sortFunction: caseInsensitiveSort,
  },
  {
    name: 'Tanggal Kembali',
    selector: (row) => row.year,
    sortable: true,
    sortFunction: caseInsensitiveSort,
  },
  {
    name: 'Tenaga Medis',
    selector: (row) => row.year,
    sortable: true,
    sortFunction: caseInsensitiveSort,
  },
  {
    name: 'Keterangan',
    selector: (row) => row.year,
    sortable: true,
    sortFunction: caseInsensitiveSort,
  },
  {
    name: 'Tenaga Medis Penganti',
    selector: (row) => row.year,
    sortable: true,
    sortFunction: caseInsensitiveSort,
  },
  {
    name: 'User Edit',
    selector: (row) => row.year,
    sortable: true,
    sortFunction: caseInsensitiveSort,
  },
  {
    name: 'Aksi',
    button: true,
    selector: (row) => (
      <button
        className='btn btn-outline btn-xs'
        // onClick={(e) => handleButtonClick(e, row.id)}
      >
        Edit
      </button>
    ),
  },
  //   {
  //     name: 'Year',
  //     selector: (row) => row.year,
  //     sortable: true,
  //   },
  //   {
  //     name: 'Year',
  //     selector: (row) => row.year,
  //     sortable: true,
  //   },
  //   {
  //     name: 'Year',
  //     selector: (row) => row.year,
  //     sortable: true,
  //   },
  //   {
  //     name: 'Year',
  //     selector: (row) => row.year,
  //     sortable: true,
  //   },
  //   {
  //     name: 'Year',
  //     selector: (row) => row.year,
  //     sortable: true,
  //   },
  //   {
  //     name: 'Year',
  //     selector: (row) => row.year,
  //     sortable: true,
  //   },
  //   {
  //     name: 'Year',
  //     selector: (row) => row.year,
  //     sortable: true,
  //   },
  //   {
  //     name: 'Year',
  //     selector: (row) => row.year,
  //     sortable: true,
  //   },
  //   {
  //     name: 'Year',
  //     selector: (row) => row.year,
  //     sortable: true,
  //   },
  //   {
  //     name: 'Year',
  //     selector: (row) => row.year,
  //     sortable: true,
  //   },
  //   {
  //     name: 'Year',
  //     selector: (row) => row.year,
  //     sortable: true,
  //   },
  //   {
  //     name: 'Year',
  //     selector: (row) => row.year,
  //     sortable: true,
  //   },
  //   {
  //     name: 'Year',
  //     selector: (row) => row.year,
  //     sortable: true,
  //   },
  //   {
  //     name: 'Year',
  //     selector: (row) => row.year,
  //     sortable: true,
  //   },
];

const data = [
  {
    id: 1,
    title: 'Beetlejuice',
    year: '1988',
  },
  {
    id: 2,
    title: 'Ghostbusters',
    year: '1984',
  },
  {
    id: 2,
    title: 'Ghostbusters',
    year: '1984',
  },
  {
    id: 2,
    title: 'Ghostbusters',
    year: '1984',
  },
  {
    id: 2,
    title: 'Ghostbusters',
    year: '1984',
  },
  {
    id: 2,
    title: 'Ghostbusters',
    year: '1984',
  },
  {
    id: 2,
    title: 'Ghostbusters',
    year: '1984',
  },
  {
    id: 2,
    title: 'Ghostbusters',
    year: '1984',
  },
  {
    id: 2,
    title: 'Ghostbusters',
    year: '1984',
  },
  {
    id: 2,
    title: 'Ghostbusters',
    year: '1984',
  },
  {
    id: 2,
    title: 'Ghostbusters',
    year: '1984',
  },
  {
    id: 2,
    title: 'Ghostbusters',
    year: '1984',
  },
  {
    id: 2,
    title: 'Ghostbusters',
    year: '1984',
  },
  {
    id: 2,
    title: 'Ghostbusters',
    year: '1984',
  },
  {
    id: 2,
    title: 'Ghostbusters',
    year: '1984',
  },
  {
    id: 2,
    title: 'Ghostbusters',
    year: '1984',
  },
  {
    id: 2,
    title: 'Ghostbusters',
    year: '1984',
  },
  {
    id: 2,
    title: 'Ghostbusters',
    year: '1984',
  },
  {
    id: 2,
    title: 'Ghostbusters',
    year: '1984',
  },
  {
    id: 2,
    title: 'Ghostbusters',
    year: '1984',
  },
  {
    id: 2,
    title: 'Ghostbusters',
    year: '1984',
  },
  {
    id: 2,
    title: 'Ghostbusters',
    year: '1984',
  },
  {
    id: 2,
    title: 'Ghostbusters',
    year: '1984',
  },
  {
    id: 2,
    title: 'Ghostbusters',
    year: '1984',
  },
  {
    id: 2,
    title: 'Ghostbusters',
    year: '1984',
  },
  {
    id: 2,
    title: 'Ghostbusters',
    year: '1984',
  },
  {
    id: 2,
    title: 'Ghostbusters',
    year: '1984',
  },
  {
    id: 2,
    title: 'Ghostbusters',
    year: '1984',
  },
  {
    id: 2,
    title: 'Ghostbusters',
    year: '1984',
  },
  {
    id: 2,
    title: 'Ghostbusters',
    year: '1984',
  },
  {
    id: 2,
    title: 'Ghostbusters',
    year: '1984',
  },
  {
    id: 2,
    title: 'Ghostbusters',
    year: '1984',
  },
  {
    id: 2,
    title: 'Ghostbusters',
    year: '1984',
  },
  {
    id: 2,
    title: 'Ghostbusters',
    year: '1984',
  },
  {
    id: 2,
    title: 'Ghostbusters',
    year: '1984',
  },
  {
    id: 2,
    title: 'Ghostbusters',
    year: '1984',
  },
  {
    id: 2,
    title: 'Ghostbusters',
    year: '1984',
  },
  {
    id: 2,
    title: 'Ghostbusters',
    year: '1984',
  },
  {
    id: 2,
    title: 'Ghostbusters',
    year: '1984',
  },
  {
    id: 2,
    title: 'Ghostbusters',
    year: '1984',
  },
  {
    id: 2,
    title: 'Ghostbusters',
    year: '1984',
  },
  {
    id: 2,
    title: 'Ghostbusters',
    year: '1984',
  },
  {
    id: 2,
    title: 'Ghostbusters',
    year: '1984',
  },
  {
    id: 2,
    title: 'Ghostbusters',
    year: '1984',
  },
  {
    id: 2,
    title: 'Ghostbusters',
    year: '1984',
  },
  {
    id: 2,
    title: 'Ghostbusters',
    year: '1984',
  },
  {
    id: 2,
    title: 'Ghostbusters',
    year: '1984',
  },
  {
    id: 2,
    title: 'Ghostbusters',
    year: '1984',
  },
  {
    id: 2,
    title: 'Ghostbusters',
    year: '1984',
  },
  {
    id: 2,
    title: 'Ghostbusters',
    year: '1984',
  },
  {
    id: 2,
    title: 'Ghostbusters',
    year: '1984',
  },
  {
    id: 2,
    title: 'Ghostbusters',
    year: '1984',
  },
  {
    id: 2,
    title: 'Ghostbusters',
    year: '1984',
  },
  {
    id: 2,
    title: 'Ghostbusters',
    year: '1984',
  },
  {
    id: 2,
    title: 'Ghostbusters',
    year: '1984',
  },
  {
    id: 2,
    title: 'Ghostbusters',
    year: '1984',
  },
  {
    id: 2,
    title: 'Ghostbusters',
    year: '1984',
  },
  {
    id: 2,
    title: 'Ghostbusters',
    year: '1984',
  },
  {
    id: 2,
    title: 'Ghostbusters',
    year: '1984',
  },
  {
    id: 2,
    title: 'Ghostbusters',
    year: '1984',
  },
  {
    id: 2,
    title: 'Ghostbusters',
    year: '1984',
  },
  {
    id: 2,
    title: 'Ghostbusters',
    year: '1984',
  },
  {
    id: 2,
    title: 'Ghostbusters',
    year: '1984',
  },
  {
    id: 2,
    title: 'Ghostbusters',
    year: '1984',
  },
  {
    id: 2,
    title: 'Ghostbusters',
    year: '1984',
  },
  {
    id: 2,
    title: 'Ghostbusters',
    year: '1984',
  },
  {
    id: 2,
    title: 'Ghostbusters',
    year: '1984',
  },
  {
    id: 2,
    title: 'Ghostbusters',
    year: '1984',
  },
  {
    id: 3,
    title: 'a',
    year: '1984',
  },
  {
    id: 3,
    title: 'a',
    year: '1984',
  },
  {
    id: 3,
    title: 'a',
    year: '1984',
  },
  {
    id: 3,
    title: 'a   ',
    year: '1984',
  },
  {
    id: 3,
    title: 'Ghostbusters',
    year: '1984',
  },
  {
    id: 3,
    title: 'Ghostbusters',
    year: '1984',
  },
];
const paginationComponentOptions = {
  rowsPerPageText: 'Tampilan Data Per Page',
  rangeSeparatorText: 'de',
  selectAllRowsItem: true,
  //   selectAllRowsItemText: '100',
};
const Table = () => {
  return (
    <>
      <DataTable
        columns={columns}
        data={data}
        pagination
        paginationComponentOptions={paginationComponentOptions}
        paginationRowsPerPageOptions={[50, 100, 150]}
        customStyles={customStyles}
      />
    </>
  );
};

export default Table;
