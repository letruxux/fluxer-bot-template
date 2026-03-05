export interface BotConfig {
  /** Your Fluxer bot token */
  token: string;
  /** Default command prefix */
  prefix: string;
  /** Your Fluxer user ID (for owner-only commands) */
  ownerId: string | null;
  /** Default cooldown between commands in ms */
  cooldown: {
    default: number;
  };
  /** Validates that required env vars are present */
  validate(): boolean;
}
