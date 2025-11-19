import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
	display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
	variable: "--font-ibm-plex-mono",
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"], // IBM Plex Mono requires explicit weights
	display: "swap",
});

export const metadata: Metadata = {
	title: "Waseem Mosam | Software Engineer",
	description:
		"Portfolio of Waseem Mosam — Full-Stack Software Developer specializing in modern web applications, scalable APIs, and cloud-ready solutions.",
	metadataBase: new URL("https://wmosam.dev"),
	manifest: "/site.webmanifest",
	icons: {
		icon: [
			{ url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
			{ url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
			{ url: "/favicon.ico", sizes: "any" },
			{ url: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
			{ url: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
		],
		apple: "/apple-touch-icon.png",
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	openGraph: {
		title: "Waseem Mosam | Software Engineer",
		description:
			"Portfolio of Waseem Mosam — Full-Stack Software Developer specializing in modern web applications, scalable APIs, and cloud-ready solutions.",
		url: "https://wmosam.dev",
		siteName: "Waseem Mosam Portfolio",
		locale: "en_US",
		type: "website",
		images: [
			{
				url: "https://wmosam.dev/android-chrome-512x512.png",
				width: 512,
				height: 512,
				alt: "Waseem Mosam Portfolio",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Waseem Mosam | Software Engineer",
		description:
			"Portfolio of Waseem Mosam — Full-Stack Software Developer specializing in modern web applications, scalable APIs, and cloud-ready solutions.",
		images: ["https://wmosam.dev/android-chrome-512x512.png"],
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${ibmPlexMono.variable} antialiased`}
			>
				{children}
				<Analytics />
			</body>
		</html>
	);
}
