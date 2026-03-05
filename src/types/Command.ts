import type { Client, Message } from '@fluxerjs/core';

export interface Command {
  /** Command name (used to invoke it, e.g. "ping") */
  name: string;
  /** Description shown in the help command */
  description: string | string[];
  /** Usage hint, e.g. "<user> [reason]" */
  usage?: string;
  /** Category folder name — set automatically by the handler */
  category: string;
  /** Alternative names for this command */
  aliases?: string[];
  /** Required Fluxer permission flags (e.g. "BanMembers") */
  permissions?: string[];
  /** Cooldown in seconds (overrides the global default) */
  cooldown?: number;
  /** Restrict to the bot owner */
  ownerOnly?: boolean;
  /** Allow usage in DMs (default: false) */
  allowDM?: boolean;
  /** Hide from the help listing */
  hidden?: boolean;
  /** Internal — set by the handler for alias entries */
  isAlias?: boolean;
  /** The function that runs when the command is invoked */
  execute(message: Message, args: string[], client: Client): Promise<void>;
}
