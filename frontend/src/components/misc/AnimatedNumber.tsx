import { useState, useEffect } from "react";

function AnimatedNumber({ value }: { value: number }) {
  const [displayedValue, setDisplayedValue] = useState(0);

  useEffect(() => {
    // Reset displayed value to 0 whenever the actual value changes
    setDisplayedValue(0);

    // Calculate the increment step
    const increment = value / 100;

    // Use setInterval to update the displayed value
    const interval = setInterval(() => {
      setDisplayedValue((prev) => {
        if (prev + increment >= value) {
          clearInterval(interval);
          return value;
        }
        return prev + increment;
      });
    }, 20); // Adjust the interval duration for faster/slower animation

    // Clear the interval when the component is unmounted
    return () => clearInterval(interval);
  }, [value]);

  return (
    <div className="text-8xl my-6 font-bold">
      {" "}
      $ {displayedValue.toFixed(2)}
    </div>
  );
}

export default AnimatedNumber;
