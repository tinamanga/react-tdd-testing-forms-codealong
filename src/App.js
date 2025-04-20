import { useState } from "react";

function App() {
  const [pepperoniIsChecked, setPepperoniIsChecked] = useState(false);
  const [size, setSize] = useState("Small");
  const [email, setEmail] = useState("");

  const togglePepperoni = (e) => setPepperoniIsChecked(e.target.checked);
  const handleSizeChange = (e) => setSize(e.target.value);

  return (
    <div>
      <h1>Place an Order</h1>
      <form>
        {/* Toppings Section */}
        <div>
          <h3>Toppings</h3>
          <input
            type="checkbox"
            id="pepperoni"
            checked={pepperoniIsChecked}
            onChange={togglePepperoni}
          />
          <label htmlFor="pepperoni">Add pepperoni</label>
        </div>

        {/* Size Section */}
        <div>
          <h3>Size</h3>
          <label htmlFor="size">Select size</label>
          <select
            id="size"
            aria-label="select size"
            value={size}
            onChange={handleSizeChange}
          >
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>

         {/* Contact Info Section  */}
        <div>
          <h3>Contact Info</h3>
          <label htmlFor="email">Enter your email address</label>
          <input
            id="email"
            type="email"
            placeholder="email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* Order Summary */}
        <div>
          <h3>Your Selection</h3>
          <p>
            {size.toLowerCase()} {pepperoniIsChecked ? "pepperoni" : "cheese"}
          </p>
        </div>

        {/* Submit Button */}
        <button type="submit">Submit Order</button>
      </form>

      {/* Order Confirmation Message (appears after form submission, could be a modal or different behavior) */}
      {/* Just a placeholder for now */}
      <div>
        <p>Thanks for your order!</p>
      </div>
    </div>
  );
}

export default App;
