import PropTypes from 'prop-types';

import {
  TableTransaction,
  ThThead,
  TrTbody,
  TdTbody,
} from './TransactionHistory.styled';

const TransactionHistory = ({ items }) => {
  return (
    <TableTransaction>
      <thead>
        <tr>
          <ThThead>Type</ThThead>
          <ThThead>Amount</ThThead>
          <ThThead>Currency</ThThead>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <TrTbody key={id}>
            <TdTbody>{type}</TdTbody>
            <TdTbody>{amount}</TdTbody>
            <TdTbody>{currency}</TdTbody>
          </TrTbody>
        ))}
      </tbody>
    </TableTransaction>
  );
};

export default TransactionHistory;

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
