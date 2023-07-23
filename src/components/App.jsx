import FriendList from './FriendList';
import friends from '../components/DataBase/friends.json';

import CreateUsersProfile from './Profile';
import user from '../components/DataBase/user.json';

import CreateStatistics from './Statistics';
import data from '../components/DataBase/data.json';

import TransactionHistory from './TransactionHistory'
import transactions from '../components/DataBase/transactions.json';

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
