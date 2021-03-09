import { styled } from '@emotion/styled';
import { H3, DDlist, Text } from '../elements';

const DDitem = styled.dd`
  display: list-item;
  list-style-type: '🟠';
  padding-inline-start: 1ch;
`;

export const CallToAction = ({ headingText }) => (
  <section className="flex flex-row w-full h-16 pt-12 pb-12 bg-warmGray-50">
    <div className="flex w-full max-w-5xl mx-auto y-0 ">
      <H3 className="pt-0 pb-2">{headingText}</H3>
    </div>
    <div className="flex w-full max-w-5xl mx-auto y-0 ">
      <DDlist className="pt-0 pb-2">
        <DDitem>Голова забита нерешенными вопросами</DDitem>
        <DDitem>
          Добиваемся важных вещей для окружения и теряем связь с собою
        </DDitem>
        <DDitem>Игнорируем отдых и истощяем себя до выгорания</DDitem>
        <DDitem>Низкая самооценка, выгорание, депресия</DDitem>
        <DDitem>Живем с позиции надо и забываем про свои потребности.</DDitem>
      </DDlist>
    </div>
    <div className="flex w-full max-w-5xl mx-auto y-0 ">
      // TODO: Add text block of fetch it from sanity
    </div>
  </section>
);
