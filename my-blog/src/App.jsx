//do imports
import Button from "./components/button";
import "./App.css";
import Card from "./components/card";

function HomePage() {
  const cardsData = [
    {
      id: 1, // Unique ID for key prop in map
      title: "The Majestic Mountains",
      description:
        "Explore breathtaking views and serene landscapes from the highest peaks.",
      imageUrl: "https://placehold.co/600x400/87CEEB/ffffff?text=Mountains",
      imageAlt: "Snow-capped mountains under a clear blue sky.",
      buttonText: "Discover Now",
    },
    {
      id: 2,
      title: "Urban City Life",
      description:
        "Experience the vibrant energy and endless possibilities of the metropolis.",
      imageUrl: "https://placehold.co/600x400/6A5ACD/ffffff?text=Cityscape",
      imageAlt: "Modern city skyline at dusk with lights.",
      buttonText: "Visit City",
    },
    {
      id: 3,
      title: "Tranquil Forest Retreat",
      description:
        "Find peace and relaxation amidst the ancient trees and soothing sounds of nature.",
      imageUrl: "https://placehold.co/600x400/228B22/ffffff?text=Forest",
      imageAlt: "Dense green forest with sunlight filtering through trees.",
      buttonText: "Relax Here",
    },
    {
      id: 4,
      title: "Coastal Adventures",
      description:
        "Dive into the ocean's depths or bask on sandy beaches with stunning sunsets.",
      imageUrl: "https://placehold.co/600x400/FFA07A/ffffff?text=Beach",
      imageAlt: "Tropical beach with clear blue water and palm trees.",
      buttonText: "Explore Coasts",
    },
    {
      id: 5,
      title: "Desert Wonders",
      description:
        "Uncover the unique beauty and vast expanses of the world's deserts.",
      imageUrl: "https://placehold.co/600x400/CD853F/ffffff?text=Desert",
      imageAlt: "Vast desert landscape with sand dunes and a clear sky.",
      buttonText: "See More",
    },
  ];

  return (
    <>
      <h1 className="text-5xl font-bold">Welcome to My Blog</h1>
      <Button />
      <div className="min-h-screen bg-gray-100 flex flex-wrap justify-center items-center p-4">
        {
          (cardsData.map((card) => (
            <Card
              key={card.id} // Use unique ID for each card
              title={card.title}
              description={card.description}
              imageUrl={card.imageUrl}
              imageAlt={card.imageAlt}
              buttonText={card.buttonText}
            />
          )))
        }

        {/* You can add many more cards with different content */}
      </div>
    </>
  );
}

export default HomePage;
