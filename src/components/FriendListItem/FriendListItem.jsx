import {
  ItemFriendList,
  SpanStatus,
  AvatarFriendList,
  NameFriendList,
} from './FriendListItem.styled';
import PropTypes from 'prop-types';

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <ItemFriendList>
      <SpanStatus isOnline={isOnline}>
        {' '}
        {isOnline ? 'Online' : 'Offline'}
      </SpanStatus>
      <AvatarFriendList src={avatar} alt="User avatar" width="48" />
      <NameFriendList>{name}</NameFriendList>
    </ItemFriendList>
  );
};

export default FriendListItem;

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};
