/** @type {import('tailwindcss').Config} */

// - Light red: hsl(0, 100%, 67%)
// - Orangey yellow: hsl(39, 100%, 56%)
// - Green teal: hsl(166, 100%, 37%)
// - Cobalt blue: hsl(234, 85%, 45%)
// - White: hsl(0, 0%, 100%)
// -
// - Light lavender:
// - Dark gray blue:
module.exports = {
    mode: 'jit',
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                "box-colors": {
                    1: "hsl(0, 100%, 67%)",
                    2: "hsl(39, 100%, 56%)",
                    3: "hsl(166, 100%, 37%)",
                    4: "hsl(224, 30%, 27%)",
                },
                "blue-pale": "hsl(221, 100%, 96%)",
                "lavender-light": "hsl(241, 100%, 89%)",
                "blue-dark-gray": "hsl(224, 30%, 27%)",
            },
        },
    },
    plugins: [],
};
