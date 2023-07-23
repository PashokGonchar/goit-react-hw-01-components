import styled from '@emotion/styled';

export const SectionCustom = styled.section`
  width: 400px;
  border: 1px solid #ccc;
  margin: 20px auto;
`;

export const TitleCustom = styled.h2`
  text-align: center;
  border-bottom: 1px solid #ccc;

  margin-top: 0;
  margin-bottom: 0px;
  padding: 20px 0px 20px 0px;

  background-color: #67dee9;
`;

export const UlCustom = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;

  padding: 0;
  margin: 0;

  background-color: #f0f057;
`;

export const LiCustom = styled.li`
  list-style: none;

  display: flex;
  flex-direction: column;

  border-right: 1px solid black;
  padding: 10px;
  &:last-child {
    border-right: none;
    padding-right: 0;
  }
`;

export const SpanLabelCustom = styled.span`
  font-size: 20px;
  color: red;
`;

export const SpanPercentageCustom = styled.span`
  font-size: 20px;
  color: green;
`;
