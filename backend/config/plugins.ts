export default ({ env }) => ({
  transfer: {
    enabled: true,
    config: {
      token: {
        salt: env('TRANSFER_TOKEN_SALT', 'your-default-salt-if-not-set'), // .envમાં TRANSFER_TOKEN_SALT set કરો
      },
      remote: {
        enabled: true,  // આ line મહત્વની છે – remote transfer enable કરે છે
      },
    },
  },
});