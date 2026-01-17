'use client';

interface CodeSnippetProps {
    code: string;
    language?: string;
}

export default function CodeSnippet({ code, language = 'javascript' }: CodeSnippetProps) {
    return (
        <div className="bg-black rounded-xl p-6 border border-cyber-cyan/30 font-mono text-sm overflow-x-auto">
            <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="ml-auto text-text-gray text-xs">{language}</span>
            </div>
            <pre className="text-cyan-400">
        <code>{code}</code>
      </pre>
        </div>
    );
}