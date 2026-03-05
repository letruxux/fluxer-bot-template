export interface BotConfig {
  token: string;
  prefix: string;
  ownerId: string | null;
  cooldown: {
    default: number;
  };
}
