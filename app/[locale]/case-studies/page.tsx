import fs from "fs"
import path from "path"
import matter from "gray-matter"
import Link from "next/link"
import { ArrowLeft, ArrowRight, Building, Calendar, Tag } from "lucide-react"

function getCaseStudies() {
  const files = fs.readdirSync(path.join(process.cwd(), "content/case-studies"))
  
  const studies = files.map((filename) => {
    const slug = filename.replace(".md", "")
    const markdownWithMeta = fs.readFileSync(
      path.join(process.cwd(), "content/case-studies", filename),
      "utf-8"
    )
    const { data: frontmatter } = matter(markdownWithMeta)
    return {
      slug,
      frontmatter,
    }
  })

  // Sort by date descending
  return studies.sort((a, b) => new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime())
}

export default function CaseStudiesListPage() {
  const studies = getCaseStudies()

  return (
    <main className="min-h-screen pt-32 pb-24 bg-slate-50 dark:bg-slate-950/50 transition-colors duration-500">
      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-slate-500 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 font-semibold mb-8 transition-colors font-accent tracking-widest text-sm uppercase"
        >
          <ArrowLeft size={16} />
          Back to Home
        </Link>

        <header className="mb-16">
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter font-heading text-slate-900 dark:text-white">
            Case <span className="text-blue-600 dark:text-blue-400">Studies</span>
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl font-body">
            Explore how we've architected elite digital solutions for industry-leading enterprises.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-8">
          {studies.map((study) => (
            <Link 
              key={study.slug} 
              href={`/case-studies/${study.slug}`}
              className="group block"
            >
              <div className="bg-white dark:bg-slate-900 p-8 md:p-10 rounded-3xl shadow-lg shadow-slate-200/50 dark:shadow-none border border-slate-200 dark:border-slate-800 hover:border-blue-300 dark:hover:border-blue-700/50 hover:shadow-xl transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-6">
                  <h2 className="text-3xl font-black tracking-tighter font-heading text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {study.frontmatter.title}
                  </h2>
                  <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 font-accent">
                    <span className="flex items-center gap-1.5"><Building size={14} className="text-blue-500" /> {study.frontmatter.client}</span>
                    <span className="hidden md:flex items-center gap-1.5"><Calendar size={14} className="text-purple-500" /> {study.frontmatter.date}</span>
                  </div>
                </div>
                
                <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 font-body leading-relaxed max-w-3xl">
                  {study.frontmatter.summary}
                </p>

                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-sm font-semibold">
                    <Tag size={14} />
                    {study.frontmatter.category}
                  </div>
                  <span className="inline-flex items-center gap-2 font-bold text-blue-600 dark:text-blue-400 group-hover:translate-x-2 transition-transform">
                    Read Case Study <ArrowRight size={18} />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </main>
  )
}
