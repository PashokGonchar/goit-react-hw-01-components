
import FriendListItem from '../FriendListItem'
import { UlFriendList } from '../FriendListItem/FriendListItem.styled'

const FriendList = ({friends}) => {
  return (
    <UlFriendList>
      {friends.map(friend => (
        <FriendListItem
          key={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      ))}
    </UlFriendList>
  );
};

export default FriendList;
