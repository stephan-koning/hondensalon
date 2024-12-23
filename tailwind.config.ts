import colors from "tailwindcss/colors";
import typography from "@tailwindcss/typography";
import forms from "@tailwindcss/forms";

export default {
  darkMode: "class",
  plugins: [typography(), forms()],
  theme: {
    extend: {
      fontFamily: {
        display: ["DM Sans"],
      },
      colors: {

primary: colors.amber[500],  // Warm orange-yellow
secondary: colors.stone[700], // Dark gray with brown undertones
accent: colors.emerald[600],   // Rich green
        
      },
    },
  },
};
