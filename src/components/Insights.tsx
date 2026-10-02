import React, { useState } from 'react';
import { ExternalLink, Edit3, Check } from 'lucide-react';
import {
  INSIGHTS_CATEGORIES,
  INITIAL_INSIGHTS_PLACEHOLDERS,
  InsightPlaceholderItem,
} from '../data/siteData';

export const Insights: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [articles, setArticles] = useState<InsightPlaceholderItem[]>(
    INITIAL_INSIGHTS_PLACEHOLDERS
  );
  const [editingId, setEditingId] = useState<string | null>(null);

  const filteredArticles =
    selectedCategory === 'All'
      ? articles
      : articles.filter((a) => a.category === selectedCategory);

  const handleUpdateArticle = (
    id: string,
    field: keyof InsightPlaceholderItem,
    value: string
  ) => {
    setArticles((prev) =>
      prev.map((item) => (item.id === id ? { ...item, [field]: value } : item))
    );
  };

  return (
    <section
      id="insights"
      className="py-20 md:py-28 bg-[#12161B] border-b border-white/10"
    >
      <div className="max-w-[1360px] mx-auto px-4 sm:px-8">
        {/* Clean Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 pb-8 border-b border-white/10 gap-6">
          <div>
            <div className="text-xs font-mono-tabular text-[#C8F542] font-semibold mb-2">
              PUBLICATIONS &amp; RESEARCH
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-[#F8F9FA]">
              INSIGHTS &amp; TAX ARTICLES.
            </h2>
          </div>

          <div className="space-y-2 max-w-md">
            <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#F8F9FA]">
              <span className="text-[#C8F542]">59+ Published Articles</span>
              <span aria-hidden="true">·</span>
              <span>1.14M+ Total Views</span>
            </div>
            <p className="text-xs sm:text-sm text-[#A8B0BC] leading-relaxed">
              Explore thematic publication slots below (customizable for
              specific article titles) or view the complete verified author
              archive on TaxGuru.
            </p>
          </div>
        </div>

        {/* Category Filter Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-10">
          <div
            role="tablist"
            aria-label="Filter Insights by Category"
            className="flex flex-wrap items-center gap-1.5 p-1.5 bg-[#0B0D10] border border-white/15"
          >
            {INSIGHTS_CATEGORIES.map((category) => {
              const isActive = selectedCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-3.5 py-2 text-xs font-medium transition-colors whitespace-nowrap ${
                    isActive
                      ? 'bg-[#C8F542] text-[#0B0D10] font-bold'
                      : 'text-[#A8B0BC] hover:text-[#F8F9FA]'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>

          <a
            href="https://taxguru.in/author/gstrajender/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 border border-white/20 text-xs font-semibold text-[#F8F9FA] hover:border-[#C8F542] hover:text-[#C8F542] transition-colors whitespace-nowrap"
          >
            <span>Full TaxGuru Archive</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Clean Editorial List */}
        <div className="divide-y divide-white/10 border-t border-b border-white/10">
          {filteredArticles.map((article) => {
            const isEditing = editingId === article.id;
            return (
              <article
                key={article.id}
                className="py-7 px-4 hover:bg-[#0B0D10]/70 transition-colors duration-150"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                  {/* Left Metadata (3 cols) */}
                  <div className="lg:col-span-3 space-y-1">
                    <div className="flex items-center gap-2 text-xs font-mono-tabular">
                      <span className="text-[#C8F542] font-bold">
                        {article.index}
                      </span>
                      <span aria-hidden="true" className="text-white/25">
                        ·
                      </span>
                      <span className="text-[#F8F9FA] font-medium">
                        {article.category}
                      </span>
                    </div>
                    <div className="text-xs text-[#A8B0BC]">
                      {article.publicationChannel}
                    </div>
                  </div>

                  {/* Center Title & Summary (7 cols) */}
                  <div className="lg:col-span-7 space-y-2">
                    {isEditing ? (
                      <div className="space-y-3">
                        <input
                          type="text"
                          value={article.editableTitle}
                          onChange={(e) =>
                            handleUpdateArticle(
                              article.id,
                              'editableTitle',
                              e.target.value
                            )
                          }
                          className="w-full bg-[#0B0D10] border border-[#C8F542] px-3 py-2 font-display text-lg font-bold text-[#F8F9FA] focus:outline-none"
                        />
                        <textarea
                          rows={2}
                          value={article.summaryPlaceholder}
                          onChange={(e) =>
                            handleUpdateArticle(
                              article.id,
                              'summaryPlaceholder',
                              e.target.value
                            )
                          }
                          className="w-full bg-[#0B0D10] border border-[#C8F542] px-3 py-2 text-xs sm:text-sm text-[#A8B0BC] focus:outline-none"
                        />
                      </div>
                    ) : (
                      <>
                        <h3 className="font-display text-lg sm:text-2xl font-bold text-[#F8F9FA] leading-snug">
                          {article.editableTitle}
                        </h3>
                        <p className="text-xs sm:text-sm text-[#A8B0BC] leading-relaxed">
                          {article.summaryPlaceholder}
                        </p>
                      </>
                    )}
                  </div>

                  {/* Right Edit Button (2 cols) */}
                  <div className="lg:col-span-2 flex lg:justify-end">
                    <button
                      type="button"
                      onClick={() =>
                        setEditingId(isEditing ? null : article.id)
                      }
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-white/15 text-xs font-medium text-[#A8B0BC] hover:border-[#C8F542] hover:text-[#F8F9FA] transition-colors whitespace-nowrap"
                    >
                      {isEditing ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-[#C8F542]" />
                          <span>Save</span>
                        </>
                      ) : (
                        <>
                          <Edit3 className="w-3.5 h-3.5" />
                          <span>Edit Title</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
