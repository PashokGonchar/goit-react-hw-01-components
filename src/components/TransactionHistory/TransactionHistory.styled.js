import styled from '@emotion/styled';

export const TableTransaction = styled.table`
  margin: 100px auto;

  border-collapse: separate;
  border-spacing: 11px 11px;
  width: 1100px;
`;

export const ThThead = styled.th`
  padding: 35px;
  background-color: rgb(28, 181, 195);
  color: white;
  font-weight: bold;
`;

export const TrTbody = styled.tr`
  background-color: white;
  &:nth-child(even) {
    background-color: rgb(236, 241, 244);
  }
`;

export const TdTbody = styled.td`
  text-align: center;
  padding: 20px;
  color: grey;
`;
