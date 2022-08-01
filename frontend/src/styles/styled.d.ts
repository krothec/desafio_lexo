/* eslint-disable @typescript-eslint/no-empty-interface */
import { StyledComponent } from 'styled-components';

import theme from './theme';

export type Theme = typeof theme;

declare module 'styled-components' {
	export interface DefaultTheme extends Theme {}
}
