/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
      extend: {
        animation: {
          slowpulse: 'pulse 3s linear infinite',
          floatwp: 'floatwp 4s ease-in-out infinite',
          floatdjango: 'floatdjango 10s ease-in-out infinite',
          floatcsharp: 'floatcsharp 3s ease-in-out infinite',
          floatjava: 'floatjava 8s ease-in-out infinite',
          floatruby: 'floatruby 10s ease-in-out infinite',
          floatcss: 'floatcss 5s ease-in-out infinite',
          floatangular: 'floatangular 5s ease-in-out infinite',
          floatmongodb: 'floatmongodb 6s ease-in-out infinite',
          floatsql: 'floatsql 8s ease-in-out infinite',
          floatnode: 'floatnode 8s ease-in-out infinite',
          floatplayfrw: 'floatplayfrw 8s ease-in-out infinite',
          floatphp: 'floatphp 8s ease-in-out infinite',
          floathtml: 'floathtml 8s ease-in-out infinite',
          floatblazor: 'floatblazor 8s ease-in-out infinite',
          floatbootstrap: 'floatbootstrap 8s ease-in-out infinite',
          marquee: "marquee var(--duration) linear infinite",
          "marquee-vertical": "marquee-vertical var(--duration) linear infinite",
        },
        keyframes: {        
          floatwp: {
            '0%, 100%': { transform: 'translateY(0) rotate(-1deg)' },
            '50%': { transform: 'translateY(-5px) rotate(2deg)' },
          },
          floatdjango: {
            '0%, 100%': { transform: 'translateY(0) rotate(15deg)' },
            '50%': { transform: 'translateY(-10px) rotate(-3deg)' },
          },
          floatcsharp: {
            '0%, 100%': { transform: 'translateY(0) rotate(-20deg)' },
            '50%': { transform: 'translateY(-10px) rotate(-12deg)' },
          },
          floatjava: {
            '0%, 100%': { transform: 'translateY(0) rotate(10deg)' },
            '50%': { transform: 'translateY(-10px) rotate(-6deg)' },
          },
          floatruby: {
            '0%, 100%': { transform: 'translateY(0) rotate(20deg)' },
            '50%': { transform: 'translateY(-10px) rotate(28deg)' },
          },
          floatcss: {
            '0%, 100%': { transform: 'translateY(0) rotate(23.62deg)' },
            '50%': { transform: 'translateY(-10px) rotate(28deg)' },
          },
          floatangular: {
            '0%, 100%': { transform: 'translateY(0) rotate(-8.27deg)' },
            '50%': { transform: 'translateX(3px) translateY(-10px) rotate(-2deg)' },
          },
          floatmongodb: {
            '0%, 100%': { transform: 'translateY(0) rotate(1.6deg)' },
            '50%': { transform: 'translateX(8px) translateY(-10px) rotate(-2deg)' },
          },
          floatsql: {
            '0%, 100%': { transform: 'translateY(0) rotate(-8.27deg)' },
            '50%': { transform: 'translateX(16px) translateY(-14px) rotate(-8deg)' },
          },
          floatnode: {
            '0%, 100%': { transform: 'translateY(0) rotate(8.58deg)' },
            '50%': { transform: 'translateX(-10px) translateY(-14px) rotate(4deg)' },
          },
          floatplayfrw: {
            '0%, 100%': { transform: 'translateY(0) rotate(-15deg)' },
            '50%': { transform: 'translateX(-10px) translateY(-14px) rotate(-2deg)' },
          },
          floatphp: {
            '0%, 100%': { transform: 'translateY(0) rotate(-11.42deg)' },
            '50%': { transform: 'translateY(100px) rotate(-35deg)' },
          },
          floathtml: {
            '0%, 100%': { transform: 'translateY(0) rotate(-1.73deg)' },
            '50%': { transform: 'translateX(100px) translateY(-20px) rotate(-15deg)' },
          },
          floatbootstrap: {
            '0%, 100%': { transform: 'translateY(0) rotate(-5.63deg)' },
            '50%': { transform: 'translateX(50px) translateY(50px) rotate(1deg)' },
          },
          floatblazor: {
            '0%, 100%': { transform: 'translateY(0) rotate(-1.63deg)' },
            '50%': { transform: 'translateX(50px) translateY(50px) rotate(1.3deg)' },
          },
          marquee: {
            from: { transform: "translateX(0)" },
            to: { transform: "translateX(calc(-100% - var(--gap)))" },
          },
          "marquee-vertical": {
            from: { transform: "translateY(0)" },
            to: { transform: "translateY(calc(-100% - var(--gap)))" },
          },
        },
      },
    },
    plugins: [],
  }