const projects = [
	{
		title: "Real Estate Listing Platform Rebuild",
		description:
			"Rebuilt a modern real estate website using Next.js and Supabase, including an admin dashboard for agents to create and manage property listings.",
		tech: ["Next.js", "Supabase", "PostgreSQL", "TailwindCSS", "shadcn/ui"],
		github: "#",
		demo: "#",
	},
];

export default function Projects() {
	return (
		<section id="projects" className="py-20 px-6 bg-gray-800 bg-opacity-50">
			<div className="max-w-6xl mx-auto">
				<h2 className="text-3xl font-bold mb-12 font-mono text-green-400">
					<span className="text-gray-500">$</span> ls projects/
				</h2>
				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
					{projects.map((project, idx) => (
						<div
							key={idx}
							className="bg-gray-800 border border-gray-700 rounded-lg p-6 hover:border-green-400 transition-colors"
						>
							<h3 className="text-xl font-bold mb-3 text-green-400">
								{project.title}
							</h3>
							<p className="text-gray-400 mb-4">
								{project.description}
							</p>
							<div className="flex flex-wrap gap-2 mb-4">
								{project.tech.map((tech) => (
									<span
										key={tech}
										className="px-2 py-1 bg-gray-700 rounded text-xs font-mono"
									>
										{tech}
									</span>
								))}
							</div>
							<div className="flex gap-4">
								<a
									href={project.github}
									className="text-green-400 hover:text-green-300 font-mono text-sm"
								>
									[github]
								</a>
								<a
									href={project.demo}
									className="text-blue-400 hover:text-blue-300 font-mono text-sm"
								>
									[demo]
								</a>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
