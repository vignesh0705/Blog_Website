"use client";

import { useRouter } from "next/navigation";

const HomePage = () => {
  const router = useRouter();

  return (
    <div className="home-container">
      <div className="hero-section">
        <h1 className="hero-title">Welcome to One Piece BlogVerse</h1>
        <p className="hero-subtitle">Explore epic tales, theories, and character journeys</p>
        <div className="hero-buttons">
          {/* <button onClick={() => router.push("/blogA")} className="btn explore">Explore Blogs</button> */}
          <button onClick={() => router.push("/loginA")} className="btn login">Login</button>
          <button onClick={() => router.push("/loginB")} className="btn login">Admin Login</button>
        </div>
      </div>

      <div className="feature-section">
        <div className="feature-card fade-in">
          <img src="https://preview.redd.it/luffy-black-and-white-trace-v0-bm10ljkezgfa1.png?width=2560&format=png&auto=webp&s=591277189fb94a795687a668b846fe59b12c26c4" alt="Luffy" />
          <h3>Luffy's Journey</h3>
          <p>Follow the future Pirate King through his adventures across the Grand Line.</p>
        </div>
        <div className="feature-card fade-in delay">
          <img src="https://i.pinimg.com/736x/6d/81/12/6d811217a7ba1af41c20485e7539d8eb.jpg" alt="Zoro" />
          <h3>Zoro the Swordsman</h3>
          <p>Learn about the fearless right-hand man of the Straw Hat crew and his path to becoming the best swordsman.</p>
        </div>
        <div className="feature-card fade-in delay2">
          <img src="https://static0.gamerantimages.com/wordpress/wp-content/uploads/2023/08/worst-generation-vs-kaido-big-mom-every-fight.jpg" alt="Wano" />
          <h3>The Wano War</h3>
          <p>Dive into the most intense battles in the One Piece saga from the Wano arc.</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;