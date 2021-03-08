import styled from '@emotion/styled';
import tw from 'twin.macro';

export const Text = (children) => (
  <p className="text-lg` font-medium` tracking-widest text-center text-gray-700">
    {children}
  </p>
);

export const TextInFooter = (children) => (
  <p className="text-lg font-medium tracking-widest text-center text-gray-500">
    {children}
  </p>
);

export const HeroTopText = (children) => (
  <p className="mt-6 mb-8 text-2xl font-medium tracking-widest text-center text-gray-700">
    {children}
  </p>
);

export const List = styled.ul`
  ${tw`text-lg font-medium text-gray-700 list-disc list-inside`}
`;

export const ListCheck = styled.ul`
  ${tw`text-lg font-medium text-gray-700 list-none`}
  &before: content: '✓'
`;
