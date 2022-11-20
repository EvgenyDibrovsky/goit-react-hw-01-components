import PropTypes from 'prop-types';

import {
  Table,
  TableHead,
  TableRow,
  Type,
  Categories,
  TableColumn,
  Body,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <Categories>Type</Categories>
          <Categories>Amount</Categories>
          <Categories>Currency</Categories>
        </TableRow>
      </TableHead>
      <Body>
      {items.map(({ id, type, amount, currency }) => (
        <TableRow key={id}>
          <Type>{type}</Type>
          <TableColumn>{amount}</TableColumn>
          <TableColumn>{currency}</TableColumn>
        </TableRow>
      ))}
    </Body>
    </Table>
  );
};

TransactionHistory.protoType = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      currency: PropTypes.number.isRequired,
    })
  ).isRequired,
};
