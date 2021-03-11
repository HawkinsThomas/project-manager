import Banner from "../../modules/banner/"
import Heading from "../../modules/heading/"

const HomePage = () => {
  return (
    <div>
      <Banner text="Heading 1">
        <Heading title="Heading 2" />
      </Banner>
    </div>
  );
}
 
export default HomePage;