export const environment = {
    production: true,
    url: process.env.DATABASE_URL
};
export const development = {
    production: false,
    url: 'http://localhost:3000/perfil'
};