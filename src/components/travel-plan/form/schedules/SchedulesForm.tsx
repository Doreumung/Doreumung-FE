'use client';

import ScheduleArticle from './SchedulesArticle';
import ToggleGroup from '@/components/common/toggle/ToggleGroup';
import { MEALS, THEMES } from '@/components/common/toggle/constants';
import Button from '@/components/common/buttons/Button';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import {
  setMealToggles,
  setThemes,
  setThemeToggles,
  updateSchedule,
} from '@/store/travelPlanSlice';

const SchedulesForm = () => {
  const dispatch = useAppDispatch();
  const { schedule, themes } = useAppSelector(state => state.travelPlan.config);
  const themeToggles = useAppSelector(state => state.travelPlan.themeToggles);
  const mealToggles = useAppSelector(state => state.travelPlan.mealToggles);

  // 식사 여부 토글 변경 핸들러
  const handleMealToggleChange = (indices: number[]) => {
    dispatch(setMealToggles(indices));
    dispatch(updateSchedule({ breakfast: indices.includes(0) }));
    dispatch(updateSchedule({ lunch: indices.includes(1) }));
    dispatch(updateSchedule({ dinner: indices.includes(2) }));
  };

  // 테마 선택 토글 변경 핸들러
  const handleThemeToggleChange = (indices: number[]) => {
    dispatch(setThemeToggles(indices));
    dispatch(setThemes(indices.map(index => THEMES[index])));
  };

  // 오전/오후 일정 추가
  const addSchedule = (time: 'morning' | 'afternoon') => {
    if (schedule[time] < 3) {
      dispatch(updateSchedule({ [time]: schedule[time] + 1 }));
    }
  };

  // 오전/오후 일정 삭제
  const removeSchedule = (time: 'morning' | 'afternoon') => {
    if (schedule[time] > 0) {
      dispatch(updateSchedule({ [time]: schedule[time] - 1 }));
    }
  };

  // 최종 일정 렌더링
  const renderSchedule = () => {
    const scheduleOrder = [
      ...(schedule.breakfast ? ['아침'] : []),
      ...Array(schedule.morning).fill('오전'),
      ...(schedule.lunch ? ['점심'] : []),
      ...Array(schedule.afternoon).fill('오후'),
      ...(schedule.dinner ? ['저녁'] : []),
    ];

    if (scheduleOrder.length === 0) {
      return (
        <div className="text-lightGray text-center text-sm">
          오전, 오후 일정 중 최소 1개 이상 추가해 주세요!
        </div>
      );
    }

    return scheduleOrder.map((item, index) => {
      let bgColor = '';
      if (['아침', '점심', '저녁'].includes(item)) {
        bgColor = 'bg-skyblue';
      } else if (item.startsWith('오전')) {
        bgColor = 'bg-green';
      } else if (item.startsWith('오후')) {
        bgColor = 'bg-logo';
      }

      return (
        <div
          key={index}
          className={`flex justify-center items-center h-8 px-3 border border-darkerGray rounded-2xl text-base md:min-w-24 md:h-10 md:text-xl ${bgColor}`}
        >
          {item}
        </div>
      );
    });
  };

  return (
    <>
      <section className="sticky z-20 top-0 w-full bg-background">
        <article className="flex flex-col items-center border-b border-b-lighterGray pb-4 text-darkerGray md:border-none">
          <label className="py-4 text-xl md:text-2xl">최종 일정</label>
          <div className="flex flex-wrap justify-center gap-2 min-h-12">{renderSchedule()}</div>

          {/* 선택된 테마 확인 */}
          <div>{themes.length > 0 ? themes.join(', ') : '없음'}</div>
        </article>
      </section>
      <section className="flex flex-col gap-6 px-6 md:gap-10 md:p-0">
        <ScheduleArticle label="테마 선택">
          <ToggleGroup
            items={THEMES}
            color="fadedSkyblue"
            onChange={handleThemeToggleChange}
            activeToggles={themeToggles}
          />
        </ScheduleArticle>
        <ScheduleArticle label="식사 여부">
          <ToggleGroup
            items={MEALS}
            color="fadedSkyblue"
            onChange={handleMealToggleChange}
            activeToggles={mealToggles}
          />
        </ScheduleArticle>
        <ScheduleArticle label="오전 일정">
          <div className="flex gap-6">
            <Button
              color="fadedGreen"
              label="추가"
              onClick={() => addSchedule('morning')}
              disabled={schedule.morning >= 3}
            />
            <Button
              color="fadedGreen"
              label="삭제"
              onClick={() => removeSchedule('morning')}
              disabled={schedule.morning === 0}
            />
          </div>
        </ScheduleArticle>
        <ScheduleArticle label="오후 일정">
          <div className="flex gap-6">
            <Button
              color="fadedYellow"
              label="추가"
              onClick={() => addSchedule('afternoon')}
              disabled={schedule.afternoon >= 3}
            />
            <Button
              color="fadedYellow"
              label="삭제"
              onClick={() => removeSchedule('afternoon')}
              disabled={schedule.afternoon === 0}
            />
          </div>
        </ScheduleArticle>
      </section>
    </>
  );
};

export default SchedulesForm;
