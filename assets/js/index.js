const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
function App() {
  const userInfo = {
    name: "Emma Watson",
    tag: "@EmmWatson",
    tweets: 1.377,
    following: 561,
    followers: 778,
    gender: "female",
    img: "https://media.vogue.co.uk/photos/61dda2e71bb9b719caedae94/2:3/w_2560%2Cc_limit/ew%2520x%2520macksfilm%2520british%2520vogue.jpg",
  };
  return (
    <>
      <Header userInfo={userInfo} />
      <div className="userInfo">
        <UserInfo userInfo={userInfo.tweets} label={"Tweets"} />
        <UserInfo userInfo={userInfo.following} label={"Following"} />
        <UserInfo userInfo={userInfo.followers} label={"Followers"} />
      </div>
    </>
  );
}
function Header(props) {
  const { userInfo } = props;
  const headerStyle = {
    backgroundImage: `url(${userInfo.img})`,
    boxShadow:
      userInfo.gender === "female"
        ? "0px 1px 10px rgb(255, 6, 85)"
        : "0px 0px 10px blue",
  };
  return (
    <header className="header" style={headerStyle}>
      <h1 className="userName">{userInfo.name}</h1>
      <p className="userTag">{userInfo.tag}</p>
      <button className="followBtn">+</button>
    </header>
  );
}
function UserInfo(props) {
  const { userInfo, label } = props;
  return (
    <div className="numbersInfo">
      <p className="label">{label}</p>
      <p className="numbers">{userInfo}</p>
    </div>
  );
}
