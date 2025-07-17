"use client";
import React from "react";
import { useRouter } from "next/navigation";

const BlogBox = ({ id, title, image, summary, date, author }) => {
  const router = useRouter();

  return (
    <div
      className="blog_box"
      onClick={() => {
        router.push(`/details?id=${id}`);
      }}
    >
      <img className="blog_ani_img" src={image} alt="one piece post" />
      <div className="details_ani_box">
        <h1>{title}</h1>
        <h3>{summary}</h3>
        <h3>
          <span>Author</span> : {author}
        </h3>
        <h3>
          <span>Published</span> : {date}
        </h3>
      </div>
      <div className="btn_ani">
        <div>⭐ 4.8 Rating</div>
        <button>Read More</button>
      </div>
    </div>
  );
};

export const blogData = [
  {
    id: 1,
    title: "The Rise of Monkey D. Luffy: Future Pirate King?",
    image: "https://i.ytimg.com/vi/2Ayjj9qjKPc/maxresdefault.jpg",
    summary:
      "Luffy's journey from Foosha Village to Yonko status is filled with battles, laughs, and bonds.",
    author: "Vicky",
    date: "2025-07-11",
  },
  {
    id: 2,
    title: "Wano Arc Explained: The Fall of Kaido",
    image:
      "https://wallpapers.com/images/featured/one-piece-wano-4k-nxznpz3omqzsc5yk.jpg",
    summary:
      "Wano brought epic battles and the fall of two Emperors. Here’s a breakdown of this arc.",
    author: "ZoroFan99",
    date: "2025-06-25",
  },
  {
    id: 3,
    title: "Roronoa Zoro: The Right Hand of the Pirate King",
    image:
      "https://i.ytimg.com/vi/agp01h9QGEQ/oar2.jpg?sqp=-oaymwEkCJUDENAFSFqQAgHyq4qpAxMIARUAAAAAJQAAyEI9AICiQ3gB&rs=AOn4CLDF96GDZfceN5joIoSwoXnH95DLrg",
    summary:
      "Zoro’s power-up with Enma and his resolve in Wano have made him a legend.",
    author: "Vinsmoke",
    date: "2025-05-10",
  },
  {
    id: 4,
    title: "Who is Joy Boy? The Ancient Mystery",
    image:
      "https://tse2.mm.bing.net/th/id/OIP.3_5DPHpEnJQKpivAOxuwZQHaDt?rs=1&pid=ImgDetMain&o=7&rm=3",
    summary:
      "Theories and hints about Joy Boy's identity and his connection to Luffy.",
    author: "NicoRobin4Life",
    date: "2025-07-01",
  },
  {
    id: 5,
    title: "Top 5 Most Iconic Devil Fruits in One Piece",
    image:
      "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2025/02/mythical-zoan-fruits.jpg",
    summary: "Ranking the most game-changing Devil Fruits seen so far.",
    author: "DevilFruitHunter",
    date: "2025-07-05",
  },
  {
    id: 6,
    title: "Shanks: The Emperor with the Most Mystery",
    image: "https://wallpaperaccess.com/full/1337906.jpg",
    summary: "What makes Shanks so feared despite having few appearances?",
    author: "RedHairReaper",
    date: "2025-06-15",
  },
  {
    id: 7,
    title: "Nico Robin’s Importance in the Final War",
    image:
      "https://tse3.mm.bing.net/th/id/OIP.tcMH8PHy18SMhg72g5qv8AAAAA?rs=1&pid=ImgDetMain&o=7&rm=3",
    summary:
      "Robin’s knowledge of the Void Century may decide the world’s fate.",
    author: "OharaArchivist",
    date: "2025-05-29",
  },
  {
    id: 8,
    title: "Blackbeard: The Ultimate Villain?",
    image:
      "https://tse4.mm.bing.net/th/id/OIP.CEgJfoAtqXAv0dAFI5hIeAHaE8?rs=1&pid=ImgDetMain&o=7&rm=3",
    summary:
      "With two Devil Fruits and no morals, Blackbeard is chaos incarnate.",
    author: "TeachWatcher",
    date: "2025-06-18",
  },
  {
    id: 9,
    title: "Top 7 One Piece Fights That Made History",
    image:
      "https://static0.cbrimages.com/wordpress/wp-content/uploads/2019/11/Luffy-vs-Three-Admirals-Iconic-Fights.jpg",
    summary:
      "From Luffy vs Katakuri to Marineford's chaos — the best of the best.",
    author: "BattleCraze",
    date: "2025-06-05",
  },
  {
    id: 10,
    title: "The Tragedy of Trafalgar Law",
    image:
      "https://static1.cbrimages.com/wordpress/wp-content/uploads/2023/09/one-piece-trafalgar-law-s-devil-fruit.jpg",
    summary:
      "From Flevance to Dressrosa, Law's life is filled with pain and purpose.",
    author: "HeartSurgeon",
    date: "2025-06-12",
  },
  {
    id: 11,
    title: "The Mystery Behind Imu and the Empty Throne",
    image:
      "https://tse3.mm.bing.net/th/id/OIP.NJatQzLBAzzi40luXj1-bgAAAA?rs=1&pid=ImgDetMain&o=7&rm=3",
    summary: "Who is Imu? The true ruler of the world is finally revealed.",
    author: "WorldGovInsider",
    date: "2025-06-30",
  },
  {
    id: 12,
    title: "One Piece Ships Ranked: From Merry to Thousand Sunny",
    image:
      "https://tse3.mm.bing.net/th/id/OIP.qog7RujS7pn6s4NQMSjJVwAAAA?rs=1&pid=ImgDetMain&o=7&rm=3",
    summary: "A tribute to the legendary ships that carried the Straw Hats.",
    author: "ShipwrightFranky",
    date: "2025-05-22",
  },
  {
    id: 13,
    title: "Is Sabo the Next Ace?",
    image:
      "https://tse3.mm.bing.net/th/id/OIP.tj2JZNBEFik8GOTrZs-Y7wAAAA?rs=1&pid=ImgDetMain&o=7&rm=3",
    summary:
      "Carrying the Flame Flame Fruit and his brother's will, Sabo’s fate is intense.",
    author: "RevolutionaryWatcher",
    date: "2025-06-03",
  },
  {
    id: 14,
    title: "Vegapunk and the Future of Science in One Piece",
    image:
      "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2024/07/one-piece-the-fates-of-all-the-vegapunks-stella-atlas-edison-pythagoras-lilith-shaka-york-featured.jpg",
    summary: "Vegapunk’s genius has shaped the world from the shadows.",
    author: "TechAdmiral",
    date: "2025-07-06",
  },
  {
    id: 15,
    title: "Straw Hat Crew: Power Rankings After Wano",
    image:
      "https://wegotthiscovered.com/wp-content/uploads/2022/09/one-piece-wano.jpg",
    summary: "Post-Wano, the crew is stronger than ever. Here's the ranking.",
    author: "GrandLineScout",
    date: "2025-07-08",
  },
  {
    id: 16,
    title: "Luffy Gear 5: The Awakening of Nika",
    image:
      "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2023/07/monkey-d-luffy-gear-5-nika-one-piece.jpeg",
    summary:
      "Gear 5 has changed Luffy's fighting style and destiny. Here's how Nika ties into it.",
    author: "GomuGomuNo",
    date: "2025-07-10",
  },
];

const BlogList = () => {
  return (
    <div className="blog_list_container">
      {blogData.map((blog) => (
        <BlogBox key={blog.id} {...blog} />
      ))}
    </div>
  );
};

export default BlogList;
