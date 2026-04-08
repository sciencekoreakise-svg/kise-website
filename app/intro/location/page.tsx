import type { Metadata } from 'next';
import { MapPin, Phone, Mail, Clock, Bus, Train } from 'lucide-react';

export const metadata: Metadata = { title: '오시는길' };

export default function LocationPage() {
  return (
    <article>
      <h2 className="text-2xl font-bold text-gray-900 mb-1">오시는길</h2>
      <div className="w-10 h-1 rounded mb-8" style={{ backgroundColor: '#FF6600' }} />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* 지도 (플레이스홀더) */}
        <div
          className="rounded-xl overflow-hidden aspect-square lg:aspect-auto lg:min-h-80 flex items-center justify-center text-white relative"
          style={{ background: 'linear-gradient(135deg, #003087, #0066cc)' }}
        >
          <div className="text-center">
            <MapPin size={48} className="mx-auto mb-3 opacity-60" />
            <p className="text-sm opacity-70">지도 영역</p>
            <p className="text-xs opacity-50 mt-1">
              실제 서비스 시 Google Maps 또는
              <br />
              카카오맵 API로 교체하세요
            </p>
          </div>
          {/* 지도 핀 장식 */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div
              className="w-5 h-5 rounded-full border-4 border-white shadow-lg animate-bounce"
              style={{ backgroundColor: '#FF6600' }}
            />
          </div>
        </div>

        {/* 주소 정보 */}
        <div className="space-y-6">
          <div>
            <h3 className="font-bold text-gray-800 mb-4 text-lg">주소 및 연락처</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="shrink-0 mt-0.5" style={{ color: '#003087' }} />
                <div>
                  <p className="font-medium text-gray-800">주소</p>
                  <p className="text-gray-600 text-sm">
                    서울특별시 마포구 월드컵북로 396
                    <br />
                    누리꿈스퀘어 비즈니스타워 14층
                    <br />
                    (우편번호: 03925)
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={18} className="shrink-0 mt-0.5" style={{ color: '#003087' }} />
                <div>
                  <p className="font-medium text-gray-800">전화</p>
                  <p className="text-gray-600 text-sm">02-6388-6000</p>
                  <p className="text-gray-600 text-sm">팩스: 02-6388-6001</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={18} className="shrink-0 mt-0.5" style={{ color: '#003087' }} />
                <div>
                  <p className="font-medium text-gray-800">이메일</p>
                  <a
                    href="mailto:info@kise.or.kr"
                    className="text-sm text-[#0066cc] hover:underline"
                  >
                    info@kise.or.kr
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={18} className="shrink-0 mt-0.5" style={{ color: '#003087' }} />
                <div>
                  <p className="font-medium text-gray-800">운영시간</p>
                  <p className="text-gray-600 text-sm">평일 09:00 ~ 18:00</p>
                  <p className="text-gray-600 text-sm">점심시간 12:00 ~ 13:00</p>
                  <p className="text-gray-600 text-sm">(토·일·공휴일 휴무)</p>
                </div>
              </li>
            </ul>
          </div>

          {/* 교통 안내 */}
          <div className="border-t border-gray-200 pt-6">
            <h3 className="font-bold text-gray-800 mb-4">교통 안내</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div
                  className="shrink-0 w-7 h-7 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: '#003087' }}
                >
                  <Train size={14} className="text-white" />
                </div>
                <div className="text-sm text-gray-700">
                  <span className="font-medium">지하철</span> 6호선 월드컵경기장역 1번 출구에서
                  도보 5분
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div
                  className="shrink-0 w-7 h-7 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: '#0066cc' }}
                >
                  <Bus size={14} className="text-white" />
                </div>
                <div className="text-sm text-gray-700">
                  <span className="font-medium">버스</span> 271, 571, 710번 '누리꿈스퀘어' 정류장
                  하차
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div
                  className="shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-bold"
                  style={{ backgroundColor: '#FF6600' }}
                >
                  P
                </div>
                <div className="text-sm text-gray-700">
                  <span className="font-medium">주차</span> 누리꿈스퀘어 지하주차장 이용 가능
                  (유료)
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </article>
  );
}
