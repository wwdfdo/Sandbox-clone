module.exports = {
  mode: "jit",
  purge: ["./*.html", "./*.{js,jsx,ts,tsx,vue}"],

  content: ["./*.{html,js}"],
  theme: {
    extend: {
      color: {
        alphaBox: "rgba(124, 123, 123, 0.24706)",
      },
      rotate: {
        dragon: "rotateY(180deg)",
      },

      backgroundImage: {
        alphaBg: "url('/images/Alpha-coming-bg.png')",
        bgAvatar: "url('/images/sandbox-avatar.png')",
        landBg: "url('/images/land-bg.png')",
        sandBg: "url('/images/sand-bg.png')",
        nftBg: "url('/images/bg-nft.png')",
      },
    },
  },
  plugins: [],
};
