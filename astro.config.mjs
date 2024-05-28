import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://heroictalesrpg.com',
	integrations: [
		starlight({
			title: 'Heroic Tales SRD',
			customCss: [
				'./src/styles/custom.css'
			],
			social: {
				github: 'https://github.com/carpedavid/heroictales',
				discord: 'https://discord.gg/r72BBj2Rcy',
				mastodon: 'https://dice.camp/@carpedavid'
			},
			sidebar: [
				{
					label: 'SRD',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Introduction', link: '/srd/introduction/' },
						{ label: 'Rules of the game', link: '/srd/rules/'},
						{ label: 'Challenges', link: '/srd/challenges/'},
						{ label: 'Characters', link: '/srd/characters/'},
						{ label: 'Optional rules', link: '/srd/options/'},
						{ label: 'Team play', link: '/srd/teams/'},
						{ label: 'Setting the scene', link: '/srd/gm-advice'}
					],
				},
				{ label: 'Game directory', link: '/games/'},
				{ label: 'Credits', link: '/credits/'},
				{ label: 'Amalara Game Studio', link: 'https://amalara.com', icon: ''}
			],
		}),
	],
});
