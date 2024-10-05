interface SiteConfig {
	author: string
	title: string
	description: string
	lang: string
	ogLocale: string
	shareMessage: string
	paginationSize: number
}

export const siteConfig: SiteConfig = {
	author: 'Lukasz Smi', // Site author
	title: 'Od komputerowego pasjonata do Security experta', // Site title.
	description: 'Opisuje tutaj moją drogę, od pasjonata do bycia jednym z lepszych hakerów (w przyszlosci:))', // Description to display in the meta tags
	lang: 'en-GB',
	ogLocale: 'en_GB',
	shareMessage: 'Udostępnij', // Message to share a post on social media
	paginationSize: 6 // Number of posts per page
}
