// Import React if you're using older versions or need specific hooks,
// though in modern React with bundlers like Vite, it's often not strictly needed at the top of every file for JSX.
// import React from 'react';

/**
 * Card Component
 *
 * A reusable component to display content in a card format.
 * It accepts props for dynamic content.
 *
 * @param {object} props - The props object.
 * @param {string} props.title - The title of the card.
 * @param {string} props.description - The main text content of the card.
 * @param {string} props.imageUrl - The URL of the image to display on the card.
 * @param {string} props.imageAlt - Concise alt text for the image, for accessibility.
 * @param {string} props.buttonText - The text to display on the call-to-action button.
 */
function Card({ title, description, imageUrl, imageAlt, buttonText }) {
  // console.log(imageUrl); // Remove this line in production

  return (    
    <div className="bg-white rounded-lg shadow-md p-6 m-4 max-w-sm mx-auto">
      {/* Conditionally render image if imageUrl is provided */}
      {imageUrl && (
        <img
          src={imageUrl}
          alt={imageAlt || "Decorative image for card content"} // Fallback alt text
          className="w-full h-40 object-cover rounded-md mb-4"
        />
      )}
      <h2 className="text-xl font-semibold text-gray-800 mb-2">{title}</h2>
      <p className="text-gray-600 text-sm mb-4">{description}</p>
      <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out">
        {buttonText}
      </button>
    </div>
  );
}

export default Card;
