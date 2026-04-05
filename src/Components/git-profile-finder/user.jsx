function User({ user }) {
  const {
    avatar_url,
    followers,
    following,
    public_repos,
    url,
    login,
    name,
    created_at,
  } = user;

  const createDate = new Date(created_at);
  return (
    <div className="user-profile">
      <div className="avatar-container">
        <img src={avatar_url} alt="User Avatar" className="avatar" />
      </div>
      <div className="name-container">
        <a href={`https://github.com/${login}`} target="_blank" rel="noopener noreferrer" className="profile-link">{name || login}</a>
        <p className="join-date">
          Joined on{" "}
          {`${createDate.getDate()} ${createDate.toLocaleString("en-us", { month: "short" })} ${createDate.getFullYear()}`}
        </p>
      </div>
      <div className="profile-info">
        <div className="info-card">
            <span className="info-title">Repos</span>
            <span className="info-value">{public_repos}</span>
        </div>
        <div className="info-card">
            <span className="info-title">Followers</span>
            <span className="info-value">{followers}</span>
        </div>
        <div className="info-card">
            <span className="info-title">Following</span>
            <span className="info-value">{following}</span>
        </div>
      </div>
    </div>
  );
}

export default User;
