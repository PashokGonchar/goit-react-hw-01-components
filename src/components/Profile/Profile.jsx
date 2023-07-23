import {
  ProfileCustom,
  DescriptionCustom,
  AvatarCustom,
  NameCustom,
  TagCustom,
  LocationCustom,
  StatsCustom,
  StatsChildCustom,
  LabelCustom,
  QuantityCustom
} from './Profile.styled';

const CreateUsersProfile = ({ username, tag, location, avatar, stats }) => {
  return (
    <ProfileCustom>
      <DescriptionCustom>
        <AvatarCustom src={avatar} alt="User avatar" />
        <NameCustom>{username}</NameCustom>
        <TagCustom>{tag}</TagCustom>
        <LocationCustom>{location}</LocationCustom>
      </DescriptionCustom>

      <StatsCustom>
        <StatsChildCustom>
          <LabelCustom>Followers</LabelCustom>
          <QuantityCustom>{stats.followers}</QuantityCustom>
        </StatsChildCustom>
        <StatsChildCustom>
          <LabelCustom>Views</LabelCustom>
          <QuantityCustom>{stats.views}</QuantityCustom>
        </StatsChildCustom>
        <StatsChildCustom>
          <LabelCustom>Likes</LabelCustom>
          <QuantityCustom>{stats.likes}</QuantityCustom>
        </StatsChildCustom>
      </StatsCustom>
    </ProfileCustom>
  );
};

export default CreateUsersProfile;
