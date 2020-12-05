import { CreateStoryBox } from "./styles";
export default () => {
  return (
    <>
      <CreateStoryBox>
        <div className="inner">
          <a href="">
            <div className="hover-content">
              <div className="icon">
                <i className="mdi mdi-plus"></i>
              </div>
              <div className="text">
                <h6>Create a Story</h6>
                <span>Share a Photo or Write Somthing</span>
              </div>
            </div>
          </a>
        </div>
      </CreateStoryBox>
    </>
  );
};
