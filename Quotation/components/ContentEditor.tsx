'use client'

import React, { useRef, useState } from 'react'
import { 
  Heading2, 
  Heading3, 
  Bold, 
  Italic, 
  List, 
  Link, 
  Image as ImageIcon, 
  Code, 
  Eye, 
  Edit3, 
  HelpCircle, 
  Sparkles,
  Info,
  Text,
  MousePointerClick
} from 'lucide-react'

interface ContentEditorProps {
  name: string
  defaultValue?: string
  placeholder?: string
  required?: boolean
  rows?: number
}

export default function ContentEditor({
  name,
  defaultValue = '',
  placeholder = 'Write your content here...',
  required = false,
  rows = 12
}: ContentEditorProps) {
  const [value, setValue] = useState(defaultValue)
  const [activeTab, setActiveTab] = useState<'write' | 'preview'>('write')
  const [showGuide, setShowGuide] = useState(false)
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  // Inserts text formatting tags at the current cursor position
  const insertFormat = (before: string, after: string = '') => {
    const textarea = textareaRef.current
    if (!textarea) return

    const start = textarea.selectionStart
    const end = textarea.selectionEnd
    const text = textarea.value
    const selectedText = text.substring(start, end)
    
    const replacement = before + selectedText + after
    const newValue = text.substring(0, start) + replacement + text.substring(end)
    
    setValue(newValue)
    
    // Focus back on textarea and position cursor
    setTimeout(() => {
      textarea.focus()
      const newCursorPos = start + before.length + selectedText.length + after.length
      textarea.setSelectionRange(newCursorPos, newCursorPos)
    }, 0)
  }

  // Pre-configured templates/layouts
  const insertCtaBlock = () => {
    const template = `\n<div class="cta-block my-12 p-8 md:p-10 rounded-3xl bg-[#2563eb]/10 border border-[#2563eb]/20 relative overflow-hidden group">
  <h4 class="text-xl font-bold mb-3 tracking-tight text-foreground">Want Help Implementing This Strategy?</h4>
  <p class="mb-6 text-slate-400 text-sm">Our growth experts have helped dozens of companies execute these exact frameworks to drive millions in revenue.</p>
  <a href="/contact" class="cta-link inline-flex px-6 py-3 bg-gradient-to-r from-[#3994fa] to-[#004aad] text-white rounded-xl font-bold text-xs uppercase tracking-widest hover:scale-105 transition-all duration-300 no-underline">Book Free Strategy Call</a>
</div>\n`
    insertFormat(template)
  }

  const insertImageBlock = () => {
    const src = prompt('Enter Featured Image URL:', '/images/services/software-development.png')
    if (src === null) return
    const alt = prompt('Enter Image Description / Alt Text:', 'Developer workspace') || 'Image alt description'
    insertFormat(`<img src="${src}" alt="${alt}" class="w-full rounded-[2rem] my-8 border border-border/60 shadow-sm" />`)
  }

  const insertLinkBlock = () => {
    const href = prompt('Enter destination URL (e.g. /contact or https://...):', 'https://')
    if (!href) return
    insertFormat(`<a href="${href}" class="text-primary hover:underline font-bold transition-colors">`, `</a>`)
  }

  // Process text for high fidelity preview rendering
  const getPreviewHtml = () => {
    if (!value) return '<p class="text-muted-foreground italic">Nothing to preview yet. Start writing in the editor!</p>'

    const hasHtml = /<\/?[a-z][\s\S]*>/i.test(value)
    if (!hasHtml) {
      // Basic markdown representation converter for previewing markdown layouts
      let html = value
      html = html.replace(/^### (.*$)/gim, '<h3 class="text-xl md:text-2xl font-black mt-8 mb-4">$1</h3>')
      html = html.replace(/^## (.*$)/gim, '<h2 class="text-2xl md:text-3xl font-black mt-10 mb-5">$1</h2>')
      html = html.replace(/^# (.*$)/gim, '<h1 class="text-3xl md:text-4xl font-black mt-12 mb-6">$1</h1>')
      html = html.replace(/\*\*(.*)\*\*/gim, '<strong>$1</strong>')
      html = html.replace(/\*(.*)\*/gim, '<em>$1</em>')
      html = html.replace(/`([^`]+)`/g, '<code class="px-1.5 py-0.5 bg-muted rounded font-mono text-sm font-semibold text-rose-500">$1</code>')
      html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-primary hover:underline font-bold">$1</a>')
      
      // Simple lists parser
      html = html.split('\n').map(line => {
        if (line.trim().startsWith('* ')) {
          return `<li class="text-slate-400 my-1">${line.trim().substring(2)}</li>`
        }
        if (line.trim().startsWith('- ')) {
          return `<li class="text-slate-400 my-1">${line.trim().substring(2)}</li>`
        }
        return line
      }).join('\n')

      // Wrap list items
      html = html.replace(/(<li>[\s\S]*<\/li>)/g, '<ul class="list-disc pl-6 mb-6 space-y-2">$1</ul>')

      // Paragraph helper
      html = html.split(/\n{2,}/).map(p => {
        const trimmed = p.trim()
        if (trimmed.startsWith('<h') || trimmed.startsWith('<u') || trimmed.startsWith('<o') || trimmed.startsWith('<d') || trimmed.startsWith('<i')) {
          return p
        }
        return `<p class="mb-6 leading-[1.8] text-slate-400">${p}</p>`
      }).join('\n')

      return html
    }

    return value
  }

  return (
    <div className="space-y-4">
      {/* Editor Tabs & Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-border/60 pb-3">
        <div className="flex items-center gap-1.5 bg-muted/30 p-1 rounded-xl w-fit border border-border/40">
          <button
            type="button"
            onClick={() => setActiveTab('write')}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold rounded-lg transition-all ${
              activeTab === 'write'
                ? 'bg-card text-foreground shadow-sm'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            <Edit3 className="h-3.5 w-3.5" />
            Write
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('preview')}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold rounded-lg transition-all ${
              activeTab === 'preview'
                ? 'bg-card text-foreground shadow-sm'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            <Eye className="h-3.5 w-3.5" />
            Preview
          </button>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setShowGuide(!showGuide)}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-xl border transition-all ${
              showGuide 
                ? 'bg-primary/10 border-primary/30 text-primary' 
                : 'border-border/60 text-muted-foreground hover:bg-muted hover:text-foreground'
            }`}
          >
            <HelpCircle className="h-3.5 w-3.5" />
            Formatting Guide
          </button>
        </div>
      </div>

      {/* Guide Accordion */}
      {showGuide && (
        <div className="rounded-xl border border-border/60 bg-muted/15 p-4 space-y-3 animate-in slide-in-from-top-2 duration-300 text-xs">
          <div className="flex items-center gap-2 text-primary font-bold">
            <Info className="h-4 w-4" />
            Formatting Guide
          </div>
          <p className="text-muted-foreground leading-relaxed">
            You can write either <strong>HTML tags</strong> or <strong>Markdown</strong>. The main website detects HTML tags and displays them directly, fallback to Markdown parsing if absent. Use the quick buttons below for seamless editing.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
            <div className="space-y-1.5">
              <span className="font-bold text-foreground block">HTML Quick Tags (Recommended)</span>
              <ul className="list-disc pl-4 space-y-1 text-muted-foreground">
                <li><code>&lt;h2&gt;Subheading&lt;/h2&gt;</code> - Section Titles</li>
                <li><code>&lt;strong&gt;Text&lt;/strong&gt;</code> - Bold Emphasis</li>
                <li><code>&lt;a href="..." class="..."&gt;Link&lt;/a&gt;</code> - Stylized Hyperlinks</li>
                <li><code>&lt;ul&gt;&lt;li&gt;Item&lt;/li&gt;&lt;/ul&gt;</code> - Lists</li>
              </ul>
            </div>
            <div className="space-y-1.5">
              <span className="font-bold text-foreground block">Markdown syntax fallbacks</span>
              <ul className="list-disc pl-4 space-y-1 text-muted-foreground">
                <li><code>## Subheading</code> - Translates to H2</li>
                <li><code>### Smaller Title</code> - Translates to H3</li>
                <li><code>**Bold Text**</code> - Translates to Bold</li>
                <li><code>[Link Title](https://example.com)</code> - Hyperlink</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* Toolbar - Visible only in write mode */}
      {activeTab === 'write' && (
        <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-muted/20 border border-border/60 rounded-xl">
          <button
            type="button"
            onClick={() => insertFormat('<h2>', '</h2>')}
            title="Heading 2 (h2)"
            className="p-2 rounded-lg text-muted-foreground hover:bg-muted hover:text-foreground transition-all"
          >
            <Heading2 className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={() => insertFormat('<h3>', '</h3>')}
            title="Heading 3 (h3)"
            className="p-2 rounded-lg text-muted-foreground hover:bg-muted hover:text-foreground transition-all"
          >
            <Heading3 className="h-4 w-4" />
          </button>
          
          <div className="h-5 w-[1px] bg-border/60 mx-1" />

          <button
            type="button"
            onClick={() => insertFormat('<strong>', '</strong>')}
            title="Bold"
            className="p-2 rounded-lg text-muted-foreground hover:bg-muted hover:text-foreground transition-all"
          >
            <Bold className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={() => insertFormat('<em>', '</em>')}
            title="Italic"
            className="p-2 rounded-lg text-muted-foreground hover:bg-muted hover:text-foreground transition-all"
          >
            <Italic className="h-4 w-4" />
          </button>

          <div className="h-5 w-[1px] bg-border/60 mx-1" />

          <button
            type="button"
            onClick={() => insertFormat('<p>', '</p>')}
            title="Paragraph"
            className="p-2 rounded-lg text-muted-foreground hover:bg-muted hover:text-foreground transition-all"
          >
            <Text className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={() => insertFormat('<ul>\n  <li>', '</li>\n  <li>Item 2</li>\n</ul>')}
            title="Bullet List"
            className="p-2 rounded-lg text-muted-foreground hover:bg-muted hover:text-foreground transition-all"
          >
            <List className="h-4 w-4" />
          </button>

          <div className="h-5 w-[1px] bg-border/60 mx-1" />

          <button
            type="button"
            onClick={insertLinkBlock}
            title="Hyperlink"
            className="p-2 rounded-lg text-muted-foreground hover:bg-muted hover:text-foreground transition-all"
          >
            <Link className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={insertImageBlock}
            title="Image URL Tag"
            className="p-2 rounded-lg text-muted-foreground hover:bg-muted hover:text-foreground transition-all"
          >
            <ImageIcon className="h-4 w-4" />
          </button>

          <div className="h-5 w-[1px] bg-border/60 mx-1" />

          <button
            type="button"
            onClick={insertCtaBlock}
            title="Preet Tech CTA Component"
            className="inline-flex items-center gap-1.5 px-2.5 py-1.5 text-[10px] font-black uppercase tracking-wider text-primary border border-primary/20 bg-primary/5 rounded-lg hover:bg-primary/10 hover:border-primary/40 transition-all ml-auto"
          >
            <Sparkles className="h-3 w-3" />
            Preet Tech CTA
          </button>
        </div>
      )}

      {/* Editor Content Fields */}
      {activeTab === 'write' ? (
        <textarea
          ref={textareaRef}
          name={name}
          required={required}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder={placeholder}
          rows={rows}
          className="w-full rounded-xl border border-border/60 bg-muted/10 px-3.5 py-3 text-sm transition-all focus:border-primary focus:bg-background focus:outline-none focus:ring-1 focus:ring-primary shadow-inner font-mono resize-y"
        />
      ) : (
        <div className="rounded-xl border border-border/60 bg-card p-6 shadow-sm min-h-[300px]">
          {/* Visual Live Preview with Main Site Typographies */}
          <div className="prose prose-invert prose-brand max-w-none">
            <div 
              className="text-slate-400 text-base leading-[1.8] space-y-6 blog-content-rich"
              dangerouslySetInnerHTML={{ __html: getPreviewHtml() }}
            />
          </div>
        </div>
      )}

      {/* Hidden textarea to submit form state if not in write tab */}
      {activeTab !== 'write' && (
        <textarea
          name={name}
          required={required}
          value={value}
          readOnly
          className="hidden"
        />
      )}
    </div>
  )
}
