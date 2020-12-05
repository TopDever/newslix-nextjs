import { PostsNamespace } from "@Components/data/post";

interface IProps {
  menuList: PostsNamespace.IMenu[];
}
export default ({ menuList }: IProps) => {
  return (
    <>
      <div className="options">
        <button type="button" className="btn btn-dots">
          <i className="mdi mdi-dots-horizontal"></i>
        </button>
        <ul className="option-list">
          {menuList?.map((item, index) => (
            <li key={index}>
              <a href={item.url}>
                <i className="mdi mdi-alert-circle-outline"></i>
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
