document.addEventListener('alpine:init', () => {
    Alpine.data('dropdown', () => ({
        open: false,
        toggle() {
            this.open = !this.open;
        },
    }));
    Alpine.store('currentUser', {
        username: 'SonDev1004',
        posts: ['Post 1', 'Post 2', 'Post 3'],
    })
});