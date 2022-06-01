function Welcome() {
  const intro = 'A calculator is a device that performs arithmetic operations on numbers. The simplest calculators can do only addition, subtraction, multiplication, and division. More sophisticated calculators can handle exponential operations, roots, logarithms, trigonometric functions, and hyperbolic functions. Internally, some calculators actually perform all of these functions by repeated processes of addition.';

  const p2 = 'As calculators became more advanced during the 1970s, they became able to make computations involving variables (unknowns). These were the first personal computers. Todays personal computers can still perform such operations, and most are provided with a virtual calculator program that actually looks, on screen, like a handheld calculator. The buttons are actuated by pointing and clicking.';
  return (
    <div className="welcome-container">
      <h1>Welcome to our page</h1>
      <div className="introduction">
        <p>{intro}</p>
        <p>{p2}</p>
      </div>
    </div>
  );
}

export default Welcome;
