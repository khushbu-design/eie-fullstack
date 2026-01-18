export default ({ env }) => ({
  transfer: {
    enabled: true,
    config: {
      token: {
        salt: env('TRANSFER_TOKEN_SALT', 'a-very-long-random-salt-for-transfer-2026'), // .envમાં પણ આ જ salt નાખો
      },
      remote: {
        enabled: true,
      },
    },
  },
});