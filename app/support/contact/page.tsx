'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    category: '',
    title: '',
    content: '',
    agree: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <article>
        <h2 className="text-2xl font-bold text-gray-900 mb-1">문의하기</h2>
        <div className="w-10 h-1 rounded mb-8" style={{ backgroundColor: '#FF6600' }} />
        <div className="flex flex-col items-center justify-center py-16 text-center">
          <CheckCircle size={64} className="mb-4" style={{ color: '#003087' }} />
          <h3 className="text-xl font-bold text-gray-800 mb-2">문의가 접수되었습니다</h3>
          <p className="text-gray-600 mb-6">
            담당자 확인 후 등록하신 이메일로 답변드리겠습니다.
            <br />
            영업일 기준 3~5일 내 회신을 드립니다.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="px-6 py-3 rounded-lg text-white font-semibold"
            style={{ backgroundColor: '#003087' }}
          >
            다시 문의하기
          </button>
        </div>
      </article>
    );
  }

  return (
    <article>
      <h2 className="text-2xl font-bold text-gray-900 mb-1">문의하기</h2>
      <div className="w-10 h-1 rounded mb-8" style={{ backgroundColor: '#FF6600' }} />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* 연락처 정보 */}
        <div className="lg:col-span-1">
          <h3 className="font-bold text-gray-800 mb-4">연락처 안내</h3>
          <div className="space-y-4">
            {[
              {
                icon: Phone,
                label: '전화 문의',
                value: '02-6388-6000',
                sub: '평일 09:00~18:00',
              },
              {
                icon: Mail,
                label: '이메일 문의',
                value: 'info@kise.or.kr',
                sub: '영업일 3~5일 내 회신',
              },
              {
                icon: MapPin,
                label: '방문 문의',
                value: '서울 마포구 월드컵북로 396',
                sub: '누리꿈스퀘어 14층',
              },
            ].map((contact) => {
              const Icon = contact.icon;
              return (
                <div key={contact.label} className="flex items-start gap-3 p-4 rounded-lg bg-gray-50">
                  <div
                    className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-white"
                    style={{ backgroundColor: '#003087' }}
                  >
                    <Icon size={16} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 mb-0.5">{contact.label}</p>
                    <p className="text-sm font-medium text-gray-800">{contact.value}</p>
                    <p className="text-xs text-gray-500">{contact.sub}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 문의 폼 */}
        <form onSubmit={handleSubmit} className="lg:col-span-2 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                성명 <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-3 py-2.5 rounded-lg border border-gray-300 text-sm focus:outline-none focus:border-[#0066cc]"
                placeholder="홍길동"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                이메일 <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-3 py-2.5 rounded-lg border border-gray-300 text-sm focus:outline-none focus:border-[#0066cc]"
                placeholder="example@email.com"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">연락처</label>
              <input
                type="tel"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full px-3 py-2.5 rounded-lg border border-gray-300 text-sm focus:outline-none focus:border-[#0066cc]"
                placeholder="010-0000-0000"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                문의 분류 <span className="text-red-500">*</span>
              </label>
              <select
                required
                value={form.category}
                onChange={(e) => setForm({ ...form, category: e.target.value })}
                className="w-full px-3 py-2.5 rounded-lg border border-gray-300 text-sm focus:outline-none focus:border-[#0066cc] bg-white"
              >
                <option value="">선택해주세요</option>
                <option value="digital">디지털디바이드 교육</option>
                <option value="sw">SW미래채움</option>
                <option value="science">사이언스트립</option>
                <option value="ict">ICT AWARD KOREA</option>
                <option value="general">일반 문의</option>
                <option value="mou">업무협약(MOU)</option>
                <option value="other">기타</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              제목 <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              className="w-full px-3 py-2.5 rounded-lg border border-gray-300 text-sm focus:outline-none focus:border-[#0066cc]"
              placeholder="문의 제목을 입력해주세요"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              문의 내용 <span className="text-red-500">*</span>
            </label>
            <textarea
              required
              rows={6}
              value={form.content}
              onChange={(e) => setForm({ ...form, content: e.target.value })}
              className="w-full px-3 py-2.5 rounded-lg border border-gray-300 text-sm focus:outline-none focus:border-[#0066cc] resize-none"
              placeholder="문의하실 내용을 자세히 입력해주세요"
            />
          </div>

          {/* 개인정보 동의 */}
          <div className="p-4 bg-gray-50 rounded-lg text-sm text-gray-600">
            <p className="font-medium mb-2">개인정보 수집 및 이용 동의</p>
            <p className="text-xs text-gray-500 mb-3">
              수집 항목: 성명, 이메일, 연락처 / 수집 목적: 문의 처리 및 답변 / 보유 기간: 문의
              처리 완료 후 3개월
            </p>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                required
                checked={form.agree}
                onChange={(e) => setForm({ ...form, agree: e.target.checked })}
                className="w-4 h-4 accent-[#003087]"
              />
              <span className="text-sm">
                개인정보 수집 및 이용에 동의합니다.{' '}
                <span className="text-red-500">*</span>
              </span>
            </label>
          </div>

          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 py-3 rounded-lg text-white font-semibold transition-opacity hover:opacity-90"
            style={{ backgroundColor: '#003087' }}
          >
            <Send size={16} />
            문의 접수하기
          </button>
        </form>
      </div>
    </article>
  );
}
