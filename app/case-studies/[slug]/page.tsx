import fs from "fs"
import path from "path"
import matter from "gray-matter"
import ReactMarkdown from "react-markdown"
import { ArrowLeft, Calendar, Tag, Building, List } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Mermaid } from "@/components/mermaid"
import rehypeSlug from "rehype-slug"

export async function generateStaticParams() {
  const files = fs.readdirSync(path.join(process.cwd(), "content/case-studies"))
  return files.map((filename) => ({
    slug: filename.replace(".md", ""),
  }))
}

function getCaseStudy(slug: string) {
  try {
    const markdownWithMeta = fs.readFileSync(
      path.join(process.cwd(), "content/case-studies", slug + ".md"),
      "utf-8"
    )
    const { data: frontmatter, content } = matter(markdownWithMeta)
    return { frontmatter, content }
  } catch (error) {
    return null
  }
}

function extractHeadings(content: string) {
  const headingRegex = /^(##|###)\s+(.*)$/gm;
  const headings = [];
  let match;
  while ((match = headingRegex.exec(content)) !== null) {
    headings.push({
      level: match[1].length,
      text: match[2],
      id: match[2].toLowerCase().replace(/[^\w]+/g, '-').replace(/^-+|-+$/g, '')
    });
  }
  return headings;
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params
  const caseStudy = getCaseStudy(resolvedParams.slug)

  if (!caseStudy) {
    notFound()
  }

  const { frontmatter, content } = caseStudy
  const headings = extractHeadings(content)

  return (
    <main className="min-h-screen pt-32 pb-24 bg-slate-50 dark:bg-slate-950/50 transition-colors duration-500">
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        
        <Link 
          href="/case-studies" 
          className="inline-flex items-center gap-2 text-slate-500 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 font-semibold mb-12 transition-colors font-accent tracking-widest text-sm uppercase"
        >
          <ArrowLeft size={16} />
          Back to Case Studies
        </Link>

        <header className="mb-16">
          <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter font-heading text-slate-900 dark:text-white">
            {frontmatter.title}
          </h1>
          
          <div className="flex flex-wrap gap-6 text-sm font-semibold text-slate-600 dark:text-slate-300 font-accent uppercase tracking-widest bg-white dark:bg-slate-900/50 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
            <div className="flex items-center gap-2">
              <Building className="text-blue-600 dark:text-blue-400" size={18} />
              {frontmatter.client}
            </div>
            <div className="flex items-center gap-2">
              <Tag className="text-emerald-600 dark:text-emerald-400" size={18} />
              {frontmatter.category}
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="text-purple-600 dark:text-purple-400" size={18} />
              {frontmatter.date}
            </div>
          </div>
        </header>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Main Content */}
          <div className="lg:w-2/3 bg-white dark:bg-slate-900 p-8 md:p-12 rounded-3xl shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-200 dark:border-slate-800">
            <article className="prose prose-lg dark:prose-invert prose-slate max-w-none
              prose-headings:font-black prose-headings:tracking-tighter prose-headings:font-heading prose-headings:scroll-mt-24
              prose-h1:text-4xl prose-h2:text-3xl prose-h3:text-2xl
              prose-p:font-body prose-p:leading-relaxed prose-p:text-slate-600 dark:prose-p:text-slate-400
              prose-a:text-blue-600 dark:prose-a:text-blue-400 prose-a:font-semibold prose-a:no-underline hover:prose-a:underline
              prose-blockquote:border-l-blue-600 prose-blockquote:bg-blue-50 dark:prose-blockquote:bg-blue-900/20 prose-blockquote:p-6 prose-blockquote:rounded-r-2xl prose-blockquote:text-slate-700 dark:prose-blockquote:text-slate-300 prose-blockquote:not-italic
              prose-strong:text-slate-900 dark:prose-strong:text-white
              prose-li:text-slate-600 dark:prose-li:text-slate-400
              prose-code:text-blue-600 dark:prose-code:text-blue-400 prose-code:bg-blue-50 dark:prose-code:bg-blue-900/20 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-md prose-code:before:content-none prose-code:after:content-none
            ">
              <ReactMarkdown
                rehypePlugins={[rehypeSlug]}
                components={{
                  code({ node, inline, className, children, ...props }: any) {
                    const match = /language-(\w+)/.exec(className || "")
                    if (!inline && match && match[1] === "mermaid") {
                      return <Mermaid chart={String(children).replace(/\n$/, "")} />
                    }
                    return (
                      <code className={className} {...props}>
                        {children}
                      </code>
                    )
                  },
                }}
              >
                {content}
              </ReactMarkdown>
            </article>
          </div>

          {/* Sticky Table of Contents Sidebar */}
          <div className="lg:w-1/3 hidden lg:block">
            <div className="sticky top-32 bg-white dark:bg-slate-900/50 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-lg shadow-slate-200/50 dark:shadow-none">
              <h3 className="text-xl font-black mb-6 tracking-tighter text-slate-900 dark:text-white font-heading flex items-center gap-2">
                <List className="text-blue-600 dark:text-blue-400" />
                Table of Contents
              </h3>
              <nav className="flex flex-col gap-3">
                {headings.map((heading, idx) => (
                  <a 
                    key={idx} 
                    href={`#${heading.id}`}
                    className={`text-sm font-semibold transition-colors hover:text-blue-600 dark:hover:text-blue-400 font-body ${
                      heading.level === 3 
                        ? "ml-4 text-slate-500 dark:text-slate-400" 
                        : "text-slate-700 dark:text-slate-300"
                    }`}
                  >
                    {heading.text}
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </div>

      </div>
    </main>
  )
}
