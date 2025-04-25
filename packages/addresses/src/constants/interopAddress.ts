export const CHAIN_TYPE = {
    "EIP-155": "0x0000",
    SOLANA: "0x0002",
} as const;

export const CHAIN_TYPE_MAP: Record<string, string> = {
    "0x0000": "eip155",
    "0x0002": "solana",
} as const;
