import type { Metadata } from 'next';
import { MapPin, Phone, Mail, Clock, Bus, Train, ExternalLink } from 'lucide-react';

export const metadata: Metadata = { title: '오시는길' };

export default function LocationPage() {
  return (
    <article>
      <h2 className="text-2xl font-bold text-gray-900 mb-1">오시는길</h2>
      <div className="w-10 h-1 rounded mb-8" style={{ backgroundColor: '#FF6600' }} />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* 지도 영역 */}
        <div className="flex flex-col gap-3">
          <div
            className="rounded-xl overflow-hidden flex-1 min-h-64 flex flex-col items-center justify-center text-white relative"
            style={{ background: 'linear-gradient(135deg, #003087, #0066cc)' }}
          >
            <MapPin size={40} className="mb-3 opacity-70" />
            <p className="text-sm font-medium opacity-90">경기도 안양시 동안구 벌말로123</p>
            <p className="text-xs opacity-70 mt-1">평촌스마트베이 A동 1410호</p>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
              <div
                className="w-4 h-4 rounded-full border-4 border-white shadow-lg animate-bounce"
                style={{ backgroundColor: '#FF6600' }}
              />
            </div>
          </div>

          {/* 지도 보기 버튼 */}
          <div className="grid grid-cols-2 gap-2">
            <a
              href="https://map.kakao.com/?q=%EA%B2%BD%EA%B8%B0%EB%8F%84+%EC%95%88%EC%96%91%EC%8B%9C+%EB%8F%99%EC%95%88%EA%B5%AC+%EB%B2%8C%EB%A7%90%EB%A1%9C123+%ED%8F%89%EC%B4%8C%EC%8A%A4%EB%A7%88%ED%8A%B8%EB%B2%A0%EC%9D%B4"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium border transition-colors hover:opacity-90"
              style={{ backgroundColor: '#FAE100', color: '#3C1E1E', borderColor: '#FAE100' }}
            >
              <ExternalLink size={14} />
              카카오맵
            </a>
            <a
              href="https://map.naver.com/v5/search/%EA%B2%BD%EA%B8%B0%EB%8F%84+%EC%95%88%EC%96%91%EC%8B%9C+%EB%8F%99%EC%95%88%EA%B5%AC+%EB%B2%8C%EB%A7%90%EB%A1%9C123+%ED%8F%89%EC%B4%8C%EC%8A%A4%EB%A7%88%ED%8A%B8%EB%B2%A0%EC%9D%B4"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium text-white transition-colors hover:opacity-90"
              style={{ backgroundColor: '#03C75A' }}
            >
              <ExternalLink size={14} />
              네이버지도
            </a>
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
                    경기도 안양시 동안구 벌말로123
                    <br />
                    평촌스마트베이 A동 1410호(관양동 792-2)
                    <br />
                    (우편번호: 14056)
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={18} className="shrink-0 mt-0.5" style={{ color: '#003087' }} />
                <div>
                  <p className="font-medium text-gray-800">전화</p>
                  <p className="text-gray-600 text-sm">031-385-9844</p>
                  <p className="text-gray-600 text-sm">팩스: 031-383-2088</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={18} className="shrink-0 mt-0.5" style={{ color: '#003087' }} />
                <div>
                  <p className="font-medium text-gray-800">이메일</p>
                  <a
                    href="mailto:kise@kise.or.kr"
                    className="text-sm text-[#0066cc] hover:underline"
                  >
                    kise@kise.or.kr
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={18} className="shrink-0 mt-0.5" style={{ color: '#003087' }} />
                <div>
                  <p className="font-medium text-gray-800">운영시간</p>
                  <p className="text-gray-600 text-sm">평일 09:00 ~ 18:00</p>
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
                  <span className="font-medium">지하철</span>
                  <br />
                  4호선 인덕원역 7번 출구에서 834m
                  <br />
                  4호선 평촌역 3번 출구에서 850m 이내
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
                  <span className="font-medium">버스</span>
                  <br />
                  마을버스 5번, 5-1번 (스마트스퀘어/스마트베이 경유), 8번, 6-1번
                  <br />
                  일반버스 83번
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
                  <span className="font-medium">주차</span> 지하주차장 이용 가능 (유료)
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </article>
  );
}
