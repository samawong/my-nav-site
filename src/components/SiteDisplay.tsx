import { useState, useEffect } from 'react';
import { siteData } from '../data/sites';

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
  const [currentMainCategory, setCurrentMainCategory] = useState<string>(DEFAULT_MAIN_CATEGORY);
  const [currentSubCategory, setCurrentSubCategory] = useState<string>(DEFAULT_SUB_CATEGORY);
  const [displaySites, setDisplaySites] = useState<Site[]>([]);

  // 初始化默认显示的网站
  useEffect(() => {
    try {
      const typedSiteData = siteData as SiteData;
      const sites = typedSiteData[DEFAULT_MAIN_CATEGORY]?.[DEFAULT_SUB_CATEGORY];
      if (Array.isArray(sites)) {
        setDisplaySites(sites);
      }
    } catch (error) {
      console.error('Error loading default sites:', error);
      setDisplaySites([]);
    }
  }, []);

  useEffect(() => {
    // 监听自定义事件
    const handleSiteChange = (e: CustomEvent) => {
      const { mainCategory, subCategory } = (e as any).detail;
      
      // 更新当前分类
      setCurrentMainCategory(mainCategory);
      setCurrentSubCategory(subCategory);

      // 获取并设置要显示的网站列表
      try {
        const typedSiteData = siteData as SiteData;
        const sites = typedSiteData[mainCategory]?.[subCategory];
        if (mainCategory && subCategory && Array.isArray(sites)) {
          setDisplaySites(sites);
        } else {
          setDisplaySites([]);
        }
      } catch (error) {
        console.error('Error accessing site data:', error);
        setDisplaySites([]);
      }
    };

    window.addEventListener('siteTypeChange', handleSiteChange as EventListener);

    return () => {
      window.removeEventListener('siteTypeChange', handleSiteChange as EventListener);
    };
  }, []);

  if (displaySites.length === 0) {
    return (
      <div className="p-6">
        <p className="text-gray-500">该分类下暂无网站</p>
      </div>
    );
  }

  return (
    <div className="p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold">
          {currentMainCategory} - {currentSubCategory}
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {displaySites.map((site, index) => (
          <div key={index} className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex flex-col items-center text-center">
              <img 
                src={site.icon} 
                alt={site.name} 
                className="w-12 h-12 rounded-lg mb-3"
              />
              <div className="w-full">
                <h3 className="text-lg font-bold mb-2">{site.name}</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{site.desc}</p>
                <a
                  href={site.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-sm w-full"
                >
                  访问网站
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SiteDisplay;
