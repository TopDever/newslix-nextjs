import BoxStory from "@Components/shareable/CreateStory/BoxStory";
import Header from "@Components/shareable/Header";
import { MainContent } from "@Components/shareable/styles";
import CreatePostBox from "../shareable/CreatePost/CreatePostBox";
export default () => {
  return (
    <>
      <Header />
      <MainContent>
        <div className="container">
          <div className="main-inner">
            <div className="left-side sticky"></div>
            <div className="center-feeds">
              <BoxStory />
              <CreatePostBox />
            </div>
            <div className="right-side sticky"></div>
          </div>
        </div>
      </MainContent>
    </>
  );
};
