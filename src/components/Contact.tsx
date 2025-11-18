import { Mail, Github, Linkedin } from "lucide-react";

export default function Contact() {
	return (
		<section id="contact" className="py-20 px-6 bg-gray-800 bg-opacity-50">
			<div className="max-w-4xl mx-auto text-center">
				<h2 className="text-3xl font-bold mb-8 font-mono text-green-400">
					<span className="text-gray-500">$</span> contact --init
				</h2>
				<p className="text-gray-300 mb-8 text-lg">
					Interested in working together? Let's connect!
				</p>
				<div className="flex justify-center gap-6">
					<a
						href="mailto:your.email@example.com"
						className="flex items-center gap-2 bg-gray-800 border border-gray-700 px-6 py-3 rounded hover:border-green-400 transition-colors"
					>
						<Mail size={20} className="text-green-400" />
						<span className="font-mono">Email</span>
					</a>
					<a
						href="https://github.com/yourusername"
						className="flex items-center gap-2 bg-gray-800 border border-gray-700 px-6 py-3 rounded hover:border-green-400 transition-colors"
					>
						<Github size={20} className="text-green-400" />
						<span className="font-mono">GitHub</span>
					</a>
					<a
						href="https://linkedin.com/in/yourusername"
						className="flex items-center gap-2 bg-gray-800 border border-gray-700 px-6 py-3 rounded hover:border-green-400 transition-colors"
					>
						<Linkedin size={20} className="text-green-400" />
						<span className="font-mono">LinkedIn</span>
					</a>
				</div>
			</div>
		</section>
	);
}
