'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    id: 1,
    category: '일반',
    q: '한국정보과학진흥협회는 어떤 기관인가요?',
    a: '사단법인 한국정보과학진흥협회(KISE)는 1990년 설립된 과학기술정보통신부 산하 비영리 사단법인입니다. 디지털 포용 사회 실현을 위해 디지털디바이드 해소, SW교육, 과학문화 진흥, ICT 우수 인재 발굴 등 다양한 공익사업을 수행하고 있습니다.',
  },
  {
    id: 2,
    category: '디지털교육',
    q: '디지털디바이드 해소 교육을 신청하려면 어떻게 해야 하나요?',
    a: '공지사항 게시판에서 모집 공고를 확인하신 후 신청서를 제출해 주세요. 어르신, 장애인, 저소득층 등 디지털 취약계층을 대상으로 연중 교육을 진행하고 있으며, 가까운 복지관이나 주민센터를 통해서도 신청이 가능합니다.',
  },
  {
    id: 3,
    category: 'SW교육',
    q: 'SW미래채움 사업에 우리 학교도 참여할 수 있나요?',
    a: 'SW미래채움은 SW교육 소외 지역(농어촌·도서·벽지)의 초·중·고등학교를 주요 대상으로 하며, 매년 3월경 참여 학교를 모집합니다. 교육청 또는 협회 홈페이지 공지사항을 통해 모집 공고를 확인하시고 신청하실 수 있습니다.',
  },
  {
    id: 4,
    category: '사이언스트립',
    q: '사이언스트립은 어떤 학생이 참여할 수 있나요?',
    a: '사이언스트립은 초·중·고 재학생이면 누구나 참여 신청이 가능합니다. 프로그램별 모집 인원이 제한되어 있으므로, 공지사항에서 각 프로그램 모집 공고를 확인하신 후 선착순으로 신청하시기 바랍니다.',
  },
  {
    id: 5,
    category: 'ICT AWARD',
    q: 'ICT AWARD KOREA는 어떻게 참가할 수 있나요?',
    a: 'ICT AWARD KOREA는 매년 하반기(7~9월)에 참가 신청을 접수합니다. ICT 관련 기업, 기관, 개인 모두 참가 가능하며, 시상 부문별로 신청 자격이 다릅니다. 자세한 내용은 공지사항의 참가 신청 공고를 참고해 주세요.',
  },
  {
    id: 6,
    category: '일반',
    q: '협회와 업무협약(MOU)을 체결하고 싶습니다.',
    a: '업무협약 관련 문의는 고객지원 > 문의하기 게시판 또는 이메일(info@kise.or.kr)로 협력 의향서를 보내주시면 검토 후 연락드리겠습니다.',
  },
];

const categories = ['전체', ...Array.from(new Set(faqs.map((f) => f.category)))];

export default function FaqPage() {
  const [activeCategory, setActiveCategory] = useState('전체');
  const [openId, setOpenId] = useState<number | null>(null);

  const filtered = activeCategory === '전체' ? faqs : faqs.filter((f) => f.category === activeCategory);

  return (
    <article>
      <h2 className="text-2xl font-bold text-gray-900 mb-1">자주 묻는 질문 (FAQ)</h2>
      <div className="w-10 h-1 rounded mb-6" style={{ backgroundColor: '#FF6600' }} />

      {/* 카테고리 필터 */}
      <div className="flex flex-wrap gap-2 mb-6">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
              activeCategory === cat
                ? 'text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
            style={activeCategory === cat ? { backgroundColor: '#003087' } : {}}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* FAQ 목록 */}
      <div className="space-y-2">
        {filtered.map((faq) => (
          <div key={faq.id} className="border border-gray-200 rounded-xl overflow-hidden">
            <button
              onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
              className={`w-full flex items-center gap-4 px-5 py-4 text-left transition-colors ${
                openId === faq.id ? 'bg-blue-50' : 'bg-white hover:bg-gray-50'
              }`}
            >
              <span
                className="shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-white"
                style={{ backgroundColor: '#003087' }}
              >
                Q
              </span>
              <span className="flex-1 text-sm font-medium text-gray-800">{faq.q}</span>
              <span
                className="shrink-0 px-2 py-0.5 rounded text-xs text-white hidden sm:inline"
                style={{ backgroundColor: '#0066cc' }}
              >
                {faq.category}
              </span>
              <ChevronDown
                size={18}
                className={`shrink-0 text-gray-400 transition-transform ${
                  openId === faq.id ? 'rotate-180' : ''
                }`}
              />
            </button>
            {openId === faq.id && (
              <div className="px-5 pb-5 pt-3 border-t border-blue-100 bg-blue-50">
                <div className="flex gap-4">
                  <span
                    className="shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-white"
                    style={{ backgroundColor: '#FF6600' }}
                  >
                    A
                  </span>
                  <p className="text-sm text-gray-700 leading-relaxed">{faq.a}</p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </article>
  );
}
