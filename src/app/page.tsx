"use client";

import React, { useState, useEffect } from "react";
import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Portfolio() {
	const [typedText, setTypedText] = useState("");
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const fullText = "Software Engineer";

	useEffect(() => {
		if (typedText.length < fullText.length) {
			const timeout = setTimeout(() => {
				setTypedText(fullText.slice(0, typedText.length + 1));
			}, 100);
			return () => clearTimeout(timeout);
		}
	}, [typedText]);

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth >= 768) {
				setMobileMenuOpen(false);
			}
		};

		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	const scrollToSection = (
		e: React.MouseEvent<HTMLAnchorElement>,
		sectionId: string
	) => {
		e.preventDefault();
		const element = document.getElementById(sectionId);
		if (element) {
			const offset = 80;
			const elementPosition = element.getBoundingClientRect().top;
			const offsetPosition =
				elementPosition + window.pageYOffset - offset;

			window.scrollTo({
				top: offsetPosition,
				behavior: "smooth",
			});
			setMobileMenuOpen(false);
		}
	};

	return (
		<div className="min-h-screen bg-gray-900 text-gray-100">
			<Navigation
				mobileMenuOpen={mobileMenuOpen}
				setMobileMenuOpen={setMobileMenuOpen}
				scrollToSection={scrollToSection}
			/>
			<Hero typedText={typedText} scrollToSection={scrollToSection} />
			<About />
			<Skills />
			<Projects />
			<Experience />
			<Contact />
			<Footer />
		</div>
	);
}
