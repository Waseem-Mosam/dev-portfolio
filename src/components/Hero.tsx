import React from "react";

interface HeroProps {
	typedText: string;
	scrollToSection: (
		e: React.MouseEvent<HTMLAnchorElement>,
		sectionId: string
	) => void;
}

export default function Hero({ typedText, scrollToSection }: HeroProps) {
	return (
		<section className="min-h-screen flex items-center justify-center px-6 pt-16">
			<div className="max-w-4xl w-full">
				<div className="font-mono text-green-400 mb-4">$ whoami</div>
				<h1 className="text-5xl md:text-7xl font-bold mb-6 bg-linear-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
					Waseem Mosam
				</h1>
				<div className="font-mono text-xl md:text-2xl text-gray-300 mb-8 h-8">
					{typedText}
					<span className="animate-pulse">_</span>
				</div>
				<p className="text-lg text-gray-400 mb-8 max-w-2xl">
					Building modern web applications with clean architecture.
					Focused on scalable applications, smooth user experiences,
					and efficient developer workflows.
				</p>
				<a
					href="#contact"
					onClick={(e) => scrollToSection(e, "contact")}
					className="inline-block bg-green-400 text-gray-900 px-8 py-3 rounded font-mono font-bold hover:bg-green-300 transition-colors cursor-pointer"
				>
					Get in touch
				</a>
			</div>
		</section>
	);
}
