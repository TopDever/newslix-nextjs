import { PostsNamespace } from "@Components/data/post";
import Reactions from "@Components/shareable/Reactions/Reactions";

export default ({
  tags,
  content,
  htmlContent,
  countComments,
  linkData,
}: PostsNamespace.IPost) => {
  return (
    <>
      <div className="card-body">
        {content && (
          <>
            <div className="hashtags">
              <ul>
                {tags?.map((item, index) => {
                  return (
                    <li>
                      <a href={item.url}>#{item.title}</a>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="desc">{content}</div>
            {linkData && (
              <div className="feed-image">
                <img src="/images/bg/01.jpg" alt="picture-name" />
              </div>
            )}
            {linkData && (
              <div className="links">
                <a href={linkData.url}>{linkData.url}</a>
              </div>
            )}
          </>
        )}
        {htmlContent && (
          <div
            className="desc"
            dangerouslySetInnerHTML={{
              __html: htmlContent,
            }}
          ></div>
        )}
      </div>
      <div className="card-footer">
        <div className="link-item show-emotion-list">
          <button className="btn btn-link-text">
            <i className="mdi mdi-thumb-up-outline"></i>Likes<span>(69)</span>
            <Reactions />
          </button>
        </div>
        <div className="link-item">
          <button className="btn btn-link-text">
            <i className="mdi mdi-message-outline"></i>Comments
            <span>{countComments}</span>
          </button>
        </div>
        <div className="link-item">
          <button className="btn btn-link-text">
            <i className="mdi mdi-share-outline"></i>Share
          </button>
        </div>
      </div>
    </>
  );
};
