import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async () => {
	return {
		// session: await locals.getSession()
	};
};