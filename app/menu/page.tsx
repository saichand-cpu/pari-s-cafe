"use client";

import { useState } from "react";

type Item = {
  name: string;
  price: number;
  img: string;
  category: string;
};

type CartItem = Item & { qty: number };

export default function MenuPage() {
  const phone = "919100964401";

  const [cart, setCart] = useState<CartItem[]>([]);
  const [active, setActive] = useState("All");

  // 🌍 FULL GLOBAL MENU
  const drinks: Item[] = [

    // ☕ COFFEE
    { name: "Espresso (Italy)", price: 120, category: "Coffee", img: "https://images.unsplash.com/photo-1517701604599-bb29b565090c" },
    { name: "Cappuccino", price: 150, category: "Coffee", img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93" },
    { name: "Latte", price: 160, category: "Coffee", img: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735" },
    { name: "Americano (USA)", price: 140, category: "Coffee", img: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085" },

    // 🥤 SHAKES
    { name: "Oreo Shake", price: 160, category: "Shakes", img: "https://images.unsplash.com/photo-1563805042-7684c019e1cb" },
    { name: "Chocolate Shake", price: 170, category: "Shakes", img: "https://images.unsplash.com/photo-1572490122747-3968b75cc699" },
    { name: "Vanilla Shake", price: 150, category: "Shakes", img: "https://images.unsplash.com/photo-1528823872057-9c018a7a7553" },
    { name: "Strawberry Shake", price: 160, category: "Shakes", img: "https://images.unsplash.com/photo-1553530666-ffb68d2d7c7b" },

    // 🍹 MOJITOS
    { name: "Classic Mojito", price: 130, category: "Mojitos", img: "https://images.unsplash.com/photo-1551024709-8f23befc6f87" },
    { name: "Blue Mojito", price: 140, category: "Mojitos", img: "https://images.unsplash.com/photo-1551024601-bec78aea704b" },
    { name: "Mint Mojito", price: 135, category: "Mojitos", img: "https://images.unsplash.com/photo-1621873498822-5f2c9b3f1c9d" },

    // 🍸 MOCKTAILS
    { name: "Virgin Mojito", price: 120, category: "Mocktails", img: "https://images.unsplash.com/photo-1551024709-8f23befc6f87" },
    { name: "Blue Lagoon", price: 150, category: "Mocktails", img: "https://images.unsplash.com/photo-1551024601-bec78aea704b" },
    { name: "Fruit Punch", price: 140, category: "Mocktails", img: "https://images.unsplash.com/photo-1604908554027-6b2a7b2c9f15" },

    // 🍊 JUICES
    { name: "Orange Juice", price: 90, category: "Juices", img: "https://images.unsplash.com/photo-1613478223719-2ab802602423" },
    { name: "Watermelon Juice", price: 100, category: "Juices", img: "https://images.unsplash.com/photo-1550258987-190a2d41a8ba" },
    { name: "Pineapple Juice", price: 110, category: "Juices", img: "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b" },

    // 🥭 SMOOTHIES
    { name: "Mango Smoothie", price: 160, category: "Smoothies", img: "https://images.unsplash.com/photo-1553530666-ba11a7da3888" },
    { name: "Strawberry Smoothie", price: 170, category: "Smoothies", img: "https://images.unsplash.com/photo-1553530666-ffb68d2d7c7b" },
    { name: "Banana Smoothie", price: 150, category: "Smoothies", img: "https://images.unsplash.com/photo-1584270354949-1c5b8b0c1a2e" },

  ];

  const categories = ["All", "Coffee", "Shakes", "Mojitos", "Juices", "Mocktails", "Smoothies"];

  const addToCart = (item: Item) => {
    setCart((prev) => {
      const found = prev.find((c) => c.name === item.name);

      if (found) {
        return prev.map((c) =>
          c.name === item.name ? { ...c, qty: c.qty + 1 } : c
        );
      }

      return [...prev, { ...item, qty: 1 }];
    });
  };

  const removeFromCart = (name: string) => {
    setCart((prev) =>
      prev
        .map((c) => (c.name === name ? { ...c, qty: c.qty - 1 } : c))
        .filter((c) => c.qty > 0)
    );
  };

  const total = cart.reduce((sum, i) => sum + i.price * i.qty, 0);

  const checkout = () => {
    const text =
      "Hi, I want to order:%0A" +
      cart.map((c) => `${c.name} x${c.qty}`).join("%0A") +
      `%0A%0ATotal: ₹${total}`;

    window.open(`https://wa.me/${phone}?text=${text}`, "_blank");
  };

  const filtered =
    active === "All"
      ? drinks
      : drinks.filter((d) => d.category === active);

  return (
    <main style={styles.main}>

      {/* GLOW BACKGROUND */}
      <div style={styles.glow1}></div>
      <div style={styles.glow2}></div>

      <h1 style={styles.title}>🌍 Pari’s Global Luxury Café</h1>
      <p style={styles.subtitle}>
        Coffee • Shakes • Mojitos • Mocktails • Juices • Smoothies
      </p>

      {/* CATEGORY FILTER */}
      <div style={styles.categories}>
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setActive(c)}
            style={{
              ...styles.catBtn,
              background: active === c
                ? "rgba(255,255,255,0.25)"
                : "rgba(255,255,255,0.08)",
            }}
          >
            {c}
          </button>
        ))}
      </div>

      {/* MENU GRID */}
      <div style={styles.grid}>
        {filtered.map((item, i) => (
          <div key={i} style={styles.card}>
            <img src={item.img} style={styles.image} />

            <h3>{item.name}</h3>
            <p style={styles.cat}>{item.category}</p>
            <p>₹{item.price}</p>

            <button style={styles.addBtn} onClick={() => addToCart(item)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {/* CART */}
      <div style={styles.cart}>
        <h2>🛒 Your Order</h2>

        {cart.length === 0 && <p>Start building your luxury order ✨</p>}

        {cart.map((item, i) => (
          <div key={i} style={styles.row}>
            <span>{item.name} x{item.qty}</span>
            <div>
              <button onClick={() => removeFromCart(item.name)}>-</button>
              <button onClick={() => addToCart(item)}>+</button>
            </div>
          </div>
        ))}

        <h3>Total: ₹{total}</h3>

        <button style={styles.checkout} onClick={checkout}>
          Checkout on WhatsApp
        </button>
      </div>
    </main>
  );
}

const styles: { [key: string]: React.CSSProperties } = {

  main: {
    minHeight: "100vh",
    padding: "40px",
    fontFamily: "Arial",
    color: "white",
    background: "linear-gradient(135deg, #050A1F, #0B2A5B, #000)",
    position: "relative",
    overflow: "hidden",
  },

  glow1: {
    position: "absolute",
    width: "350px",
    height: "350px",
    background: "#D4AF37",
    filter: "blur(120px)",
    top: "-80px",
    left: "-80px",
    opacity: 0.25,
  },

  glow2: {
    position: "absolute",
    width: "350px",
    height: "350px",
    background: "#3b82f6",
    filter: "blur(120px)",
    bottom: "-80px",
    right: "-80px",
    opacity: 0.2,
  },

  title: {
    fontSize: "42px",
    textAlign: "center",
    background: "linear-gradient(90deg, #D4AF37, #fff)",
    WebkitBackgroundClip: "text",
    color: "transparent",
  },

  subtitle: {
    textAlign: "center",
    opacity: 0.7,
    marginBottom: "20px",
  },

  categories: {
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
    justifyContent: "center",
    marginBottom: "20px",
  },

  catBtn: {
    padding: "8px 14px",
    borderRadius: "20px",
    border: "1px solid rgba(255,255,255,0.2)",
    color: "white",
    cursor: "pointer",
    backdropFilter: "blur(10px)",
  },

  grid: {
    display: "flex",
    flexWrap: "wrap",
    gap: "20px",
    justifyContent: "center",
  },

  card: {
    width: "230px",
    padding: "15px",
    borderRadius: "18px",
    background: "rgba(255,255,255,0.08)",
    backdropFilter: "blur(15px)",
    border: "1px solid rgba(255,255,255,0.15)",
    transition: "0.3s",
  },

  image: {
    width: "100%",
    height: "140px",
    objectFit: "cover",
    borderRadius: "12px",
  },

  cat: {
    fontSize: "12px",
    opacity: 0.6,
  },

  addBtn: {
    marginTop: "10px",
    width: "100%",
    padding: "10px",
    borderRadius: "10px",
    background: "linear-gradient(90deg, #D4AF37, #f5d76e)",
    border: "none",
    fontWeight: "bold",
    cursor: "pointer",
  },

  cart: {
    marginTop: "40px",
    padding: "20px",
    borderRadius: "16px",
    background: "rgba(255,255,255,0.05)",
    backdropFilter: "blur(10px)",
    border: "1px solid rgba(255,255,255,0.1)",
  },

  row: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "8px",
  },

  checkout: {
    marginTop: "10px",
    width: "100%",
    padding: "12px",
    borderRadius: "10px",
    background: "linear-gradient(90deg, #D4AF37, #ffffff)",
    border: "none",
    fontWeight: "bold",
    cursor: "pointer",
  },
};