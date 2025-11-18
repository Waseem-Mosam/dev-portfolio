const experience = [
	{
		title: "Junior Software Developer",
		company: "Kaelekae (PTY) Ltd",
		period: "December 2024 - Present",
		points: [
			"Architected and implemented RESTful API services using Node.js and Express for core product functionality",
			"Integrated Keycloak authentication with role-based access control (RBAC) across protected endpoints",
			"Built and maintained responsive frontend interfaces using React and TailwindCSS",
			"Designed and optimized PostgreSQL schemas to improve data storage and retrieval performance",
			"Deployed containerized applications to GCP using Docker for scalable and reliable environments",
			"Created and maintained system documentation including API specs and architecture diagrams",
		],
	},
	{
		title: "Trainee Software Developer",
		company: "Kaelekae (PTY) Ltd",
		period: "June 2024 - December 2024",
		points: [
			"Developed a full-stack web application using React, Node.js, and PostgreSQL",
			"Configured and maintained Linux server infrastructure for Docker-based deployments",
			"Containerized application components to streamline deployment workflows",
			"Prepared technical documentation throughout the SDLC following Agile methodologies",
		],
	},
	{
		title: "IT Support Officer Intern",
		company: "Decisive Technologies",
		period: "May 2023 - July 2023",
		points: [
			"Completed training on Acronis Cyber Protect for cloud backup and cybersecurity solutions",
			"Provided technical support to clients, resolving issues related to Acronis Cyber Protect",
			"Developed an internal Django web app using the Acronis API to automate client management",
			"Configured Windows Server environments to host internal applications and services",
		],
	},
];

export default function Experience() {
	return (
		<section id="experience" className="py-20 px-6">
			<div className="max-w-4xl mx-auto">
				<h2 className="text-3xl font-bold mb-12 font-mono text-green-400">
					<span className="text-gray-500">$</span> cat experience.log
				</h2>
				<div className="space-y-8">
					{experience.map((job, idx) => (
						<div
							key={idx}
							className="border-l-2 border-green-400 pl-6 pb-8"
						>
							<div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
								<h3 className="text-xl font-bold text-green-400">
									{job.title}
								</h3>
								<span className="font-mono text-sm text-gray-500">
									{job.period}
								</span>
							</div>
							<div className="text-gray-400 mb-3">
								{job.company}
							</div>
							<ul className="space-y-2">
								{job.points.map((point, pidx) => (
									<li
										key={pidx}
										className="text-gray-300 flex items-start"
									>
										<span className="text-green-400 mr-2">
											▹
										</span>
										{point}
									</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
