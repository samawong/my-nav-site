import { useState, useEffect } from 'react';
import getSiteData from '../data/sites.js';

interface Props {
  client: boolean;
}

interface Site {
  name: string;
  desc: string;
  icon: string;
  url: string;
}

type SiteData = {
  [key: string]: {
    [key: string]: Site[];
  };
};

const DEFAULT_MAIN_CATEGORY = "优质网站";
const DEFAULT_SUB_CATEGORY = "常用网站";

const SiteDisplay = () => {
  const [displaySites, setDisplaySites] = useState<Site[]>([]);
  const [currentMainCategory, setCurrentMainCategory] = useState<string>(DEFAULT_MAIN_CATEGORY);
  const [currentSubCategory, setCurrentSubCategory] = useState<string>(DEFAULT_SUB_CATEGORY);

  // 加载网站数据的通用函数
  const loadSites = (mainCategory: string, subCategory: string) => {
    const siteData = getSiteData();
    if (siteData && siteData[mainCategory] && siteData[mainCategory][subCategory]) {
      setDisplaySites(siteData[mainCategory][subCategory]);
      setCurrentMainCategory(mainCategory);
      setCurrentSubCategory(subCategory);
    }
  };

  // 初始加载默认分类数据
  useEffect(() => {
    loadSites(DEFAULT_MAIN_CATEGORY, DEFAULT_SUB_CATEGORY);
  }, []);

  // 监听分类变化
  useEffect(() => {
    const handleSiteChange = (e: CustomEvent<{ mainCategory: string; subCategory: string }>) => {
      const { mainCategory, subCategory } = e.detail;
      loadSites(mainCategory, subCategory);
    };

    // 添加事件监听
    window.addEventListener('siteTypeChange', handleSiteChange as EventListener);

    // 清理事件监听
    return () => {
      window.removeEventListener('siteTypeChange', handleSiteChange as EventListener);
    };
  }, []);

  return (
    <div className="space-y-8">
      {/* 当前分类标题 */}
      <div className="flex items-center gap-2 mb-6">
        <h2 className="text-xl font-semibold text-gray-900">
          {currentMainCategory} - {currentSubCategory}
        </h2>
      </div>

      {/* 网站网格显示 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {displaySites.map((site, index) => (
          <a
            key={`${site.name}-${index}`}
            href={site.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group hover-glow shine bg-white rounded-lg p-4 transition-all duration-300 hover:bg-gray-50 animate__animated animate__fadeIn"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="flex flex-col items-center text-center space-y-3">
              <div className="relative w-16 h-16 rounded-lg overflow-hidden bg-gray-100 group-hover:scale-110 transition-transform duration-300">
                <img
                  src={site.icon}
                  alt={site.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = `https://www.google.com/s2/favicons?domain=${site.url}&sz=64`;
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                  {site.name}
                </h3>
                <p className="text-sm text-gray-500 line-clamp-2">
                  {site.desc || site.url}
                </p>
              </div>
            </div>
          </a>
        ))}
      </div>

      {/* 空状态显示 */}
      {displaySites.length === 0 && (
        <div className="text-center py-12 animate__animated animate__fadeIn">
          <div className="inline-block p-4 rounded-full bg-gray-100 mb-4">
            <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">未找到相关网站</h3>
          <p className="text-gray-500">该分类下暂无网站</p>
        </div>
      )}
    </div>
  );
};

export default SiteDisplay;
