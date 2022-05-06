module.exports = {
  mode: "jit",
  purge: ["./*.html", "./*.{js,jsx,ts,tsx,vue}"],

  content: ["./*.{html,js}"],
  theme: {
    extend: {
      color: {
        Box: "rgba(22,25,30,.9)",
      },

      backgroundImage: {
        alphaBg: "url('/images/Alpha-coming-bg.png')",
        bgAvatar: "url('/images/sandbox-avatar.png')",
        landBg: "url('/images/land-bg.png')",
        sandBg: "url('/images/sand-bg.png')",
        nftBg: "url('/images/bg-nft.png')",
        stakingBg: "url('/images/staking-bg.png')",
        footerBg: "url('/images/footer-banner.png')",
        ribbonBg: "url('/images/Alpha_ribbon.png')",
      },
      backgroundPosition: {
        60: "60%",
      },
    },
  },
  plugins: [],
};
