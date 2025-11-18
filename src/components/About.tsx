export default function About() {
	return (
		<section id="about" className="py-20 px-6 bg-gray-800 bg-opacity-50">
			<div className="max-w-4xl mx-auto">
				<h2 className="text-3xl font-bold mb-8 font-mono text-green-400">
					<span className="text-gray-500">$</span> cat about.txt
				</h2>
				<div className="space-y-4 text-gray-300 leading-relaxed">
					<p>
						{" "}
						I'm a full-stack software developer with a strong focus
						on building clean, scalable, and high-performing web
						applications. I work primarily with modern JavaScript
						frameworks like Next.js and React, alongside Node.js and
						PostgreSQL on the backend.{" "}
					</p>{" "}
					<p>
						{" "}
						I enjoy designing efficient backend architectures,
						integrating APIs, and building smooth user experiences.
						I'm also experienced with deploying and managing
						applications on Google Cloud Platform, and I follow best
						practices around performance, scalability, and
						maintainability.{" "}
					</p>{" "}
					<p>
						{" "}
						When I'm not shipping features or refining a codebase,
						you’ll find me exploring new tools, improving my
						workflow, experimenting with AI integrations, or
						learning ways to build faster and smarter in modern web
						ecosystems.{" "}
					</p>
				</div>
			</div>
		</section>
	);
}
