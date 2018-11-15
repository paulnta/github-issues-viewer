import { createSkeletonProvider, createSkeletonElement } from "@trainline/react-skeletor";
import AvatarBase from './Avatar';

const defaultPredicate = props => props.loading;
const defaultStyling = 'skeleton-pending';

export const Span = createSkeletonElement('span');
export const Avatar = createSkeletonElement(AvatarBase);

export const placeholder = length => 'x'.repeat(length);

export const withSkeletonProvider = (dummyData, predicate = defaultPredicate, styling = defaultStyling) => {
  return createSkeletonProvider(dummyData, predicate, styling);
};

export const withSkeleton = createSkeletonElement;
