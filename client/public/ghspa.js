/**
 *
 *  ____ _ ___ _  _ _  _ ___     ___  ____ ____ ____ ____    ____ ___  ____
 *  | __ |  |  |__| |  | |__]    |__] |__| | __ |___ [__     [__  |__] |__|
 *  |__] |  |  |  | |__| |__]    |    |  | |__] |___ ___]    ___] |    |  |
 *
 *  Easy way to enable Single Page Applications for GitHub Pages
 *
 *  This project was released under MIT license.
 *
 *  @link      https://github.com/rafrex/spa-github-pages
 *  @author    Rafael Pedicini <code@rafrex.com>
 *  @link      http://websemantics.ca
 *  @author    Adnan M.Sagar, PhD. <adnan@websemantics.ca>
 *
 *  @param {Object} l, the document current location
 *  @param {Boolean} projectPages, true by default, https://help.github.com/articles/user-organization-and-project-pages
 *
 */

const ghspa = (l, projectPages) => {
	const { protocol, hostname, port, pathname, search, hash, replace } = l

	/* redirect all 404 trafic to index.html */
	const redirect = () => {
		const PORT = port ? `:${port}` : ''
		const PATHNAME = pathname ? `p=${pathname.replace(/&/g, '~and~').replace(repo, '')}` : ''
		const SEARCH = search ? `&q=${search.slice(1).replace(/&/g, '~and~')}` : ''
		const URL = `${protocol}//${hostname}${PORT}${repo}/?${PATHNAME}${SEARCH}${hash}`
		replace(URL)
	}

	/* resolve 404 redirects into internal routes */
	const resolve = () => {
		if (search) {
			var q = {}
			search.slice(1).split('&').forEach((v) => {
				const a = v.split('=')
				q[a[0]] = a.slice(1).join('=').replace(/~and~/g, '&')
			})
			if (q.p !== undefined) {
				const state = `${repo}${q.p || ''}${q.q && `?${q.q}`}${hash}`
				window.history.replaceState(null, null, state)
			}
		}
	}

	const repo = projectPages && `/${pathname.split('/')[1]}`
	/* if current document is 404 page page, redirect to index.html otherwise resolve */
	document.title === '404' ? redirect() : resolve()
}

ghspa(window.location, window.projectPages || true)
