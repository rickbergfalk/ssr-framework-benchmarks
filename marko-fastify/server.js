require("marko/node-require");

const path = require("path");
const fastify = require("fastify")();

console.log(process.env.NODE_ENV);

const isProduction = process.env.NODE_ENV === "production";
const outputDir = path.join(__dirname, "static");

// Configure lasso to control how JS/CSS/etc. is delivered to the browser
require("lasso").configure({
  plugins: [
    "lasso-marko", // Allow Marko templates to be compiled and transported to the browser
  ],
  outputDir: outputDir, // Place all generated JS/CSS/etc. files into the "static" dir
  bundlingEnabled: isProduction, // Only enable bundling in production
  minify: isProduction, // Only minify JS and CSS code in production
  fingerprintsEnabled: isProduction, // Only add fingerprints to URLs in production
});

fastify.register(require("point-of-view"), {
  engine: {
    marko: require("marko"),
  },
});

fastify.register(require("fastify-static"), {
  root: outputDir,
  prefix: "/static",
});

fastify.get("/", (req, reply) => {
  const widgets = new Array(100).fill(1).map((value, index) => {
    return {
      id: index,
      title: `Widget ${index}`,
      description: `Some text that describes widget ${index}`,
    };
  });

  reply.view("/index.marko", {
    name: "Frank",
    count: 30,
    widgets,
  });
});

fastify.listen(3000, (err) => {
  if (err) throw err;
  console.log(`Server listening on ${fastify.server.address().port}`);
});
