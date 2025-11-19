import { Code, Server, Cloud, Database } from "lucide-react";

const skills = {
	languages: [
		"JavaScript",
		"TypeScript",
		"Python",
		"Java",
		"PHP",
		"C#",
		"SQL",
		"HTML",
		"CSS",
	],
	frameworks: [
		"Next.js",
		"React",
		"Express.js",
		"Node.js",
		"FastAPI",
		"Django",
	],
	backend: ["PostgreSQL", "Supabase", "REST APIs", "Prisma", "Keycloak"],
	cloud: ["GCP", "Firebase"],
	tools: ["Git", "Linux", "Docker", "Postman", "TailwindCSS", "shadcn/ui"],
};

export default function Skills() {
	return (
		<section id="skills" className="py-20 px-6">
			<div className="max-w-6xl mx-auto">
				<h2 className="text-3xl font-bold mb-12 font-mono text-green-400">
					<span className="text-gray-500">$</span> ls skills/
				</h2>
				<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
					<div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
						<div className="flex items-center gap-3 mb-4">
							<Code className="text-green-400" size={24} />
							<h3 className="font-mono text-lg text-green-400">
								Languages
							</h3>
						</div>
						<div className="flex flex-wrap gap-2">
							{skills.languages.map((skill) => (
								<span
									key={skill}
									className="px-3 py-1 bg-gray-700 rounded text-sm font-mono"
								>
									{skill}
								</span>
							))}
						</div>
					</div>

					<div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
						<div className="flex items-center gap-3 mb-4">
							<Server className="text-blue-400" size={24} />
							<h3 className="font-mono text-lg text-blue-400">
								Frameworks
							</h3>
						</div>
						<div className="flex flex-wrap gap-2">
							{skills.frameworks.map((skill) => (
								<span
									key={skill}
									className="px-3 py-1 bg-gray-700 rounded text-sm font-mono"
								>
									{skill}
								</span>
							))}
						</div>
					</div>

					<div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
						<div className="flex items-center gap-3 mb-4">
							<Server className="text-orange-400" size={24} />
							<h3 className="font-mono text-lg text-orange-400">
								Backend
							</h3>
						</div>
						<div className="flex flex-wrap gap-2">
							{skills.backend.map((skill) => (
								<span
									key={skill}
									className="px-3 py-1 bg-gray-700 rounded text-sm font-mono"
								>
									{skill}
								</span>
							))}
						</div>
					</div>

					<div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
						<div className="flex items-center gap-3 mb-4">
							<Cloud className="text-purple-400" size={24} />
							<h3 className="font-mono text-lg text-purple-400">
								Cloud
							</h3>
						</div>
						<div className="flex flex-wrap gap-2">
							{skills.cloud.map((skill) => (
								<span
									key={skill}
									className="px-3 py-1 bg-gray-700 rounded text-sm font-mono"
								>
									{skill}
								</span>
							))}
						</div>
					</div>

					<div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
						<div className="flex items-center gap-3 mb-4">
							<Database className="text-yellow-400" size={24} />
							<h3 className="font-mono text-lg text-yellow-400">
								Tools
							</h3>
						</div>
						<div className="flex flex-wrap gap-2">
							{skills.tools.map((skill) => (
								<span
									key={skill}
									className="px-3 py-1 bg-gray-700 rounded text-sm font-mono"
								>
									{skill}
								</span>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
