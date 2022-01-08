module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '8b651a0b6d2e0aecf64450bdc7f6df71'),
  },
});
