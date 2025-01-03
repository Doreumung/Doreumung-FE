import { useState } from 'react';
import ScheduleArticle from './SchedulesArticle';
import ToggleGroup from '@/components/common/toggle/ToggleGroup';
import { MEALS, THEMES } from '@/components/common/toggle/constants';
import Button from '@/components/common/buttons/Button';
import { TimeType } from '../../types';

const SchedulesForm = () => {
  const [selectedMeals, setSelectedMeals] = useState<number[]>([]);
  const [selectedThemes, setSelectedThemes] = useState<number[]>([]);
  const [morningSchedule, setMorningSchedule] = useState<string[]>([]);
  const [afternoonSchedule, setAfternoonSchedule] = useState<string[]>([]);

  const handleMealToggleChange = (indices: number[]) => {
    setSelectedMeals(indices);
  };

  const handleThemeToggleChange = (indices: number[]) => {
    setSelectedThemes(indices);
  };

  const addSchedule = (time: TimeType) => {
    if (time === 'morning' && morningSchedule.length < 3) {
      setMorningSchedule([...morningSchedule, '오전']);
    } else if (time === 'afternoon' && afternoonSchedule.length < 3) {
      setAfternoonSchedule([...afternoonSchedule, '오후']);
    }
  };

  const removeSchedule = (time: TimeType) => {
    if (time === 'morning' && morningSchedule.length > 0) {
      setMorningSchedule(morningSchedule.slice(0, -1));
    } else if (time === 'afternoon' && afternoonSchedule.length > 0) {
      setAfternoonSchedule(afternoonSchedule.slice(0, -1));
    }
  };

  const renderSchedule = () => {
    const scheduleOrder = [
      ...(selectedMeals.includes(0) ? ['아침'] : []),
      ...morningSchedule,
      ...(selectedMeals.includes(1) ? ['점심'] : []),
      ...afternoonSchedule,
      ...(selectedMeals.includes(2) ? ['저녁'] : []),
    ];

    if (scheduleOrder.length === 0) {
      return (
        <div className="text-lightGray text-center text-sm">
          오전, 오후 일정 중 최소 1개 이상 추가해 주세요!
        </div>
      );
    }

    return scheduleOrder.map((schedule, index) => {
      let bgColor = '';
      if (['아침', '점심', '저녁'].includes(schedule)) {
        bgColor = 'bg-skyblue';
      } else if (schedule.startsWith('오전')) {
        bgColor = 'bg-green';
      } else if (schedule.startsWith('오후')) {
        bgColor = 'bg-logo';
      }

      return (
        <div
          key={index}
          className={`flex justify-center items-center h-8 px-3 border border-darkerGray rounded-2xl text-base md:min-w-24 md:h-10 md:text-xl ${bgColor}`}
        >
          {schedule}
        </div>
      );
    });
  };

  return (
    <>
      <section className="sticky z-20 top-0 w-full bg-background md:static">
        <article className="flex flex-col items-center border-b border-b-lighterGray pb-4 text-darkerGray md:border-none">
          <label className="py-4 text-xl md:pt-0 md:text-2xl">최종 일정</label>
          <div className="flex flex-wrap justify-center gap-2 min-h-12">{renderSchedule()}</div>

          {/* 테마 선택 확인용 코드 */}
          <div>
            {selectedThemes.length > 0 ? selectedThemes.map(i => THEMES[i]).join(', ') : '없음'}
          </div>
        </article>
      </section>
      <section className="flex flex-col gap-6 px-6 md:gap-10 md:p-0">
        <ScheduleArticle label="테마 선택">
          <ToggleGroup items={THEMES} color="fadedSkyblue" onChange={handleThemeToggleChange} />
        </ScheduleArticle>
        <ScheduleArticle label="식사 여부">
          <ToggleGroup items={MEALS} color="fadedSkyblue" onChange={handleMealToggleChange} />
        </ScheduleArticle>
        <ScheduleArticle label="오전 일정">
          <div className="flex gap-6">
            <Button
              color="fadedGreen"
              label="추가"
              onClick={() => addSchedule('morning')}
              disabled={morningSchedule.length >= 3}
            />
            <Button
              color="fadedGreen"
              label="삭제"
              onClick={() => removeSchedule('morning')}
              disabled={morningSchedule.length === 0}
            />
          </div>
        </ScheduleArticle>
        <ScheduleArticle label="오후 일정">
          <div className="flex gap-6">
            <Button
              color="fadedYellow"
              label="추가"
              type="button"
              onClick={() => addSchedule('afternoon')}
              disabled={afternoonSchedule.length >= 3}
            />
            <Button
              color="fadedYellow"
              label="삭제"
              type="button"
              onClick={() => removeSchedule('afternoon')}
              disabled={afternoonSchedule.length === 0}
            />
          </div>
        </ScheduleArticle>
      </section>
    </>
  );
};

export default SchedulesForm;
