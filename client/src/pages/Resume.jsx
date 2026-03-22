import React, { useState } from 'react';
import { Download, FileText, Loader2 } from 'lucide-react';

const Resume = () => {
  const [iframeLoading, setIframeLoading] = useState(true);
  const pdfUrl = "/resume.pdf";

  return (
    <div className="py-12 animate-fade-in pb-20">
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-4 tracking-tight">
          Resume
        </h1>
        <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-8">
          A summary of my professional experience, education, and technical expertise.
        </p>
        
        {/* Action Button */}
        <a 
          href={pdfUrl}
          download
          className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3.5 rounded-lg font-medium transition-all shadow-[0_0_15px_rgba(37,99,235,0.3)] hover:shadow-[0_0_25px_rgba(37,99,235,0.5)] transform hover:-translate-y-1"
        >
          <Download className="w-5 h-5" />
          Download Resume
        </a>
      </div>

      {/* PDF Viewer Container */}
      <div className="max-w-5xl mx-auto bg-slate-800/50 border border-slate-700 rounded-lg overflow-hidden shadow-2xl relative">
        
        {/* Loading Overlay */}
        {iframeLoading && (
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-slate-900/80 backdrop-blur-sm">
            <Loader2 className="w-12 h-12 text-blue-500 animate-spin mb-4" />
            <p className="text-slate-300 font-medium animate-pulse">Loading Document...</p>
          </div>
        )}

        {/* Toolbar Header */}
        <div className="bg-slate-900 border-b border-slate-700 p-4 flex items-center justify-between">
           <div className="flex items-center gap-2 text-slate-300">
              <FileText className="w-5 h-5 text-blue-400" />
              <span className="font-semibold">resume.pdf</span>
           </div>
        </div>

        {/* The PDF Preview */}
        <div className="w-full bg-slate-300 relative">
          <iframe 
            src={pdfUrl} 
            title="Resume Preview"
            className="w-full h-[800px] border-0 relative z-0"
            onLoad={() => setIframeLoading(false)}
          />
        </div>
      </div>
    </div>
  );
};

export default Resume;
