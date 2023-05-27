const ghPages = require("gh-pages");

ghPages.publish(
    "dist",
    {
        dotfiles: true,
        history: false,
        message: "Deploy peredelano-profile Application",
    },
    (err) => {
        console.error(err);
    }
);
