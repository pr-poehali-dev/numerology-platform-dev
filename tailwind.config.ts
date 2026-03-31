import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				cinzel: ['Cinzel', 'serif'],
				'cinzel-deco': ['Cinzel Decorative', 'serif'],
				raleway: ['Raleway', 'sans-serif'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				mystic: {
					50: '#f5f0ff',
					100: '#ede0ff',
					200: '#d8bfff',
					300: '#b894ff',
					400: '#9b5fff',
					500: '#8033f0',
					600: '#6b1fd1',
					700: '#5a18ab',
					800: '#4c1688',
					900: '#3f1470',
					950: '#280c4e',
				},
				gold: {
					300: '#fde68a',
					400: '#fbbf24',
					500: '#f59e0b',
					600: '#d97706',
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			backgroundImage: {
				'cosmic': 'radial-gradient(ellipse at top, rgba(88, 28, 135, 0.5) 0%, transparent 60%), radial-gradient(ellipse at bottom, rgba(30, 27, 75, 0.7) 0%, transparent 60%)',
				'gold-gradient': 'linear-gradient(135deg, #fde68a, #fbbf24, #f59e0b)',
				'mystic-gradient': 'linear-gradient(135deg, rgba(147, 51, 234, 0.8), rgba(88, 28, 135, 0.9))',
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'twinkle': {
					'0%, 100%': { opacity: '0.3', transform: 'scale(1)' },
					'50%': { opacity: '1', transform: 'scale(1.2)' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-12px)' }
				},
				'rotate-slow': {
					from: { transform: 'rotate(0deg)' },
					to: { transform: 'rotate(360deg)' }
				},
				'pulse-glow': {
					'0%, 100%': { boxShadow: '0 0 15px rgba(147, 51, 234, 0.4)' },
					'50%': { boxShadow: '0 0 35px rgba(147, 51, 234, 0.8), 0 0 60px rgba(251, 191, 36, 0.3)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'twinkle': 'twinkle 3s ease-in-out infinite',
				'float': 'float 6s ease-in-out infinite',
				'rotate-slow': 'rotate-slow 30s linear infinite',
				'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
			}
		}
	},
	plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
} satisfies Config;
