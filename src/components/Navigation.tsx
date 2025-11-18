import React from "react";
import { Terminal, Menu, X } from "lucide-react";

interface NavigationProps {
	mobileMenuOpen: boolean;
	setMobileMenuOpen: (open: boolean) => void;
	scrollToSection: (
		e: React.MouseEvent<HTMLAnchorElement>,
		sectionId: string
	) => void;
}

export default function Navigation({
	mobileMenuOpen,
	setMobileMenuOpen,
	scrollToSection,
}: NavigationProps) {
	return (
		<nav className="fixed top-0 w-full bg-gray-900 bg-opacity-95 backdrop-blur-sm border-b border-gray-800 z-50">
			<div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
				<div className="flex items-center gap-2 font-mono text-green-400">
					<Terminal size={20} />
					<span className="hidden sm:inline">~/wm-portfolio</span>
				</div>

				{/* Desktop Menu */}
				<div className="hidden md:flex gap-6 font-mono text-sm">
					<a
						href="#about"
						onClick={(e) => scrollToSection(e, "about")}
						className="hover:text-green-400 transition-colors cursor-pointer"
					>
						about
					</a>
					<a
						href="#skills"
						onClick={(e) => scrollToSection(e, "skills")}
						className="hover:text-green-400 transition-colors cursor-pointer"
					>
						skills
					</a>
					<a
						href="#projects"
						onClick={(e) => scrollToSection(e, "projects")}
						className="hover:text-green-400 transition-colors cursor-pointer"
					>
						projects
					</a>
					<a
						href="#experience"
						onClick={(e) => scrollToSection(e, "experience")}
						className="hover:text-green-400 transition-colors cursor-pointer"
					>
						experience
					</a>
					<a
						href="#contact"
						onClick={(e) => scrollToSection(e, "contact")}
						className="hover:text-green-400 transition-colors cursor-pointer"
					>
						contact
					</a>
				</div>

				{/* Mobile Menu Button */}
				<button
					className="md:hidden text-green-400"
					onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
				>
					{mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
				</button>
			</div>

			{/* Mobile Menu */}
			{mobileMenuOpen && (
				<div className="md:hidden bg-gray-900 border-t border-gray-800">
					<div className="flex flex-col px-6 py-4 gap-4 font-mono text-sm">
						<a
							href="#about"
							onClick={(e) => scrollToSection(e, "about")}
							className="hover:text-green-400 transition-colors cursor-pointer"
						>
							about
						</a>
						<a
							href="#skills"
							onClick={(e) => scrollToSection(e, "skills")}
							className="hover:text-green-400 transition-colors cursor-pointer"
						>
							skills
						</a>
						<a
							href="#projects"
							onClick={(e) => scrollToSection(e, "projects")}
							className="hover:text-green-400 transition-colors cursor-pointer"
						>
							projects
						</a>
						<a
							href="#experience"
							onClick={(e) => scrollToSection(e, "experience")}
							className="hover:text-green-400 transition-colors cursor-pointer"
						>
							experience
						</a>
						<a
							href="#contact"
							onClick={(e) => scrollToSection(e, "contact")}
							className="hover:text-green-400 transition-colors cursor-pointer"
						>
							contact
						</a>
					</div>
				</div>
			)}
		</nav>
	);
}
