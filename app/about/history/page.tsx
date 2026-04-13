import type { Metadata } from 'next';
import { historyData } from '@/historyData';

export const metadata: Metadata = { title: '연혁 – 한국정보과학진흥협회' };

export default function HistoryPage() {
  return (
    <article>
      <h2 className="text-2xl font-bold text-gray-900 mb-1">연혁</h2>
      <div className="w-10 h-1 rounded mb-2" style={{ backgroundColor: '#FF6600' }} />
      <p className="text-sm text-gray-500 mb-10">
        2003년 창립 이래 디지털 포용 사회 실현을 위해 걸어온 한국정보과학진흥협회의 발자취입니다.
      </p>

      <div className="max-w-[900px]">
        {historyData.map((entry, idx) => (
          <div key={entry.year} className="group/year flex">

            {/* 연도 배지 */}
            <div className="w-[110px] shrink-0 pt-[1.6rem]">
              <span
                className="inline-flex items-center justify-center w-[88px] h-9 rounded-lg
                  text-sm font-bold text-white tracking-wide
                  bg-[#003087] transition-all duration-200
                  group-hover/year:bg-[#FF6600] group-hover/year:scale-105"
              >
                {entry.year}
              </span>
            </div>

            {/* 세로선 + 점 */}
            <div className="w-8 shrink-0 flex flex-col items-center pt-[1.6rem]">
              <div
                className="w-3.5 h-3.5 rounded-full border-[3px] border-[#003087] bg-white
                  shrink-0 mt-[11px] z-10 transition-all duration-200
                  group-hover/year:bg-[#FF6600] group-hover/year:border-[#FF6600] group-hover/year:scale-[1.3]"
              />
              {idx < historyData.length - 1 && (
                <div className="w-px flex-1 mt-1 bg-[#d1dae8] min-h-5" />
              )}
            </div>

            {/* 이벤트 목록 */}
            <div className={`flex-1 pl-5 pt-[1.4rem] ${idx < historyData.length - 1 ? 'pb-2' : 'pb-2'}`}>
              {entry.events.map((event, i) => {
                const isHighlight = event.type === 'highlight';
                const isAward = event.type === 'award';

                return (
                  <div
                    key={i}
                    className="group/event flex items-start gap-3 px-4 py-[0.55rem] mb-1 rounded-lg
                      cursor-default border-l-[3px] border-l-transparent
                      transition-all duration-200
                      hover:bg-white hover:border-l-[#003087] hover:translate-x-1
                      hover:shadow-[0_2px_12px_rgba(0,48,135,0.08)]"
                  >
                    {/* 월 배지 */}
                    <span
                      className={[
                        'shrink-0 text-[0.72rem] font-bold px-2 py-0.5 rounded min-w-[46px] text-center mt-0.5 transition-all duration-200',
                        isAward
                          ? 'bg-[#FF6600] text-white'
                          : isHighlight
                            ? 'bg-[#003087] text-white'
                            : 'bg-[#eef3ff] text-[#0066cc] group-hover/event:bg-[#003087] group-hover/event:text-white',
                      ].join(' ')}
                    >
                      {event.month}월
                    </span>

                    {/* 내용 */}
                    <span
                      className={[
                        'text-[0.9rem] leading-[1.5] transition-all duration-200',
                        isAward
                          ? 'text-[#c45200]'
                          : isHighlight
                            ? 'font-semibold text-[#003087]'
                            : 'text-gray-700 group-hover/event:text-[#003087] group-hover/event:font-medium',
                      ].join(' ')}
                    >
                      {event.text}
                    </span>
                  </div>
                );
              })}
            </div>

          </div>
        ))}
      </div>
    </article>
  );
}
