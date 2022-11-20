import styled from 'styled-components';

export const Table = styled.table`
  width: 80%;
  margin: 15px auto;
  border-radius: 5px;
  background-color: #ffffff;
  box-shadow: rgb(0 0 0 / 10%) 0px 5px 15px;
  border-collapse: collapse;
  border-style: hidden;
`;

export const TableHead = styled.thead`
  text-transform: uppercase;
  background-color: #347dc0;
`;

export const TableRow = styled.tr`
  color: #5e5e5e;
  height: 45px;
  text-align: center;
  &:nth-child(even) {
    background-color: #e6f2f8;
  }
`;

export const Categories = styled.th`
  color: #fff;
  border-right: 1px solid #fff;
`;

export const TableColumn = styled.td`
  border: 1px solid #d1e4f6;
`;

export const Type = styled(TableColumn)`
  font-weight: bold;
`;
export const Body = styled.tbody`
  background-color: #fff;
`;
