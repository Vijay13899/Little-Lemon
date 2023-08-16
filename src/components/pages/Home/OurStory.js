import chefsMarioAndAdrianAImage from "./assets/chefs-mario-and-adrian_a.jpg";
import chefsMarioAndAdrianBImage from "./assets/chefs-mario-and-adrian_b.jpg";
import "./OurStory.css";

const OurStory = () => {
  return (
    <section className="container grid our-story">
      <div className="our-story-description">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <h2>Some history about us....</h2>
        <p>
          The story of Little Lemon began years ago, when our family's passion
          for food and the vibrant heritage of the Mediterranean region
          converged. Drawing inspiration from generations of cherished recipes
          passed down through the ages, we embarked on a journey to share the
          captivating flavors of the Mediterranean with the bustling city of
          Chicago. Our beloved city of Chicago, known for its diverse culinary
          scene, has long been a melting pot of cultures and flavors. It was
          here that we saw the perfect canvas to infuse the timeless allure of
          Mediterranean cuisine with a contemporary twist. From the bustling
          streets of downtown Chicago to the tranquil shores of Lake Michigan,
          our restaurant has found its home amidst a backdrop of urban energy
          and serene beauty.
        </p>
      </div>
      <div className="our-story-chefs">
        <img src={chefsMarioAndAdrianAImage} alt="Chefs Mario and Adrian" />
        <img src={chefsMarioAndAdrianBImage} alt="Chefs Mario and Adrian" />
      </div>
    </section>
  );
};

export default OurStory;
