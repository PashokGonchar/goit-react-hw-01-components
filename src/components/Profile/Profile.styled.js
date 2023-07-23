import styled from '@emotion/styled';

export const ProfileCustom = styled.div`
  width: 400px;
  border: 1px solid #ccc;
  margin: 60px auto;
`;

export const DescriptionCustom = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border-bottom: 1px solid #ccc;

  background-color: #3e81f5;
`;

export const AvatarCustom = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  padding-top: 10px;
`;

export const NameCustom = styled.p`
  font-size: 24px;
  font-weight: bold;
  color: #003303;
`;

export const TagCustom = styled.p`
  font-size: 20px;
  color: #1bc623;
  margin: 0 auto;
`;

export const LocationCustom = styled.p`
  font-size: 20px;
  color: #1bc623;
  margin: 0px auto 20px;
`;

export const StatsCustom = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  list-style: none;
  padding: 0;
  margin: 0;

  background-color: yellow;
`;

export const StatsChildCustom = styled.li`
width: 70px;

  display: flex;
  flex-direction: column;

    border-right: 1px solid black;
  padding: 10px;
  &:last-child {
    border-right: none;
    padding-right: 0;
`;

export const LabelCustom = styled.span`
  font-weight: bold;
`;

export const QuantityCustom = styled.span`
  margin-left: 5px;
`;
