import { createSkeletonProvider, createSkeletonElement } from "@trainline/react-skeletor";
import AvatarBase from './Avatar';

export const Span = createSkeletonElement('span');
export const Avatar = createSkeletonElement(AvatarBase);

export const placeholder = length => 'x '.repeat(length / 2);

export const withSkeleton = createSkeletonElement;

export const withSkeletonProvider = (
  dummyData = {},
  predicate = props => props.loading,
  styling = 'skeleton-pending',
) => createSkeletonProvider(dummyData, predicate, styling);
