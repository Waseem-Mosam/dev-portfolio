import { Mail, Github, Linkedin } from "lucide-react";

export default function Contact() {
	return (
		<section id="contact" className="py-20 px-6 bg-gray-800 bg-opacity-50">
			<div className="max-w-4xl mx-auto text-center">
				<h2 className="text-3xl font-bold mb-8 font-mono text-green-400">
					<span className="text-gray-500">$</span> contact --init
				</h2>
				<p className="text-gray-300 mb-8 text-lg">
					Interested in working together? Let&apos;s connect!
				</p>
				<div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6">
					<a
						href="mailto:waseem.mosam1@gmail.com"
						className="flex items-center justify-center gap-2 bg-gray-800 border border-gray-700 px-6 py-3 rounded hover:border-green-400 transition-colors w-full sm:w-auto"
					>
						<Mail size={20} className="text-green-400" />
						<span className="font-mono">Email</span>
					</a>
					<a
						href="https://github.com/waseem-mosam"
						target="_blank"
						className="flex items-center justify-center gap-2 bg-gray-800 border border-gray-700 px-6 py-3 rounded hover:border-green-400 transition-colors w-full sm:w-auto"
					>
						<Github size={20} className="text-green-400" />
						<span className="font-mono">GitHub</span>
					</a>
					<a
						href="https://linkedin.com/in/waseem-mosam"
						target="_blank"
						className="flex items-center justify-center gap-2 bg-gray-800 border border-gray-700 px-6 py-3 rounded hover:border-green-400 transition-colors w-full sm:w-auto"
					>
						<Linkedin size={20} className="text-green-400" />
						<span className="font-mono">LinkedIn</span>
					</a>
				</div>
			</div>
		</section>
	);
}
