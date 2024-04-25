export class Config {
    upApiSecret: string
    ynabApiSecret: string
    ynabBudgetId: string
    upWebhookSecret: string
}

export function fromEnv(): Config {
    let config = new Config();
    config.upApiSecret = process.env['UP_API_SECRET'] as string;
    config.upWebhookSecret = process.env['UP_WEBHOOK_SECRET'] as string;
    config.ynabBudgetId = process.env['YNAB_BUDGET_ID'] as string;
    config.ynabApiSecret = process.env['YNAB_API_SECRET'] as string;

    return config;
}

const config: Config = fromEnv();

export default config;