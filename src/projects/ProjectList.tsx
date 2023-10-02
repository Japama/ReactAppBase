import { Project } from './Project';
import ProjectCard from './ProjectCard';

interface ProjectListProps {
  projects: Project[];
}

function ProjectList({ projects }: ProjectListProps) {
    return (
        <div className="row">
            {projects.map((project, index) => (
                <div className="p-2 whitespace-nowrap" key={index}>
                    <ProjectCard project={project}></ProjectCard>
                </div>
            ))}
        </div>
    )
}

export default ProjectList;