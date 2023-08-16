import customer1Image from "./assets/customer1.jpg";
import customer2Image from "./assets/customer2.jpg";
import customer3Image from "./assets/customer3.jpg";
import customer4Image from "./assets/customer4.jpg";
import "./Testimonials.css";
import TestimonialCard from "./TestimonialCard";

const customers = [
  {
    fullName: "Natasha Romanoff",
    image: customer1Image,
    rating: [1, 1, 1, 1, 0.5],
    says: `Little Lemon's Greek Salad took me back to the streets of Athens! Fresh veggies and the Chicago-style feta made my taste buds dance.`
  },
  {
    fullName: "Peter Parker",
    image: customer2Image,
    rating: [1, 1, 1, 1, 1],
    says: `The Mediterranean Hummus was a creamy delight that paired perfectly with the warm pita. A true taste of the Mediterranean in Chicago!`
  },
  {
    fullName: "Shuri",
    image: customer3Image,
    rating: [1, 1, 1, 1, 0.5],
    says: `Lemon Herb Grilled Chicken was a flavor explosion! The marinade was perfection, and the couscous added an exquisite touch.`
  },
  {
    fullName: "Shang chi",
    image: customer4Image,
    rating: [1, 1, 1, 1],
    says: `The Moroccan Lamb Tagine was an aromatic journey through spices and textures. A must-try for anyone seeking an exotic culinary adventure.`
  }
];

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="container grid">
        <h2>Testimonials</h2>
        {customers.map((customer, index) => (
          <TestimonialCard key={index} customer={customer} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
