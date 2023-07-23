import FriendList from './FriendList';
import friends from './FriendList/friends.json';

import CreateUsersProfile from './Profile';
import user from './Profile/user.json';

import CreateStatistics from './Statistics';
import data from './Statistics/data.json';

import TransactionHistory from './TransactionHistory'
import transactions from './TransactionHistory/transactions.json';

export const App = () => {
  return (
    <div
    // style={{
    //   height: '100vh',
    //   display: 'flex',
    //   justifyContent: 'center',
    //   alignItems: 'center',
    //   fontSize: 40,
    //   color: '#010101',
    // }}
    >
      <CreateUsersProfile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <CreateStatistics title="Upload stats" stats={data} />

      <FriendList friends={friends} />

      <TransactionHistory items={transactions} />
    </div>
  );
};
