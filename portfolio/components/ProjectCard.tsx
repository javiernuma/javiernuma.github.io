'use client';

import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
    title: string;
    description: string;
    image?: string;
    tags: string[];
    demoUrl?: string;
    githubUrl?: string;
}

export default function ProjectCard({
                                        title,
                                        description,
                                        image,
                                        tags,
                                        demoUrl,
                                        githubUrl,
                                    }: ProjectCardProps) {
    return (
        <div className="group bg-bg-card border border-cyber-cyan/30 rounded-2xl overflow-hidden card-hover">
            {/* Image */}
            <div className="relative h-48 bg-gradient-to-br from-cyber-cyan/20 to-cyber-magenta/20 overflow-hidden">
                {image ? (
                    <img src={image} alt={title} className="w-full h-full object-cover" />
                ) : (
                    <div className="w-full h-full flex items-center justify-center text-6xl">
                        💻
                    </div>
                )}

                {/* Overlay with links */}
                <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                    {demoUrl && (
                        <a
                            href={demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-12 h-12 bg-cyber-cyan rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                        >
                            <ExternalLink className="w-6 h-6 text-black" />
                        </a>
                    )}
                    {githubUrl && (
                        <a
                            href={githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                        >
                            <Github className="w-6 h-6 text-black" />
                        </a>
                    )}
                </div>
            </div>

            {/* Content */}
            <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold group-hover:text-cyber-cyan transition-colors">
                    {title}
                </h3>
                <p className="text-text-gray text-sm leading-relaxed">{description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                    {tags.map((tag) => (
                        <span
                            key={tag}
                            className="px-3 py-1 bg-cyber-cyan/10 border border-cyber-cyan/30 rounded-full text-cyber-cyan text-xs"
                        >
              {tag}
            </span>
                    ))}
                </div>
            </div>
        </div>
    );
}