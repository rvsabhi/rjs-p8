const fs = require("fs");
const path = require("path");

const code = fs.readFileSync(
    path.join(__dirname,"..","index.js"),
    "utf8"
);

let marks = 0;

console.log("Recipe Card Test");
console.log("-------------------------");

// Recipe Component

if(/function\s+Recipe/.test(code))
{
    console.log("✓ Recipe component created");
    marks += 20;
}
else
{
    console.log("✗ Recipe component missing");
}

// Three Cards

const cards = (code.match(/className="card/g)||[]).length;

if(cards>=3)
{
    console.log("✓ Three cards created");
    marks += 20;
}
else
{
    console.log("✗ Three cards missing");
}

// Headings

if(code.includes("Chicken Noodles Soup") &&
   code.includes("Curried Egg") &&
   code.includes("Oat Cluster"))
{
    console.log("✓ Recipe titles added");
    marks += 20;
}
else
{
    console.log("✗ Recipe titles missing");
}

// Lists

const ul = (code.match(/<ul>/g)||[]).length;

if(ul>=3)
{
    console.log("✓ Ingredient lists added");
    marks += 20;
}
else
{
    console.log("✗ Ingredient lists missing");
}

// Render

if(/root\.render/.test(code))
{
    console.log("✓ Component rendered");
    marks += 20;
}
else
{
    console.log("✗ Component not rendered");
}

console.log("-------------------------");
console.log("Marks :",marks+"/100");

process.exit(marks===100?0:1);