export const getScreenSize = () => {
    return window.matchMedia('(min-width: 770px)').matches ? 'LARGE' : 'SMALL';
}

export const isAdmin = () => {
    return sessionStorage.getItem('admin') === 'true';
}

export const isSelected = (location, path) => {
    return location.pathname.includes(path.toLowerCase()) || location.search.includes(path);
}