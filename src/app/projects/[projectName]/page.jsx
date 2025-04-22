import { notFound } from 'next/navigation';
import AnimatedWrapper from '@/components/AnimatedWrapper/AnimatedWrapper';

export async function generateStaticParams() {
  // Fetch or import your projects data
  const projects = await getProjects();
  return projects.map((project) => ({
    projectName: project.slug,
  }));
}

export default function ProjectPage({ params }) {
  const project = getProjectBySlug(params.projectName);
  
  if (!project) notFound();

  return (
    <AnimatedWrapper>
      {/* Your project content */}
    </AnimatedWrapper>
  );
}