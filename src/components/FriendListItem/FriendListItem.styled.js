import styled from '@emotion/styled';

export const UlFriendList = styled.ul`
  display: flex;
  flex-direction: column;
  width: 250px;
  margin: 60px auto;
  grid-gap: 10px;
  padding-left: 0;
`;

export const ItemFriendList = styled.li`
  list-style: none;
  display: flex;
  flex-direction: row;
  grid-gap: 20px;
  align-items: center;
  padding-left: 20px;

  margin: 5px;
  border: 1px solid #ccc;
  border-radius: 25px;
  box-shadow: 1px 2px 1px grey;

  background-color: yellow;

  cursor: pointer;
`;
export const SpanStatus = styled.span`
  font-size: 0;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: ${props => (props.isOnline ? 'green' : 'red')};
`;

export const AvatarFriendList = styled.img`
  // display: block;
`;

export const NameFriendList = styled.p`
  font-size: 20px;
`;
