import { addMinutes } from 'date-fns';
import { getStoreByMember } from '$lib/models/store';
import type { Store } from '$lib/type';

import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async (events) => {
	const { user } = await events.parent();

	const storeData = await getStoreByMember(user?.idMember!);
	// this is store for authenticated member for dashboard
	const store: Store = {
		idMember: storeData.id_member,
		name: storeData.name,
		description: storeData.description,
		phone: storeData.phone,
		email: storeData.email,
		domain: storeData.domain,
		customDomain: storeData.custom_domain,
		logo: storeData.logo,
		promo: [],
		theme: storeData.theme,
		color: storeData.color,
		info: {
			fb: storeData.fb,
			tiktok: storeData.tiktok,
			ig: storeData.ig,
			telegram: storeData.telegram,
			twitter: storeData.twitter
		}
	};

	let showPopup = true;
	if (!events.cookies.get('popup')) {
		events.cookies.set('popup', '1', { path: '/', expires: addMinutes(new Date(), 15) });
	} else {
		events.cookies.set('popup', '0', { path: '/', expires: addMinutes(new Date(), 15) });
	}

	showPopup = events.cookies.get('popup') == '1';

	return {
		store,
		showPopup
	};
};
