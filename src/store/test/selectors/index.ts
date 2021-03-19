import { TRootState } from '@/store';

// If you make some calculations or filtering inside selector than good to use the 'reselect' library

export const testPropsSelector = (state: TRootState) => state.test.testProp;
