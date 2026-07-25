function Card({ children }) {
  return (
    <div
      style={{
        width: "280px",
        borderRadius: "10px",
        overflow: "hidden",
        boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
        backgroundColor: "#fff",
        margin: "10px",
      }}
    >
      {children}
    </div>
  );
}

// Recipe Component
function Recipe() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "20px",
        flexWrap: "wrap",
        padding: "20px",
      }}
    >
      {/* Card 1 */}
      <Card>
        <img
          src="image1.jpg"
          alt="Chicken Noodle Soup"
          style={{ width: "100%", height: "180px", objectFit: "cover" }}
        />
        <div style={{ padding: "15px", background: "#ffd6c9" }}>
          <h2>Chicken Noodle Soup</h2>
          <ul>
            <li>2 tablespoons extra virgin olive oil</li>
                <li>1 yellow onion</li>
                <li>2 medium carrots</li>
                <li>2 stalks celery</li>
                <li>8 cups chicken broth</li>
                <li>1 (16 oz) package wide egg noodles</li>
                <li>1 cup cooked chicken</li>
          </ul>
          <p>Chop and sauté onion, carrots and celery in olive oil until soft. Add chicken broth and bring to a boil. Add egg noodles and cook until soft. Add chicken and simmer for 10 minutes.</p>
        </div>
      </Card>

      {/* Card 2 */}
      <Card>
        <img
          src="image2.jpg"
          alt="Curried Egg Salad"
          style={{ width: "100%", height: "180px", objectFit: "cover" }}
        />
        <div style={{ padding: "15px", background: "#d9f7a8" }}>
          <h2>Curried Egg Salad</h2>
          <ul>
           <li>12 hard boiled eggs</li>
                <li>1½ cup mayonnaise</li>
                <li>¼ cup whole grain mustard</li>
                <li>1 teaspoon curry powder</li>
                <li>½ cup finely chopped onion</li>
          </ul>
          <p> Chop hard boiled eggs, Combine with other ingredients. Chill for at least 30 minutes before serving</p>
        </div>
      </Card>

      {/* Card 3 */}
      <Card>
        <img
          src="image3.jpg"
          alt="Oat Clusters"
          style={{ width: "100%", height: "180px", objectFit: "cover" }}
        />
        <div style={{ padding: "15px", background: "#cfe8ff" }}>
          <h2>Oat Clusters</h2>
          <ul>
           <li>1 cup rolled oats</li>
                <li>2 tablespoons peanut butter</li>
                <li>¼ cup walnuts</li>
                <li>½ cup dried cranberries</li>
                <li>1 banana</li>
          </ul>
          <p>Mash banana and mix with other ingredients.Form clusters and chill or bake until set.</p>
        </div>
      </Card>
    </div>
  );
}

// React Root
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render
root.render(<Recipe />);
