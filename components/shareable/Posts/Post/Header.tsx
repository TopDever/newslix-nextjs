import { HeaderPost } from "./styles";
import MenuPost from "./MenuPost";
import { PostsNamespace } from "@Components/data/post";

const Header = ({ createdAt, menuList, userInfo }: PostsNamespace.IHeader) => {
  return (
    <HeaderPost>
      <div className="card-user-info">
        <a href="#">
          <div className="user-img">
            <img src={userInfo.avatar} alt="" />
          </div>
          <div className="user-name">
            <h4 className="name">{userInfo.fullname}</h4>
            <h6 className="date">{createdAt}</h6>
          </div>
        </a>
      </div>
      <MenuPost menuList={menuList}></MenuPost>
    </HeaderPost>
  );
};
export default Header;
