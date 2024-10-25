export default function getText() {
  try {
    // const response = await fetch('https://api.example.com/strings'); // Replace with your API URL
    // if (!response.ok) {
    //   throw new Error('Network response was not ok');
    // }
    // const data = await response.json();
    // console.log(data); // Log the array of strings
    return [
      "Nikola Tesla, a famous inventor, and electrical engineer born in 1856. He made numerous groundbreaking contributions to the design of the modern alternating current (AC) electricity supply system.",
      "Electricity is a fundamental form of energy resulting from the movement of charged particles. It powers our homes, fuels industries, and drives technology, making it essential for modern life and innovation.",
      "Nikola Tesla's innovations in radio technology paved the way for wireless communication. His experiments with electromagnetic waves led to the development of radio transmission, revolutionizing global communication.",
    ];
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
